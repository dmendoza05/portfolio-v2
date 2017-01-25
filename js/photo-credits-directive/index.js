'use strict';
// SVG Icons are from Flaticon/Freepik

photoCreditsDirective.$inject = ['$rootScope', 'UnsplashApiService'];

function photoCreditsDirective($rootScope, UnsplashApiService) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './js/photo-credits-directive/index-view.html',
    css: './js/photo-credits-directive/index-view.css',
    link: function (scope, el, attr) {
      $rootScope.$on('new photo', function(){
        scope.photoInfo = UnsplashApiService.getCurrentPhoto();
      });
    }
  }
};

module.exports = photoCreditsDirective;
