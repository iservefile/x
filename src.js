 // Default values
    var defaultVideoSource = "https://ssc-1-on-prem-ak.akamaized.net/out/v1/ec938957da2849879f0cfac7e309ff38/index.mpd";
    var defaultKeyId = "e76ae17d861546be9c238e6582509c2c";
    var defaultKey = "de1a91e2306bf8442236a80477f526e1";
    var defaultImage = "https://w0.peakpx.com/wallpaper/818/678/HD-wallpaper-al-nassr-fc-saudi-soccer-club-logo-emblem-saudi-professional-league-football-riyadh-saudi-arabia-silk-texture.jpg";

    // Initialize jwplayer with default values
    jwplayer("videoPlayer").setup({
        file: defaultVideoSource,
        drm: {
            "clearkey": {
                "keyId": defaultKeyId,
                "key": defaultKey
            }
        },
        type: "application/dash+xml",
        image: defaultImage,
        autostart: "true",
        logo: {
            file: "https://i.imgur.com/K7MRP0C.png",
            link: "https://www.astrostreamz.live",
            hide: "false",
            position: "bottom-right"
        }
    });

    function changeVideoSource(buttonNumber) {
        var newVideoSource, newKeyId, newKey;

        // Define different video sources and keys for each button
        if (buttonNumber === 1) {
            newVideoSource = "https://ssc-1-on-prem-ak.akamaized.net/out/v1/ec938957da2849879f0cfac7e309ff38/index.mpd";
            newKeyId = "e76ae17d861546be9c238e6582509c2c";
            newKey = "de1a91e2306bf8442236a80477f526e1";
        } else if (buttonNumber === 2) {
            newVideoSource = "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_726/output/manifest.mpd";
            newKeyId = "1cc361e170845936aea7b95c6efb478e";
            newKey = "eac6d1d05ae92b328dfacc3c0e4f4f00";
        } else if (buttonNumber === 3) {
            newVideoSource = "URL_for_video_3";
            newKeyId = "KeyID_for_video_3";
            newKey = "Key_for_video_3";
        }

        // Update jwplayer setup
        jwplayer("videoPlayer").load({
            file: newVideoSource,
            drm: {
                "clearkey": {
                    "keyId": newKeyId,
                    "key": newKey
                }
            }
        });
    }