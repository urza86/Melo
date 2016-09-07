// redirect hacerlo desde servicio, como salgo de la app para entrar a otro esto sucede por no usar el reouting, cambiar lo q devielve el la respuesta desde node en vez de todo el doc, que devuelva 404 o 200

myApp.controller('HomeController', ['$scope', '$http','helperService','$location',  function ( $scope, $http, helperService, $location) {
        $scope.greeting = 'Hola!';
        console.log($scope.greeting);
        
        $scope.capitalize = function (myString){
            return helperService.capitalize(myString);
        }
        $http.get('/inmuebles').then(function (data) { $scope.results = data.data.recordsets; console.log($scope.results);  });
        $scope.myclick = function(){ console.log("hola");};
        
        $scope.redirect = function (inmuebleID, page) {
            
            
                helperService.redirectWithParameter(inmuebleID, page);
             
        
        };
       
        
    }]);