// Default setup for Server 2
        jwplayer("videoPlayer").setup({
             file: "https://fast.wistia.com/embed/medias/cmepggkwep.m3u8",
  type: "application/vnd.apple.mpegurl",
          autostart: "true",
          repeat: "true",
          mute: "false",
    image: "https://i.imgur.com/oeVv0TD.png",
    logo: {
        file: "https://i.imgur.com/K7MRP0C.png",
        link: "https://www.astrostreamz.live",
        hide: "false",
        position: "bottom-right"
    }

   });

        function changeVideoSource(server) {
            var player = jwplayer("videoPlayer");
            var setupOptions = {};

            // Define different setups based on the selected server
            if (server === 1) {
                setupOptions = {
                    file: "https://ssc-1-on-prem-ak.akamaized.net/out/v1/ec938957da2849879f0cfac7e309ff38/index.mpd",
                    drm: {
                        "clearkey": {
                            "keyId": "e76ae17d861546be9c238e6582509c2c",
                            "key": "de1a91e2306bf8442236a80477f526e1"
                        }
                    },
                    type: "application/dash+xml",
                    image: "https://i.imgur.com/oeVv0TD.png",
                    logo: {
                        file: "https://i.imgur.com/K7MRP0C.png",
                        link: "https://www.astrostreamz.live",
                        hide: "false",
                        position: "bottom-right"
                    }
                };
            } 
            if (server === 2) {
                setupOptions = {
                    file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_726/output/manifest.mpd",
                    drm: {
                        "clearkey": {
                            "keyId": "1cc361e170845936aea7b95c6efb478e",
                            "key": "eac6d1d05ae92b328dfacc3c0e4f4f00"
                        }
                    },
                    type: "application/dash+xml",
                    image: "https://i.imgur.com/oeVv0TD.png",
                    logo: {
                        file: "https://i.imgur.com/K7MRP0C.png",
                        link: "https://www.astrostreamz.live",
                        hide: "false",
                        position: "bottom-right"
                    }
                };
            } else if (server === 3) {
                setupOptions = {
                    file: "https://prex.m3u8",
                    type: "application/vnd.apple.mpegurl",
                    image: "https://i.imgur.com/oeVv0TD.png",
                    logo: {
                        file: "https://i.imgur.com/K7MRP0C.png",
                        link: "https://www.astrostreamz.live",
                        hide: "false",
                        position: "bottom-right"
                    }
                };
            }

            // Setup the player with the selected options
            player.setup(setupOptions);
        }function searchVideos() {
      // Get the search input value
      var searchQuery = document.getElementById("searchInput").value.toLowerCase();

      // Loop through the card buttons and hide/show based on search
      var buttons = document.querySelectorAll(".card-1");
      for (var i = 0; i < buttons.length; i++) {
        var buttonText = buttons[i].querySelector(".card-text").textContent.toLowerCase();
        if (buttonText.includes(searchQuery)) {
          buttons[i].style.display = "inline-block";
        } else {
          buttons[i].style.display = "none";
        }
      }
    }
