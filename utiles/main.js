alert("Hola mundo!");

var nombre = "Alex";
var altura = 178;

var concatenacion = nombre + " " + altura

/* Podemos imprimir directamente  Se va hasta abajo, porque no tiene recipiente html */
document.write(concatenacion); 

/* O podemos mandarlo a una sección del html por su id. Y se dibujará en la etiquta id seleccionada*/
var datosjs  = document.getElementById("datos"); /* Obtiene el elemento por su etiqueta, en este caso, la tiene el div */
datosjs.innerHTML = concatenacion;

/* Tambien se puede combinar código HTML con las variables de JS 
con '' Es para una sola línea sin variables, con ` es para mas de una línea de código con variables*/
var jshtml = document.getElementById("jshtml");
jshtml.innerHTML = `
    <h3>Esta sección es de código Java Script</h3>
    <h4>Mi nombre es: ${nombre}</h4>
    <h5>Mi altura es: ${altura} cm</h5>
    `;

if(altura >= 190){
    jshtml.innerHTML +='<h4>Eres una persona alta</h4>';
}else{
    jshtml.innerHTML +='<h4>Eres una persona bajita</h4>';
}

var contajs = document.getElementById("contador");
for(var i=0; i<=5; i++){
    contajs.innerHTML += `<h3>Número :${i} </h3>`;  /* Aquí fue acento invertido para meter variable*/
}

/* Hacer una funcion con todo integrado */
function MuestraMiNombre(nombre2, altura2){
    var jsfuncion = document.getElementById("funcion");
    jsfuncion.innerHTML = `
        <h3>Funcion Java Script</h3>
        <h4>Mi nombre es: ${nombre2}</h4>
        <h5>Mi altura es: ${altura2} cm</h5>
        `;   
}

/*Se manda a llamar la funcion */
MuestraMiNombre("Gabo","175")

/*Hacer una función quer retorne la info y que sea desplegada por otra funcion */
function MuestraMiNombre2(nombre3, altura3){
    var misDatos = `
        <h3>Funcion Java Script con return</h3>
        <h4>Mi nombre es: ${nombre3}</h4>
        <h5>Mi altura es: ${altura3} cm</h5>
        `;   
    return misDatos;
}

function imprimir(){
    var jsfunciones = document.getElementById("imprimir");
    jsfunciones.innerHTML = MuestraMiNombre2("AlexGabo","176");   
}

imprimir();

/* Arreglos o arrays*/

var arreglos = ['Uno','Dos','Tres'];
document.write('<h3>Listado de arreglo usando for</h3>');
for(j=0; j < arreglos.length; j++){
    document.write(arreglos[j] + '<br>');
}

document.write('<h3>Listado de arreglo usando forEach con function</h3>');
/*Se crea una funcion "arregloforeach" para recorrer el arreglo */
arreglos.forEach(function(arregloforeach){
    document.write(arregloforeach + '<br>');
})

/*Lo mismo que arriba pero usando las funciones de "flecha", se quita la palabra function y se asigna con =>*/
document.write('<h3>Listado de arreglo usando forEach con => </h3>');

arreglos.forEach((arregloforeach) =>{
    document.write(arregloforeach + '<br>');
})