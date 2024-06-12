// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioFileInput = document.getElementById('audioFile');
    const fileNameDisplay = document.getElementById('fileName');
    const timeRemainingDisplay = document.getElementById('timeRemaining');

    audioFileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        fileNameDisplay.textContent = `Arquivo: ${file.name}`;
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const timeRemaining = audioPlayer.duration - audioPlayer.currentTime;
        timeRemainingDisplay.textContent = `Tempo restante: ${formatTime(timeRemaining)}`;
    });

    window.playAudio = function() {
        audioPlayer.play();
    };

    window.pauseAudio = function() {
        audioPlayer.pause();
    };

    window.stopAudio = function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer.src = '';
        fileNameDisplay.textContent = '';
        timeRemainingDisplay.textContent = '';
        audioFileInput.value = '';
    };

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsRemaining = Math.floor(seconds % 60);
        return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
    }
});
