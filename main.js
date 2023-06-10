const messageContainer = document.getElementById("message-container");
const feed = ["meddelande"];

function createMessage() {
  const message = document.createElement("div");
  message.classList.add("message");
  message.textContent = feed;

  const timer = document.createElement("div");
  timer.classList.add("timer");
  const progress = document.createElement("div");
  progress.classList.add("progress");
  timer.appendChild(progress);
  message.appendChild(timer);
  return message;
}

function addMessage() {
  const message = createMessage();
  messageContainer.prepend(message);

  setTimeout(() => {
    message.classList.add("active");
  }, 100);

  setTimeout(() => {
    removeMessage(message);
  }, 3000);
}

function removeMessage(message) {
  message.classList.remove("active");
  message.classList.add("outgoing");
  setTimeout(() => {
    message.remove();
  }, 500);
}

function handleClick(event) {
  const clickedMessage = event.target.closest(".message");
  if (clickedMessage) {
    removeMessage(clickedMessage);
  } else {
    addMessage();
  }
}
//to remove the message when clicked
window.addEventListener("click", handleClick);

//to add a message when clicked
/*window.addEventListener("click", () => feed.push("hello"));
 */
