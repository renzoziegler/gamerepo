var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.Game.findAll().then(function (games) {
  	console.log(games);
    res.render('index', {
      title: 'Lista de Games',
      games: games
    });
  });
});
