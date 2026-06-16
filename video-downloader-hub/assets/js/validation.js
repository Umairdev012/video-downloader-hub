/*
====================================
YOUTUBE URL VALIDATION
====================================
*/

function isValidYouTubeUrl(url) {

    const youtubeRegex =
        /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

    return youtubeRegex.test(url);

}

/*
====================================
GET VIDEO ID
====================================
*/

function extractVideoId(url) {

    let videoId = null;

    const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=)|(\&v=))([^#\&\?]*).*/;

    const match = url.match(regExp);

    if (
        match &&
        match[8] &&
        match[8].length === 11
    ) {
        videoId = match[8];
    }

    return videoId;

}

/*
====================================
INPUT VALIDATION
====================================
*/

function validateVideoUrl(url) {

    if (!url) {
        return {
            success: false,
            message: "Please enter a YouTube URL."
        };
    }

    if (!isValidYouTubeUrl(url)) {
        return {
            success: false,
            message: "Invalid YouTube URL."
        };
    }

    const videoId = extractVideoId(url);

    if (!videoId) {
        return {
            success: false,
            message: "Unable to detect video ID."
        };
    }

    return {
        success: true,
        videoId: videoId
    };

}