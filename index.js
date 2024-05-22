alert("Hola!, para usar este programa debes ser mayor de edad");

let nombre = prompt("Por favor ingrese su nombre");
let edad = Number(prompt("Por favor ingrese su edad"));

while (edad < 18) {
    alert("No tienes edad suficiente para usar este programa");
    edad = Number(prompt("Por favor ingrese su edad nuevamente"));
}
function ingresarSaldo(){
let option;
let saldo = 0;

while (option != 0) {
    option = prompt("A continuacion veras las opciones de nuestro programa \n 1.Ingresar dinero recibido \n 2.Ingresar dinero gastado \n 3.ver saldo \n 0.Salir");
    if (option==1){
        let montoRecibido= Number(prompt("Cuanto deseas ingresar?"));
        alert("Has ingresado " + montoRecibido);
        saldo= montoRecibido + saldo;
    }else if(option == 2){
        let montoGastado= Number(prompt("Ingresa dinero gastado:"));
        alert("Has gastado: " + montoGastado)
        saldo= saldo - montoGastado;
    }else if (option == 3){
        alert ("Tu saldo actual es de: " + saldo)
    }else if(option==0){
        alert("Gracias por usar nuestros servicios")
    }
}
}
ingresarSaldo();


