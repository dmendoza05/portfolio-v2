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
	  // services
	  .service('UnsplashApiService', __webpack_require__(5))
	  // directives
	  .directive('navSquare', __webpack_require__(6));


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

	UnsplashApiService.$inject = ['$http', '$q'];

	function UnsplashApiService($http, $q) {
	  var _this = this;
	  var unsplashData = {};

	  function apiCall(urlParam, objParam) {
	    if (!objParam) {
	      objParam = null;
	    };

	    return $http
	      .get('https://api.unsplash.com/' + urlParam + '?client_id=4d644dd28e25112b02fe164d500714b8cd5cc5a6adac9c94cf73c8f0114f9d7a',
	        objParam);
	  }

	  _this.getRandomPhoto = function() {
	    return apiCall('photos/random');
	  };

	  _this.getRandomPhotosByCollection = function(collectionId) {
	    return apiCall('collections/' + collectionId + '/photos')
	      .then(function(response) {
	        console.log(response);
	        if (typeof response.data === 'object') {
	          var randomInt = Math.floor(Math.random() * (response.data.length - 0) + 0);
	                  
	          return response.data[randomInt];
	        } else {
	          console.log('getRandomPhotosByCollection error');
	          return $q.reject(response.data);
	        }
	      }, function(response) {
	        console.log('getRandomPhotosByCollection error');
	        return $q.reject(response.data);
	      });
	  };

	};

	module.exports = UnsplashApiService;



/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	navSquareDirective.$inject = ['$state', '$http', 'UnsplashApiService'];

	function navSquareDirective($state, $http, UnsplashApiService) {
	  return {
	    restrict: 'E',
	    scope: 'true',
	    templateUrl: './js/nav-square-directive/index-view.html',
	    css: './js/nav-square-directive/index-view.css',
	    link: function(scope, el, attr) {

	      scope.hoveredItem = ''

	      scope.hover = function(pos) {
	        scope.hoveredItem = pos;
	      };
	      scope.leaveHover = function() {
	        scope.hoveredItem = '';
	      };

	      scope.goToPage = function(page) {
	        $state.go(page);
	      };

	      scope.changeBackground = function() {
	        UnsplashApiService.getRandomPhotosByCollection('499759')
	          .then(function(response) {
	            document.body.style.backgroundImage = 'url(' + response.urls.full + ')';
	          })
	      };
	    }
	  }
	};

	module.exports = navSquareDirective;

/***/ }
]);