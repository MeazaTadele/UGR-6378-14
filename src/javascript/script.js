
const button1 = document.getElementById("workwithme-mobile");
const button2 = document.getElementById("workwithme-desktop");
const button3 = document.getElementById("workwithme-about-page");

button1.addEventListener("click", function() {
    const email = "meaza@gmail.com";
    const subject = "Working Together";
    const body = "I am interested in working with you. Please let me know the details.";


const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


window.location.href = mailtoUrl;
});





button1.addEventListener("click", function() {
    const email = "meaza@gmail.com";
    const subject = "Working Together";
    const body = "I am interested in working with you. Please let me know the details.";


const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


window.location.href = mailtoUrl;
});





button2.addEventListener("click", function() {
    const email = "meaza@gmail.com";
    const subject = "Working Together";
    const body = "I am interested in working with you. Please let me know the details.";


const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  
window.location.href = mailtoUrl;
});



button3.addEventListener("click", function() {
    const email = "meaza@gmail.com";
    const subject = "Working Together";
    const body = "I am interested in working with you. Please let me know the details.";

  
const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


window.location.href = mailtoUrl;
});




const readMoreButtonmobile = document.getElementById("Readmore-mobile");
const nextSectionmobile = document.getElementById("about");

readMoreButtonmobile.addEventListener("click", function() {
    nextSectionmobile.scrollIntoView({ behavior: "smooth" });
});

const readMoreButtondesktop = document.getElementById("Readmore-desktop");
const nextSectiondesktop = document.getElementById("about");

readMoreButtondesktop.addEventListener("click", function() {
    nextSectiondesktop.scrollIntoView({ behavior: "smooth" });
});


//menu


document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const menuItems = document.getElementById('menuItems');
  const profilePicture = menuItems.querySelector('.profile-picture'); // Assuming the profile picture has the class 'profile-picture'
  const currentElement = document.getElementById('current'); // The element to hide/show

  menuButton.addEventListener('click', () => {

    menuItems.classList.toggle('d-none');

    
    if (currentElement) {
      currentElement.classList.toggle('d-none');
    }

    
    if (!menuItems.classList.contains('d-none')) {
      menuItems.style.width = '100vw';
      menuItems.style.height = 'auto';
      menuItems.style.top = `${menuButton.clientHeight}px`;
      if (profilePicture) {
        profilePicture.style.display = 'none';
      }
    } else {
    
      menuItems.style.width = '';
      menuItems.style.height = '';

      
      menuItems.style.top = '0';

      if (profilePicture) {
        profilePicture.style.display = '';
      }
    }
  });
});










// current page
window.addEventListener("scroll", function() {
  const aboutSection = document.getElementById("about");
  const experianceSection = document.getElementById("experiance");
  const servicesSection = document.getElementById("services");
  const contactSection = document.getElementById("contact");
  
  const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  if (currentScrollPos >= aboutSection.offsetTop && currentScrollPos < experianceSection.offsetTop) {
    document.getElementById("current").innerHTML = '<a href="#about" class = "text-decoration-none text-white"><i class="fa-solid fa-face-meh-blank"></i> About</a>';
  } else if (currentScrollPos >= experianceSection.offsetTop && currentScrollPos < servicesSection.offsetTop) {
    document.getElementById("current").innerHTML = '<a href="#experiance" class = "text-decoration-none text-white"><i class="fa-solid fa-briefcase"></i> Experiance</a>';
  } else if (currentScrollPos >= servicesSection.offsetTop && currentScrollPos < contactSection.offsetTop) {
    document.getElementById("current").innerHTML = '<a href="#services" class = "text-decoration-none text-white"><i class="fa-solid fa-hand-holding"></i> Services</a>';
  } else if (currentScrollPos >= contactSection.offsetTop) {
    document.getElementById("current").innerHTML = '<a href="#contact" class = "text-decoration-none text-white"><i class="fa-solid fa-envelope"></i> Contact</a>';
  } else {
    document.getElementById("current").innerHTML = '<a href="#" class = "text-decoration-none text-white"><i class="fa-solid fa-house"></i> Home</a>';
  }
});



