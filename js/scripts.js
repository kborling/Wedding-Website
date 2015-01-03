$(document).ready(function(){
    $('#fullpage').fullpage({

        //Navigation
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        navigation: false,
        navigationPosition: 'top',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

		//Scrolling
        css3: true,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopHorizontal: true,
        scrollingSpeed: 800,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

         //Design
        verticalCentered: true,
        resize : true,
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#1bbc9b'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide'

    });
    // Google Map
    $('#googleMap').ClassyMap();

});