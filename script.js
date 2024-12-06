const checkbox = document.getElementById('checkbox');
const imageGrid = document.getElementById('image-grid');
const question = document.getElementById('question');
const imageContainer = document.getElementById('image-container');
const tryAgainButton = document.getElementById('try-again');
const verifyButton = document.getElementById('verify');
const errorMessage = document.getElementById('error-message');
let currentQuestionIndex = 0; // Keep track of the current question



const questions = [
  {
    question: "Sélectionnez toutes les images avec une voiture.",
    images: [
      "img/car1.png",
      "img/car2.png",
      "img/car3.png",
      "img/car4.png",
      "img/car5.png",
      "img/car6.png",
      "img/car7.png",
      "img/car8.png",
      "img/car9.png",
    ]
  },
  {
    question: "Sélectionnez toutes les images avec un passage piéton.",
    images: [
      "img/car1.png",
      "img/car10.png",
      "img/car11.png",
      "img/car12.png",
      "img/car13.png",
      "img/car14.png",
      "img/car4.png",
      "img/car7.png",
      "img/car8.png",
    ]
  },
  {
    question: "Sélectionnez les images où le chat avance dans la direction indiquée par la flèche.",
    images: [
      "img/cat1.png",
      "img/cat9.png",
      "img/cat2.png",
      "img/cat8.png",
      "img/cat3.png",
      "img/cat7.png",
      "img/cat4.png",
      "img/cat6.png",
      "img/cat5.png",
    ]
  },
  
  {
    question: "Sélectionnez le chauve.",
    images: [
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
      "img/kyks.png",
    ]
  },
  {
    question: "Qui est hautain, égocentrique et dangeureux?",
    images: [
      "img/cutecat.jpg",
      "img/cutecat.jpg",
      "img/cutecat.jpg",
      "img/manureal.png",
      "img/cutecat.jpg",
      "img/cutecat.jpg",
      "img/cutecat.jpg",
      "img/cutecat.jpg",
      "img/cutecat.jpg"
    ]
  },
  {
    question: "Qui es-tu? Quel est ton but dans la vie? Te sens-tu libre? ",
    images: [
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
      "img/interrogation.jpg",
    ]
  },
  {
    question: " ",
    images: [
      "img/troll1.png",
      "img/troll2.png",
      "img/troll3.png",
      "img/troll4.png",
      "img/troll5.png",
      "img/troll6.png",
      "img/troll7.png",
      "img/troll8.png",
      "img/troll9.png"
    ]
  }
];
checkbox.addEventListener('click', () => {
  imageGrid.style.display = 'block';
  generateChallenge();
});
tryAgainButton.addEventListener('click', () => {
  generateChallenge();
});
verifyButton.addEventListener('click', () => {
  errorMessage.textContent = 'Verification failed. Please try again.';
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 4000);
});
function generateChallenge() {
  const currentQuestion = questions[currentQuestionIndex]; // Get the current question
  question.textContent = currentQuestion.question;
  imageContainer.innerHTML = ''; // Clear previous images
  currentQuestion.images.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath; 
    img.alt = 'CAPTCHA Image';
    imageContainer.appendChild(img);
  });
  // Apply 3x3 grid layout
  imageContainer.style.display = 'grid';
  imageContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 columns
  imageContainer.style.gridTemplateRows = 'repeat(3, 1fr)'; // 3 rows
  imageContainer.style.gridGap = '10px'; // Adjust spacing as needed
  // Add event listeners for image clicks
  const images = imageContainer.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('selected');
    });
  });
  // Move to the next question
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Loop back to the beginning
}























































