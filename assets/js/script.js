/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var isToggle = false

function toggleNav() {
    if (!isToggle) {
        openNav();
        isToggle = true
    }
    else {
        closeNav();
        isToggle = false
    }
}

function openNav() {
    if(!isToggle){
        var header = $(".header");
        var headerTop = $(".header-top");
        var navbarMenu = $("#header-top_navbarMenu");
        var headerStyle = {
            "height": "auto"
        };
        var headerTopStyle = {
            "margin-bottom": "25px"
        };
        var navbarStyle = {
            "height": "auto"
        };
        var navbarItemStyle = {
            "padding": "15px 0 15px 0"
        };
        var navbarItemRefStyle = {
            "font-size": "20px"
        }
        $(header).css(headerStyle);
        $(headerTop).css(headerTopStyle);
        $(navbarMenu).css(navbarStyle);
        $(navbarMenu).children().css(navbarItemStyle);
        $(navbarMenu).children().children().css(navbarItemRefStyle);
        isToggle = true;
    }
} 
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    var headerTop = $(".header-top");
    var navbarMenu = $("#header-top_navbarMenu");
    var headerTopStyle = {
        "margin-bottom": "87px"
    };
    var navbarStyle = {
        "height": "0"
    };
    var navbarItemStyle = {
        "padding": "0",
        "font-size": "0"
    };
    var navbarItemRefStyle = {
        "font-size": "0"
    }
    $(headerTop).css(headerTopStyle);
    $(navbarMenu).css(navbarStyle);
    $(navbarMenu).children().css(navbarItemStyle);
    $(navbarMenu).children().children().css(navbarItemRefStyle);
}

$("#scroll-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".advantages").offset().top},
        'slow');
});