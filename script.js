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
    if (operandoUno == "") {operandoUno = Number(pantallaElement.textContent);}
    else if (operandoDos == "") {operandoDos = Number(pantallaElement.textContent);}
    pantallaElement.textContent = "";
    if (operacion == "") {operacion = "sumar"}
    
    if (contador > 0 ){igual(operacion);}
    contador ++;   
}

function igual(operacion)
{
    if (operandoUno != "" && pantallaElement.textContent != "" && operacion != "")
    {   operandoDos = Number(pantallaElement.textContent)

        let nuevo
        switch(operacion)
        {
            case "sumar": nuevo =sumaF(operandoUno,operandoDos);
            break;
        }
        operandoUno = nuevo;
            pantallaElement.textContent = operandoUno;
            contador = 0;
            operacion = "";
    }
    
}

//-------------------------------------------
//listeners----------------------------------
digitoElement.forEach(function(btn)
{btn.addEventListener("click",function(){
pantallaElement.textContent += btn.dataset.val;})});

operacionELement.forEach(function(btn){
    btn.addEventListener("click",function()
{
    switch(btn.value){

        case "suma": sumaC(); break;
        case "resta": alert("resta"); break;
        case "multiplicacion": alert("multy");break;
        case "borrar": del(); break;
        case "igual": igual();break;

        default: alert("no vale  esto");

    }

    
})
})


