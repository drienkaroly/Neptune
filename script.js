// Mock video data
const videos = [
    {
      src: "videos/1.mp4",
      title: "nature",
      creator: "fasztudja"
    },
    {
      src: "videos/The meaning within the Mandelbrot set.mp4",
      title: "Mandelbrot set",
      creator: "3blue1brown"
    },
    {
      src: "videos/The Triangle Of Power.mp4",
      title: "Puzzle",
      creator: "3blue1brown"
    }
  ];
  
  // Load videos into the feed
  function loadVideos() {
    const videoFeed = document.getElementById('video-feed');
    videos.forEach((video, index) => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
      videoCard.innerHTML = `
        <video src="${video.src}" controls preload="auto" loop playsinline autoplay></video>
        <div class="info">
          <h2>${video.title}</h2>
          <p>by ${video.creator}</p>
        </div>
        <div class="controls">
          <button onclick="likeVideo(${index})">❤️</button>
          <button onclick="commentVideo(${index})">💬</button>
        </div>
      `;
      videoFeed.appendChild(videoCard);
    });
  
    // Auto-play/pause videos when scrolling
    const videoElements = document.querySelectorAll('video');
    document.getElementById('video-feed').addEventListener('scroll', () => {
      videoElements.forEach(video => {
        const rect = video.getBoundingClientRect();
        // Check if the video is in view (within the viewport)
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          if (video.paused) {
            video.play();  // Play video if it is not already playing
          }
        } else {
          if (!video.paused) {
            video.pause();  // Pause video if it's out of view
          }
        }
      });
    });
  
    // Ensure videos start playing immediately after loading
    const videosLoaded = document.querySelectorAll('video');
    videosLoaded.forEach(video => {
      video.oncanplaythrough = () => {
        // This event fires when the video is ready to play without buffering
        video.play();
      };
    });
  }
  
  // Like video functionality
  function likeVideo(index) {
    alert(`You liked video #${index + 1}`);
  }
  
  // Comment video functionality
  function commentVideo(index) {
    alert(`You commented on video #${index + 1}`);
  }
  
  // Initialize feed on page load
  document.addEventListener('DOMContentLoaded', loadVideos);
  