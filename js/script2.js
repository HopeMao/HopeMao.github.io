
document.onload = function() {
  openNav();
}

var x = window.matchMedia("(max-width: 768px)")
function phoneview(x) {
  if (x.matches) { // If media query matches
    function openNav() {
      console.log("at open nav")
      document.getElementById("nav").style.width = "40%";
      document.getElementById("maincontent").style.marginLeft = "40%";
      document.getElementById("navbutton").style.left="40%";
      document.getElementById("navbutton2").style.left="40%";

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
// end of code
  }


//   else if (window.matchMedia("(min-width: 300px)").matches) {
// // stuff for tablet
//
//   }

  else {
    // stuff for desktop

    // when user tabs, the nav will open.
    document.querySelector(".page-scroll").addEventListener('focus', function() {
      document.getElementById("nav").style.width = "16%";
      document.getElementById("maincontent").style.marginLeft = "16%";
      document.getElementById("navbutton").style.left="16%";
      document.getElementById("navbutton2").style.left="16";
    })


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
// end of code

  }
}


// document.querySelector(".back").onclick = function () {
// document.style.scroll-behavior = auto;
// }

phoneview(x) // Call listener function at run time
x.addListener(phoneview)


// function openNav() {
//   console.log("at open nav")
//   document.getElementById("nav").style.width = "16%";
//   document.getElementById("maincontent").style.marginLeft = "16%";
//   document.getElementById("navbutton").style.left="16%";
//   document.getElementById("navbutton2").style.left="16";
//
//   document.getElementById("navbutton").className  = "fas fa-angle-left"
// }
//
// function closeNav() {
//   document.getElementById("nav").style.width = "0";
//   document.getElementById("maincontent").style.marginLeft= "0";
//   document.getElementById("navbutton").style.left="0%";
//   document.getElementById("navbutton2").style.left="0%";
//
//   document.getElementById("navbutton").className  = "fas fa-angle-right"
// }
//
// document.getElementById("navbutton").onclick = function() {
//   console.log("clickingnavbutton");
//   console.log(document.getElementById("navbutton").value)
//
//   if (document.getElementById("navbutton").value == "closed" ) {
//     document.getElementById("navbutton").value = "open";
//     openNav();
//     return
//   }
//   if (document.getElementById("navbutton").value == "open" ) {
//     document.getElementById("navbutton").value = "closed";
//     closeNav();
//     return
//   }
// }
//
//
//
//
// var listLinks = document.querySelectorAll(".page-scroll")
//
// for (let i = 0; i < listLinks.length;i++) {
//
//   listLinks[i].onclick = function() {
//         for (let i = 0; i < listLinks.length;i++) {
//           listLinks[i].className = "inactive";
//           // console.log((listLinks)[i].className);
//           // console.log("hey its inactive?");
//         }
//       listLinks[i].className = "active";
//       // console.log((listLinks)[i].className);
//       return
//   }
// }

// document.getElementById("#1")
//
// console.log(document.documentElement.scrollTop || document.body.scrollTop);
// var location = document.documentElement.scrollTop;
// if (location >= 801 && location < 1583) {
//   listLinks[i].className = "active";
// }
