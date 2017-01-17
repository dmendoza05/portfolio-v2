'use strict';

UnsplashApiService.$inject = ['$http', '$q'];

function UnsplashApiService($http, $q) {
  var _this = this;
  var unsplashData = {};

  function apiCall(urlParam, objParam) {
    if (!objParam) {
      objParam = null;
    };

    return $http
      .get('https://api.unsplash.com/' + urlParam + '?client_id=4d644dd28e25112b02fe164d500714b8cd5cc5a6adac9c94cf73c8f0114f9d7a',
        objParam);
  }

  _this.getRandomPhoto = function() {
    return apiCall('photos/random');
  };

  _this.getRandomPhotosByCollection = function(collectionId) {
    return apiCall('collections/' + collectionId + '/photos')
      .then(function(response) {
        console.log(response);
        if (typeof response.data === 'object') {
          var randomInt = Math.floor(Math.random() * (response.data.length - 0) + 0);
                  
          return response.data[randomInt];
        } else {
          console.log('getRandomPhotosByCollection error');
          return $q.reject(response.data);
        }
      }, function(response) {
        console.log('getRandomPhotosByCollection error');
        return $q.reject(response.data);
      });
  };

};

module.exports = UnsplashApiService;

