module.exports = function(grunt)
{
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			scripts : {
				options: {},
				files : {
					'js/scripts.min.js' : ['js/*.js', 'js/scripts.js']
				}
			}
		}, 
		watch : {
			files : [ 'scss/styles.scss', 'scss/*.scss' ],
			tasks : ['min']
		},
		sass : {
			dist : {
				options : {
					style : 'compressed'
				},
				files : {
					'css/styles.min.css' : 'scss/styles.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('min', ['sass']);
}