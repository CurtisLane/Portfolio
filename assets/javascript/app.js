$(document).ready(function(){


    $('#additionalLinks').hide();
    $('#seeLessButton').hide();
    $(document).on('click', '#seeMoreButton', function(){
        $('#additionalLinks').show();
        // HTML added dynamically to avoid AOS bug
        $('#additionalLinks').html(`
            <div id="portfolioImagesDiv" class="row">
                <div data-aos="fade-left" data-aos-delay="300" class="portfolioImageDiv">
                    <div id="imageFourDiv">
                        <a href="https://friend-finder064.herokuapp.com/" target="_blank">
                            <div id="portfolioImageFour" class=".z-depth-2"></div>
                            <p class="description">Friend Finder App</p>
                        </a>
                        <div class="description">
                            <a href="https://github.com/CurtisLane/Friend-Finder" class="link" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="400" class="portfolioImageDiv">
                    <div id="imageFiveDiv">
                        <a href="https://curtislane.github.io/GifTastic/" target="_blank">
                            <div id="portfolioImageFive" class=".z-depth-2"></div>
                            <p class="description">AJAX Gif Generator</p>
                        </a>
                        <div class="description">
                            <a href="https://github.com/CurtisLane/GifTastic" class="link" target="_blank">Github</a>
                        </div>                    
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500" class="portfolioImageDiv">
                    <div id="imageSixDiv">
                        <a href="https://curtislane.github.io/Word-Guess-Game/" target="_blank">
                            <div id="portfolioImageSix" class=".z-depth-2"></div>
                            <p class="description">Word Guess Game</p>
                        </a>
                        <div class="description">
                            <a href="https://github.com/CurtisLane/Word-Guess-Game" class="link" target="_blank">Github</a>
                        </div>                    
                    </div>
                </div>
            </div>
            <div class="seeMoreLinks">
                <a href="https://github.com/CurtisLane/Constructor-Word-Guess-Game" target="_blank" class="white-text link">Constructor Word Guess Game</a>
            </div>
            <div class="seeMoreLinks">
                <a href="https://github.com/CurtisLane/LIRI-Bot" target="_blank" class="white-text link">Liri Bot</a>
            </div>
            <div class="seeMoreLinks">
                <a href="https://github.com/CurtisLane/Bamazon-Store" target="_blank" class="white-text link">Bamazon Store</a>
            </div>
        `);
        $('#seeMoreButton').hide();
        $('#seeLessButton').show();
    })
    $(document).on('click', '#seeLessButton', function(){
        $('#additionalLinks').hide();
        $('#additionalLinks').empty();
        $('#seeMoreButton').show();
        $('#seeLessButton').hide();
    })



    // Smooth scrolling effect copied from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ){
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };

                });

            }

        }

    }); // *Close .click

}); // *Close document.ready
