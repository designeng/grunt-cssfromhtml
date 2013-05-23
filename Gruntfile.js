/*
 * grunt-cssfromhtml
 * 
 *
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

var changedFilePath;

module.exports = function (grunt) {

    grunt.initConfig({
        regarde: {    
          html: {
            files: ['app/templates/*.html', 'app/templates/**/*.html', 'app/templates/**/**/*.html', 'app/templates/**/**/**/*.html'],
            tasks: ['copy', 'clean', 'cssfromhtml']
          }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['cssfromhtml', 'regarde']);

    grunt.registerTask('r', ['regarde']);//основное, default надо подредактировать

    grunt.event.on('regarde:file', function (status, name, filepath, tasks, spawn) {
        changedFilePath = filepath;

        var srcTemplates = [],
            filesToDelete = [],
            filesToCopy = [],
            relativePath,
            lastIndex;

        srcTemplates.push(changedFilePath);

        var templateDir = 'app/templates',
            stylesBaseDir = "app/styles/less";

        relativePath = changedFilePath.replace(templateDir, "");
        relativePath = stylesBaseDir + relativePath;
        lastIndex = relativePath.lastIndexOf(".");
        relativePath = relativePath.substr(0, lastIndex);
        relativePath = relativePath + ".css";

        filesToCopy.push(relativePath);
        filesToDelete.push(relativePath);

        grunt.initConfig({

            copy: {
              main: {
                files: [
                  {expand: true, src: filesToCopy, dest: 'copiedCss/'} // includes files in path
                ]
              }
            },
            // Before generating new file, remove previously-created css file.
            clean: {
                    tests: filesToDelete
            },

            cssfromhtml: {
                multiple: {
                    src: srcTemplates,
                    changedFilePath: changedFilePath,
                    templateDir: templateDir,
                    stylesBaseDir: stylesBaseDir, //here must be saved created .css with the same path structure as the source html-template file 
                    editor: "Sublime Text 2",
                    openfile: true  //open file with editor?
                }
            }
        });
    });
};