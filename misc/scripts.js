function newestProject() {
  window.location = "https://whyisgabe.github.io/projects/4-30-21_geo_country";
}

var newestproject = "Western Geography Country Project";

window.onload = function() {
  document.getElementById("newestbanner").innerHTML = "Check out my newest project: " + newestproject + "!";
}

var testcode = "testing";

function checkCode() {
  var input = document.getElementById("testinput").value;
  if (input == testcode) {
    document.getElementById("customauthenticityalert").remove();
  }
}
