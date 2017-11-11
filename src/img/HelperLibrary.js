

angular.module('inmuebleApp').service('helperService',[ '$location', function ($location) {

   // this.inmueblesDB = {"dataset":[{"ID":1,"Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?","Direccion":"chaco","Numero":386,"Tipo":"Casa","Ambientes":4,"Superficie":40,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":1,"Latitud":"-34.601083333333","Longitud":"-58.383083333333","Zona":"Zona oeste","MostrarEnHome":"Si","Titulo":"Chalet","ImagenRuta":"/src/img/images.jpg","Precio":120000,"Operacion":"Venta"},{"ID":2,"Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?","Direccion":"noguera","Numero":400,"Tipo":"Departamento","Ambientes":4,"Superficie":40,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"NULL","MostrarEnHome":"No","Titulo":"mi nueva casa","ImagenRuta":"/src/img/images.jpg","Precio":120000,"Operacion":"Venta"},{"ID":3,"Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?","Direccion":"algun lugar","Numero":900,"Tipo":"Terreno","Ambientes":4,"Superficie":40,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"NULL","MostrarEnHome":"Si","Titulo":"otro tipo de casa","ImagenRuta":"/src/img/images.jpg","Precio":120000,"Operacion":"Venta"},{"ID":4,"Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?","Direccion":"muestro","Numero":300,"Tipo":"PH","Ambientes":4,"Superficie":40,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"NULL","MostrarEnHome":"Si","Titulo":"muestro","ImagenRuta":"/src/img/images.jpg","Precio":120000,"Operacion":"Alquiler"},{"ID":6,"Description":"Departamento que cuenta con 3 dormitorios, 1 baño, cocina comedor, living. Adicionalmente posee parrilla en terraza. Cochera opcional. Ubicado en Merlo centro a 4 cuadras de la estacion.","Direccion":"Merlo Centro","Numero":300,"Tipo":"inversion","Ambientes":3,"Superficie":40,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":1,"Latitud":"-34.601083333333","Longitud":"-58.383083333333","Zona":"Zona Oeste","MostrarEnHome":"Si","Titulo":"Departamento Merlo Centro","ImagenRuta":"/src/img/imagenFront.jpg","Precio":120000,"Operacion":"Alquiler"}]};
   /*this.inmueblesDB = {"dataset":[{"ID":1,"Description":"Departamento en venta 1er piso al frente, en Mar del Plata ,excelente ubicacion a 200mts de la playa, centro comercial Punta Mogotes","Direccion":"200 metros de la playa","Numero":0,"Tipo":"Casa","Ambientes":4,"Superfici":0,"Antiguedad":0,"AptoCredito":0,"Permuta":0,"Financiacion":0,"Latitud":"NULL","Longitud":"NULL","Zona":"Costa Atlantica","MostrarEnHome":"Si","Titulo":"Casa Costa Atlantica","ImagenRuta":"/src/img/1.jpg","Precio":56000,"Operacion":"Venta"},
        {"ID":2,"Description":"MERLO CENTRO - Todos los servicios - cochera cubierta para dos autos - living/comedor amplio - 3 dormitorios, 1 con baño en suite - cocina/comedor -2 baños - fondo con parrilla y galpon","Direccion":"Merlo Centro","Numero":0,"Tipo":"Casa","Ambientes":4,"Superficie":0,"Antiguedad":0,"AptoCredito":0,"Permuta":1,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"Zona Oeste","MostrarEnHome":"si","Titulo":"Casa en Merlo Centro","ImagenRuta":"/src/img/2.jpg","Precio":0,"Operacion":"Venta"},
        {"ID":3,"Description":"EXCELENTE OPORTUNIDAD VENTA DEPARTAMENTO UBICADO EN MERLO SUR,  ambientes, amplios y muy luminosos,3 dormitorios, cocina comedor, living, baÒo completo, terraza con parrilla , opcional cochera cubierta.","Direccion":"G.RAWSON","Numero":500,"Tipo":"departamento","Ambientes":4,"Superficie":0,"Antiguedad":0,"AptoCredito":1,"Permuta":0,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"zona oeste","MostrarEnHome":"Si","Titulo":"Departamento","ImagenRuta":"/src/img/3.jpg","Precio":105000,"Operacion":"Venta"},
        {"ID":4,"Description":"an Antonio De Padua NORTE. Muy buena casa de 2 dormitorios, baño Living-comedor, cocina, y garage A 3 cuadras de la estaciÛn.","Direccion":"Padua norte, a 3 cuadras de la estacion","Numero":0,"Tipo":"Casa","Ambientes":3,"Superficie":0,"Antiguedad":0,"AptoCredito":1,"Permuta":0,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"Zona Oeste","MostrarEnHome":"Si","Titulo":"Casa en venta Padua Norte","ImagenRuta":"/src/img/4.jpg","Precio":130000,"Operacion":"Venta"}
    ]};*/
    this.inmueblesDB = {"dataset":[{"ID":1,"Description":"Excelente Departamento en venta en Merlo Centro -Rawson al 500","Direccion":"Rawson","Numero":500,"Tipo":"Departamento","Ambientes":4,"Superficie":0,"Antiguedad":0,"AptoCredito":0,"Permuta":0,"Financiacion":0,"Latitud":"-34.6664487","Longitud":"-58.718691","Zona":"Zona Oeste","MostrarEnHome":"Si","Titulo":"Departamento","ImagenRuta":"src/img/1.jpg","Precio":105000,"Operacion":"Venta"},
            {"ID":2,"Description":"Excelente oportunidad, DEPARTAMENTO en venta en Merlo Centro","Direccion":"Av. Constituci�n","Numero":150,"Tipo":"Departamento","Ambientes":2,"Superficie":48,"Antiguedad":0,"AptoCredito":0,"Permuta":0,"Financiacion":0,"Latitud":"-34.6717557","Longitud":"-58.7362419,17","Zona":"Zona Oeste","MostrarEnHome":"Si","Titulo":"Departamento en venta","ImagenRuta":"src/img/2.jpg","Precio":47000,"Operacion":"Venta"},
            {"ID":3,"Description":"EXCELENTE OPORTUNIDAD!!!! CASA EN VENTA en S.A.de PADUA SUR excelente ubicaci�n - Ideal para inversores","Direccion":"importante avenida","Numero":0,"Tipo":"Casa","Ambientes":5,"Superficie":0,"Antiguedad":0,"AptoCredito":0,"Permuta":1,"Financiacion":0,"Latitud":"NULL","Longitud":"NULL","Zona":"Zona oeste","MostrarEnHome":"Si","Titulo":"Casa-ideal para inversores","ImagenRuta":"src/img/3.jpg","Precio":0,"Operacion":"Venta"},
            {"ID":4,"Description":"GRAN OPORTUNIDAD IDEAL INVERSORES","Direccion":"San Luis","Numero":300,"Tipo":"Casa","Ambientes":5,"Superficie":0,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":0,"Latitud":"-34.6713097","Longitud":"-58.6936122","Zona":"Zona oeste","MostrarEnHome":"Si","Titulo":"Casa-Ideal para inversores","ImagenRuta":"src/img/4.jpg","Precio":0,"Operacion":"Venta"}
    ]};

    /*,,{"ID":4,"Description":"GRAN OPORTUNIDAD IDEAL INVERSORES","Direccion":"San Luis","Numero":300,"Tipo":"Casa","Ambientes":5,"Superficie":0,"Antiguedad":0,"AptoCredito":1,"Permuta":1,"Financiacion":0,"Latitud":"-34.6713097","Longitud":"-58.6936122","Zona":"Zona oeste","MostrarEnHome":"Si","Titulo":"Casa-Ideal para inversores","ImagenRuta":"/src/img/4.jpg","Precio":0,"Operacion":"Venta"}]};*/
    //,,,,{"ID":5,"Description":"Departamento de tres ambientes, Living comedor amplio de 4,30 x 3,50 mts, cocina amplia, y lavadero, baño completo con bañera, dos amplios dormitorios con placard empotrados, el principal de 4,00 x 4,00 mts, el segundo de 3 x 3,20 mts. primer piso al Frente","Direccion":"Las Flores-Las Flores. 1er piso","Numero":485,"Tipo":"Departamento","Ambientes":3,"Superficie":60,"Antiguedad":0,"AptoCredito":1,"Permuta":0,"Financiacion":1,"Latitud":"NULL","Longitud":"NULL","Zona":"Zona Oeste","MostrarEnHome":"Si","Titulo":"Departamento Haedo","ImagenRuta":"/src/img/5.jpg","Precio":Consulta,"Operacion":"venta"}
    this.capitalize = function (myString) {

        return myString.charAt(0).toUpperCase() + myString.slice(1);

    };


    this.redirectWithParameter = function (inmuebleID,page) {
        //porq estoy fuera de la app al ir a otra pagina con otra app.
        //Deberia usar el routing
        window.location.href = page +".html"+"?ID="+inmuebleID;

    };
    this.countParameters = function () {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&');
        return sURLVariables.length;
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
