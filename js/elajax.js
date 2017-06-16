function cargar(event){
  event.preventDefault();
  // falta definir datos a enviar
  $.ajax({
        data:  "",
        url:   "./leer.php",
        type:  "post",
        success:  function (leidos) {
          $(".colContenido").html(leidos)
        }
  });
}

$(function(){
  $("#mostrarTodos").click(cargar);
})
