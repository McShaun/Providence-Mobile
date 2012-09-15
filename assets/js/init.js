(function(window, $, PhotoSwipe){
			$(document).ready(function(){
				//Flexslider
				$('.flexslider').flexslider({
					  animation: "slide",
					  controlsContainer: ".flex-container"
			    });
			  //Twitter Feed
				$(".tweet").tweet({
					username: "providencego",
					join_text: "auto",
					avatar_size: 32,
					count: 1,
					auto_join_text_default: "", 
					auto_join_text_ed: "",
					auto_join_text_ing: "",
					auto_join_text_reply: "",
					auto_join_text_url: "",
					loading_text: "Loading Title...",
					template: "{tweet_text}"
				});
				//Loading Gallery Page
				$('a.song').click(function(){
					var songname = $(this).attr('id');
					$.mobile.changePage( "#song");
					$(document).ready(function(){
						$.get("http://127.0.0.1/Providence-Mobile/assets/songs/" + songname, function(data){
							var firstline = data.indexOf("\n");
							$('#songTitle').html(data.slice(0, firstline));
							$('div.song').html(data.slice(firstline));
						});
					});
				});
				$('div.gallery-page')
					.live('pageshow', function(e){
						var 
							currentPage = $(e.target),
							options = {},
							photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options,  currentPage.attr('id'));
						return true;
					})
					.live('pagehide', function(e){
						
						var 
							currentPage = $(e.target),
							photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));

						if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
							PhotoSwipe.detatch(photoSwipeInstance);
						}
						return true;
					});
			});
		}(window, window.jQuery, window.Code.PhotoSwipe));