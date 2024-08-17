document.addEventListener('click', function(event) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${event.clientX - 25}px`;
    flower.style.top = `${event.clientY - 25}px`;
    document.getElementById('flower-container').appendChild(flower);

    // Play the sound
    const sound = document.getElementById('click-sound');
    sound.play();

    setTimeout(() => {
        flower.remove();
    }, 2000); // Remove the flower after the animation
});
