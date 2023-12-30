var items = document.querySelectorAll('.hom-slid .item');
var currentIndex = 0;

function showNextItem() {
  var currentItem = items[currentIndex];
  currentItem.classList.remove('active');

  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }

  var nextItem = items[currentIndex];
  nextItem.classList.add('active');
}


setInterval(showNextItem, 5000); 




var modalImg = [
  "Image_031",
  "Img_014",
  "Img_004",
  "Img_006",
  "Image_027",
  "Image_006",
  "Image_012",
  "Image_014",
  "Image_007",
  "Image_001",
 
  "Img_007",
  "Img_008",
  "Img_009",
  "Img_010",
  "Img_011",
  "Img_012",
  "Image_033",
  "Image_022",

  "Image_013",
  "Image_002",
 
  "Img_002",
  "Img_003",
 
  "Img_005",

  
  "Img_017",
  "Image_026",
  "Image_005",
  "Image_010",
  "Image_028",
  "Image_004",
  
  "Img_013",
 
  "Img_015",
  "Image_008",
  "Image_023",
  "Image_024",

];

let modalCollection = '';
modalImg.forEach(img => {
  modalCollection += ` <div class="img-item"><img src="./asset/models/${img}.jpg" alt="model${img}" ></div>`;
});

const modalcontainer = document.getElementById('owl-model');
modalcontainer.innerHTML = modalCollection;



