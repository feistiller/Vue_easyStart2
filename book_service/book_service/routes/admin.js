var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/movieAdd', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/movieDel', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/movieUpdate', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/movie', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/checkComment', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/delComment', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/stopUser', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/admin/changeUser', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/showUser', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/powerUpdate', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/addArticle', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/addRecommend', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/delRecommend', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/updateRecommend', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/admin/delArticle', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
