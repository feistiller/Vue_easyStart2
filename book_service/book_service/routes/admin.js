var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// /movie/list
// /movie/download
// /admin/movieAdd
// /admin/movieDel
// /admin/movieUpdate
// /admin/movie
// /movie/detail
// /movie/comment
// /movie/showNumber
// /admin/movieAdd
// /admin/movieDel
// /admin/movieUpdate
// /admin/movie


module.exports = router;
