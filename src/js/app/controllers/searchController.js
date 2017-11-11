

myApp.controller('SearchController', ['$scope', '$http', 'helperService', '$location','$filter',function ($scope, $http, helperService, $location, $filter) {
    
        $scope.filtrarPrecio = function (item) {
            return ($scope.precioMin == null && $scope.precioMax == null) || (parseInt(item.Precio) <= parseInt($scope.precioMax)) || (parseInt(item.Precio) >= parseInt($scope.precioMin)) || ((parseInt(item.Precio) <= parseInt($scope.precioMax))&&(parseInt(item.Precio) >= parseInt($scope.precioMin)));
        };
        $scope.restrictCharacters = function (paragraph) {
            
            return paragraph.substring(0, 217) + "...";

        }
        
        function getTipoValue(tipoPar){
        
            if (tipoPar == "Lote") { return "Lotes"; }
            else if (tipoPar == "Departamento") { return "Departamentos"; } 
            else if (tipoPar == "Casa") { return "Casas"; } 
            else if (tipoPar == "Otro") { return "Otro"; }

        }

    $scope.results = helperService.inmueblesDB.dataset;;
    var tipo = helperService.getParameterFromURL('tipo');
    if (helperService.countParameters() == 1 && tipo == undefined) {
        var token = helperService.getParameterFromURL('token');
        $scope.valorBusqueda = token;
        $scope.filteredResults = $filter('basicSearch')($scope.results, token);
    } else {
        var parameters = {};
        parameters.operacion = helperService.getParameterFromURL('operacion');
        parameters.inmueble = helperService.getParameterFromURL('inmueble');
        parameters.zona = helperService.getParameterFromURL('zona');
        parameters.term = helperService.getParameterFromURL('term') != null ? helperService.getParameterFromURL('term') : null;



        if (tipo != null && tipo != undefined && tipo != "") {
            $scope.valorBusqueda = getTipoValue(tipo);
            $scope.filteredResults = $filter('tipoSearch')($scope.results, tipo);
        } else {
            console.log(parameters.term);
            $scope.valorBusqueda = parameters.operacion + " " + parameters.inmueble + " " + parameters.zona + " " + (parameters.term != null ? parameters.term : "");
            $scope.filteredResults = $filter('busquedaAvanzada')($scope.results, parameters);
        }
    }

    $scope.redirect = function (inmuebleID, page) {


        helperService.redirectWithParameter(inmuebleID, page);


    };
    console.log($scope.results);
    console.log($scope.filteredResults);

        /*$http.get('/inmuebles').then(function (data) {
            $scope.results = data.data.dataset;
            var tipo = helperService.getParameterFromURL('tipo');
            if (helperService.countParameters() == 1 && tipo == undefined) {
                var token = helperService.getParameterFromURL('token');
                $scope.valorBusqueda = token;
                $scope.filteredResults = $filter('basicSearch')($scope.results, token);
            } else { 
                var parameters = {};
                parameters.operacion = helperService.getParameterFromURL('operacion');
                parameters.inmueble = helperService.getParameterFromURL('inmueble');
                parameters.zona = helperService.getParameterFromURL('zona');
                parameters.term = helperService.getParameterFromURL('term') != null ? helperService.getParameterFromURL('term') : null;
                

                
                if (tipo != null && tipo != undefined && tipo != "") {
                    $scope.valorBusqueda = getTipoValue(tipo);
                    $scope.filteredResults = $filter('tipoSearch')($scope.results, tipo);
                } else {
                    console.log(parameters.term);
                    $scope.valorBusqueda = parameters.operacion + " " + parameters.inmueble + " " + parameters.zona + " " + (parameters.term != null ? parameters.term : "");
                    $scope.filteredResults = $filter('busquedaAvanzada')($scope.results, parameters);
                }
            }
            
            $scope.redirect = function (inmuebleID, page) {
                
                
                helperService.redirectWithParameter(inmuebleID, page);
             
        
            };
            console.log($scope.results);
            console.log($scope.filteredResults);
        });
*/
        
    
    }]);