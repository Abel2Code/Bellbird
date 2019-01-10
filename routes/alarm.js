const express = require('express');
const router = express.Router();
const path = require('path');
const Alarm = require('../models/alarm');

const axios = require('axios');

router.get('/index', function(req, res) {
	Alarm.find({}, function(err, alarms) {
    res.render('index', {alarms: alarms});
	});
});

router.get('/alarm', function(req, res) {
	Alarm.find({}).sort('-date').exec(function(err, alarms) {
		res.send({success: err ? false : true, alarms: alarms});
	})
})

router.post('/alarm', function(req, res) {
	if(req.body.id == null || req.body.text == null){
		res.send({success: false});
		return;
	}
  Alarm.create({id: req.body.id, text: req.body.text}, (err) => {
    res.send({success: err ? false : true});
		if(err == null) {
			axios.post('https://bellbird.joinhandshake-internal.com/push', {
				alarmId: req.body.id
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
		}
  })
});

router.post('/alarmVote', function(req, res) {
	// If missing, is req.body.id Null or undefined
	if(req.body.id == null) {
		res.send({success: false})
	} else {
		Alarm.findOne({id: req.body.id}, (err, alarm) => {
			if(err) {
				res.send({success: false});
			} else {
				voteDelta = req.body.voteStatus ? 1 : -1;
				alarm.votes += voteDelta;
				alarm.save(function(err) {
					res.send({success: err ? false : true, vote: alarm.votes});
				})
			}
		});
	}
})

module.exports = router;
