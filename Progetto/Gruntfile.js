/*
module.exports = function(grunt)
{
grunt.initConfig({
  serve: {
    options:{
      port:9000
    }
  },
  browserify: {
        dist: {
            files: {
              //'file destinazione': 'file sorgente'
              'src/js/bundle.js''src/js/bundle.js'
      }
    }
  },

  babel: {
    options: {
      presets: ['env']
    },
    dist : {
      files: {
    'src/js/bundle-es5.js':'src/js/bundle.js'
    }
  }
},



  watch: {
      script: {
      files: ['src/js/javascriptHello.js'],
      tasks: ['browserify'] //,
      //  tasks: ['less']
    }
  },


  cssmin : {
	target : {
 		src : ['src/css/style2.css'],
		dest : "dist/css/style_min.min.css"
	}
},


uglify: {
  target : {
 		src : ['src/js/javascriptHello.js'],
		dest : "dist/js/js_min.min.js"
	}
}

  });

  grunt.loadNpmTasks('grunt-contrib-watch'); //il modulo non solo watch
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-less');
  grunt.loadNpmTasks('grunt-browserify');//carica il tipo di task

//grunt.task.registerTask('build', ['serve']); //questo è stata creata prima!
//grunt.task.registerTask('broserify', ['browserify']); // aggiungo un task browserify
//grunt.task.registerTask('build', ['browserify','serve']); //questo task fa sia browserify che serve


//grunt.task.registerTask('build', ['browserify', 'serve']);//creo un acronimo per i 2 task
//senza server non potrei fare chiamate Ajax


//grunt.task.registerTask('develop', ['less', 'browserify', 'watch']);
grunt.task.registerTask('develop', ['watch']);
grunt.task.registerTask('javascript', ['babel']);

grunt.task.registerTask('build', ['cssmin','serve']); //prova cssmin

//grunt.task.registerTask('build', ['cssmin', 'browserify','babel','uglify','serve']);
//questo è l'elenco di tutti e tipicamente si mette solo questo
};
*/


module.exports = function (grunt)
{
grunt.initConfig({
 serve: {
  options: {
   port: 9000
  }
 },
 browserify: {
  dist: {
   files: {
    'src/js/boundle.js':'src/js/javascriptHello.js'
   }
  }
 },
 watch: {
  script: {
      files:'src/js/javascriptHello.js',
      tasks:'browserify'
          },
  dist: {
   files: 'src/css/style2.less',
   tasks: 'less'
  }
 },

 cssmin: {
  target: {
   files: {
    'dist/css/style2.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css','src/css/style2.less']//vettore di 2 elementi

   }
  }
 },

 babel: {
  options: {
   presets: ['env']
  },
  dist: {
   files: {
    'src/js/boundle-css.js': 'src/js/boundle.js'
   }
  }
 },

 less: {
  development: {
   files: {
    'src/css/style2.css': 'src/css/style2.less'
   }
  }
 },

 uglify: {
  target: {
   files: {
    'dist/js/boundle.min.js': ['src/js/boundle-css.js', 'node_modules/bootstrap/dist/js/bootstrap.js']
   }
  }
 }

});

grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.task.registerTask('develop', ['watch']);
grunt.task.registerTask('build', ['cssmin','browserify','babel','uglify','serve']);
};
