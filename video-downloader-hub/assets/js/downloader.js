/*
====================================
VIDEO DATA FETCHER
====================================
Frontend Demo Version

Note:
YouTube official API key ke baghair
hum sirf thumbnail aur video ID
generate kar sakte hain.

Real title, channel, duration,
views ke liye backend/API required hai.
====================================
*/

async function fetchVideoData(videoUrl) {

    try {

        const validation =
            validateVideoUrl(videoUrl);

        if (!validation.success) {

            throw new Error(
                validation.message
            );

        }

        const videoId =
            validation.videoId;

        const thumbnailUrl =
            `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const fallbackThumbnail =
            `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        const imageExists =
            await checkImageExists(
                thumbnailUrl
            );

        const finalThumbnail =
            imageExists
                ? thumbnailUrl
                : fallbackThumbnail;

        return {

            success: true,

            videoId: videoId,

            thumbnail: finalThumbnail,

            title:
                "YouTube Video Preview",

            channel:
                "Channel Information Requires API",

            downloads: [
                {
                    quality: "360P",
                    type: "MP4"
                },
                {
                    quality: "720P",
                    type: "MP4"
                },
                {
                    quality: "1080P",
                    type: "MP4"
                },
                {
                    quality: "Audio",
                    type: "MP3"
                }
            ]

        };

    } catch (error) {

        return {

            success: false,

            message:
                error.message ||
                "Failed to fetch video data."

        };

    }

}

/*
====================================
CHECK THUMBNAIL EXISTS
====================================
*/

function checkImageExists(url) {

    return new Promise(resolve => {

        const img = new Image();

        img.onload = () => resolve(true);

        img.onerror = () => resolve(false);

        img.src = url;

    });

}

/*
====================================
DOWNLOAD PLACEHOLDER
====================================
*/

function startDownload(
    quality = "720P"
) {

    showError(
        `Download API not connected. Selected: ${quality}`
    );

}