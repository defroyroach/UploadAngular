angular
    .module('myApp.vista')
    .controller('VistaCtrl', VistaCtrl);

VistaCtrl.$inject=['$scope', '$http', 'view1Services'];
function VistaCtrl($scope, $http, view1Services) {
    var vm = this;
    activate();

    //Probando los estados http
        function activate(){
            vm.alguien=view1Services.get();
        };

//Click en enviar
    vm.enviar=function() {
        view1Services.upload(vm.imagen).then(function(response){
            vm.imagen=response;
        });
    }
};