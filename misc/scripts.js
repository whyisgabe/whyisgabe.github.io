function newestProject() {
  window.location = "https://whyisgabe.github.io/projects/4-30-21_geo_country";
}

var newestproject = "Western Geography Country Project";

window.onload = function() {
  document.getElementById("newestbanner").innerHTML = "Check out my newest project: " + newestproject + "!";
}

var testcode = "eduHMS2021";

function checkCode() {
  var input = document.getElementById("testinput").value;
  if (input == testcode) {
    window.location = "https://www.google.com";
  }
}
