(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){

    // creamos un array dentro del controlador
    $scope.listado = ["Jonathan Rivera", "Juana Pascuala", "Florencio Cuchimba", "isabella Rivera"] ;

    $scope.listadoProfesores = {
        profesores: [
            {
                nombre: "Jonathan Rivera",
                edad: 22,
                clase: "POO"
            },
            {
                nombre: "Isabella Rivera",
                edad: 1,
                clase: "Logica Porgrmación"
            },
            {
                nombre: "Gustavo Rivera",
                edad: 70,
                clase: "Asebler"
            }]
    }


}]);





})();
