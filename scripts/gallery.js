var imageArray = [
    "Image_001",
    "Image_002",
    "Image_003",
    "Image_025",
    "Image_004",
    "Image_005",
    "Image_006",
    "Image_007",
    "Image_008",
    "Image_009",
    "Image_010",
    "Image_011",
    "Image_012",
    "Image_013",
    "Image_014",
    "Image_016",
    "Image_017",
    "Image_018",
    "Image_019",
    "Image_020",
    "Image_021",
    "Image_022",
    "Image_023",
    "Image_024",
    "Image_015",
    "Image_026",
    "Image_027",
    "Image_028",
    "Image_029"
  ];
  
  let imgCollection = '';
  imageArray.forEach(img => {
    imgCollection += `<img src="./asset/models/${img}.jpg" alt="model${img}" class="img-responsive">`;
  });

const galleryContainer = document.getElementById('gallery');
galleryContainer.innerHTML = imgCollection;
