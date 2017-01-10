'use strict';

navBarDirective.$inject = [];

function navBarDirective() {
  return {
    restrict: 'E',
    scope: 'true',
    templateUrl: './js/navbar-directive/index-view.html',
    css: './js/navbar-directive/index-view.css',
    // bindToController: '',
    // controller: navBarController,
    link: function(scope, el, attr) {
    }
  }
};

// function navBarController() {
//   var navCtrl = this;
// };

module.exports = navBarDirective;
