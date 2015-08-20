(function($) {
    jQuery.jfAutoPlay = function(array, options) {
        // Create options for the default reset value
        var defaults = {
            loop:true, 
            playBtn:null, 
            stopBtn:null, 
            resetBtn:null, 
            reloadOnReset:true
        };

        var options = jQuery.extend(defaults, options);

        var JFAutoPlay = function(array, options) {
            var count;
            var timer;

            function init(){
                console.log(options.loop)
                count = 0;
                timer = $.timer(array[count][0], calBack, true);
            };
            
            function calBack(){
                array[count][1].apply();
                count++;
                if (count >= array.length){
                    count = 0;
                    if (!options.loop){
                        timer.stop();
                    }
                } else {
                    timer.reset(array[count][0]);
                }   
            };
            function reset(){
                if (!options.reloadOnReset){
                    count = 0;
                    calBack();
                }else {
                    location.reload();
                }
            }
            if(options.playBtn!=null){
                $(options.playBtn).click(function(event){
                    event.preventDefault();
                    timer.resume();
                });
            }
            if(options.stopBtn!=null){
                $(options.stopBtn).click(function(event){
                    event.preventDefault();
                    timer.pause();
                });
            }
            if(options.resetBtn!=null){
                $(options.resetBtn).click(function(event){
                    event.preventDefault();
                    reset();
                });
            }
            init();
            var self = this;
        };
        return new JFAutoPlay(array, options);
    };
})(jQuery);   