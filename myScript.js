/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction1() {
  var x = document.getElementById("my-topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
