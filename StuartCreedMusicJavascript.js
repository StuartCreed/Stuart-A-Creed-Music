function MainPage() {
    
    /*Variables*/
    
    var windowHeight = $(window).height();
    
    /*Changes the height of the home top pictures to fill the size of the device screen*/
    
    var slideHeight = windowHeight * 0.7;
    $(".fullsize").css('height', slideHeight);
        
    /*Top Photos on timer*/
    
    $('#topImageSmall1').hide();
    $('#topImageSmall2').hide();
    $('#topImage1').show();
    $('#topImage2').hide();
    $('.sliderMobile').hide();

    if (matchMedia('only screen and (max-width: 800px)').matches) {

            $('.sliderMobile').show();
            $('.slider').hide();
            $('#topImage1').hide();
            $('#topImage2').hide();
            $('#topImageSmall1').show();
            $('#topImageSmall2').hide(); 

            setInterval(function() {        
                    $('#topImageSmall1').toggle();
                    $('#topImageSmall2').toggle();
            }, 6000);

        }

        else {
            setInterval(function() { 
                $('#topImage1').toggle();
                $('#topImage2').toggle();
            }, 6000);
        }
        
        /*Rotation Addition WIP*/
    
        /*
        $(".slide").hide();
      
        $(".slider").each(function(){
            var $this = $(this);
            var slides = $this.find('.slide');
            console.log("slides");
            console.log(slides);
            $(slides).each(function(){
                $(this).show();
            })
        })
        */
    
    /*Make the Music Dropdown option appear when Music Link is clicked*/

    var $musicLink = $("#musicLink");
    $musicLink.on('click', function(e) {
            e.preventDefault();           
            $("#MusicDropDown").show();
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

    /*Changes height of subTestBoxes to be able to contain content within. Also changes the height of the images to match the height of the subTextBox */

    var marginForAlignedBoxesValueInPixels = $(".marginForAlignedBoxes").css("margin-top");
    var marginForAlignedBoxesValue = parseInt(marginForAlignedBoxesValueInPixels.replace('px',''));
    console.log("marginForAlignedBoxesValue");
    console.log(marginForAlignedBoxesValue);
    
    var $subTextBoxes = $(".subTextBoxes");
    $subTextBoxes.each(
        function() {
            console.log("this box")
            console.log(this);
            console.log("this paragraph group")
            var ParagraphsWithinSubTextBoxes = $(this).find('p');
            console.log(ParagraphsWithinSubTextBoxes);
            var $subTextBoxesOuterHeight = 0;
            $(ParagraphsWithinSubTextBoxes).each(
                function() {
                    console.log("this paragraph")
                    console.log(this);
                    var $thisParagraphOuterHeight = $(this).outerHeight();
                    console.log("thisParagraphOuterHeight");
                    console.log($thisParagraphOuterHeight);
                    $subTextBoxesOuterHeight = $subTextBoxesOuterHeight + $thisParagraphOuterHeight;
                    console.log("this count");
                    console.log($subTextBoxesOuterHeight);
                }
            )
            console.log("final outer height of the sub box");
            var $subTextBoxesOuterHeightInPixels = $subTextBoxesOuterHeight + "px";
            var $subTextBoxesOuterHeightInPixelsAsString = $subTextBoxesOuterHeightInPixels.toString();
            console.log($subTextBoxesOuterHeightInPixelsAsString);
            $(this).css("height",$subTextBoxesOuterHeightInPixelsAsString);
            
            var $imageWithinTextBoxAsAList = $(this).find('img');
            console.log("$imageWithinTextBoxAsAList");
            console.log($imageWithinTextBoxAsAList);
            console.log($imageWithinTextBoxAsAList[0]);
            var $imageWithinTextBox = $imageWithinTextBoxAsAList[0];
            var $imageWithinTextBoxHeight = $subTextBoxesOuterHeight;
            console.log("$imageWithinTextBoxHeight");
            console.log($imageWithinTextBoxHeight);
            var $imageWithinTextBoxHeightAsPixels = $imageWithinTextBoxHeight + "px";
            var $imageWithinTextBoxHeightAsPixelstoString = $imageWithinTextBoxHeightAsPixels.toString();
            $($imageWithinTextBox).css("height",$imageWithinTextBoxHeightAsPixelstoString);
        }
    )

    /*Adjusts the padding of the Menu icons to fill to width of the screen for smaller devices

    if (matchMedia('only screen and (max-width: 800px)').matches) {
        var $windowWidth = $(window).width();
        var $MenuiconPadding = ($windowWidth - 30 - 25 - 25 - 25)/8;
        console.log($MenuiconPadding);
        $(".MenuItem").css('padding-right',$MenuiconPadding);
        $(".MenuItem").css('padding-left',$MenuiconPadding);
    }
    */
    
    /*Changes height of images within the subTestBoxes to be able to contain content within*/
    
    
}

/*When to load function MainPage*/

$(document).ready(MainPage);