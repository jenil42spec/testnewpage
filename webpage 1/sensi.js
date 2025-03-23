// Reviews data with 10 very positive reviews
const reviews = [
  { name: "Arav sharma", review: "Absolutely love this app! ⭐⭐⭐⭐⭐" },
  { name: "Priya", review: "Super smooth and fast. ⭐⭐⭐⭐⭐" },
  { name: "Rohan", review: "Best app ever! ⭐⭐⭐⭐⭐" },
  { name: "Anaya", review: "Loved the UI! ⭐⭐⭐⭐⭐" },
  { name: "Kunal", review: "Great experience using this. ⭐⭐⭐⭐⭐" },
  { name: "Isha", review: "No bugs, works perfectly! ⭐⭐⭐⭐⭐" },
  { name: "Anavi", review: "Very useful and efficient. ⭐⭐⭐⭐⭐" },
  { name: "systum_gaming", review: "Well designed and simple. ⭐⭐⭐⭐⭐" },
  { name: "White7777", review: "Worth downloading! ⭐⭐⭐⭐⭐" },
  { name: "Monu_Gamer", review: "I highly recommend it! ⭐⭐⭐⭐⭐" }
];

// Set of colors similar to Gmail's default avatars
const colors = [
  "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
  "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
  "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"
];

const reviewsContainer = document.getElementById("reviews-container");

// Generate review boxes dynamically
reviews.forEach(user => {
  const reviewBox = document.createElement("div");
  reviewBox.classList.add("review");

  // Create User DP with initial letter
  const userLogo = document.createElement("div");
  userLogo.classList.add("user-logo");
  userLogo.textContent = user.name.charAt(0).toUpperCase();

  // Assign a random background color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  userLogo.style.backgroundColor = randomColor;

  // Create review text element
  const reviewText = document.createElement("p");
  reviewText.innerHTML = `<strong>${user.name}</strong>: ${user.review}`;

  // Append DP and review text to review box
  reviewBox.appendChild(userLogo);
  reviewBox.appendChild(reviewText);

  // Append review box to reviews container
  reviewsContainer.appendChild(reviewBox);
});