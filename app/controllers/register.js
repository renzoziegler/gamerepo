var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/register', function (req, res, next) {
  db.Game.findAll().then(function (games) {
    res.render('register', {
      title: 'Novo game'
    });
  });
});

router.post('/register', function (req, res, next) {
	//res.send(req.body);
	db.Game.create(req.body)
	.then(function (games) {
		res.redirect('/');
	})
})
