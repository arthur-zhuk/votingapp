'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');

// Get list of polls
exports.index = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(polls);
  });
};

// Get a single poll
exports.show = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    return res.json(poll);
  });
};

exports.showUser = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.json(
      polls.filter(function(item){
        return item.ownerid == req.params.userid;
      })
    )
  });
};

exports.showRough = function(req, res) {
  Poll.find(function (err, polls) {
    if(err) { return handleError(res, err); }
    return res.json(
      polls.filter(function(item){
        return spinalCase(item.owner) == req.params.user;
      }).filter(function(item){
        return spinalCase(item.title)==req.params.title;
      })[0]
    );
  });
};

// Creates a new poll in the DB.
exports.create = function(req, res) {
  Poll.create(req.body, function(err, poll) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(poll);
  });
};

// Updates an existing poll in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Poll.findById(req.params.id, function (err, poll) {
    if (err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    var updated = _.merge(poll, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(poll);
    });
  });
};

// Deletes a poll from the DB.
exports.destroy = function(req, res) {
  Poll.findById(req.params.id, function (err, poll) {
    if(err) { return handleError(res, err); }
    if(!poll) { return res.status(404).send('Not Found'); }
    poll.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}

function spinalCase(str) {
   var valid="abcdefghijklmnopqrstuvwxyz1234567890";
   var caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var space="_ -";
   var newStr = "";
   for (var i = 0; i<str.length; i++) {
     if (caps.indexOf(str[i])!==-1) {
       if (i!==0 && newStr[newStr.length-1]!=="-") {
         newStr+="-";
       }
       newStr+=str[i].toLowerCase();
     } else if (valid.indexOf(str[i])==-1) {
       if (str[i]==" " || str[i]=="_" || str[i] == "-") {
         newStr+="-";
       }
     } else { newStr+=str[i]; }
   }
   return newStr;
 }