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
      scope.photoghraperInfo = UnsplashApiService.getCurrentPhoto();

      $rootScope.$on('new photo', function(){
        console.log('on');
        scope.photoghraperInfo = UnsplashApiService.getCurrentPhoto();
        console.log(scope.photoghraperInfo)
      });
    }
  }
};

module.exports = photoCreditsDirective;
