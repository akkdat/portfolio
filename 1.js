/*$enable-responsive-font-sizes: true;*/

/*nav捲動陰影*/
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }
});

/*首頁jumbotron變淺消失*/
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $("#hero .jumbotron .container").css("opacity", (1- $(window).scrollTop() / 300) < 0 ? 0 :   (1- $(window).scrollTop() / 300)       ) ;
        $("#hero .jumbotron .container").css("z-index", (125 - $(window).scrollTop()) < -1 ? -1 : (125 - $(window).scrollTop()) );
    }) 
})

/*nav tab 切換*/
$(document).ready(function() {
  $('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tabcontent').removeClass('current').hide();
    $(this).addClass('current');
    $("#" + tab_id).addClass('current').fadeIn();
  });
});

/*內頁nav tab 切換*/
window.onload = function(){  
  var url = document.location.toString();
  
  if (url.match('#')) {
      var tab_id = url.split('#')[1];
  }
  else {
    var tab_id = 'tab-1';
  }
      $('.tabcontent').removeClass('current').hide();
      $("#" + tab_id).addClass('current').fadeIn();
      switch (tab_id) {
        case 'tab-1':
          $("#tab2 a,#tab3 a").removeClass("active");
          $("#tab1 a").addClass("active");
          $("body").removeClass("body-bg");
          $("#tab-3").removeClass("about-bg");
          $("footer").addClass("my-5");
          break;
        case 'tab-2':
          $("#tab1 a,#tab3 a").removeClass("active");
          $("#tab2 a").addClass("active");
          $("body").removeClass("body-bg");
          $("#tab-3").removeClass("about-bg");
          $("footer").addClass("my-5");
          break;
        case 'tab-3':
          $("#tab1 a,#tab2 a").removeClass("active");
          $("#tab3 a").addClass("active");
          $("footer").removeClass("my-5");
          $("#tab-3").addClass("about-bg");
          $("body").addClass("body-bg");
          break;


      }
} 

/*$(document).ready(function(){ 
  $(window).scroll(function(){ 
      $(".about-bg").css("opacity", 1- $(window).scrollTop() / 300) 
  }) 
})*/

/*about黑色背景變淺*/
function EasyPeasyParallax() {

    var scrollPos = $(document).scrollTop();
    var targetOpacity = 0;
    scrollPos < 1000 ? targetOpacity = '0.9'- (scrollPos)/300 : targetOpacity;
    $('.about-bg').css({
        'background-color': 'rgba(0, 0, 0, '+ targetOpacity +')'
    });
    console.log(scrollPos,targetOpacity);
  };

  $(function(){
    $(window).scroll(function() {
      if ($(window).width() < 420) {
        EasyPeasyParallax();
      }
    });

});



function checkWidth() {
  if ($(window).width() > 420) {
      $('#tab-3').attr('style','');
  } 
}
$(window).resize(checkWidth);


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        /*event.preventDefault();*/
  
        // Store hash
        var hash = this.hash;
        
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          //scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          
          window.location.hash = hash;
        });
      } // End if
    });
  });



  $(document).ready(function(){

    $("#tab1").click(function(){
      $("#tab2 a,#tab3 a").removeClass("active");
      $("#tab1 a").addClass("active");
  });
      $("#tab2").click(function(){
      $("#tab1 a,#tab3 a").removeClass("active");
      $("#tab2 a").addClass("active");
  });
      $("#tab3").click(function(){
      $("#tab1 a,#tab2 a").removeClass("active");
      $("#tab3 a").addClass("active");
  });
    $("#tab3").click(function(){
        $("footer").removeClass("my-5");
        $("#tab-3").addClass("about-bg");
        $("body").addClass("body-bg");
    });
    $("#tab1,#tab2").click(function(){
      $("body").removeClass("body-bg");
      $("#tab-3").removeClass("about-bg");
      $("footer").addClass("my-5");
    });
  });

  /*$(document).ready(function(){
    $("#tab3").click(function(){
        $("footer").addClass("footer-about");
    });
  });*/


/*自動關nav*/  
$('.navbar-toggler a').click(function(){
  $(".navbar-collapse").collapse('hide');
});

/*$(document).ready(function () {
  $('#myModal').on('show.bs.modal', function (e) {
      var image = $(e.relatedTarget).attr('src');
      $(".img-responsive").attr("src", image);
  });
});*/

/*按圖片放大*/
$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');   
  });		
});

/* parallax*/
$('.parallax-window').parallax({imageSrc: ''});

