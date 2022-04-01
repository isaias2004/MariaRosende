$(".hambergur").on("click", () => {
  $(".fullscreen").toggleClass("active").removeClass("reverse_anim");
});

$(".close").on("click", () => {
  $(".fullscreen").toggleClass("reverse_anim");
});


window.onload = function(){
  var formulario = document.getElementById('formulario');
  var boton_enviar = document.getElementById('enviar');
  boton_enviar.onclick = function(){
     if(formulario.checkValidity()){
        alert('El formulario es correcto!');
     }
  }
}