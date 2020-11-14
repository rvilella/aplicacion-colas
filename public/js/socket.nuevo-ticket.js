// Comando para establecer la conexión
var socket = io();

// Para buscar una label en el archivo nuevo-ticket.html con Jquery
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Conectado del servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

// JQuery
$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});