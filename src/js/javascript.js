//dropdown menu

function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdownClick");
    var dropdownItems = dropdown.getElementsByTagName("li");
    var targetElement = event.target;
    var isClickInsideDropdown = false;


    if (dropdown.contains(targetElement)) {
        isClickInsideDropdown = true;
    } else {
        for (var i = 0; i < dropdownItems.length; i++) {
            if (dropdownItems[i].contains(targetElement)) {
                isClickInsideDropdown = true;
                break;
            }
        }
    }

    if (!isClickInsideDropdown) {
        dropdown.classList.remove("responsive");
    }
});

  // current page
window.addEventListener("scroll", function() {
    const aboutSection = document.getElementById("about");
    const experianceSection = document.getElementById("experiance");
    const servicesSection = document.getElementById("services");
    const contactSection = document.getElementById("contact");
    
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentScrollPos >= aboutSection.offsetTop && currentScrollPos < experianceSection.offsetTop) {
        document.getElementById("current").innerHTML = '<a href="#about" class="nav__link"><i class="fa-solid fa-face-meh-blank" style="color: #e1a66f"></i> About</a>';
    } else if (currentScrollPos >= experianceSection.offsetTop && currentScrollPos < servicesSection.offsetTop) {
        document.getElementById("current").innerHTML = '<a href="#experiance" class="nav__link"><i class="fa-solid fa-briefcase" style="color: #e1a66f"></i> Experiance</a>';
    } else if (currentScrollPos >= servicesSection.offsetTop && currentScrollPos < contactSection.offsetTop) {
        document.getElementById("current").innerHTML = '<a href="#services" class="nav__link"><i class="fa-solid fa-hand-holding" style="color: #e1a66f"></i> Services</a>';
    } else if (currentScrollPos >= contactSection.offsetTop) {
        document.getElementById("current").innerHTML = '<a href="#contact" class="nav__link"><i class="fa-solid fa-envelope" style="color: #e1a66f"></i> Contact</a>';
    } else {
        document.getElementById("current").innerHTML = '<a href="#" class="nav__link"><i class="fa-solid fa-house" style="color: #e1a66f"></i> Home</a>';
    }
});

  // typing effect

function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;
    let timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}
const heading = document.querySelector('.home__text-all');
typeEffect(heading, 30);
scroll

  // home effect

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-load');
    elementsToAnimate.forEach(el => {
        el.classList.add('animated-entry');
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  // buttons

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

  // scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-entry');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});
