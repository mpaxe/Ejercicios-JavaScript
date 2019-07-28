function newDNI() {
    var cantidadDNI = parseInt(prompt("Indique la cantidad de DNIs a clacular"));
    var DNIs = [];

    for(var i = 0; i < cantidadDNI; i++){
        var numDni = parseInt(Math.random()*100000000);
        var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
        var letra = letras[numDni%23];

        var dni = numDni+'-'+letra;

        while(dni.length < 10){
            dni = '0'+dni;
        }
        
        DNIs.push(dni);

    }

    var listaDNIs = DNIs.map(function(elemento){
        return '<li>'+elemento+'<li>';
    })

    document.getElementById("dni").innerHTML = JSON.stringify(listaDNIs);
}

function addRow(idTabla) {
    var tabla = document.getElementById(idTabla);
    var numeroFilas = tabla.rows.length;
    var fila = tabla.insertRow(numeroFilas);

    var celda1 = fila.insertCell(0);
    var elmento1 = document.createElement("td");
    elmento1.type = "text";
    var nombre = document.getElementById("nombre").value;
    celda1.innerHTML = nombre;

    var celda2 = fila.insertCell(1);
    var elmento2 = document.createElement("td");
    elmento2.type = "text";
    var nombre = document.getElementById("apellidos").value;
    celda2.innerHTML = nombre;

    var celda3 = fila.insertCell(2);
    var elmento3 = document.createElement("td");
    elmento3.type = "text";

}
