document.getElementById('startButton').addEventListener('click', function() {
    var nickname = document.getElementById('nicknameInput').value.toLowerCase().trim();
    var messageElement = document.getElementById('message');

    if (nickname === 'kaju katli' || nickname === 'annabelle') {
        const musicSelection = document.getElementById('musicSelect').value;
        parent.postMessage({ type: 'setMusic', musicFile: musicSelection }, '*');

        messageElement.textContent = "You are the only one, " + nickname + "!";
        messageElement.classList.remove('hidden');

        setTimeout(function() {
            parent.postMessage({ type: 'navigate', page: 'page2.html' }, '*');
        }, 10000);
    } else {
        messageElement.textContent = "Permission Denied.";
        messageElement.classList.remove('hidden');
    }
});