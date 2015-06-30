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
          url   : "https://vimeo.com/131322564#t=0s"
        },
        movie_2: {
          robot : "/http/import",
          url   : "https://vimeo.com/131322521#t=0s"
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