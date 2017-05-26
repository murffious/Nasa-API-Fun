angular.module('noserver', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
   
$urlRouterProvider.when('', '/')

$stateProvider  
.state('home', {
  url: '/',
  templateUrl:"/home.html"
})
.state('spaceTravel', {
    url: '/spaceTravel',
    templateUrl:"/spaceTravel.html"
})
.state('nasaLandings', {
    url: '/nasaLandings',
    templateUrl:"/nasaLandings.html"
})
.state('experience', {
    url: '/experience',
    templateUrl: '/experience.html'
})

})
