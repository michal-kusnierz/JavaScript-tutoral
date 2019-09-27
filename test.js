var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

  if(content.className == "open"){
    //shrink the box
      content.className = ""; // "" == nothing
      button.innerHTML = "Show More";
  } else{
    //expand the box  
      content.className = "open";
      button.innerHTML = "Show Less";
  }  

};

