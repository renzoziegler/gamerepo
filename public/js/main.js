$(function(){
 $('#search').click(function(e){
     var parameters = { 
     	titulo: $('#titulo').val(),
     	plataforma: $('#plataforma').val(),
     	lancamento: $('#lancamento').val(), 
     };
       $.post( '/search',parameters, function(data) {
       		console.log(data);
     });
 });

 $('#add').click(function(e) {
 	window.location.href = "/register";
 });
});