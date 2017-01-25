// Unsplash API Service 
// Used Unsplash API to get high quality free stock photos/images 
//

'use strict';

UnsplashApiService.$inject = ['$http', '$rootScope', '$q'];

function UnsplashApiService($http, $rootScope, $q) {
  var _this = this;
  var unsplashCachedData = {
    collection: {
      dogs: {},
      cats: {},
      nature: {},
      space: {},
    },
    currentPhoto: {}
  };

  function apiCall(urlParam, objParam) {
    if (!objParam) {
      objParam = null;
    };

    return $http
      .get('https://api.unsplash.com/' + urlParam + '?client_id=4d644dd28e25112b02fe164d500714b8cd5cc5a6adac9c94cf73c8f0114f9d7a',
        objParam);
  };

  function updateCurrentImage(newImageData){
    return unsplashCachedData.currentPhoto = newImageData;
  };

  _this.getRandomPhoto = function () {
    return apiCall('photos/random')
      .then(function (response) {
        updateCurrentImage(response.data);
        return unsplashCachedData.currentPhoto;
      });
  };

  _this.getRandomPhotosByCollection = function (collectionType) {
    var keysForCollection = {
      dogs: '499759',
      nature: '508087',
      space: '508084',
      cats: '502072'
    }

    if (angular.equals(unsplashCachedData.collection[collectionType], {})) {
      console.log('api call');
      return apiCall('collections/' + keysForCollection[collectionType] + '/photos')
        .then(function (response) {
          console.log('response 1', response)
          unsplashCachedData.collection[collectionType] = response;
          return getRandomPhotoInCollection(response);
        }, function (response) {
          console.log('getRandomPhotosByCollection error');
          return $q.reject(response.data);
        });
    } else {
      console.log('cache call');
      return getRandomPhotoInCollection(unsplashCachedData.collection[collectionType]);
    }

    function getRandomPhotoInCollection(imagesArray) {
      return $q(function (resolve, reject) {
        console.log('imagesArray 1', imagesArray)
        if (typeof imagesArray.data === 'object') {
          var randomInt = Math.floor(Math.random() * (imagesArray.data.length - 0) + 0);

          updateCurrentImage(imagesArray.data[randomInt]);

          resolve(unsplashCachedData.currentPhoto);
        } else {
          console.log('getRandomPhotosByCollection error');
          reject($q.reject(unsplashCachedData.currentPhoto));
        }
      });
    }
  };

  _this.getCurrentPhoto = function () {
    if (angular.equals(unsplashCachedData.currentPhoto, {})) {
      return null;
    } else {
      return unsplashCachedData.currentPhoto;
    }
  };
};

module.exports = UnsplashApiService;
