/*
====================================
APP INITIALIZATION
====================================
*/

const videoUrlInput =
    document.getElementById("videoUrl");

const fetchBtn =
    document.getElementById("fetchBtn");

/*
====================================
FETCH VIDEO
====================================
*/

async function handleVideoFetch() {

    try {

        resetUI();

        const url =
            videoUrlInput.value.trim();

        const validation =
            validateVideoUrl(url);

        if (!validation.success) {

            showError(
                validation.message
            );

            return;
        }

        showLoader();

        const videoData =
            await fetchVideoData(url);

        hideLoader();

        if (!videoData.success) {

            showError(
                videoData.message ||
                "Unable to load video."
            );

            return;
        }

        renderVideoData(videoData);

    } catch (error) {

        hideLoader();

        showError(
            error.message ||
            "Something went wrong."
        );

        console.error(error);

    }

}

/*
====================================
BUTTON CLICK
====================================
*/

fetchBtn.addEventListener(
    "click",
    handleVideoFetch
);

/*
====================================
ENTER KEY SUPPORT
====================================
*/

videoUrlInput.addEventListener(
    "keypress",
    function (event) {

        if (event.key === "Enter") {

            handleVideoFetch();

        }

    }
);

/*
====================================
AUTO CLEAR UI
====================================
*/

videoUrlInput.addEventListener(
    "input",
    () => {

        if (
            videoUrlInput.value.trim() === ""
        ) {

            resetUI();

        }

    }
);

/*
====================================
PAGE READY
====================================
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "YouTube Downloader Ready"
        );

    }
);