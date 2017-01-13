webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1); 

	angular
	  .module('portfolioV2', ['ui.router', 'angularCSS'])
	  // config file
	  .config(__webpack_require__(3))
	  // controllers
	  .controller('MainPageController', __webpack_require__(4))
	  // directives
	  .directive('navSquare', __webpack_require__(5));


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	StateRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

	function StateRouting($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/');

	    $stateProvider

	    // HOME STATES AND NESTED VIEWS ========================================
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
	    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	    // .state('about', {
	      // we'll get to this in a bit       
	    // });

	  };

	module.exports = StateRouting;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	MainPageController.$inject = [];

	function MainPageController() {

	};

	module.exports = MainPageController;


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	navSquareDirective.$inject = ['$state'];

	function navSquareDirective($state) {
	  return {
	    restrict: 'E',
	    scope: 'true',
	    templateUrl: './js/nav-square-directive/index-view.html',
	    css: './js/nav-square-directive/index-view.css',
	    link: function(scope, el, attr) {

	      scope.hoveredItem = ''

	      scope.hover = function(pos) {
	        scope.hoveredItem = pos;
	      }
	      scope.leaveHover = function() {
	        scope.hoveredItem = '';
	      }

	      scope.goToPage = function(page) {
	        $state.go(page);
	      }
	    }
	  }
	};

	module.exports = navSquareDirective;


/***/ }
]);