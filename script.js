const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseButton.textContent = '▶️';
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
});

seekBar.addEventListener('input', () => {
    const newTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});
