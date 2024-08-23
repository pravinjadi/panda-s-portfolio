const items = document.querySelectorAll('.work-list li');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupVideo = document.getElementById('popup-video');

items.forEach(item => {
  item.addEventListener('mouseover', function(event) {
    const rect = item.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2 + window.scrollY; // Add scrollY to centerY
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const x = event.clientX - rect.left;
    const width = rect.width;
    const offset = (x / width) * 50 - 25; // adjust this value to control the amount of movement

    const videoId = this.getAttribute('data-video-id');
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`;

    //popupText.textContent = this.getAttribute('data-project');
    popupVideo.src = videoUrl;
    popup.style.display = 'block';
    popup.style.left = `${centerX + offset}px`;  
    popup.style.top = `${centerY - (popupHeight / 2)}px`;

    this.classList.add('highlighted');
  });

  item.addEventListener('mouseout', function() {
    popup.style.display = 'none';
    popupVideo.src = ''; // stop the video
    this.classList.remove('highlighted');
  });

  item.addEventListener('mousemove', function(event) {
    const rect = item.getBoundingClientRect();
    const centerX = window.innerWidth / 3.25;
    const centerY = window.innerHeight / 2 + window.scrollY; // Add scrollY to centerY
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const x = event.clientX - rect.left;
    const width = rect.width;
    const offset = (x / width) * 50 - 30; // adjust this value to control the amount of movement

    popup.style.left = `${centerX + offset}px`;
  });
});
