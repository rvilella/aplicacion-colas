// sentencia para establecer la conexión
var socket = io();

// sentencia para capturar los parametros por url
var searchParams = new URLSearchParams(window.location.search);

// sentencia para capturar el parámetro escritorio
if (!searchParams.has('escritorio')) {

    // sentencia para salir de la pantalla
    window.location = 'index.html';
    // sentencia para no seguir ejecutando comando js
    throw new Error('El escritorio es necesario');

}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);
// sentencia que asigna texto a la etiqueta h1
$('h1').text('Escritorio: ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        // console.log(resp);

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('Ticket: ' + resp.numero);

    });

});