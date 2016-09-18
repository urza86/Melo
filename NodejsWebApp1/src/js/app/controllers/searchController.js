

myApp.controller('SearchController', ['$scope', '$http', 'helperService', '$location','$filter',function ($scope, $http, helperService, $location, $filter) {
    
        var token = helperService.getParameterFromURL('token');
        $scope.valorBusqueda = token;
        $scope.restrictCharacters = function (paragraph) {
            
            return paragraph.substring(0, 217) + "...";

        }
        $http.get('/inmuebles').then(function (data) {
            $scope.results = data.data.recordsets;
            $scope.filteredResults = $filter('basicSearch')($scope.results, token);

            console.log($scope.results);
            console.log($scope.filteredResults);
        });

        
    
    }]);