window.onload = function () {
    var res = 0;
    var numeros = [];
    do {
        var num = parseInt(prompt("Introduzca un número"));
        numeros.push(num);
        if (Number(num) == num) {
            res += num;
        } else {
            alert("Debe introducir un número, pruebe otra vez.");
        }

    } while (confirm("¿Continuar?"));

    var strNum = "";
    for (var i = 0; i < numeros.length; i++) {
        if (strNum == "") {
            strNum += numeros[i];
        } else {
            strNum += " + " + numeros[i];
        }
    }
    document.getElementById("suma").innerHTML = "La suma es " + strNum + " = " + res;
} 
