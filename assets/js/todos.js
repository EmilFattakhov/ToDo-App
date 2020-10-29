alert("Conected");

$("i").on("click", function(){
$("input").toggle();
});


$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});


$("ul").on("mouseEnter", "span", function(){
$("span").css("display","block")
}); 

$("ul").on("mouseLeave", "span", function(){
$("span").css("display","none");
});


$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var toDoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>") 
	}
});