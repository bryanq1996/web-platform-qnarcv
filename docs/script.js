consola.log('UPS ECUADOR');

var i=0;

var elemento = document.getElementById("titulo1")
elemento,addEventListener("click", function(){
    alert("click en titulo");
})


 elemento,addEventListener("mouseover", function(){
     i = i +1
     console.log(i)
     elemento.innerHTML = i
})