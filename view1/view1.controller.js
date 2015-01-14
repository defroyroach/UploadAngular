angular
    .module('myApp.vista')
    .controller('VistaCtrl', VistaCtrl);

VistaCtrl.$inject=['$scope', '$http', 'view1Services'];
function VistaCtrl($scope, $http, view1Services) {
    var vm = this;
    activate();

    //Probando los estados http
        function activate(){
            view1Services.get().then(function(response){
                vm.alguien=response;
            });
        };

//Click en enviar
    vm.enviar=function() {
        view1Services.upload(vm.imagen).then(function(response){
            vm.imagen=response;
        });
    }
};