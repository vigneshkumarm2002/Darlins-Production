
const achievements = [
    {
        "img": "Arushi Singh Miss Universe India Finalist2.jpg",
        "description": "Miss Universe India Finalist"
    },
    {
        "img": "Miss Tourism World 2023 .jpg",
        "description": "Miss Tourism World 2023"
    },
    {
        "img": "Bangalore Times Fashion Week.jpg",
        "description": "Bangalore Times Fashion Week"
    },
    {
        "img": "Arushi Singh Miss Universe India Finalist.jpg",
        "description": "Miss Universe India Finalist"
    },
    {
        "img": "Miss grand india 2023 DP.jpg",
        "description": "Miss Grand India 2023 Finalist"
    },
    {
        "img": "appreciation.jpg",
        "description": "Appreciation from Miss Diva"
    },
    {
        "img": "Arushi Singh Darlins.jpg",
        "description": "Miss Universe India Finalist"
    },
   
  
    {
        "img": "Arushi Singh DP.jpg",
        "description": "Miss Universe India Finalist"
    },
    {
        "img": "Miss Tourism World 2023 2.jpg",
        "description": "Miss Tourism World 2023"
    },
    {
        "img": "Arushi Singh.jpg",
        "description": "Miss Universe India Finalist"
    },
    {
        "img": "event pic.jpg",
        "description": "Miss Diva Event"
    },
    {
        "img": "event pic2.jpg",
        "description": "Miss Diva Event"
    },
    {
        "img": "Mr. Supranational India top30.jpg",
        "description": "Mr. Supranational India Finale top 30"
    },
    {
        "img": "event pic3.jpg",
        "description": "Miss Diva Event"
    },
    {
        "img": "finalist.jpg",
        "description": "Mr. Supranational India Finale top 30"
    },


    {
        "img": "Miss grand india 2023 Finalist .jpg",
        "description": "Miss Grand India 2023 Finalist"
    },
    {
        "img": "miss south India finalist.jpg",
        "description": "Miss South India Finalist"
    },
    {
        "img": "Mr. Supranational India Finale .jpg",
        "description": "Mr. Supranational India Finale top 30"
    },
    {
        "img": "Mr. Supranational India Finale top30.jpg",
        "description": "Mr. Supranational India Finale top 30"
    },
    

]

   // Function to create an achievement box
   function createAchievementBox(achievement) {
    const achievementBox = document.createElement("div");
    achievementBox.classList.add("achievement-box");

    const imgElement = document.createElement("img");
    imgElement.classList.add("achievement-img");
    imgElement.src =  `./asset/achievements/${achievement.img}`;
    imgElement.alt = "Achievement Image";

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("achievement-description");
    descriptionElement.textContent = achievement.description;

    achievementBox.appendChild(imgElement);
    achievementBox.appendChild(descriptionElement);

    return achievementBox;
}

// Get the container element
const achievementsContainer = document.getElementById("achievements-container");

// Loop through the achievements array and create boxes
achievements.forEach((achievement) => {
    const achievementBox = createAchievementBox(achievement);
    achievementsContainer.appendChild(achievementBox);
});