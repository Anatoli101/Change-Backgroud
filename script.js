var colors = ["black","green","yellow"];

function myFunction() {
    let choose = Math.floor(Math.random() * colors.length);
    let myColor = colors[choose];
    return myColor;
}
var bun = myFunction();

$(document).ready(function() {
    $("section").click(function(){
        $("section").css("background-color", myFunction());
        $("h1").text(myFunction());
    })
  });



