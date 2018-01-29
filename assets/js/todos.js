/*
  Problema:
  Nos damos cuenta de que los lis viejos, se eliminan pero los nuevos no.
  Esto se debe a que hemos usado .click() y no .on()
  -- click() only adds listeners for existing elements
  -- on() will add listeners for all potential future elements.
  Otra cosa que hay que hacer es poner : $("ul").on("click", "li", ...
  Esto se ejecutara cuando se clikea a los li dentro de ul
  Tenemos que poner el evento a un elemento que existe, por que si no lo encontrará-

*/

// check off the specific li.
$("ul").on("click", "li", function(){
  $(this).toggleClass("check-off");
});

/*
  Aqui ocurre un fenomeno llamado event Bubling:
  Este fenomeno se ocurre al clikar en la X, se produce el evento del li y luego del container
  y asi sucesivamente. Ya que la x pertenece al li y asi sucesivamente ...
  para evitar esto hay que usar event.stopPropagation();
*/

// Click on X to delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){ // .parent() para referirse al li
    $(this).remove();
  });
  event.stopPropagation(); // este metodo servira para que no se propagara a los eventos.
});

// creating todos.
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
      var text = $(this).val(); // valor del input
      $(this).val("");
      // create a new todo to append to ul
      $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + text + "</li>");
  }
});

// plus icons
$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});
