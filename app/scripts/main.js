console.log("start---");

// Filename: main.js
// requireJS bootloader file typically included in the index.html
require.config({
    //baseUrl: '/app/scripts',
    hbars:{
        templateUrl: '/app/templates', //may be problems with r.js optimization
    },
    paths: {
        jquery: 'vendors/jquery.min',  // amd version

        underscore: 'vendors/underscore',
        i18n: 'vendors/i18n',       
        backbone: 'vendors/backbone', // amd version        
        'backbone.eventbinder': 'vendors/backbone.eventbinder', // amd version
        'backbone.babysitter': 'vendors/backbone.babysitter', // amd version
        marionette: 'vendors/backbone.marionette',  // amd version
        'backbone.wreqr': 'vendors/backbone.wreqr', // amd version
        Handlebars: 'vendors/handlebars',
        'handlebars.helpers': 'helpers/handlebars.helpers',
        text: 'vendors/requirejs-text/text',
        hbars: 'vendors/hbars',
        tpl: 'vendors/tpl',
        templates: 'templates' //just for register here        

    },

    // load the 'non AMD' versions of backbone, underscore and Marionette
    shim: {      
        backbone: {
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        marionette: ['backbone'],

        Handlebars: {
            exports: 'Handlebars'
        },
        
        'handlebars.helpers': {
            deps: ['Handlebars'],
            exports: 'HandlebarsHelpers'
        }

    },
    locale: function(){
        return "ru";
    }()
});

require(['app', 'i18n!nls/general', 'handlebars.helpers'], function(App, generalText) {
    'use strict';

    var options = {
        /*
            libraryController: libraryController,
            libraryRouter: libraryRouter,
            secondApp: secondApp
            */
    };
    
    App.start(options);

    console.log("123generalText123 ", generalText.loc_author);
});