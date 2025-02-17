window.onload = function() {
    const greetingElement = document.getElementById('greeting');
    const baseElement = document.getElementById('base');
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        greetingElement.innerText = 'GOOD MORNING!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingElement.innerText = 'GOOD AFTERNOON!';
    } else if (currentHour >= 18 && currentHour < 24) {
        greetingElement.innerText = 'GOOD EVENING!';
    } else {
        greetingElement.innerText = 'HELLO! ITS QUIET HOURS';
    }
    

    if (currentHour >= 5 && currentHour < 9) {
        baseElement.innerText = 'Whats up, early bird? Ready to kickstart your day? Lets dive into my portfolio and see what sparks your interest. ';
    } else if (currentHour >= 9 && currentHour < 14) {
        baseElement.innerText = 'How is your day going? And what brings you here today? Curiosity, inspiration, or just a bit of boredom? Lets see what we can find.';
    } else if (currentHour >= 14 && currentHour < 18) {
        baseElement.innerText = 'Taking a break from the hustle and bustle? Great! Lets unwind with some creative inspiration.';
    } else if (currentHour >= 18 && currentHour < 20) {
        baseElement.innerText = 'As the sun sets, lets turn up the creativity. Welcome to my portfolio. What are you looking for today?';    
    } else {
        baseElement.innerText = 'Hello! It’s quiet hours, rest well.';
    }

    let index = 0; function type() { if (index < greetingText.length) { greetingElement.innerHTML = greetingText.substring(0, index + 1); index++; setTimeout(type, 100); } else { setTimeout(reset, 2000); // Pause before repeating 
    } } function reset() { index = 0; greetingElement.innerHTML = ''; setTimeout(type, 500); } type();

};

document.addEventListener('DOMContentLoaded', function() {
    var videoSource = document.getElementById('video-source');

    function getVideoSource() {
        var currentTime = new Date().getHours();
        var videoSrc;

        if (currentTime >= 6 && currentTime < 16) {
            // Day time: 6am to 4pm
            videoSrc = 'day_3.mp4';
        } else if (currentTime >= 16 && currentTime < 18) {
            // Evening: 4pm to 6pm
            videoSrc = 'eve_6.mp4';
        } else if (currentTime >= 18 || currentTime < 3) {
            // Night: 6pm to 3am
            videoSrc = 'night_3.mp4';
        } else {
            // Early morning: 2am to 6am
            videoSrc = 'early_6.mp4';
        }

        return videoSrc;
    }

    videoSource.src = getVideoSource();
    document.getElementById('bg-video').load();
});
