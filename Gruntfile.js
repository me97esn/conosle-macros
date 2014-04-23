'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-sweet.js');
    grunt.initConfig({
        sweetjs: {
            options: {
                sourceMap: false,
                sourceRoot: '',
                readableNames: true,
                modules: [
                    '/Users/emilsandin/Documents/workspace/git/conosle-macros/dist/macros.js'
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'spec',
                    src: '*.sjs',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: [
                    '.tmp/spec/**/*.js',
                ]
            }
        },
        test: {
            files: [{
                expand: true,
                cwd: 'test/spec',
                src: '{,*/}*.sjs',
                dest: '.tmp/spec',
                ext: '.js'
            }]
        },
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

    grunt.registerTask('test', function() {
        grunt.task.run([
            'sweetjs',
            'mochaTest'
        ]);
    });
};