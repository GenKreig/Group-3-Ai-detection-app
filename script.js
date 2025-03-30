// Get elements
const enterButton = document.getElementById('enter-button');
const mainInterface = document.getElementById('main-interface');
const detectButton = document.getElementById('detect-button');
const textInput = document.getElementById('text-input');
const resultsDiv = document.getElementById('results');
const fileUpload = document.getElementById('file-upload');
const fileDetectButton = document.getElementById('file-detect-button');

// Show main interface when enter button is clicked
enterButton.addEventListener('click', () => {
  mainInterface.style.display = 'block';
  document.getElementById('welcome-screen').style.display = 'none';
});

// Detect AI-generated text when detect button is clicked
detectButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  if (text) {
    // TO DO: Implement AI detection logic here
    // For demonstration purposes, assume the text is AI-generated
    const result = 'AI-generated';
    resultsDiv.innerText = `Result: ${result}`;
  } else {
    resultsDiv.innerText = 'Please enter some text';
  }
});

// Detect AI-generated text from file when file detect button is clicked
fileDetectButton.addEventListener('click', () => {
  const file = fileUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      // TO DO: Implement AI detection logic here
      // For demonstration purposes, assume the text is AI-generated
      const result = 'AI-generated';
      resultsDiv.innerText = `Result: ${result}`;
    };
    reader.readAsText(file);
  } else {
    resultsDiv.innerText = 'Please select a file';
  }
});

