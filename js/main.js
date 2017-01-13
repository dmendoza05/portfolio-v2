var angular = require('angular'); 

angular
  .module('portfolioV2', ['ui.router', 'angularCSS'])
  // config file
  .config(require('./state-routing'))
  // controllers
  .controller('MainPageController', require('../main_page/index'))
  // directives
  .directive('navSquare', require('./nav-square-directive/index'));
