document.addEventListener("DOMContentLoaded", function(event){
  document.getElementsByClassName("carousel-images")[0].style.display="block";
  document.getElementsByClassName("dots")[0].style.backgroundColor="#8b0000";
  var a=document.getElementById("hamburger-menu");
	var b=document.getElementById("menu-opened");
	a.addEventListener("click", function(){
		b.style.display="block";
	});
	var c=document.getElementById("cross-button");
	c.addEventListener("click", function(){
		b.style.display="none";
	});
	
});



