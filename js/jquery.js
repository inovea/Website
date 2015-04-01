$(document).ready(function(){


$("#right").click(function(){
    $(".slider ul").animate({marginLeft:-450},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
});
$("#left").click(function(){
    $(".slider ul").animate({marginLeft:+450},800,function(){
            $(this).css({marginLeft:0}).find("li:first").after($(this).find("li:last"));
         })
});
});