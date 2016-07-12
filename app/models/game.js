module.exports = function (sequelize, DataTypes) {

  var Game = sequelize.define('Game', {
    titulo: DataTypes.STRING,
    plataforma: DataTypes.STRING,
    genero: DataTypes.STRING,
    lancamento: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    avaliacao: DataTypes.INTEGER,
    comentario: DataTypes.STRING
  });

  return Game;
};

