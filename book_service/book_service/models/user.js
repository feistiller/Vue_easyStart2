var mongoose = require('../common/db');

var user = new mongoose.Schema({
    username: String,
    password: String,
    userMail: String,
    userPhone: String,
    userAdmin: Boolean,
    userPower: Number,
    userStop: Boolean
})

user.statics.findAll = function(callBack){
    this.find({},callBack);
};
user.statics.findByUsername = function(name,callBack){
    this.find({username:name},callBack);
};
//登录匹配是不是拥有相同的用户名和密码
user.statics.findUserLogin = function(name,password,callBack){
    this.find({username:name,password:password},callBack);
};
//验证邮箱和电话以及用户名找到用户
user.statics.findUserPassword = function(name,mail,phone,callBack){
    this.find({username:name,userMail:mail,userPhone:phone},callBack);
};
//获得其用户的权限

var userModel= mongoose.model('user',user);
module.exports = userModel;