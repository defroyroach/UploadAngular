angular
    .module('myApp.vista')
    .controller('VistaCtrl', VistaCtrl);

VistaCtrl.$inject=['$scope', '$http'];
function VistaCtrl($scope, $http) {
    var vm = this;
    vm.img=false;
    //Probando los estados http
        function a(){
            return $http({
                method: 'POST',
                url: 'prueba.php',
                })
        };

        vm.b=a().then(function (alguien) {
            vm.alguien=alguien;
        });

//Click en enviar
    vm.enviar=function() {
        //Asignamos el file-model a la variable file, gracias a la directiva de mas arriba.
        var file = vm.imagen;

        var fd = new FormData();
        fd.append('file', file); //Agregamos data al "formulario" que vamos a enviar

        $http.post('post.php', fd, {
            transformRequest: angular.identity, //Le decimos a angular que no serialize el envio
            headers: {'Content-Type': undefined}
            })
            .success(function(response){
                //Guardamos la url de la imagen y hacemos que la muestre.
                vm.imagen=response;
                vm.img=true;
            })
            .error(function(response){

        });
        };
    };