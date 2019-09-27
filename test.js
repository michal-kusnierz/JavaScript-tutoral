var title = document.getElementById("test click");
var title2 = document.getElementById("test hover");

//creating an event with name 'title'
//title.onclick = function(){};

title.onclick = function(){
  alert("you clicked me");
};
 
title2.onmouseover = function(){
 alert("you hovered your mouse over me ;)");
};
