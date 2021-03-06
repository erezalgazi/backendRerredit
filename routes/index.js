var express = require('express');
var router = express.Router();

var Post = require('../models/Posts');
var Comment = require('../models/Comments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function (req, res, next) {
  Post.find({}, function (err,posts) {
    res.json(posts);
  });
});


router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
}); 

router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);
  query.exec(function (err,post) {
    if (err) {return next(err);}
    if(!post) {return next(new Error('can\'t find post'));}
    req.post = post;
    return next();
  }); 
});

router.post('/posts/:post/comments', function (req,res,next) {
  var comment = new Comment(req.body);
  comment.post = req.post;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

module.exports = router;
