'use strict';

StateRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

function StateRouting($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'main_page/index-view.html',
      css: 'main_page/index-view.css',
      controller: 'MainPageController',
      controllerAs: 'mainPageCtrl'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'portfolio/index-view.html',
      css: 'portfolio/index-view.css',
      // controller: 'PortfolioController',
      // controllerAs: 'portfolioCtrl'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'resume/index-view.html',
      css: 'resume/index-view.css',
      // controller: 'PortfolioController',
      // controllerAs: 'portfolioCtrl'
    })
    // .state('background-viewer', {
      // url: '/background-viewer',
      // templateUrl: 'background-viewer/index-view.html',
      // css: 'background-viewer/index-view.css',
      // controller: 'PortfolioController',
      // controllerAs: 'portfolioCtrl'
    // })
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    // .state('about', {
      // we'll get to this in a bit       
    // });

  };

module.exports = StateRouting;
