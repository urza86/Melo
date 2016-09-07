﻿myApp.controller('ArticleController', ['$scope', '$http', 'helperService', function ($scope, $http, helperService) {
      
        var idInmueble = helperService.getParameterFromURL('ID');
        var source = '/inmueble/' + idInmueble;
        $http.get(source).then(function (data) {
            
            $scope.context = data.data.recordsets[0];
            initMap(data.data.recordsets[0]);        
        });
      
        var map;
        function initMap(inmuebleOBJ) {
            
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: parseFloat(inmuebleOBJ.Latitud), lng: parseFloat(inmuebleOBJ.Longitud) },
                zoom: 16
            });
            var marker = new google.maps.Marker({
                position: { lat: parseFloat(inmuebleOBJ.Latitud), lng: parseFloat(inmuebleOBJ.Longitud) },
                map: map,
                title: inmuebleOBJ.Titulo
            });
        };
        
        $scope.ConvertirABoolean = function(value){ return helperService.convertirBitEnBoolean(value);}
        
    }]);