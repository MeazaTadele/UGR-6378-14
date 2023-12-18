const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click',()=> {
    navbarMenu.classList.toggle('is-active');
})



document.addEventListener('DOMContentLoaded', function () {

    function handleWorkWithMeClick() {
        const email = "meaza@gmail.com";
        const subject = "Working Together";
        const body = "I am interested in working with you. Please let me know the details.";

    
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    
        window.location.href = mailtoUrl;
    }

    
    const buttonMobile = document.getElementById("workwithme-mobile");
    const buttonDesktop = document.getElementById("workwithme-desktop");
    const buttonAbout = document.getElementById("workwithme-about-page");


    if(buttonMobile) buttonMobile.addEventListener("click", handleWorkWithMeClick);
    if(buttonDesktop) buttonDesktop.addEventListener("click", handleWorkWithMeClick);
    if(buttonAbout) buttonAbout.addEventListener("click", handleWorkWithMeClick);

    
    function handleReadMoreClick() {
        const nextSection = document.getElementById("about");
        if(nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
    }


    const readMoreButtonMobile = document.getElementById("Readmore-mobile");
    const readMoreButtonDesktop = document.getElementById("Readmore-desktop");

    
    if(readMoreButtonMobile) readMoreButtonMobile.addEventListener("click", handleReadMoreClick);
    if(readMoreButtonDesktop) readMoreButtonDesktop.addEventListener("click", handleReadMoreClick);
});




