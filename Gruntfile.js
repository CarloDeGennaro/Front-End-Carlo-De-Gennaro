module.exports = function(grunt)
{
grunt.initConfig({
  serve: {
    options:{
      port:9000
    }
  }
});

grunt.loadNpmTasks('grunt-serve');
grunt.task.registerTask('build', ['serve']);
);
