// front.js
const form = document.getElementById("chatForm");
const messagesDiv = document.getElementById("messages");
const input = document.getElementById("userInput");

// Change this to your deployed Vercel URL
const API_URL = "https://alpacatheai-kboc5987a-davidawn.vercel.app/api/chat";


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMsg = input.value.trim();
  if (!userMsg) return;

  appendMessage("YOU", userMsg);
  input.value = "";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMsg }),
    });
    const data = await res.json();
    appendMessage("ALPACA", data.reply || "No reply");
  } catch (err) {
    console.error("Fetch error:", err);
    appendMessage("Error", "Unable to reach server");
  }
});

  function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
 }
