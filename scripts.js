/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for church items
    new SimpleLightbox({
        elements: '#church a.church-box'
    });

    // Menu clicked
    const button = document.querySelector('.navbar-toggler');
    let isFlipped = false; // Track the state of the button

    button.addEventListener('click', function () {
        isFlipped = !isFlipped; // Toggle the state

        // Apply the 'flipped' class based on the state
        if (isFlipped) {
            this.classList.add('flipped');
        } else {
            this.classList.remove('flipped');
        }
    });
});

// animations
document.addEventListener("DOMContentLoaded", function (event) {
    var fadeContainer = document.querySelector(".fade-in-site");
    fadeContainer.style.display = "block"; // Show the container

    setTimeout(function () {
        fadeContainer.classList.add("fade-in"); // Add the fade-in class
    }, 50);
});

window.addEventListener("scroll", function () {
    var fadeElements = document.querySelectorAll(".fade-element");
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    fadeElements.forEach(function (element) {
        var elementOffset = element.offsetTop;
        var elementHeight = element.offsetHeight;

        var scrollCenter = scrollTop + windowHeight / 2;
        var elementCenter = elementOffset + elementHeight / 2;
        var distanceFromCenter = Math.abs(scrollCenter - elementCenter);
        var maxDistance = windowHeight / 2;

        var opacity = 1 - (distanceFromCenter / maxDistance);

        if (opacity >= 0.5 && opacity <= 1) {
            element.style.opacity = opacity;
        }
    });
});