myApp.controller('ContactController', ['$scope', '$http', 'helperService', function ($scope, $http, helperService) {
        
        
    $scope.sendEmail = function () {
            
            var source = '/sendEmail?Name='+$scope.myName+'&Phone='+ $scope.myPhone+"&Mail="+ $scope.myMail+"&msg="+ $scope.myMsg;
            $http.get(source).then(function (data) {
                var qs = source.substr(source.indexOf('?') + 1);
               // console.log($.parseJSON('{"' + qs.replace(/&/g, '","').replace(/=/g, '":"') + '"}'));
            });
        }
  
        
      
        
    }]);