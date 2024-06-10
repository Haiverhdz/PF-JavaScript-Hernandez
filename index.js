
saludo('Hola!, para usar este programa debes ser mayor de edad');

let nombre = prompt("Por favor ingrese su nombre");
let edad = Number(prompt("Por favor ingrese su edad"));
alert('Bienveido '+ nombre +',disfruta nuestro programa.')

while (edad < 18) {
    alert("No tienes edad suficiente para usar este programa");
    edad = Number(prompt("Por favor ingrese su edad nuevamente"));
}
function ingresarSaldo(){
let option;
let saldo = 0;


while (option != 0) {
    option = prompt("A continuacion veras las opciones de nuestro programa \n 1.Ingresar dinero recibido \n 2.Ingresar dinero gastado \n 3.ver saldo \n 4.Ver empleados \n 5.Calcular iva \n 0.Salir");
    if (option==1){
        let montoRecibido= Number(prompt("Cuanto deseas ingresar?"));
        alert("Has ingresado " + montoRecibido);
        saldo= montoRecibido + saldo;
    }else if(option == 2){
        let montoGastado= Number(prompt("Ingresa dinero gastado:"));
        alert("Has gastado: " + montoGastado)
        saldo= saldo - montoGastado;
    }else if (option == 3){
        alert ("Tu saldo actual es de: " + saldo);
    }else if (option == 4){
        let empleados = ['DavidValencia', 'LuisaChacon'];
        empleados[2]=('Luna Restrepo');
        function verEmpleados (){
            for (let i=0; i < empleados.length;i++)
                alert (i+'. '+empleados[i])
        } return verEmpleados(); 
    }
    else if (option == 5){
    let valores = [];
    const montoIva = parseFloat(prompt('Ingrese el valor para calcular el IVA'));
    if (!isNaN(montoIva) && montoIva !== 0) {
            valores.push(montoIva);
        }
        calcularIva();
        console.log(valores);

        function calcularIva() {
            valores.forEach((monto) => alert((monto) * 0.19))};
           
    
    }else if(option==0){
        alert("Gracias por usar nuestros servicios")
    }
}
}
ingresarSaldo();


function saludo(mensaje){
    alert(mensaje)
};

class empleado{
    constructor(id, nombre, apellido, cargo, salario, direccion, edad){
    this.id= id;
    this.nombre= nombre;
    this.apellido= apellido;
    this.cargo= cargo;
    this.salario= salario;
    this.direccion= direccion;
    this.edad= edad;
    }
}


console.log(DavidValencia.cargo);
console.log(empleados[0]);
console.log(typeof DavidValencia);





