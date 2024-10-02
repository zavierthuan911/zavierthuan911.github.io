function submitForm(e) {
  var formData = {
    name: document.querySelector("input[name='yourname']").value,
    email: document.querySelector("input[name='youremail']").value,
    message: document.querySelector("textarea[name='yourmsg']").value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbyTjFPQ7bhbmTVipIhF5thtg1hUZFQJMEhWvi6KzxBtWsvWm4ZVsb5L0I3RGM6mM58jAA/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Form submitted successfully! File URL: " + data.url);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
