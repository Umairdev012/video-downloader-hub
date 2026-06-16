/*
====================================
DOM ELEMENTS
====================================
*/

const loader = document.getElementById("loader");
const errorBox = document.getElementById("errorBox");
const videoCard = document.getElementById("videoCard");

const thumbnail = document.getElementById("thumbnail");
const videoTitle = document.getElementById("videoTitle");
const channelName = document.getElementById("channelName");

/*
====================================
LOADER
====================================
*/

function showLoader() {

    loader.classList.remove("hidden");

}

function hideLoader() {

    loader.classList.add("hidden");

}

/*
====================================
ERROR HANDLING
====================================
*/

function showError(message) {

    errorBox.textContent = message;

    errorBox.classList.remove("hidden");

    setTimeout(() => {

        errorBox.classList.add("hidden");

    }, 4000);

}

function clearError() {

    errorBox.textContent = "";

    errorBox.classList.add("hidden");

}

/*
====================================
VIDEO CARD
====================================
*/

function showVideoCard() {

    videoCard.classList.remove("hidden");

}

function hideVideoCard() {

    videoCard.classList.add("hidden");

}

/*
====================================
RENDER VIDEO DATA
====================================
*/

function renderVideoData(videoData) {

    thumbnail.src = videoData.thumbnail;

    videoTitle.textContent = videoData.title;

    channelName.textContent =
        `Channel: ${videoData.channel}`;

    showVideoCard();

}

/*
====================================
RESET UI
====================================
*/

function resetUI() {

    hideVideoCard();

    clearError();

}

/*
====================================
DOWNLOAD BUTTONS
====================================
*/

function initializeDownloadButtons() {

    const downloadButtons =
        document.querySelectorAll(".download-btn");

    downloadButtons.forEach(button => {

        button.addEventListener("click", () => {

            showError(
                "Downloader API not connected yet."
            );

        });

    });

}

/*
====================================
PAGE INIT
====================================
*/

document.addEventListener(
    "DOMContentLoaded",
    initializeDownloadButtons
);