AFRAME.registerComponent('play-on-window-click', {
    init: function () {
        document.querySelector("#videoAds").components.material.data.src.currentTime = 0 // start of video
        document.querySelector("#antarctica").components.material.material.map.image.play();
    },
    // play: function () {
    //     window.addEventListener('click', this.onClick);
    // },
    // pause: function () {
    //     window.removeEventListener('click', this.onClick);
    // },
    // onClick: function (evt) {
    //     var video = document.getElementById('BankVideo')
    //     if (!video) { return; }
    //     video.play();
    // }
});