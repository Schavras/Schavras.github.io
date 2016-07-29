
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
   var scrollTop = $(window).scrollTop() ;
   if(scrollTop > 300){
    $('#back-to-top').css('visibility', 'visible');
     $('#back-to-top').css('opacity', '1');
  }else{
     
      $('#back-to-top').css('opacity', '0');
      $('#back-to-top').css('visibility', 'hidden');
  }
});

$( document ).ready(function() {
    var width = $(window).width();
    if(width < 767){
      $( '.case-studie').after('<div class="clear"> </div>');
    }
   
});
