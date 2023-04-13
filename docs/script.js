consola.log('UPS ECUADOR')

var i=0;

var elemento = document.getElementById("titulo1")
elemento,addEventListener("click", function(){
   // alert("click en titulo");
   
   elemento.innerHTML = i
})


 elemento,addEventListener("mouseover", function(){
     i = i +1
     console.log(i)
})

//var menu = document.getElementById("menu")
//var listas=document.getElementsByTagName("li")
//console.log(listas)


//var list = document.querySelector("ul li")
//console.log(list)

var list2 = document.querySelector("aside li:nth-child(odd)")
console.log(list2)


var nuevoParrafo = document.createElement("p");

  // Crear el contenido del nuevo elemento
  var texto = document.createTextNode("Este es un nuevo párrafo");

  // Añadir el contenido al nuevo elemento
  nuevoParrafo.appendChild(texto);

  // Añadir el nuevo elemento al div existente
  var divExistente = document.getElementById("miDiv");
  divExistente.appendChild(nuevoParrafo);