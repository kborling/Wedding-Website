$(document).ready(function(){
   $(".main").onepage_scroll({
      sectionContainer: "section",
      easing: "ease",
      animationTime: 1000,
      pagination: true,
      updateURL: true,
      loop: true,
      keyboard: true,   
      responsiveFallback: false,                            
      direction: "vertical"
   });
});