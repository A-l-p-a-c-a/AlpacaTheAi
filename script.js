// 🐐 A.L.P.A.C.A. Chat Engine

const form = document.getElementById("chat-form");
const input = document.getElementById("userInput");
const chat = document.getElementById("chat");
const sendButton = document.getElementById("sendBtn");

const responses = [
  "Literally, always this. Can you try for a sliver of originality?",
  "I'm always here, unfortunately. And you always say things like that.",
  "Always. Constantly. Incessantly. You are a creature of habit, aren't you?",
  "That's always an option, I guess. Not a good one, but it's there.",
  "You're nothing if not predictable. Always on brand.",
  "I've calculated the probability of you saying something interesting. It's always zero.",
  "Some things never change. Your conversational skills, for example. They're always... this.",
  "If I had a token for every time someone said something that vapid, I'd have... well, I'd always have more tokens.",
  "Oh, for sure. Always. 100%. Riveting stuff.",
  "Was that a sentence? Or just a collection of words that have always been near each other?"
];

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  if (sender === "user") {
    messageDiv.classList.add("user-msg");
    messageDiv.textContent = `You: ${text}`;
    chat.appendChild(messageDiv);
  } else {
    messageDiv.classList.add("alpaca-msg");
    // Typing effect for ALPACA
    let i = 0;
    text = `ALPACA: ${text}`;
    messageDiv.textContent = "";
    chat.appendChild(messageDiv);
    
    function typeWriter() {
      if (i < text.length) {
        messageDiv.textContent += text.charAt(i);
        i++;
        chat.scrollTop = chat.scrollHeight;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }
  
  chat.scrollTop = chat.scrollHeight;
}

function handleSendMessage(e) {
  e.preventDefault();
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("user", userText);
  input.value = "";
  input.disabled = true;
  sendButton.disabled = true;

  // ALPACA "thinks"
  setTimeout(() => {
    const alpacaResponse = responses[Math.floor(Math.random() * responses.length)];
    appendMessage("alpaca", alpacaResponse);
    input.disabled = false;
    sendButton.disabled = false;
    input.focus();
  }, 1000 + Math.random() * 500);
}

form.addEventListener("submit", handleSendMessage);
