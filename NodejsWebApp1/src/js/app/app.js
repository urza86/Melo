var myApp = angular.module('inmuebleApp', []);

myApp.filter('basicSearch', function () {

    return function (inputArray, token) {
        var results=[];
        for (i = 0; i < inputArray.length; i++) {
            
            if(inputArray[i].Zona === null && inputArray[i].Description === null && inputArray[i].AptoCredito === null && inputArray[i].Antiguedad === null && inputArray[i].Ambientes === null ){ continue;};
            if ((inputArray[i].Description !== null && inputArray[i].Description.toString().includes(token)) || (inputArray[i].Zona !== null && inputArray[i].Zona.toString().includes(token)) || (inputArray[i].AptoCredito !== null && inputArray[i].AptoCredito.toString().toLower() == "si" && token.toString().toLower() == "apto credito")  || ((inputArray[i].Antiguedad !== null && inputArray[i].Antiguedad == token)) || ((inputArray[i].Ambientes !== null && inputArray[i].Ambientes == token))) {
                
                results.push(inputArray[i]);
            };

        };       

        
        return results;
    };

});
