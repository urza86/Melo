

angular.module('inmuebleApp').service('helperService',[ '$location', function ($location) {
    this.capitalize = function (myString) {
        
        return myString.charAt(0).toUpperCase() + myString.slice(1);
        
    };
    this.redirectWithParameter = function (inmuebleID,page) {
            //porq estoy fuera de la app al ir a otra pagina con otra app. 
            //Deberia usar el routing     
            window.location.href = page +".html"+"?ID="+inmuebleID; 
            
        };
        this.getParameterFromURL = function(sParam) {

            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
            
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
        this.convertirBitEnBoolean = function (bitValue) {

            if (bitValue === 1) { return 'Si' };
            return 'No';

        };

}]);


    

