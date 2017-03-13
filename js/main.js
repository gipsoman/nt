$(function(){

  menuToggle();


});

function menuToggle(){
  $('.menu-plate').on('click', function(e){
    e.stopPropagation();
  });

  $('.menu-close, header .menu-svg, .menu-overlay').on('click', function(){
    $('html').toggleClass('menu-open');
  });
}

