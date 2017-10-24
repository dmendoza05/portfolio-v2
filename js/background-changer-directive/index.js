'use strict';
// SVG Icons are from Flaticon/Freepik

bgChangerDirective.$inject = ['$http', '$compile', '$rootScope', 'UnsplashApiService'];

function bgChangerDirective($http, $compile, $rootScope, UnsplashApiService) {
  return {
    restrict: 'E',
    scope: 'true',
    css: './js/background-changer-directive/index-view.css',
    templateUrl: './js/background-changer-directive/index-view.html',
    link: function (scope, el, attr) {
      console.log('el', el);
      console.log('attr', attr);

      var bgcIconContainer = document.getElementById('bgc-icon-container');
      var bgcIcons = document.getElementsByClassName('bgc-icon');
      var bgcControlContainer = document.getElementById('bgc-control-container');

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
        console.log('changed background');
        el.addClass('has-selected');
        el.toggleClass('show-selection');
        UnsplashApiService.getRandomPhotosByCollection(category)
          .then(function (response) {
            scope.imageData = response;
            document.body.style.backgroundImage = 'url(' + scope.imageData.urls.regular + ')';
            $rootScope.$broadcast('new photo');
          })
          .catch(function (error) {
            console.log(error);
          })
      };

      scope.slideIconRight = function () {
        // navigateIcons(-1, 'right');
      };

      scope.slideIconLeft = function () {
        // navigateIcons(1, 'left');
      };

      scope.showSelection = function () {
        el.toggleClass('show-selection');
      };

      // gerRandomBackgroundOnload();

      el.on('mouseenter', function() {
        console.log('xxxxx');
      })
    }
  }
};

module.exports = bgChangerDirective;
