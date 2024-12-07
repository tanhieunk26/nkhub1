// Function to copy script to clipboard
function copyScript() {
    const script = document.getElementById('script');
    script.select();
    script.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(script.value);
    alert("Script đã được sao chép!");
}

// Automatic image slider
const images = ['demo1.png', 'demo.png']; // Add your image paths here
let currentIndex = 0;

function changeImage() {
    const sliderImage = document.getElementById('slider-image');
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
