// function isElementInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   var windowHeight = window.innerHeight || document.documentElement.clientHeight;
//   var elementVisible = windowHeight * 0.05; // Adjust this value to change the visibility threshold

//   return (
//     rect.top <= windowHeight - elementVisible &&
//     rect.bottom >= elementVisible
//   );
// }

// function handleScroll() {
//   var eventContainers = document.querySelectorAll('.eventBoxContainer');
//   eventContainers.forEach(function(container) {
//     if (isElementInViewport(container)) {
//       container.classList.add('reveal');
//     } 
//   });
// }

// // Initial check on page load
// window.addEventListener('DOMContentLoaded', handleScroll);
// // Re-check on scroll
// window.addEventListener('scroll', handleScroll);


//   const pastEvents =[
//     {
//       "name": "MR & MISS GRAND TAMILNADU 2023",
//       "about": "Darlins Production organized the prestigious Mr & Miss Grand Tamil Nadu 2023 Beauty Pageant, known as one of the grandest pageants in South India. The event focused on the social cause 'Learn for the Change - Empowering Education' to raise awareness about the transformative power of education. Celebrity guests, including Ms. Anukreethy Vas, Mr. Darshan, and special guests Mr. Manikanta Rajesh and Dr. Saranya Jaikumar, graced the occasion. Mr. Hari was crowned 'Mr Grand Tamilnadu 2023' and Ms. Niharika emerged as 'Ms Grand Tamilnadu 2023'. Runner-up titles, regional and sub-titles were also awarded. The top 25 candidates were selected to participate in the 'Mr & Mrs & Ms Royal Star India 2023' fashion pageant in Jaipur on April 29-30, 2023.",
//       "img": "mr_miss_grand_tamilnadu_2023.jpg"
//     },
//     {
//       "name": "RUNWAY STAR INDIA 2022",
//       "about": "We organized the 'Runway Star India 2022' event in Pondicherry, showcasing the talents of 200 models. It served as a state-level selection round for Tamil Nadu models to compete in Uttar Pradesh and Jaipur events on April 10th and 15th, 2022. Renowned juries, including Miss India and Mr India, evaluated the participants alongside pan-India jurors. The event was televised on News Tamil 7 Channel. Our Darlins Production excelled, securing top positions in both male and female categories in Uttar Pradesh and achieving the third place in Jaipur, bringing pride to Tamil Nadu.",
//       "img": "runway_star_india_2022.jpg"
//     },
//     {
//       "name": "FASHION EXTRAVAGANZA’21",
//       "about": "In Madurai, Darlins Production proudly conducted the magnificent 'Fashion Extravaganza 2021' on October 31, 2021. This highly anticipated event showcased the biggest ramp show and fashion competition, featuring categories such as Mr & Miss Vougish South India, Mr Fit South India, and The Southern Stylist '21. With Darlins Production at the helm, the event exuded glamour, creativity, and impeccable style, leaving a lasting impression on all attendees. It was a testament to the company's commitment to organizing exceptional fashion events in the region.",
//       "img": "fashion_extravaganza_2021.jpg"
//     },
//     {
//       "name": "MR & MISS SOUTH STARRER 2021",
//       "about": "Darlin's Production, in collaboration with IFW Goa, organized 'Mr & Miss South Starrers 2021,' a fashion extravaganza held in Adanur, Madurai, on 18.07.2021. The event served as a fundraising program to support Udhavum Uravugal, dedicated to caring for orphanage kids and the elderly. We were honored to have Dr. Makkal Rajan, chairman of Sri Rajiv Gandhi Polytechnic College Erode and president of Unarvugal Trust, as the esteemed chief guest. Mr. Ashwin, winner of Mr. Tamilnadu 2019, and Miss Samantha, winner of Miss Madurai 2020, graced the occasion as judges. The event witnessed remarkable participation from over forty models, with the winners representing Tamil Nadu at the International Fashion Week (IFW), Goa. Our six models showcased their talent on the ramp, proudly representing Darlin's Production™ and our commitment to making a positive impact.",
//       "img": "mr_miss_south_starrer_2021.jpg"
//     }
//   ]

//   let pastEventhtml = '';
// pastEvents.forEach(event => {
//     pastEventhtml  += `
//     <div class="eventBoxContainer">
//       <img src="./../asset/img1.jpg" />
//       <div class="eventContent">
//         <h3>${event.name}</h3>
//         <p>${event.about}</p>
//       </div>
//     </div>
//   `;
// });

// const eventContainer = document.getElementById('eventContainer');
// eventContainer.innerHTML = pastEventhtml;
  