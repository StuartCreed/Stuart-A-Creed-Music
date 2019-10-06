/*Dropdown*/

$("#Music").on('click', function(e) {
        e.preventDefault();
        $("#MusicDropDown").toggle();
        $(".MenuItemLinks").each(function(){
            if ($(this).hasClass("clicked")) {
                $(this).removeClass("clicked");
                $(this).addClass("unclicked");
            }
        })
        $("#Music").removeClass("unclicked");
        $("#Music").addClass("clicked");
    }
)

/*Changes the margin-top on the #MainBodyofPage to match the navigation bar height*/

var navheight = $("nav").outerHeight();
$("#MainBodyofPage").css('margin-top', navheight);