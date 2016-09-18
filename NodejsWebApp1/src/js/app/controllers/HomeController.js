

myApp.controller('HomeController', ['$scope', '$http','helperService','$location',  function ( $scope, $http, helperService, $location) {
        $scope.greeting = 'Hola!';
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
        
       
        

        var init = function () {
            var map;
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat: -34.66772, lng: -58.69761 },
                    zoom: 8
                });
                var marker = new google.maps.Marker({
                    position: { lat: -34.66772, lng: -58.69761 },
                    map: map,
                    title: 'Inmueble 1'
                });
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