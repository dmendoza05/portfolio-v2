// Unsplash API Service 
// Used Unsplash API to get high quality free stock photos/images 
//

'use strict';

UnsplashApiService.$inject = ['$http', '$q'];

function UnsplashApiService($http, $q) {
  var _this = this;
  var unsplashCachedData = {
    dogs: {},
    cats: {},
    nature: {},
    space: {},
  };

  function apiCall(urlParam, objParam) {
    if (!objParam) {
      objParam = null;
    };

    return $http
      .get('https://api.unsplash.com/' + urlParam + '?client_id=4d644dd28e25112b02fe164d500714b8cd5cc5a6adac9c94cf73c8f0114f9d7a',
        objParam);
  }

  _this.getRandomPhoto = function () {
    return apiCall('photos/random');
  };

  _this.getRandomPhotosByCollection = function (collectionType) {
    var keysForCollection = {
      dogs: '499759',
      nature: '508087',
      space: '508084',
      cats: '502072'
    }
    if (collectionType) {

    }

    if (angular.equals(unsplashCachedData[collectionType], {})) {
      console.log('api call');
      return apiCall('collections/' + keysForCollection[collectionType] + '/photos')
        .then(function (response) {
          unsplashCachedData[collectionType] = response;
          return getRandomPhotoInCollection(response);
        }, function (response) {
          console.log('getRandomPhotosByCollection error');
          return $q.reject(response.data);
        });
    } else {
      console.log('cache call');
      return getRandomPhotoInCollection(unsplashCachedData[collectionType]);
    }

    function getRandomPhotoInCollection(imagesArray) {
      return $q(function(resolve, reject) {
        if (typeof imagesArray.data === 'object') {
          var randomInt = Math.floor(Math.random() * (imagesArray.data.length - 0) + 0);
          resolve(imagesArray.data[randomInt]);
        } else {
          console.log('getRandomPhotosByCollection error');
          reject($q.reject(imagesArray.data));
        }
      });
    }

  };

};

module.exports = UnsplashApiService;
