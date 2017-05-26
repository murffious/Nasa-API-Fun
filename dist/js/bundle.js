'use strict';

angular.module('noserver', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: "/home.html"
    }).state('spaceTravel', {
        url: '/spaceTravel',
        templateUrl: "/spaceTravel.html"
    }).state('nasaLandings', {
        url: '/nasaLandings',
        templateUrl: "/nasaLandings.html"
    }).state('experience', {
        url: '/experience',
        templateUrl: '/experience.html'
    });
});
"use strict";

angular.module('noserver').controller("mainCtrl", function ($scope, mainService) {

    $scope.recSounds = function () {
        mainService.getData().then(function (response) {
            $scope.sounds = response.data.results;
            console.log(response);
        });
    };
    $scope.recSounds();

    $scope.recAPOD = function () {
        mainService.getAPOD().then(function (response) {
            $scope.daily = response.data;
            console.log(response);
        });
    };
    $scope.recAPOD();

    $scope.recTravelers = function () {
        mainService.getTravelers().then(function (response) {
            $scope.travelers = response.data;
            console.log(response);
        });
    };
    $scope.recTravelers();

    $scope.current = 0;
    $scope.Next = function () {
        $scope.current = ($scope.current + 1) % $scope.travelers.people.length;
    };
    $scope.Prev = function () {
        $scope.current = ($scope.current - 1) % $scope.travelers.people.length;
    };
    //  $scope.Next = function() {
    //              $scope.current = ($scope.current + 1) % $scope.travelers.people.craft.length;
    //  }
    //  $scope.Prev = function() {
    //              $scope.current = ($scope.current - 1) % $scope.travelers.people.craft.length;
    //  }
});
'use strict';

angular.module('noserver').service('experienceService', function () {

  //  var getaudio = $('#player')[0];
  //    /* Get the audio from the player (using the player's ID), the [0] is necessary */
  //    var mouseovertimer;
  //    /* Global variable for a timer. When the mouse is hovered over the speaker it will start playing after hovering for 1 second, if less than 1 second it won't play (incase you accidentally hover over the speaker) */
  //    var audiostatus = 'off';
  //    /* Global variable for the audio's status (off or on). It's a bit crude but it works for determining the status. */

  //    $(document).on('mouseenter', '.speaker', function() {
  //      /* Bonus feature, if the mouse hovers over the speaker image for more than 1 second the audio will start playing */
  //      if (!mouseovertimer) {
  //        mouseovertimer = window.setTimeout(function() {
  //          mouseovertimer = null;
  //          if (!$('.speaker').hasClass("speakerplay")) {
  //            getaudio.load();
  //            /* Loads the audio */
  //            getaudio.play();
  //            /* Play the audio (starting at the beginning of the track) */
  //            $('.speaker').addClass('speakerplay');
  //            return false;
  //          }
  //        }, 1000);
  //      }
  //    });

  //    $(document).on('mouseleave', '.speaker', function() {
  //      /* If the mouse stops hovering on the image (leaves the image) clear the timer, reset back to 0 */
  //      if (mouseovertimer) {
  //        window.clearTimeout(mouseovertimer);
  //        mouseovertimer = null;
  //      }
  //    });

  //    $(document).on('click touchend', '.speaker', function() {
  //      /* Touchend is necessary for mobile devices, click alone won't work */
  //      if (!$('.speaker').hasClass("speakerplay")) {
  //        if (audiostatus == 'off') {
  //          $('.speaker').addClass('speakerplay');
  //          getaudio.load();
  //          getaudio.play();
  //          window.clearTimeout(mouseovertimer);
  //          audiostatus = 'on';
  //          return false;
  //        } else if (audiostatus == 'on') {
  //          $('.speaker').addClass('speakerplay');
  //          getaudio.play()
  //        }
  //      } else if ($('.speaker').hasClass("speakerplay")) {
  //        getaudio.pause();
  //        $('.speaker').removeClass('speakerplay');
  //        window.clearTimeout(mouseovertimer);
  //        audiostatus = 'on';
  //      }
  //    });

  //    $('#player').on('ended', function() {
  //      $('.speaker').removeClass('speakerplay');
  //      /*When the audio has finished playing, remove the class speakerplay*/
  //      audiostatus = 'off';
  //      /*Set the status back to off*/
  //    });
});
'use strict';

angular.module('noserver').service('mainService', function ($http) {

    this.getData = function () {
        return $http.get("https://api.nasa.gov/planetary/sounds?api_key=9ZbGNOzKWAilEBLv3JXWJVFVNrpW269weYc85T06");
    };
    this.getAPOD = function () {
        return $http.get("https://api.nasa.gov/planetary/apod?api_key=9ZbGNOzKWAilEBLv3JXWJVFVNrpW269weYc85T06");
    };
    this.getTravelers = function () {
        return $http.get("http://api.open-notify.org/astros.json");
    };
});
//# sourceMappingURL=bundle.js.map
