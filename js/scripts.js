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
        sectionsColor: ['whitesmoke', '#4D4D4D', '#7BAABE', 'whitesmoke', '#DDD494', '#1bbc9b'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, #footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide'

    });
    // Google Map
    $('#googleMap').ClassyMap();

    // Parallax
    $('#scene').parallax();


  var hamburger = $('.menu__icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     return false;
  });
  $('.menu__icon').bind('click', function(){
    if($('.menu__icon').hasClass('active')){
        $('.mobile-menu').css({
            'opacity':'1',
        });
        $('nav').css({
            'box-shadow':'none',
        });
    } else {
        $('.mobile-menu').css({
            'opacity':'0',
        });
        $('nav').css({
            'box-shadow':'rgba(0,0,0,0.270588) 0px 5px 5px',
        });
    }
  })
  $('.mobile-menu a').on('click',function(){
    $('.mobile-menu').css({
        'opacity':'0',
    });
    $('nav').css({
        'box-shadow':'rgba(0,0,0,0.270588) 0px 5px 5px',
    });
    $('.menu__icon').removeClass('active');
  })


}); // End ready