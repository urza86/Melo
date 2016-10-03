

myApp.controller('SearchController', ['$scope', '$http', 'helperService', '$location','$filter',function ($scope, $http, helperService, $location, $filter) {
    
        $scope.filtrarPrecio = function (item) {
            return ($scope.precioMin == null && $scope.precioMax == null) || (parseInt(item.Precio) <= parseInt($scope.precioMax)) || (parseInt(item.Precio) >= parseInt($scope.precioMin)) || ((parseInt(item.Precio) <= parseInt($scope.precioMax))&&(parseInt(item.Precio) >= parseInt($scope.precioMin)));
        };
        $scope.restrictCharacters = function (paragraph) {
            
            return paragraph.substring(0, 217) + "...";

        }
        $http.get('/inmuebles').then(function (data) {
            $scope.results = data.data.recordsets;
            if (helperService.countParameters() == 1) {
                var token = helperService.getParameterFromURL('token');
                $scope.valorBusqueda = token;
                $scope.filteredResults = $filter('basicSearch')($scope.results, token);
            } else { 
                var parameters = {};
                parameters.operacion = helperService.getParameterFromURL('operacion');
                parameters.inmueble = helperService.getParameterFromURL('inmueble');
                parameters.zona = helperService.getParameterFromURL('zona');
                parameters.term = helperService.getParameterFromURL('term') != null ? helperService.getParameterFromURL('term') : null;
                console.log(parameters.term);
                $scope.valorBusqueda = parameters.operacion;
                $scope.filteredResults = $filter('busquedaAvanzada')($scope.results, parameters);
            }
            console.log($scope.results);
            console.log($scope.filteredResults);
        });

        
    
    }]);