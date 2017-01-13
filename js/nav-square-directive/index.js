'use strict';

navSquareDirective.$inject = [];

function navSquareDirective() {
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
    }
  }
};

module.exports = navSquareDirective;
