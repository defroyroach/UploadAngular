angular
    .module('myApp.vista')
    .factory('view1Services', view1Services);

view1Services.$inject = ['$http'];

function view1Services($http){
    return {
        get: get,
        upload:upload
    };
    function get() {
        return $http.get('prueba.php')
            .then(getComplete)
            .catch(getFailed);

        function getComplete(response) {
            return response.data.results;
        }

        function getFailed(error) {
            console.log('Error en el get de alguien.' + error.data);
        }
    }

    function upload(file) {
        var fd = new FormData();
        fd.append('file', file); //Agregamos data al "formulario" que vamos a enviar
        return $http.post('post.php', fd, {
            transformRequest: angular.identity, //Le decimos a angular que no serialize el envio
            headers: {'Content-Type': undefined}
            })
            .then(uploadComplete)
            .catch(uploadFailed);

        function uploadComplete(response) {
            return response.data;
        }

        function uploadFailed(error) {
            console.log('Error en el upload.' + error.data);
        }
    }

}
