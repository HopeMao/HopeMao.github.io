
document.onload = function() {
  openNav();
}

function openNav() {
  console.log("at open nav")
  document.getElementById("nav").style.width = "16%";
  document.getElementById("maincontent").style.marginLeft = "16%";
  document.getElementById("navbutton").style.left="16%";
  document.getElementById("navbutton2").style.left="16";

  document.getElementById("navbutton").className  = "fas fa-angle-left"
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("maincontent").style.marginLeft= "0";
  document.getElementById("navbutton").style.left="0%";
  document.getElementById("navbutton2").style.left="0%";

  document.getElementById("navbutton").className  = "fas fa-angle-right"
}

document.getElementById("navbutton").onclick = function() {
  console.log("clickingnavbutton");
  console.log(document.getElementById("navbutton").value)

  if (document.getElementById("navbutton").value == "closed" ) {
    document.getElementById("navbutton").value = "open";
    openNav();
    return
  }
  if (document.getElementById("navbutton").value == "open" ) {
    document.getElementById("navbutton").value = "closed";
    closeNav();
    return
  }
}

var listLinks = document.querySelectorAll(".page-scroll")


for (let i = 0; i < listLinks.length;i++) {

  listLinks[i].onclick = function() {
        for (let i = 0; i < listLinks.length;i++) {
          listLinks[i].className = "inactive";
          // console.log((listLinks)[i].className);
          // console.log("hey its inactive?");
        }
      listLinks[i].className = "active";
      // console.log((listLinks)[i].className);
      return
  }
}
