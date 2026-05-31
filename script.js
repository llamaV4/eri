const songs = ['song0.mp3', 'song1.mp3', 'song2.mp3', 'song3.mp3' , 'song4.mp3' , 'song5.mpg'];
let currentIndex= 0;

const audio= document.getElementById('audio');
const playpause= document.getElementById('play-pause');
const songTitle = document.getElementById('song-title');

function loadSong(){
    audio.src = songs[currentIndex]
    songTitle.textContent = songs[currentIndex]
    
}
loadSong();

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