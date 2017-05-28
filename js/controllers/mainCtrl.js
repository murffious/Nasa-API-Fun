angular.module('noserver').controller("mainCtrl", function ($scope, mainService){

//API call for sounds 
    $scope.recSounds = function () {
        mainService.getData().then(function (response){
            $scope.sounds = response.data.results 
            console.log(response)
        })
    }
    $scope.recSounds()
// API call for daily picutre  
     $scope.recAPOD = function () {
        mainService.getAPOD().then(function (response){
            $scope.daily = response.data
            console.log(response)
        })
    }
    $scope.recAPOD()
// API call for number of people in space
    $scope.recTravelers = function () {
        mainService.getTravelers().then(function (response){
            $scope.travelers = response.data
            console.log(response)
        })
    }
    $scope.recTravelers()

// API call for curiosity 
$scope.recMars = function () {
    mainService.getMars().then(function (response) {
        $scope.marsPhotos = response.data.photos
        console.log(response)
    })
}
$scope.recMars()
// API call for spirit
$scope.recSpirit = function () {
    mainService.getSpirit().then(function (response) {
        $scope.spiritPhotos = response.data.photos
        console.log(response)
    })
}
$scope.recSpirit()
// API call for opportunity
$scope.recOpportunity = function () {
    mainService.getOpportunity().then(function (response) {
        $scope.opportunityPhotos = response.data.photos
        console.log(response)
    })
}
$scope.recOpportunity()

//buttons for people in space
    $scope.current = 0;        
 $scope.Next = function() {
             $scope.current = ($scope.current + 1) % $scope.travelers.people.length;
 }
 $scope.Prev = function() {
             $scope.current = ($scope.current - 1) % $scope.travelers.people.length ;
 }

$(".rover-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".picdisplay").offset().top
    }, 2000);
});
})

