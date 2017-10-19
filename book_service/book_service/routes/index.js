var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
//主页
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//mongoose测试
router.get('/mongooseTest', function (req, res, next) {
    mongoose.connect('mongodb://localhost/pets', { useMongoClient: true });
    mongoose.Promise = global.Promise;

    var Cat = mongoose.model('Cat', { name: String });

    var tom = new Cat({ name: 'Tom' });
    tom.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('success insert');
        }
    });
    res.send('数据库连接测试');
});
//显示主页的推荐大图等
router.post('/showIndex', function(req, res, next) {

});
//显示所有的排行榜，也就是对于电影字段index的样式
router.post('/showRanking', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//显示文章列表
router.post('/showArticle', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//显示文章的内容
router.post('/articleDetail', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//显示用户自己个人信息的内容
router.post('/showUser', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
