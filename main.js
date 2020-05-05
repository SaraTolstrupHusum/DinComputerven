function responsify() {
  var x = document.getElementById("navigationMenu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}