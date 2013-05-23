var jsdom = require("jsdom"),
    window = jsdom.jsdom().createWindow();

jsdom.jQueryify(window, "http://code.jquery.com/jquery-1.4.2.js", function(window, jQuery) {

        console.log(jQuery);
                    
        window.jQuery('body').append("<div class='testing'>Hello World, It works!</div>");
        console.log(window.jQuery(".testing").text());
});