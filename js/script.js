//$("body").css("background-color", "pink");

$("#content_3d").fadeIn("fast");
$("#content_3d").siblings().fadeOut("fast");



$(document).on("click", "#menu_3d", function() {
  event.preventDefault()
  $("#content_3d").siblings().fadeOut(0,function(){
    $("#content_3d").fadeIn(250);
});

});

$(document).on("click", "#menu_app", function() {
  event.preventDefault()
  $("#content_app").siblings().fadeOut(0,function(){
    $("#content_app").fadeIn(250);
});

});

$(document).on("click", "#menu_vector", function() {
  event.preventDefault()
  $("#content_vector").siblings().fadeOut(0,function(){
    $("#content_vector").fadeIn(250);
});

});

$(document).on("click", "#menu_js", function() {
  event.preventDefault()
  $("#content_js").siblings().fadeOut(0,function(){
    $("#content_js").fadeIn(250);
});

});

