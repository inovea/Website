$(document).ready(function(){
var positionElementInPage = $('header').offset().top;
$(window).scroll( function(){
        if ($(window).scrollTop()>=positionElementInPage) {
            // fixed
            $('header').addClass("fixed");
        } else {
            // relative
            $('header').removeClass("fixed");
        }
 });


	
	
	
	
$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top 
	}, 'slow');
	return false;
});


//carouselle
 $('.miniature').css('border','5px white solid');
    //$('img:four').css('border','5px black solid');
	var test = $('#grand').attr('id');
    $('.miniature').click(function() {
	 
	  $('.carte').fadeOut(1000,'linear');
	  $('.carte').fadeIn(1000,'swing');
      $('img').not('#grand').not('#triangle').not('#add').css('border','5px #8F165A solid');
      $(this).css('border','5px black solid');
      var img = $(this).attr('id');
	 var prix = $(this).next().text();
	  var nom = $(this).prev().text();
	  var get = $(this).next().next().text();
	  $('#grand').attr('src',img);   
	  });  
});