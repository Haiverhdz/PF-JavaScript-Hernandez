const form1= document.querySelector('#form1');
const form2= document.querySelector('#form2');
const form3= document.querySelector('#form3');
const stn1 = document.querySelector('#section1');
const stn2 = document.querySelector('#section2');
const stn3 = document.querySelector('#section3');
const stn4 = document.querySelector('#section4');
const btnIva = document.querySelector('#calcIvabtn');
const opt = document.querySelector('#ivaOrFin');
const btnTaxSend = document.querySelector('#btn_tax_send');
const btn_back_tax = document.getElementById('btn_back_tax');
const calcSaldobtn = document.getElementById('calcSaldobtn');
const btn_iva = document.getElementById('calcIvabtn');
let saldo_historico = [];
const btn_1 = document.getElementById('btn1');

function esconderSections (){
    stn2.style.display = 'none';
    stn3.style.display = 'none';
    stn4.style.display = 'none';
};
esconderSections();

btn_1.addEventListener('click', (e)=>{
    e.preventDefault();
    const ageInput = document.getElementById("age");
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 18) {
        alert("No tienes edad suficiente para usar este programa.");
        return;
      }
      stn1.style.display = 'none';
      stn2.style.display = 'block';

});

btnTaxSend.addEventListener('change', ()=>{
    const opt1 = opt.value;
    if(opt1==='Calcular salario'){
        stn1.style.display = 'none';
        stn2.style.display = 'none';
        stn4.style.display = 'none';
        stn3.style.display = 'block';
    }else if(opt1==='Calcular Iva'){
        stn1.style.display = 'none';
        stn2.style.display = 'none';
        stn3.style.display = 'none';
        stn4.style.display = 'block';
    }
})

btn_back_tax.addEventListener('click', ()=>{
    stn2.style.display = 'none';
    stn3.style.display = 'none';
    stn4.style.display = 'none';
    stn1.style.display = 'block';
})

function calculadorSaldo (){
    let ingreso = document.querySelector('#ingresar_monto').value;
    let egreso = document.getElementById('monto_gastado').value;
    let saldo = document.getElementById('saldo');
    saldo.innerHTML= Number(saldo.textContent)+(Number(ingreso)-Number(egreso)) ;
    let now = new Date();
    let date = now.toLocaleDateString('es-ES');
    saldo_historico.push({date,saldo:Number(saldo.textContent)});
    window.localStorage.setItem('saldo_historico',JSON.stringify(saldo_historico));  
}

calcSaldobtn.addEventListener('click', (e)=>{
    e.preventDefault();
    calculadorSaldo();
    document.getElementById('monto_gastado').value='';
    document.getElementById('ingresar_monto').value='';
    
})

btn_iva.addEventListener('click', (e)=>{
    e.preventDefault();
    let saldo = document.getElementById('ingresar_saldo').value;
    let iva =document.getElementById('ingresar_iva').value;
    let iva_calculado = document.getElementById('iva_calculado');
    iva_calculado.innerHTML= (Number(saldo)*Number(iva))/100 ;
    document.getElementById('ingresar_saldo').value='';
    document.getElementById('ingresar_iva').value='';
})


