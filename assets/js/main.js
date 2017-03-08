
var currentSection = 1;


function refresh(){
    $("#navlink_hello").removeClass("navlink_active");
    $("#navlink_architecture").removeClass("navlink_active");
    $("#navlink_portrait").removeClass("navlink_active");
    $("#navlink_paysage").removeClass("navlink_active");
    $("#navlink_street").removeClass("navlink_active");
    $("#navlink_divers").removeClass("navlink_active");
    $("#navlink_about").removeClass("navlink_active");

    $("#navlink_dropdown").removeClass("navlink_active");
    $("#dropdown_link_architecture").removeClass("dropdown_link_active");
    $("#dropdown_link_portrait").removeClass("dropdown_link_active");
    $("#dropdown_link_paysage").removeClass("dropdown_link_active");
    $("#dropdown_link_street").removeClass("dropdown_link_active");
    $("#dropdown_link_divers").removeClass("dropdown_link_active");

    if ( $(window).width() < 992 && currentSection > 1 && currentSection < 7)
    {
        $("#navlink_dropdown").addClass("navlink_active");
    }

    if (currentSection == 1){
        $("#navlink_hello").addClass("navlink_active");
    }
    if (currentSection == 2){
        $("#navlink_architecture").addClass("navlink_active");
        $("#dropdown_link_architecture").addClass("dropdown_link_active");
    }
    if (currentSection == 3){
        $("#navlink_portrait").addClass("navlink_active");
        $("#dropdown_link_portrait").addClass("dropdown_link_active");
    }
    if (currentSection == 4){
        $("#navlink_paysage").addClass("navlink_active");
        $("#dropdown_link_paysage").addClass("dropdown_link_active");
    }
    if (currentSection == 5){
        $("#navlink_street").addClass("navlink_active");
        $("#dropdown_link_street").addClass("dropdown_link_active");
    }
    if (currentSection == 6){
        $("#navlink_divers").addClass("navlink_active");
        $("#dropdown_link_divers").addClass("dropdown_link_active");
    }
    if (currentSection == 7){
        $("#navlink_about").addClass("navlink_active");
    }

}



$(document).ready(function() {

    console.log("Ready");

    var paddingtop = "";

    $(window).bind('mousewheel DOMMouseScroll', function(event){ return false});

    if ($(window).width() < 768) {

    }
    
    $('#fullpage-wrapper').fullpage({
        paddingTop: '50px',
        fixedElements: '#header',
        verticalCentered: true, 
        scrollOverflow: false,
        scrollBar: false,
        autoScroll: false,
        scrollingSpeed: '0',
        animateAnchor:'false',
        slidesNavigation: 'slides',
        slidesNavPosition: 'bottom',
        scrollHorizontally: true,
        onLeave: function(index, nextIndex, direction){
            currentSection = nextIndex;
            refresh();
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){
            //console.log($(window).width());
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            //console.log(nextSlideIndex);
        }, 
        lazyloading:'true',
        touchSensitity:'50'
    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false, 'up, down');
    $.fn.fullpage.setAllowScrolling(true, 'left, right');
    

});

$(window).resize(function() {

    

});

/*

var portfolio = angular.module("portfolio", [])
.controller('content', function($scope, $http){

    $scope.galeries = data.galeries;


});


*/


/*

             var activeSection = $('.section.active');
            var activeSlide = activeSection.find('.slide.active');
            console.log(activeSection);
            console.log(activeSlide);

*/