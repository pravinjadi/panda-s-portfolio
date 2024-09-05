const items = document.querySelectorAll('.work-list li');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const popupVideo = document.getElementById('popup-video');

// Detect if it's a mobile device (based on window width)
const isMobile = window.innerWidth <= 768;

// Event listeners for desktop (hover interactions)
if (!isMobile) {
  items.forEach(item => {
    item.addEventListener('mouseover', function (event) {
      const rect = item.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2 + window.scrollY; // Add scrollY to centerY
      const popupHeight = popup.offsetHeight;
      const x = event.clientX - rect.left;
      const width = rect.width;
      const offset = (x / width) * 50 - 25; // adjust this value to control the amount of movement

      const videoId = this.getAttribute('data-video-id');
      const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&playlist=${videoId}`;

      console.log('Setting video URL:', videoUrl);
      popupVideo.src = videoUrl;
      popup.style.display = 'block';
      console.log('Popup displayed:', popup.style.display);
      popup.style.left = `${centerX + offset}px`;
      popup.style.top = `${centerY - (popupHeight / 2)}px`;

      this.classList.add('highlighted');
    });

    item.addEventListener('mouseout', function () {
      console.log('Mouse out from:', this);
      popup.style.display = 'none';
      popupVideo.src = ''; // stop the video
      this.classList.remove('highlighted');
    });

    item.addEventListener('mousemove', function (event) {
      const rect = item.getBoundingClientRect();
      const centerX = window.innerWidth / 3.25;
      const centerY = window.innerHeight / 2 + window.scrollY; // Add scrollY to centerY
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;
      const offsetX = (x / width) * 50 - 25; // Horizontal offset
      const offsetY = (y / height) * 50 - 10; // Vertical offset

      popup.style.left = `${centerX + offsetX}px`;
      popup.style.top = `${centerY + offsetY - (popup.offsetHeight / 8)}px`; // Center vertically
    });
  });
}

// Event listeners for mobile (click interactions)
if (isMobile) {
  items.forEach(item => {
    item.addEventListener('click', function (event) {
      const rect = item.getBoundingClientRect();

      const videoId = this.getAttribute('data-video-id');
      const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&playlist=${videoId}`;

      console.log('Setting video URL:', videoUrl);
      popupVideo.src = videoUrl;
      popup.style.display = popup.style.display === 'block' ? 'none' : 'block'; // Toggle the popup

      this.classList.toggle('highlighted');
    });

    // Optionally, hide popup if clicked outside the list item
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.work-list li')) {
        popup.style.display = 'none';
        popupVideo.src = ''; // stop the video
        items.forEach(item => item.classList.remove('highlighted'));
      }
    });
  });
}
