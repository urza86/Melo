myApp.controller('ContactController', ['$scope', '$http', 'helperService', function ($scope, $http, helperService) {
        
        function clearContactValues(){

            $scope.myName = "";
            $scope.myPhone = "";
            $scope.myMail = "";
            $scope.myMsg = "";
        }    
    $scope.sendEmail = function () {
            
            var source = '/sendEmail?Name='+$scope.myName+'&Phone='+ $scope.myPhone+"&Mail="+ $scope.myMail+"&msg="+ $scope.myMsg;
            $http.get(source).then(function (data) {
                var qs = source.substr(source.indexOf('?') + 1);
                clearContactValues();
               // console.log($.parseJSON('{"' + qs.replace(/&/g, '","').replace(/=/g, '":"') + '"}'));
            });
        }
  
        
      
        
    }]);