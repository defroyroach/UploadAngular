angular
    .module('myApp.vista')
    .config(config);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'VistaCtrl',
    controllerAs:'vista'
  })
}