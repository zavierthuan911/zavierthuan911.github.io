async function submitForm() {
  var formData = {
    name: document.querySelector("input[name='yourname']").value,
    email: document.querySelector("input[name='youremail']").value,
    message: document.querySelector("textarea[name='yourmsg']").value,
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwGkPqHjFYV138-W0A4aQNqaNHuopI0kdlpqRJHzfYeHwrRgmJUdB4raS-HPnty4GyuTw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(formData),
      }
    );

    alert("Message send successfully.");
  } catch (error) {
    console.error("Error during fetch request:", error);
    alert("There was an error submitting the form.");
  }
}
