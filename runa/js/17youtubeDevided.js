$(function() {
    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed, iframe[src^='https://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='http://videofarm.daum.net'], iframe[src^='https://videofarm.daum.net'], iframe[src^='//videofarm.daum.net']"),
        $fluidEl = $(".allSize1");
    $allVideos.each(function() {
        $(this)
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
    });
    $(window).resize(function() {
        var newWidth = $fluidEl.width();
        $allVideos.each(function() {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));
        });
    }).resize();
});
