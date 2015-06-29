$(function() {
  $('form').transloadit({
    wait: true,
    autoSubmit: false,
    triggerUploadOnFileSelection: true,

    params: {
      auth: { key: "5d76faa01e9f11e58cd7dd6f46a00b5a" }, 
      steps: {
        movie_1: {
          robot : "/http/import",
          url   : "http://html5videoformatconverter.com/data/images/happyfit2.mp4"
        },
        movie_2: {
          robot : "/http/import",
          url   : "http://html5videoformatconverter.com/data/images/happyfit2.mp4"
        },
        concat: {
          use: {
            steps : [
              {"name": "movie_1", "as": "pre_roll"},
              {"name": "movie_2", "as": "base"}
            ]
          },
          robot        : "/video/merge",
          ffmpeg_stack : "v2.2.3",
          preset       : "ipad",
          result       : true
        }
      }
    },
    onSuccess: function(assembly) {
    	console.log(assembly);
    	var videoUrl = assembly.results.concat[0].url
    	console.log(videoUrl);
    	window.open(videoUrl,"_self")
    }
  });
  $('form').submit();
});