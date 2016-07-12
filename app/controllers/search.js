var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.post('/search', function (req, res, next) {
  console.log(req.body);
  db.Game.findAll({
    where: {
      titulo: {
        $like: '%' + req.body.titulo + '%'
      },
      lancamento: {
        $like: '%' + req.body.lancamento + '%'
      }, 
      plataforma: {
        $like: '%' + req.body.plataforma + '%'
      } 
    }
  }).then(function (games) {
  	//console.log(games);
    res.render('index', {
      title: 'Lista de Games',
      games: games
    });
    //res.json(games);
  });
});
