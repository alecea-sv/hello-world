//$( window ).unload(function() {
	var color = '';
$( document ).ready(function() {
	
	$( "#menu" ).append('<a id="script" href="#">Script</a>');
  // Handler for .ready() called.
  //alert("Hello! I am an alert box!!");
  //alert($( ".hap" ).length);
  
/*
  $( ".hap" ).each(function() {
	  var href = $( this ).parent().prop("href");
	  console.log( href );
	  window.open(href, "mywindow");
	  //console.log( index + ": " + $( this ).text() );
  });
 */
 
 /*
	  var href = $( ".hap" ).first().parent().prop("href");
	  console.log( href );
	  window.open(href, "mywindow");
*/	  

$("#script").click(function() {
	  var href = $( ".hap" ).first().parent().prop("href");
	  var background = $( ".hap" ).first().find( "div.hap_title" ).css( "backgroundColor" );
	  var is = $( ".hap" ).hasClass( "disabled_pbx" );
	  //console.log( href + " " + background + " " + is + " ");
	  var mywindow = window.open(href, "mywindow");
	  $( mywindow.document ).ready(function() {
	  //mywindow.onload = function() {
		  setTimeout(function(){
			  console.log( mywindow.document.getElementById("barload").getAttribute("width") );
		  }, 3000);
		  
	  //);
	  });
	  
});

});
