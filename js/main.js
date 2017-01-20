// this is where javascript require file and angular uses them

var angular = require('angular');

angular
  .module('portfolioV2', ['ui.router', 'angularCSS'])
  // config file
  .config(require('./state-routing'))
  // controllers
  .controller('MainPageController', require('../main_page/index'))
  // services
  .service('UnsplashApiService', require('./services/unsplash-api-service'))
  // directives
  .directive('navSquare', require('./nav-square-directive/index'))
  .directive('bgChanger', require('./background-changer-directive/index'));
