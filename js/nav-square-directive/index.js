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
