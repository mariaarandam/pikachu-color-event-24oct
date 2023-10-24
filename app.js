// Pika-pika suerte!

let backgroundPikachu = document.querySelector("#Pikachu");
let buttonColor = document.querySelector("#colors");

buttonColor.addEventListener("click", function (event){
    console.log("el color pulsado es el: " + event.target.id);

    backgroundPikachu.style.backgroundColor = event.target.id;

});