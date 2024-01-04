var imageArray = [
  "Image_001",
  "Img_014",
  "Img_015",
  "Image_013",
  "Image_032",
  "Img_017",
  "Img_002",
  "Image_031",
  "Img_008",
  "Img_012",
  "Img_013",
  "Img_003",
  "Img_005",
  "Img_006",
  "Image_033",
  "Image_002",
  "Img_004",
  "Img_007",
  "Img_009",
  "Img_010",
  "Img_016",
  "Image_010",
  "Image_024",
  "Image_003",
  "Image_033",
  "Img_011",
  "Image_005",  
  "Image_006",
  "Image_007",
  "Image_023",
  "Image_027",
  "Img_001",
  "Image_026",
 
];

const galleryContainer = document.getElementById("gallery");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust this threshold as needed
};

// Function to handle image intersection
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Load the image
      img.removeAttribute("data-src"); // Remove the data-src attribute
      observer.unobserve(img); // Stop observing this image once loaded
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

imageArray.forEach((imgName) => {
  const img = document.createElement("img");
  img.dataset.src = `./asset/models/${imgName}.jpg`;
  img.alt = `model${imgName}`;
  img.classList.add("img-responsive");

  // Observe the image element
  observer.observe(img);

  galleryContainer.appendChild(img);
});
