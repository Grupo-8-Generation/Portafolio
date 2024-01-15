/*Relizar efecto cuando el mouse pase por encima de la imagen*/
function activo1()
{
    let imagen = document.querySelector('.contenedorEfecto1 #foto1');
    imagen.style.width = '300px';

    // let imagen = document.querySelectorAll('.contenedorEfecto img');
    let textoOculto = document.querySelector('.textoOculto');

    // imagen.forEach(function(imag)
    // {
    //     imagen.style.width = '300px';
    // });
        textoOculto.style.marginBottom = '-15px';
}
/*Relizar efecto cuando el mouse no este encima de la imagen*/
function inactivo1()
{
    let imagen = document.querySelector('.contenedorEfecto1 #foto1');
    imagen.style.width = '200px';
}

/*Relizar efecto cuando el mouse pase por encima de la imagen*/
function activo2()
{
    let imagen = document.querySelector('.contenedorEfecto2 #foto2');
    imagen.style.width = '300px';

    let textoOculto = document.querySelector('.textoOculto');
        textoOculto.style.marginBottom = '-15px';

}

/*Relizar efecto cuando el mouse no este encima de la imagen*/
function inactivo2()
{
    let imagen = document.querySelector('.contenedorEfecto2 #foto2');
    imagen.style.width = '200px';
}

/*Relizar efecto cuando el mouse pase por encima de la imagen*/
function activo3()
{
    let imagen = document.querySelector('.contenedorEfecto3 #foto3');
    imagen.style.width = '300px';

    let textoOculto = document.querySelector('.textoOculto');
        textoOculto.style.marginBottom = '-15px';

}

/*Relizar efecto cuando el mouse no este encima de la imagen*/
function inactivo3()
{
    let imagen = document.querySelector('.contenedorEfecto3 #foto3');
    imagen.style.width = '200px';
}

/*Relizar efecto cuando el mouse pase por encima de la imagen*/
function activo4()
{
    let imagen = document.querySelector('.contenedorEfecto4 #foto4');
    imagen.style.width = '300px';

    let textoOculto = document.querySelector('.textoOculto');
        textoOculto.style.marginBottom = '-15px';

}

/*Relizar efecto cuando el mouse no este encima de la imagen*/
function inactivo4()
{
    let imagen = document.querySelector('.contenedorEfecto4 #foto4');
    imagen.style.width = '200px';
}

