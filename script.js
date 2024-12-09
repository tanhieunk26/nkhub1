// Image Slider
const images = [
    "https://i.ibb.co/TT32B27/16732694052-1733441707445.png",
    "https://i.ibb.co/WPs8tLS/Capture.png"
  ];
  let currentImage = 0;
  const imageSlider = document.getElementById("image-slider");
  
  setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    imageSlider.src = images[currentImage];
  }, 3000);
  
  // Copy Script
  const copyButton = document.getElementById("copy-button");
  const scriptArea = document.getElementById("script-area");
  
  copyButton.addEventListener("click", () => {
    scriptArea.select();
    document.execCommand("copy");
    alert("Copy Script Successfully !");
  });
