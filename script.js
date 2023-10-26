//toggle open and close the hamburger menu

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu');
const mainContent = document.querySelector('.main-content')

const htmlElement = document.documentElement;

hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    menu.classList.toggle('main-menu');
    
    // Toggle the menu-open class on <html>
    htmlElement.classList.toggle('menu-open');
    
    // Toggle the menu-open class on the main content
    mainContent.classList.toggle('menu-open');
});


//pulse effect on click 
hamburger.addEventListener('click', () => {
    // Add the 'pulse' class to trigger the animation
    hamburger.classList.add('pulse');

    // Remove the 'pulse' class after the animation is completed
    setTimeout(() => {
        hamburger.classList.remove('pulse');
    }, 500); 
});







