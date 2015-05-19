module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: '*',
                    base: 'verigmaes',
                    port: 8989,
                    livereload: true,
                    open: { 
                        target: 'http://localhost:8989'
                    }
                }
            }
        },
        watch: {
            scripts: {
                files: [ 'verigmaes/**/*.js',
                         'verigmaes/**/*.html',
                         'verigmaes/**/*.css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);
};
