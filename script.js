const audio= document.getElementById('audio');
const playpause= document.getElementById('play-pause');

playpause.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playpause.textContent = 'Pause';
    } else {
        audio.pause();
        playpause.textContent = 'Play';
    }
} );

const volumeSlider = document.getElementById('volume');
volumeSlider.addEventListener('input', function() {
    audio.volume = parseFloat(volumeSlider.value);
}); 