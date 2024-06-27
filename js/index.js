// // saludo('Hola!, para usar este programa debes ser mayor de edad');

// // let nombre = prompt("Por favor ingrese su nombre");
// // let edad = Number(prompt("Por favor ingrese su edad"));
// // alert ('Bienveido '+ nombre +',disfruta nuestro programa.')

// // while (edad < 18) {
// //     alert("No tienes edad suficiente para usar este programa");
// //     edad = Number(prompt("Por favor ingrese su edad nuevamente"));
// // }
// // function ingresarSaldo(){
// // let option;
// // let saldo = 0;


// // while (option != 0) {
// //     option = prompt("A continuacion veras las opciones de nuestro programa \n 1.Ingresar dinero recibido \n 2.Ingresar dinero gastado \n 3.ver saldo \n 4.Ver empleados \n 5.Calcular iva \n 0.Salir");
// //     if (option==1){
// //         let montoRecibido= Number(prompt("Cuanto deseas ingresar?"));
// //         alert("Has ingresado " + montoRecibido);
// //         saldo= montoRecibido + saldo;
// //     }else if(option == 2){
// //         let montoGastado= Number(prompt("Ingresa dinero gastado:"));
// //         alert("Has gastado: " + montoGastado)
// //         saldo= saldo - montoGastado;
// //     }else if (option == 3){
// //         alert ("Tu saldo actual es de: " + saldo);
// //     }else if (option == 4){
// //         let empleados = ['DavidValencia', 'LuisaChacon'];
// //         empleados[2]=('Luna Restrepo');
// //         function verEmpleados (){
// //             for (let i=0; i < empleados.length;i++)
// //                 alert (i+'. '+empleados[i])
// //         } return verEmpleados(); 
// //     }
// //     else if (option == 5){
// //     let valores = [];
// //     const montoIva = parseFloat(prompt('Ingrese el valor para calcular el IVA'));
// //     if (!isNaN(montoIva) && montoIva !== 0) {
// //             valores.push(montoIva);
// //         }
// //         calcularIva();
// //         console.log(valores);

// //         function calcularIva() {
// //             valores.forEach((monto) => alert((monto) * 0.19))};


// //     }else if(option==0){
// //         alert("Gracias por usar nuestros servicios")
// //     }
// // }
// // }
// // ingresarSaldo();


// function saludo(mensaje){
//     alert(mensaje)
// };

// // class empleado{
// //     constructor(id, nombre, apellido, cargo, salario, direccion, edad){
// //     this.id= id;
// //     this.nombre= nombre;
// //     this.apellido= apellido;
// //     this.cargo= cargo;
// //     this.salario= salario;
// //     this.direccion= direccion;
// //     this.edad= edad;
// //     }
// // }


// // console.log(DavidValencia.cargo);
// // console.log(empleados[0]);
// // console.log(typeof DavidValencia);



// const party = document.getElementById('fiesta');
// const button = document.getElementById('btn');

// button.addEventListener('click', ()=> {
//     let invitado = document.createElement('p');
//     invitado.innerText= 'Luisa';

//     party.appendChild(invitado);

// })

// const dance = document.getElementById('bailar');

// dance.addEventListener('click', ()=>{
//     const items = document.querySelectorAll('p');
//     items.forEach((item)=>{
//         item.style.background = 'red';
//         item.style.color = 'white'
//     })
//     }
// )

const form_1 = document.querySelector('#form-1');
const fnz = document.querySelector('#fnz');



function programa_finanzas(){
    const create_section= document.createElement('section');
    create_section.className= 'boxs';
    create_section.id = `task`;
    create_section.innerHTML= `
    <section class="prog">
        <h2>A continuacion veras las opciones de nuestro programa</h2>
            <form action="" id="form-2">
                <div class="inputs">
                    <label for="ingresar_monto">Ingresar dinero recibido</label>
                    <input type="text" id="ingresar_monto">
                </div class="inputs">
                <div class="inputs">
                    <label for="monto_gastado">Ingresas monto gastado</label>
                    <input type="text" id="monto_gastado">
                </div>
                <div class="inputs">
                    <label for="ver_saldo">Ver saldo</label>
                    <input type="text" id="ver_saldo">
                </div>
                <div class="inputs">
                    <label for="calcular_iva">Calcular Iva</label>
                    <input type="text" id="calcular_iva">
                </div>
                <div>
                    <button id="btn-salir">Enviar y salir</button>
                </div>
            </form>
    </section>
    `
    fnz.appendChild(create_section);
}


form_1.addEventListener('submit', (e)=>{
    e.preventDefault();
    const edad = document.getElementById('age');
 programa_finanzas();
 form_1.reset();

} )

