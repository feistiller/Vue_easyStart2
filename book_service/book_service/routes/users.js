var express = require('express');
var router = express.Router();
var user = require('../models/user')
var crypto = require('crypto');
/* GET users listing. */
//用户登录接口
router.post('/login', function (req, res, next) {
    if (!req.body.username) {
        res.json({status: 1, message: "用户名为空"})
    }
    if (!req.body.password) {
        res.json({status: 1, message: "密码为空"})
    }
    user.findUserLogin(req.body.username, req.body.password, function (err, userSave) {
        if (userSave.length != 0) {
            // res.json(userSave)
            var md5 = crypto.createHash('md5');
            var token_before = userSave._id + req.socket.remoteAddress
            var token_after =md5.update(token_before)
            res.json({status: 0, data: {token: token_after}, message: "用户登录成功"})
        } else {
            res.json({status: 1, message: "用户名或者密码错误"})
        }
    })
});
//用户注册接口
router.post('/register', function (req, res, next) {
    if (!req.body.username) {
        res.json({status: 1, message: "用户名为空"})
    }
    if (!req.body.password) {
        res.json({status: 1, message: "密码为空"})
    }
    if (!req.body.userMail) {
        res.json({status: 1, message: "用户邮箱为空"})
    }
    if (!req.body.userPhone) {
        res.json({status: 1, message: "用户手机为空"})
    }
    user.findByUsername(req.body.username, function (err, userSave) {
        if (userSave.length != 0) {
            res.json(userSave)
            res.json({status: 1, message: "用户已注册"})
        } else {
            var registerUser = new user({
                username: req.body.username,
                password: req.body.password,
                userMail: req.body.userMail,
                userPhone: req.body.userPhone,
                userAdmin: 0,
                userPower: 0,
                userStop: 0
            })
            registerUser.save(function () {
                res.json({status: 0, message: "注册成功"})
            })
        }
    })

});
//用户提交评论
router.post('/postConmment', function (req, res, next) {

});
//用户点赞
router.post('/support', function (req, res, next) {

});
//用户下载
router.post('/download', function (req, res, next) {

});
//用户获得权限
router.post('/getPower', function (req, res, next) {

});
//用户找回密码
router.post('/findPassword', function (req, res, next) {

});
//用户发送站内信
router.post('/sendEmail', function (req, res, next) {

});

module.exports = router;
