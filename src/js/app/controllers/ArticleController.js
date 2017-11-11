myApp.controller('ArticleController', ['$scope', '$http', 'helperService', function ($scope, $http, helperService) {

        var idInmueble = helperService.getParameterFromURL('ID');






    function retrieveInmuebleContext(id)
    {
        var inmuebles = helperService.inmueblesDB.dataset;
        for(var i=0; i < inmuebles.length; i++)
        {
            if(id == inmuebles[i].ID){
                return inmuebles[i];

            }

        }

    }
    $scope.context = retrieveInmuebleContext(idInmueble);
    console.log($scope.context);
    initMap($scope.context);
    console.log(idInmueble);
    console.log($scope.context);
        function clearContactValues() {

            $scope.myName = "";
            $scope.myPhone = "";
            $scope.myEmail = "";
            $scope.myMsg = "";
        }
        var source = '/inmueble/' + idInmueble;

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
