//variables basicas--------------------------
let operandoUno = "";
let operandoDos = "";
let operacion = "";
let contador = 0;
let estado = "";
//-------------------------------------------
//DOM Elementos------------------------------
const digitoElement = document.querySelectorAll(".digito");
const operacionELement = document.querySelectorAll(".operador");
const accionElement = document.querySelectorAll(".accion");
const pantallaElement = document.querySelector("#iptPantalla"); 
const oper1 = document.querySelector("#oper1");
const oper2 = document.querySelector("#oper2")




function actualizarLabel() {
    oper1.textContent = operandoUno;
    oper2.textContent = operandoDos;
    
}

// Incrementa la variable cada segundo y actualiza el texto
setInterval(() => {
    actualizarLabel();
}, 1000);
//-------------------------------------------
// funciones operacions-----------------------
function sumaF(a,b) {return a+b;}
function restaF(a,b) {return a-b;}
function multiplicacionF(a,b) {return a*b;}
function divisionF(a,b) {return a/b;}

function del()
{
    let newStr  = pantallaElement.textContent.split("");
    newStr.pop();
    newStr = newStr.join("");
    pantallaElement.textContent = newStr;
}


function igual() {
    if (operandoUno != "" && operacion != "") {
        if (operandoDos == "") {
            operandoDos = Number(pantallaElement.textContent);
        }

        let nuevo;

        switch (operacion) {
            case "sumar":
                nuevo = sumaF(operandoUno, operandoDos);
                break;
            case "restar":
                nuevo = restaF(operandoUno, operandoDos);
                break;
            case "multiplicar":
                nuevo = multiplicacionF(operandoUno, operandoDos);
                break;
            case "dividir":
                nuevo = divisionF(operandoUno, operandoDos);
                break;
        }

        operandoUno = nuevo;
        pantallaElement.textContent = operandoUno;
        contador = 0;
        operacion = "";
        operandoDos = ""; 
        estado = "finalizado";
        
    }
}


//-------------------------------------------
//listeners----------------------------------
digitoElement.forEach(function(btn)
{btn.addEventListener("click",function(){
if (estado == ""){
pantallaElement.textContent += btn.dataset.val
;}
else if( estado != ""){
     operandoDos = "";
     operandoUno = "";
     operacion = "";
     contador = "";
     pantallaElement.textContent = btn.dataset.val;
     estado = "";
}

})

});

operacionELement.forEach(function(btn){
    btn.addEventListener("click",function()
{
    if (operandoUno == "") {operandoUno = Number(pantallaElement.textContent);}
    
    if (contador > 0){igual(); }

    pantallaElement.textContent = ""; 
    contador++;   
    if (estado != "") {estado = "";}
    switch(btn.value){


        case "suma": if (operacion == "") {operacion = "sumar";} break;
        
        case "resta": if (operacion == "") {operacion = "restar";} break;

        case "multiplicacion": if (operacion == "") {operacion = "multiplicar";} break;

        case "division": if (operacion == "") { operacion = "dividir"; } break;
    }

    
})
})

accionElement.forEach(function(btn){
btn.addEventListener("click",function()
{ 
  switch(btn.value)
    {
         case "igual": igual();break;
         case "borrar": del();break;
         case "limpiar":
            operandoDos = "";
            operandoUno = "";
            operacion = "";
            contador = "";
            pantallaElement.textContent = "";
            estado = "";
            break;         
    }
        
})
})