let anchoPantalla = window.innerWidth;
if(anchoPantalla === 360)
{
    /*Relizar efecto cuando el mouse pase por encima de la imagen en tamaño de pantalla 360*/
    function activo1()
    {
        let imagen = document.querySelector('.contenedorEfecto1 #foto1');
        imagen.style.width = '300px';

        // let imagen = document.querySelectorAll('.contenedorEfecto img');
        let textoOculto = document.querySelector('.textoOculto');

        // imagen.forEach(function(imag)
        // {
        //     imagen.style.width = '300px';
        // });
        //textoOculto.style.marginLeft = '-90px';
        // textoOculto.style.position = 'relative';
        // textoOculto.style.top = '-400px !important';
        // textoOculto.style.marginBottom = '50px';
        let contenedor = document.getElementById('contenedorTotal1');
        contenedor.style.marginBottom = '50px';

    }

    /*Relizar efecto cuando el mouse no este encima de la imagen en tamaño de pantalla 360*/
    function inactivo1()
    {
        let imagen = document.querySelector('.contenedorEfecto1 #foto1');
        imagen.style.width = '200px';

        let contenedor = document.getElementById('contenedorTotal1');
        contenedor.style.marginBottom = '0px';
        
    }

    /*Relizar efecto cuando el mouse pase por encima de la imagen en tamaño de pantalla 360*/
    function activo2()
    {
        // let imagen = document.querySelector('.contenedorEfecto2 #foto2');
        // imagen.style.width = '300px';

        // let textoOculto = document.querySelector('.textoOculto');
        //     textoOculto.style.marginBottom = '-15px';

        let imagen = document.querySelector('.contenedorEfecto2 #foto2');
        imagen.style.width = '300px';

        // let imagen = document.querySelectorAll('.contenedorEfecto img');
        let textoOculto = document.querySelector('.textoOculto');

        // imagen.forEach(function(imag)
        // {
        //     imagen.style.width = '300px';
        // });
        //textoOculto.style.marginLeft = '-90px';
        // textoOculto.style.position = 'relative';
        // textoOculto.style.top = '-400px !important';
        let contenedor = document.getElementById('contenedorTotal2');
        contenedor.style.marginBottom = '50px';
    }

    /*Relizar efecto cuando el mouse no este encima de la imagen en tamaño de pantalla 360*/
    function inactivo2()
    {
        let imagen = document.querySelector('.contenedorEfecto2 #foto2');
        imagen.style.width = '200px';

        let contenedor = document.getElementById('contenedorTotal2');
        contenedor.style.marginBottom = '0px';
    }

    /*Relizar efecto cuando el mouse pase por encima de la imagen en tamaño de pantalla 360*/
    function activo3()
    {
        // let imagen = document.querySelector('.contenedorEfecto3 #foto3');
        // imagen.style.width = '300px';

        // let textoOculto = document.querySelector('.textoOculto');
        //     textoOculto.style.marginBottom = '-15px';

         // let imagen = document.querySelector('.contenedorEfecto2 #foto2');
        // imagen.style.width = '300px';

        // let textoOculto = document.querySelector('.textoOculto');
        //     textoOculto.style.marginBottom = '-15px';

        let imagen = document.querySelector('.contenedorEfecto3 #foto3');
        imagen.style.width = '300px';

        // let imagen = document.querySelectorAll('.contenedorEfecto img');
        let textoOculto = document.querySelector('.textoOculto');

        // imagen.forEach(function(imag)
        // {
        //     imagen.style.width = '300px';
        // });
        //textoOculto.style.marginLeft = '-90px';
        // textoOculto.style.position = 'relative';
        // textoOculto.style.top = '-400px !important';
        let contenedor = document.getElementById('contenedorTotal3');
        contenedor.style.marginBottom = '50px';

    }

    /*Relizar efecto cuando el mouse no este encima de la imagen en tamaño de pantalla 360*/
    function inactivo3()
    {
        // let imagen = document.querySelector('.contenedorEfecto3 #foto3');
        // imagen.style.width = '200px';

        let imagen = document.querySelector('.contenedorEfecto3 #foto3');
        imagen.style.width = '200px';

        let contenedor = document.getElementById('contenedorTotal3');
        contenedor.style.marginBottom = '0px';
    }

    /*Relizar efecto cuando el mouse pase por encima de la imagen en tamaño de pantalla 360*/
    function activo4()
    {
        // let imagen = document.querySelector('.contenedorEfecto4 #foto4');
        // imagen.style.width = '300px';

        // let textoOculto = document.querySelector('.textoOculto');
        //     textoOculto.style.marginBottom = '-15px';

         // let imagen = document.querySelector('.contenedorEfecto2 #foto2');
        // imagen.style.width = '300px';

        // let textoOculto = document.querySelector('.textoOculto');
        //     textoOculto.style.marginBottom = '-15px';

        let imagen = document.querySelector('.contenedorEfecto4 #foto4');
        imagen.style.width = '300px';

        // let imagen = document.querySelectorAll('.contenedorEfecto img');
        let textoOculto = document.querySelector('.textoOculto');

        // imagen.forEach(function(imag)
        // {
        //     imagen.style.width = '300px';
        // });
        //textoOculto.style.marginLeft = '-90px';
        // textoOculto.style.position = 'relative';
        // textoOculto.style.top = '-400px !important';
        let contenedor = document.getElementById('contenedorTotal4');
        contenedor.style.marginBottom = '50px';

    }

    /*Relizar efecto cuando el mouse no este encima de la imagen en tamaño de pantalla 360*/
    function inactivo4()
    {
        // let imagen = document.querySelector('.contenedorEfecto4 #foto4');
        // imagen.style.width = '200px';

        let imagen = document.querySelector('.contenedorEfecto4 #foto4');
        imagen.style.width = '200px';

        let contenedor = document.getElementById('contenedorTotal4');
        contenedor.style.marginBottom = '0px';
    }
}