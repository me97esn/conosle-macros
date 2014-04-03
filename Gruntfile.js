'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: ['*.sjs'],
                dest: 'dist/macros.js',
            },
        },
    });
};