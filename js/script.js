$("body").css("background-color", "pink");


$(document).on("click", "#menu_about", function() {

	$("#content_about").slideDown("slow");
  $("#content_about").siblings().slideUp("fast");

});

$(document).on("click", "#menu_clients", function() {

	$("#content_clients").slideDown("slow");
  $("#content_clients").siblings().slideUp("fast");

});

$(document).on("click", "#menu_contact", function() {

	$("#content_contact").slideDown("slow");
  $("#content_contact").siblings().slideUp("fast");

});

$("#menu_about").click();