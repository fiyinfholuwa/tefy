/* 

App Landing Template

http://www.templatemo.com/tm-474-app-landing

*/
jQuery(document).ready(function(){
    // jQuery.templatemo_is_chrome
    $.templatemo_is_chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    $.templatemo_is_ie = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
    // Template Mo menu hide
    jQuery.fn.templateMoMenuHide = function(){
        return this.each(function(){
            $(this)
                .removeClass("shadow-top-down")
                .animate({opacity: 0,top: 120}, 240,"easeOutSine",function(){
                    $(this).hide();
                });
            return true;
        });
    }
    
    // Menu scroll to.
    $('a.scroll_effect').on('click', function(e){
        target_element = $(this).attr('href');
        scroll_to = $(target_element).offset().top;
        if($(window).scrollTop() != scroll_to && target_element !== undefined){
            // Chrome scroll to calculation and other browser scroll to calculation is different.
            if($.templatemo_is_chrome){
                body_scroll_target = scroll_to;
            }else{
                body_scroll_target = $("body").scrollTop()+scroll_to;
            }
            $('html,body').animate({scrollTop:body_scroll_target},1000);
        }
        // If menu is visible hide the nav.
        $('nav:visible').templateMoMenuHide();
        return false;
    });
    // Javascropt parallax effect config for different browser.
    // Chrome broswer setting
    if($.templatemo_is_chrome){
        $("html").attr("style","overflow:auto;");
        $("body").attr("style","overflow:auto;height:auto;");
        $('#templatemo_home').parallax("50%", 0.1);
        $('#templatemo_download').parallax("50%", 0.1);
    // Non IE broswer setting
    }else if(!$.templatemo_is_ie){
        $("html").attr("style","overflow: auto;");
        $("body").attr("style","background: #455a64;overflow: auto;height: auto;");
        $('#templatemo_home').parallax("50%", 0.1);
        $('#templatemo_download').parallax("50%", 0.1);
    // IE broswer setting
    }else{
        $('#templatemo_home').parallax("50%", 0.5);
        $('#templatemo_download').parallax("50%", 0.5);
    }
});


/**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


// search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
