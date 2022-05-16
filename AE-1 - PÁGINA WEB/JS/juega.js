
//GENERAMOS NUMEROS ALEATORIOS DE 0 A 9 PARA SACAR EL NUMERO ALEATORIO
var ale1= Math.floor(Math.random()*10);
var ale2= Math.floor(Math.random()*10);
var ale3= Math.floor(Math.random()*10);
var ale4= Math.floor(Math.random()*10);
var ale5= Math.floor(Math.random()*10);


//NUMERO JUNTADO CON EL ARRAY
var num= new Array(ale1, ale2, ale3, ale4, ale5);


//QUITA LAS COMAS AL ARRAY Y QUEDA UN NUMERO DE 5 CIFRAS
var sinComas= num.join("");


//GENERAMOS NUMEROS ALEATORIOS DE 0 A 9 PARA SACAR EL NUMERO PREMIADO
var ale6= Math.floor(Math.random()*10);
var ale7= Math.floor(Math.random()*10);
var ale8= Math.floor(Math.random()*10);
var ale9= Math.floor(Math.random()*10);
var ale10= Math.floor(Math.random()*10);


//NUMERO JUNTADO CON EL ARRAY
var num1= new Array(ale6, ale7, ale8, ale9, ale10);


//QUITA LAS COMAS AL ARRAY Y QUEDA UN NUMERO DE 5 CIFRAS
var sinComas1= num1.join("");


//AL PINCHA EN EL BOTON QUE VIENE A ESTA FUNCION SALE EL NUMERO ALEATORIO Y EL PREMIADO A LA VEZ EN DISTINTOS CUADROS
function gene(){
    document.getElementById('ale').style.textAlign="center";
    document.getElementById('ale').style.color="black";
    document.getElementById('ale').style.fontWeight="bold";
    document.getElementById('ale').value="Su boleto aleatorio es..."+sinComas;


    document.getElementById('prem').style.textAlign="center";
    document.getElementById('prem').style.color="black";
    document.getElementById('prem').style.fontWeight="bold";
    document.getElementById('prem').value="El boleto premiado es...."+sinComas1;
}


function premi(){

    //COGEMOS CADA NUMERO DE UNO EN UNO PARA HACER EL CONDICIONAL
    var prem= new String(sinComas);
    var a= prem.charAt(0);
    var b= prem.charAt(1);
    var c= prem.charAt(2);
    var d= prem.charAt(3);
    var e= prem.charAt(4);


    var prem1= new String(sinComas1);
    var aa= prem1.charAt(0);
    var bb= prem1.charAt(1);
    var cc= prem1.charAt(2);
    var dd= prem1.charAt(3);
    var ee= prem1.charAt(4);


    //CONDICIONAL QUE TE DICE SI HAS GANADO ALGO O NADA
    if(sinComas == sinComas1){
        alert("ENHORABUENA HAS GANADO LA LOTERIA. HAS GANADO 50.000€");
      } else if(b == bb && c == cc && d == dd && e == ee){
        alert("HAS GANADO 5000€ POR TENER LAS CUATRO ÚLTIMAS CIFRAS.");
      } else if(c == cc && d == dd && e == ee){
        alert("HAS GANADO 500€ POR TENER LAS TRES ÚLTIMAS CIFRAS.");
      } else if(d == dd && e == ee){
        alert("HAS GANADO 50€ POR TENER LAS DOS ÚLTIMAS CIFRAS.");
      } else if(e == ee){
        alert("HAS GANADO 5€ POR TENER LA ÚLTIMA CIFRA.");
      } else if(a == aa){
        alert("HAS GANADO 5€ POR TENER LA PRIMERA CIFRA.");
      } else if(e == ee && a == aa){
        alert("HAS GANADO 10€ POR LA PRIMERA Y LA ÚLTIMA CIFRA.");
      } else if(a == ee){
        alert("HAS GANADO 1€ POR LA PRIMERA CIFRA Y LA ÚLTIMA CIFRA.");
      } else if(e == aa){
        alert("HAS GANADO 1€ POR LA ÚLTIMA CIFRA Y LA PRIMERA CIFRA.");
      } else if(a == aa && b == bb){
        alert("HAS GANADO 50€ POR TENER LAS DOS PRIMERAS CIFRAS.");
      } else if(a == aa && b == bb && c == cc){
        alert("HAS GANADO 500€ POR TENER LAS TRES PRIMERAS CIFRAS.");
      } else if(a == aa && b == bb && c == cc && d == dd){
        alert("HAS GANADO 5000€ POR TENER LAS CUATRO PRIMERAS CIFRAS.");
      } else {
        alert("LO SIENTO SIGA INTENTANDOLO...");
      }
}

function correc(){
    var url="Logeado.html";
    var abrir= open(url);
}
