myApp.controller('ArticleController', ['$scope', '$http', 'helperService', function ($scope, $http, helperService) {
      
        var idInmueble = helperService.getParameterFromURL('ID');
        function clearContactValues() {
            
            $scope.myName = "";
            $scope.myPhone = "";
            $scope.myEmail = "";
            $scope.myMsg = "";
        }    
        var source = '/inmueble/' + idInmueble;
        $http.get(source).then(function (data) {
            
            $scope.context = data.data.dataset[0];
            initMap(data.data.dataset[0]);        
        });
        $scope.sendEmail = function () {
            
            var source = '/sendEmail?Name=' + $scope.myName + '&Phone=' + $scope.myPhone + "&Mail=" + $scope.myEmail + "&msg=" + $scope.myMsg;
            $http.get(source).then(function (data) {
                var qs = source.substr(source.indexOf('?') + 1);
                clearContactValues();
               // console.log($.parseJSON('{"' + qs.replace(/&/g, '","').replace(/=/g, '":"') + '"}'));
            });
        }
  
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