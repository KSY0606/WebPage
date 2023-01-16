const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.classList.add("img_size");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);