const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

async function displayMessage() {
  const text = textInput.value;
  const delay = delayInput.value;

  outputDiv.textContent = '';

  try {
    await new Promise((resolve) => setTimeout(resolve, delay));
    outputDiv.textContent = text;
  } catch (error) {
    console.error(error);
  }
}


btn.addEventListener('click', displayMessage);