/* Toggles between menu icon and menu list by assigning "responsive" class to navbar*/
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }