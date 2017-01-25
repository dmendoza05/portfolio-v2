'use strict';
// SVG Icons are from Flaticon/Freepik

bgChangerDirective.$inject = ['$http', '$compile', 'UnsplashApiService'];

function bgChangerDirective($http, $compile, UnsplashApiService) {
  return {
    restrict: 'E',
    scope: 'true',
    css: './js/background-changer-directive/index-view.css',
    templateUrl: './js/background-changer-directive/index-view.html',
    link: function (scope, el, attr) {

      var bgcIconContainer = document.getElementById('bgc-icon-container');
      var bgcIcons = document.getElementsByClassName('bgc-icon');

      var iconsLength = bgcIcons.length;
      var containerWidth = 0;
      var counter = 0;

      scope.creditData = {}

      function navigateIcons(num, direction) {
        bgcIcons[counter].classList.remove('active');
        bgcIcons[counter].classList.add('to-' + direction);
        counter = counter + num;

        if (num === -1 && counter < 0) {
          counter = iconsLength - 1;
        }

        if (num = 1 && !bgcIcons[counter]) {
          counter = 0;
        }

        bgcIcons[counter].classList.add('active', 'from-' + direction);
      };

      function gerRandomBackgroundOnload() {
        var randomInt = Math.floor(Math.random() * (iconsLength - 0) + 0);
        counter = randomInt;
        bgcIcons[counter].classList.add('active');
      };

      scope.changeBackground = function (category) {
        UnsplashApiService.getRandomPhotosByCollection(category)
          .then(function (response) {
            scope.imageData = response;
            console.log(response);
            document.body.style.backgroundImage = 'url(' + scope.imageData.urls.regular + ')';
          })
          .catch(function (error) {
            console.log(error);
          })
      };

      scope.slideIconRight = function () {
        navigateIcons(-1, 'right');
      };

      scope.slideIconLeft = function () {
        navigateIcons(1, 'left');
      };

      gerRandomBackgroundOnload();
    }
  }
};

module.exports = bgChangerDirective;
