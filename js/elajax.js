var tituloContenido,itemMostrado=[], ciudad_f, tipos_f;

function mostrarTodos(event){
  event.preventDefault();
  $(".colContenido").html(tituloContenido+itemMostrado);
}

function comunicador(){
    $.ajax({
          data:  "",
          url:   "./buscador.php",
          type:  "post",
          dataType: "json",
          success:  function (response) {
            tituloContenido=response.tituloContenido;
            ciudad_f = response.ciudades;
            tipos_f= response.tipos;
            // carga filtros
            filtrosInit(ciudad_f,tipos_f);

            for(i=0; i<100;i++){
              itemMostrado[i]=response[i];
            }

          }
    });
}

function filtrosInit(ci,ti){
  // Se cargan los filtros
  var filtro1 = JSON.stringify(ci);
  var filtro2 = JSON.stringify(ti);

  var largo1 = filtro1.length-2;
  var largo2 = filtro2.length-2;

  filtro1 = filtro1.substr(1,largo1);
  filtro2 = filtro2.substr(1,largo2);

  filtro1 = filtro1.replace(/['"]+/g, '');
  filtro2 = filtro2.replace(/['"]+/g, '');


  // convertir string a array
  filtro1 = filtro1.split(',');
  filtro2 = filtro2.split(',');

  // cargar a formulario con jQuery

    $('#selectCiudad').append('<option value="1">'+filtro1[0]+'</option>',
      '<option value="2">'+filtro1[1]+'</option>',
      '<option value="3">'+filtro1[2]+'</option>',
      '<option value="4">'+filtro1[3]+'</option>',
      '<option value="5">'+filtro1[4]+'</option>'
    );

    $('#selectTipo').append('<option value="1">'+filtro2[0]+'</option>',
      '<option value="2">'+filtro2[1]+'</option>',
      '<option value="3">'+filtro2[2]+'</option>'
    );

    $("select").material_select('update');

}

$(function(){
  comunicador();
  $("#mostrarTodos").click(mostrarTodos);
})
