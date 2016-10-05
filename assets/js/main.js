
var currentSection = 1;


function refresh(){
    $("#navlink_hello").removeClass("navlink_active");
    $("#navlink_architecture").removeClass("navlink_active");
    $("#navlink_portrait").removeClass("navlink_active");
    $("#navlink_street").removeClass("navlink_active");


    if (currentSection == 1){
        $("#navlink_hello").addClass("navlink_active");
    }
    if (currentSection == 2){
        $("#navlink_architecture").addClass("navlink_active");
    }
    if (currentSection == 3){
        $("#navlink_portrait").addClass("navlink_active");
    }
    if (currentSection == 4){
        $("#navlink_street").addClass("navlink_active");
    }
}


$(document).ready(function() {
    console.log("Ready");
    $('#fullpage-wrapper').fullpage({
        paddingTop: '50px',
        fixedElements: '#header',
        verticalCentered: true, 
        scrollOverflow: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        onLeave: function(index, nextIndex, direction){
            currentSection = nextIndex;
            refresh();
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            console.log(nextSlideIndex);
        }
    });
});




/*

             var activeSection = $('.section.active');
            var activeSlide = activeSection.find('.slide.active');
            console.log(activeSection);
            console.log(activeSlide);

*/