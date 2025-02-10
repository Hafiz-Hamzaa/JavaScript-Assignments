function sendMessage() {
    let userInput = document.getElementById("userInput").value
    let chatDisplay = document.getElementById("chatBody")

if(userInput === "") {
    alert("Please enter a message...");
    return;
}
chatDisplay.innerHTML += `<p><b>User</b> : ${userInput}</p>`

let response = ""
if (userInput.toLowerCase().includes("hello")) {
    response = "Hi there! How can I help you?";
    document.getElementById("userInput").placeholder = "i want to take admission in smit";
  } else if (userInput.toLowerCase().includes("i want to take admission in smit")) {
    response = "SMIT offers admission twice a year. Do you want to know the eligibility criteria or the process?";
    document.getElementById("userInput").placeholder = "yes offcourse";
  } else if (userInput.toLowerCase().includes("yes offcourse")) {
    response = "Eligibility for admission: Matric, Intermediate, or any equivalent qualification. Do you want details about the entry test?";
    document.getElementById("userInput").placeholder = "yes";
  }
  else if (userInput.toLowerCase().includes("yes")) {
    response = "The entry test includes basic questions on Mathematics, English, and General Knowledge. Would you like to know the passing criteria?";
    document.getElementById("userInput").placeholder = "yeah sure";
  } else if (userInput.toLowerCase().includes("yeah sure")) {
    response = "You need to score at least 50% in the entry test to qualify for admission.";
    document.getElementById("userInput").placeholder = "tell me about the courses";
  } else if (userInput.toLowerCase().includes("tell me about the courses")) {
    response = "We offer various IT courses such as Web Development, Mobile App Development, Data Science, AI, and Cloud Computing. Which one interests you the most?";
    document.getElementById("userInput").placeholder = "web development";
  } else if (userInput.toLowerCase().includes("web development")) {
    response = "Our Web Development course covers HTML, CSS, JavaScript, React, Node.js, and more. It's a 6-month program.";
    document.getElementById("userInput").placeholder = "when you will announced the result";
  } else if (userInput.toLowerCase().includes("when you will announced the result")) {
    response = "Results are announced within a week after the entry test. You will receive an email with your result.";
    document.getElementById("userInput").placeholder = "bye";
  } else if (userInput.toLowerCase().includes("bye")) {
    response = "Goodbye! Have a nice day!";
    document.getElementById("userInput").placeholder = "Type something...";
  } else {
    response = "I'm sorry, I didn't understand that. Can you please rephrase?";
  }

  chatDisplay.innerHTML += `<p><b>Bot</b> : ${response} </p>`
  chatBody.scrollTop = chatBody.scrollHeight;

  document.getElementById("userInput").value = ""
}