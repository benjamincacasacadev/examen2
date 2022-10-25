

function login(){
    var loginInput = document.getElementById('loginInput').value;
    if(loginInput == ''){
        alert("El nombre de usuario es requerido");
    }else{
        document.getElementById('loginUser').innerHTML= loginInput;
    }
}

function convertir(){
    var selectConversor = document.getElementById('selectMonedas').value;

    var convInput = document.getElementById('convInput').value;
    if(convInput == ''){
        alert("Introduzca un numero");
    }else{
        convInput = parseFloat(convInput);
        var salida = 0;
        var titulo = '';
        if(selectConversor == "1"){
            salida = convInput / 6.96;
            salida
            titulo = convInput + ' Bs = '+salida.toFixed(2)+" $";
        }
        if(selectConversor == "2"){
            salida = convInput * 6.96;
            titulo = convInput + ' $ = '+salida.toFixed(2)+" Bs";
        }

        document.getElementById('resultadoConver').innerHTML = titulo;
    }
}