/*
 * 	Character Count Plugin - jQuery plugin
 * 	Dynamic character count for text areas and input fields
 *	written by Madan
 *	http://dmadan.in/plugin/jquery.charcount
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
(function($) {
    function CharCount(obj, options){
        var config = $.extend($.fn.charCount.defaults, options),
            text,
            callback = function(){
                calculate();
            };
        text = $("<" + config.counterElement + "/>");
        obj = $(obj).keyup(callback).change(callback).after(text);

        function calculate(){
            var len = obj.val().length;
            var available = config.maxCount - len;
            if(len >= config.minCount && len <= config.maxCount) {
                obj.removeClass(config.cssExceeded).addClass(config.cssCorrect);
            } else {
                obj.removeClass(config.cssCorrect).addClass(config.cssExceeded);
            }
            text.html(config.counterText + available);
        }
        calculate();
    }

    $.fn.charCount = function (options) {
        return this.each(function () {
            if (!$.data(this, "charcount")) {
                $.data(this, "charcount", new CharCount(this, options))
            }
        })
    };
    $.fn.charCount.defaults = {
        minCount: 10,
        maxCount: 50,
        cssExceeded: 'exceeded',
        cssCorrect: "correct",
        counterElement: "span",
        counterText: "Total Count: "
    };
}(jQuery));