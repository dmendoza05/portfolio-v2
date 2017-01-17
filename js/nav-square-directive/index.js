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