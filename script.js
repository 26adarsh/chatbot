// script.js

const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input').value;
    displayMessage(userInput, 'user');
    // Send user input to the server and get the response
    // Display the response in the chat messages
    document.getElementById('user-input').value = ''; //trial 2
});

function displayMessage(message, sender) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(sender);
    div.innerText = message;
    chatMessages.appendChild(div);
}
