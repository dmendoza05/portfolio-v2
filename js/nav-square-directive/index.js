'use strict';

navSquareDirective.$inject = ['$state', '$http', 'UnsplashApiService'];

function navSquareDirective($state, $http, UnsplashApiService) {
  return {
    restrict: 'E',
    scope: 'true',
    css: './js/nav-square-directive/index-view.css',
    templateUrl: './js/nav-square-directive/index-view.html',
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

      
    }
  }
};

module.exports = navSquareDirective;