$('.win #swap').attr('src', '_img/screenshots/win.png');
$('.mac #swap').attr('src', '_img/screenshots/mac.png');
$('.linux #swap').attr('src', '_img/screenshots/linux.png');

function imgSize () {
    var newHeight = $(window).height() - 140 - 25;
    var newWidth = Math.floor($(window).width() / 2) - 25;
    if ($(window).width() > 550 ) {
        $('article img').each(function () {
            $(this).height('auto').width('auto');
            var maxWidth = newWidth;                 // Max width for the image
            var maxHeight = newHeight;               // Max height for the image
            var ratio = 0;                           // Used for aspect ratio
            var width = $(this).width();             // Current image width
            var height = $(this).height();           // Current image height

            // Check if the current width is larger than the max
            if (width > maxWidth) {
                ratio = maxWidth / width;            // get ratio for scaling image
                width = Math.floor(width * ratio);   // Reset width to match scaled image
                height = Math.floor(height * ratio); // Reset height to match scaled image
                $(this).css('width', maxWidth);      // Set new width
                $(this).css('height', height);       // Scale height based on ratio
                $(this).css('max-width', 'none');
            }

            // Check if current height is larger than max
            if(height > maxHeight){
                ratio = maxHeight / height;          // get ratio for scaling image
                width = Math.floor(width * ratio);   // Reset width to match scaled image
                height = Math.floor(height * ratio); // Reset height to match scaled image
                $(this).css('height', maxHeight);    // Set new height
                $(this).css('width', width);         // Scale width based on ratio
                $(this).css('max-width', 'none');
            }
        });
    } else {
        $('article img')
            .height('auto')
            .width('auto')
            .css('max-width', '90%');
    }
}

imgSize();

$(window).resize(imgSize);
