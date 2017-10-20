var express = require('express');
var router = express.Router();
var movie = require('../models/movie');
var comment=require('../models/comment');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
//获得所有的电影列表
router.post('/movie/list', function (req, res, next) {
    movie.findAll(function (err, allMovie) {
        res.json({status: 0, message: '获取成功', data: allMovie})
    })
});

//获得下载地址并将更新+1
router.post('/movie/download', function (req, res, next) {
    if(req.body.id){
        movie.findById(req.body.id,function (err, getMovie) {
            res.json({status:0,message:'获取成功',data:{downloadSrc:getMovie.movieDownload}})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }

});

//获取相关电影的详细信息
router.post('/movie/detail', function (req, res, next) {
    if(req.body.id) {
        movie.findById(req.body.id,function (err, getMovie) {
            res.json({status: 0, message: '获取成功', data: getMovie})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取相关电影的评论
router.post('/movie/comment', function (req, res, next) {
    if(req.body.id) {
        comment.findByMovieId(req.body.id, function (err, getComment) {
            res.json({status: 0, message: '获取成功', data: {downloadSrc: getComment.movieDownload}})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取相关电影的点赞和下载数
router.post('/movie/showNumber', function (req, res, next) {
    if(req.body.id) {
        comment.findByMovieId(function (err, getMovie) {
            res.json({status: 0, message: '获取成功', data: {movieNumDownload: getMovie.movieNumDownload,movieNumSuppose:getMovie.movieNumSuppose}})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取主页电影推荐
router.post('/movie/getIndexMovie', function (req, res, next) {
    if(req.body.id) {
        movie.find({movieMainPage:true}, function (err, allMovie) {
            res.json({status: 0, message: '获取成功', data:allMovie})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取一个电影的评论
router.post('/movie/getMovieComment', function (req, res, next) {
    if(req.body.id) {
        comment.findByMovieId(req.body.id, function (err, allComment) {
            res.json({status: 0, message: '获取成功', data:allComment})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});


//点赞的电影
router.post('/movie/support', function (req, res, next) {
    if(req.body.id) {
        movie.findById(req.body.id, function (err, getMovie) {
            movie.update({_id: req.body.id}, {movieNumSuppose: getMovie.movieNumSuppose+1}, function (err, movieUpdate) {
                if (err) {
                    res.json({status: 1, message: "点赞错误", data: err})
                }
                res.json({status: 0, message: '点赞成功', data: movieUpdate})
            })
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

module.exports = router;
