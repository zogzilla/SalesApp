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
          url   : "https://pdlvimeocdn-a.akamaihd.net/06472/032/382523386.mp4?token2=1435676777_bfa8cd4d5b88fcffe23ed377344732c3&amp;aksessionid=f32f253878cb6e76"
        },
        movie_2: {
          robot : "/http/import",
          url   : "https://pdlvimeocdn-a.akamaihd.net/44818/485/382523721.mp4?token2=1435676744_5fd6736e74c85aa916d5219165c518ba&amp;aksessionid=4fac7dcacbc26baa"
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