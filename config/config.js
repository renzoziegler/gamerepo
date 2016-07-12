var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'videogame'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/videogame-development',
    storage: rootPath + '/data/videogame-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'videogame'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/videogame-test',
    storage: rootPath + '/data/videogame-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'videogame'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/videogame-production',
    storage: rootPath + 'data/videogame-production'
  }
};

module.exports = config[env];
