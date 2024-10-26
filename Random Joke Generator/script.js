const jokeBtn = document.getElementById('jokeBtn');
const jokeDisplay = document.getElementById('joke');

// Array of jokes
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why was the math book sad? It had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why did the bicycle fall over? It was two-tired!",
  "What did one wall say to the other? I'll meet you at the corner!"
];

// Function to display a random joke
function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeDisplay.textContent = jokes[randomIndex];
}

// Event listener for the button
jokeBtn.addEventListener('click', getRandomJoke);
