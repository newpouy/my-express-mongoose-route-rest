// import express from 'express';
// import account from './account';
// import memo from './memo';

var express = require('express');
var account = require('./account');
var memo = require('./memo');

const router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/account', account);
router.use('/memo', memo);

//export default router;
module.exports = router;
