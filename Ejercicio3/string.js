var res = "";
do{
    var str = prompt("Introduzca una cadena");

    if(res == ""){
        res += str;
    }else{
        res += '-' + str;
    }

}while(confirm("Continuar?"));

document.write(res);
