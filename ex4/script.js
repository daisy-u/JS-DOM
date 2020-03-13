// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"


var thisButton = document.getElementById("myButton");
thisButton.addEventListener('click', function (){
    var x, i;
         x = document.querySelectorAll(".box");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "blue";
  }
})