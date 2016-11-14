

myApp.controller('HomeController', ['$scope', '$http','helperService','$location',  function ( $scope, $http, helperService, $location) {
        $scope.greeting = 'Hola!';
        $scope.operaciones = ["Venta", "Alquiler"];
        $scope.inmuebles = ["Casa", "Departamento", "Terreno", "PH"];
        $scope.zonas = ["Zona Oeste", "Zona Sur", "Zona Norte", "CABA", "Costa Atlantica"];
        $scope.inmuebleSelected = $scope.inmuebles[0];
        $scope.operacionSelected = $scope.operaciones[0];
        $scope.zonaSelected = $scope.zonas[0];

        $scope.selectOperacion = function (item) { 
        
            $scope.operacionSelected = item;
        };
        $scope.selectinmueble = function (item) {
            
            $scope.inmuebleSelected = item;
        };
        $scope.selectZona = function (item) {
            
            $scope.zonaSelected = item;
        };
        console.log($scope.greeting);
        $('#editsearch').keypress(function (e) {
            if (e.which != '13') { return true;}
            if (e.which == '13') {
                $('nav').hide();
                $('header').hide();
                $('footer').hide();
                $('.container').hide();
                $('body').css("background-color", "#f5f5f5");
                $('#loader').css("margin-top", "20%");
                $('#loader').show();
                setTimeout(window.location.assign("/searchPage.html?token="+ $scope.tokenSearch), 2000);
            }
            return false;
        });
        
        $scope.capitalize = function (myString){
            return helperService.capitalize(myString);
        }
        $http.get('/inmuebles').then(function (data) { $scope.results = data.data.recordsets; console.log($scope.results);  });
        $scope.myclick = function(){ console.log("hola");};
        
        $scope.redirect = function (inmuebleID, page) {
            
            
                helperService.redirectWithParameter(inmuebleID, page);
             
        
        };
        $scope.restrictCharacters = function (paragraph){

            return paragraph.substring(0, 217) + "...";

        }
        
        $scope.busquedaAvanzada = function () {
            
            if ($scope.valueTerm == null) {
                var parameters = "operacion=" + $scope.operacionSelected + "&inmueble=" + $scope.inmuebleSelected + "&zona=" + $scope.zonaSelected;
            }
            else {
                var parameters = "operacion=" + $scope.operacionSelected + "&inmueble=" + $scope.inmuebleSelected + "&zona=" + $scope.zonaSelected + "&term=" + $scope.valueTerm;
            }
           // 
                
            
            $('nav').hide();
            $('header').hide();
            $('footer').hide();
            $('.container').hide();
            $('body').css("background-color", "#f5f5f5");
            $('#loader').css("margin-top", "20%");
            $('#loader').show();
            setTimeout(window.location.assign("/searchPage.html?" + parameters), 2000);

        };
        
        $scope.checkall = function () { 
            if ($scope.allZones) {
                $scope.oeste = true;
                $scope.sur = true;
                $scope.norte = true;
                $scope.capitalFed = true;
                $scope.costaAtlantica = true;
            } else {
                $scope.oeste = false;
                $scope.sur = false;
                $scope.norte = false;
                $scope.capitalFed = false;
                $scope.costaAtlantica = false;
            }
            //init();

        }
        
        $scope.SetMarkers = function (results) { 
        
            if ($scope.allZones || $scope.oeste || $scope.norte || $scope.sur || $scope.capitalFed || $scope.costaAtlantica) {
                
                filterInmueblesMarker(results, $scope.map);
            } else {
                
                while ($scope.Markers.length) {
                    $scope.Markers.pop().setMap(null);
                }

            }
        }

        $scope.mostrar = function () { console.log('test'); };
        //pasar scope.results
        $scope.Markers = [];
        function filterInmueblesMarker(results, mapa){
           

            for(var i=0; i < results.length ;i++)
            {
                if (($scope.oeste && results[i].Zona == "Zona oeste") || ($scope.sur && results[i].Zona == "Zona sur") || ($scope.norte && results[i].Zona == "Zona norte") || ($scope.capitalFed && results[i].Zona == "CABA")  || ($scope.costaAtlantica && results[i].Zona == "Costa Atlantica") ) {

                    var markerToAdd  = new google.maps.Marker({
                        position: { lat: parseFloat(results[i].Latitud) , lng: parseFloat(results[i].Longitud) },
                        map: mapa,
                        title: results[i].Titulo
                    });
                    $scope.Markers.push(markerToAdd);
                
                }
            
            }

        };

        var init = function () {// ver como devolver mapa para usar despues en filter func
            var map;
            function initMap() {
                $scope.map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat: -34.66772, lng: -58.69761 },
                    zoom: 8
                });
                
          
               filterInmueblesMarker($scope.results, $scope.map);
            };

            $('nav').hide();
            $('header').hide();
            $('footer').hide();
            $('.container').hide();
            $('body').css("background-color", "#f5f5f5");
            $('#loader').css("margin-top", "20%");
            $('#loader').show();
            setTimeout(function () {
                $('#loader').hide();
                $('nav').show();
                $('header').show();
                $('footer').show();
                $('.container').show(); initMap();}, 2000);
                
        };
        // and fire it after definition
       init();
       
    }]);