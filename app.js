// Navbar 
var x = document.getElementById("myTopnav");
function myFunction() {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Swiper 
const settings = {
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    autoplay: {
        delay: 5000,
      },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  
  const swiper = new Swiper(".mySwiper", settings);
  