'use strict';

angular.module('myApp.vista', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'VistaCtrl'
  });
}])

//Detecta el cambio en el input y lo asigna al model...
//Tal como lo explica aca: http://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])

.controller('VistaCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.img=false;
    //Probando los estados http
        function a(){
            return $http({
                method: 'POST',
                url: 'prueba.php',
                })
        };

        $scope.b=a().then(function (alguien) {
            $scope.alguien=alguien;
        });

//Click en enviar
    $scope.enviar=function() {

        //Asignamos el file-model a la variable file, gracias a la directiva de mas arriba.
        var file = $scope.imagen;
        console.log($scope.imagen);

        var fd = new FormData();
        fd.append('file', file); //Agregamos data al "formulario" que vamos a enviar

        $http.post('post.php', fd, {
            transformRequest: angular.identity, //Le decimos a angular que no serialize el envio
            headers: {'Content-Type': undefined}
            })
            .success(function(response){
                //Guardamos la url de la imagen y hacemos que la muestre.
                $scope.imagen=response;
                $scope.img=true;
            })
            .error(function(response){

        });
        };

}]);