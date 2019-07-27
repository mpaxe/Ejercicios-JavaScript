window.onload = function() {
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