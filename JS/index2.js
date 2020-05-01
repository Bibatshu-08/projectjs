var active =0;
var x=document.getElementsByClassName("carousel-images");
var y=document.getElementsByClassName("dots");

function leftFunction(){
  active=active-1;
  if(active<0){
    active=(x.length-1);
  }
  showSlides(active);
}

function rightFunction(){
  active=active+1;
  if(active>=(x.length)){
    active=0;
  }
  showSlides(active);
}

function showSlides(n){
  var i=0;
  for(i;i<x.length;i++){
    x[i].style.display="none";
	y[i].style.backgroundColor="gray";
	
  }
  x[n].style.display="block";
  y[n].style.backgroundColor="#8b0000";
}