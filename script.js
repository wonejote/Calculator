//variables basicas--------------------------
let operandoUno = "";
let operandoDos = "";
let operacion = "";
let contador = 0;
//-------------------------------------------
//DOM Elementos------------------------------
const digitoElement = document.querySelectorAll(".digito");
const operacionELement = document.querySelectorAll(".operador");
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


function sumaC()
{   
    if (operandoUno == "") {
        operandoUno = Number(pantallaElement.textContent);
    }

    if (contador > 0){
        igual(); 
    }

    if (operacion == "") {
        operacion = "sumar";
    }

    pantallaElement.textContent = ""; 
    contador++;   
}


function restaC()
{   
    if (operandoUno == "") {
        operandoUno = Number(pantallaElement.textContent);
    }
    
    if (contador > 0){
        igual(); 
    }

    if (operacion == "") {
        operacion = "restar";
    }

    pantallaElement.textContent = ""; 
    contador++;   
}


function multiplicacionC()
{   
    if (operandoUno == "") {
        operandoUno = Number(pantallaElement.textContent);
    }
    
    if (contador > 0){
        igual(); 
    }

    if (operacion == "") {
        operacion = "multiplicar";
    }

    pantallaElement.textContent = ""; 
    contador++;   
}

function divisionC()
{   
    if (operandoUno == "") {
        operandoUno = Number(pantallaElement.textContent);
    }
    
    if (contador > 0){
        igual(); 
    }

    if (operacion == "") {
        operacion = "dividir";
    }

    pantallaElement.textContent = ""; 
    contador++;   
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
        
    }
}


//-------------------------------------------
//listeners----------------------------------
digitoElement.forEach(function(btn)
{btn.addEventListener("click",function(){
pantallaElement.textContent += btn.dataset.val
;})

});

operacionELement.forEach(function(btn){
    btn.addEventListener("click",function()
{
    switch(btn.value){

        case "suma": sumaC(); break;
        case "resta": restaC(); break;
        case "multiplicacion":multiplicacionC(); break;
        case "division": divisionC(); break;
        case "borrar": del(); break;
        case "igual": igual();break;
    }

    
})
})


