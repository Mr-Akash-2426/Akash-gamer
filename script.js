document.addEventListener("DOMContentLoaded", function() {
  const videoItems = document.querySelectorAll('.video-item video');
  
  videoItems.forEach((video) => {
    video.addEventListener('click', function() {
      openVideoPopup(video.src);
    });
  });

  function openVideoPopup(videoSrc) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
        <button class="close-btn">X</button>
        <video width="600" controls autoplay>
          <source src="${videoSrc}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
    
    document.body.appendChild(popup);

    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
      document.body.removeChild(popup);
    });
  }
});
