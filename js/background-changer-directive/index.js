'use strict';
// SVG Icons are from Flaticon/Freepik

bgChangerDirective.$inject = ['$http', 'UnsplashApiService'];

function bgChangerDirective($http, UnsplashApiService) {
  return {
    restrict: 'E',
    scope: 'true',
    templateUrl: './js/background-changer-directive/index-view.html',
    css: './js/background-changer-directive/index-view.css',
    link: function (scope, el, attr) {

      var bgcIconContainer = document.getElementById('bgc-icon-container');
      var bgcIcons = document.getElementsByClassName('bgc-icon');

      var iconsLength = bgcIcons.length;
      var containerWidth = 0;
      var counter = 0;

      bgcIcons[0].classList.add('active');

      for (var i = 0; i < bgcIcons.length; i++) {
        containerWidth += bgcIcons[i].clientWidth;

        bgcIconContainer.style.width = containerWidth + 'px';
        bgcIconContainer.style.height = bgcIcons[i].clientHeight + 'px';
      }

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

      scope.changeBackground = function (category) {
        UnsplashApiService.getRandomPhotosByCollection(category)
          .then(function(response) {
            document.body.style.backgroundImage = 'url(' + response.urls.regular + ')';
          })
      };

      scope.slideIconRight = function () {
        navigateIcons(-1, 'right');
      };
      scope.slideIconLeft = function () {
        navigateIcons(1, 'left');
      };
    }
  }
};

module.exports = bgChangerDirective;
