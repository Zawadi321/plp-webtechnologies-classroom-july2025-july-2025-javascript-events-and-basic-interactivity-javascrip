// JavaScript for form validation
document.querySelector("form").addEventListener("submit", function(event) {  //selects form element and function will execute when submit button is clicked
    event.preventDefault(); // Prevent form submission and refreshing of the page

    // Validate form fields- tracks whether all fields are valid; if not, isValid becomes false and it will prevent submission
    let isValid = true;

    // Check email
    const email = document.getElementById("email").value;   //gets the value of the email input field
    if (!email.includes("@")) {     //condition to check if the email has the @ symbol
        document.getElementById("emailError").textContent = "Invalid email address.";   //if not, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("emailError").textContent = "";  //if valid, no error message is shown
    }

    // Check phone number
    const phone = document.getElementById("phone-number").value;  //gets the value of the phone number input field
    if (phone.length < 10) {            //condition to check whether the length of the values entered is less than 10
        document.getElementById("phoneError").textContent = "Phone number must be at least 10 digits."; //if true, it displays an error message
        isValid = false;  //sets isValid to false and prevents form submission
    } else {
        document.getElementById("phoneError").textContent = ""; //if valid, no error message is shown
    }

    // Check age
    const age = document.getElementById("age").value;   //gets the value of the age input field
    if (age < 15 || age > 35) {  //condition to check whether the age entered is less than 15 or greater than 35
        document.getElementById("ageError").textContent = "Age must be between 15 and 35."; //if true, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("ageError").textContent = "";       //if valid, no error message is shown
    }

    // Check password
    const password = document.getElementById("password").value; //gets the value of the password input field
    if (password.length < 8 || !password.match("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) { //condition to check whether the length of the password entered is less than 8 or does not contain at least one digit, one lowercase letter, and one uppercase letter
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.";   //if true, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("passwordError").textContent = "";      //if valid, no error message is shown
    }

    // Check confirm password
    const confirmPassword = document.getElementById("confirm-password").value;  //gets the value of the confirm password input field
    if (confirmPassword !== password) { //condition to check whether the value entered in confirm password matches the value entered in password
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";    //if not, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("confirmPasswordError").textContent = "";      //if valid, no error message is shown
    }

    if (isValid) {
        // If all fields are valid, show success message
        document.querySelector(".success-message").textContent = "Form submitted successfully!";  //displays success message if all fields are valid
        alert("Form submitted successfully!");
    }

    //Event Handling - Listen for user actions and respond accordingly
    //Mouseover event for submit button
    document.querySelector("button").addEventListener("mouseover", function() {  //selects the button element and function will execute when mouse is over the button
        this.style.backgroundColor = "#010902ff"; //changes the background color of the button when mouse is over it
        this.style.color = "#ffffff"; //changes the text color of the button when mouse is over it
    });

    document.querySelector("button").addEventListener("mouseout", function() {  //selects the button element and function will execute when mouse is out of the button
        this.style.backgroundColor = ""; //reverts the background color of the button when mouse is out of it
        this.style.color = ""; //reverts the text color of the button when mouse is out of it
    });
});
//Light/Dark Mode Toggle
    function toggleMode() {
        const body = document.body;
        const btn = document.getElementById("modeBtn");
      document.body.classList.toggle("dark-mode");

      // Optional: Save preference in localStorage
      if (document.body.classList.contains("dark-mode")) {  //checks if the body element has the class "dark-mode"
        localStorage.setItem("theme", "dark");  //if true, it saves the theme preference as "dark" in localStorage
        btn.textContent = "🌙 Dark Mode";       //changes the button text to "Dark Mode"
      } else {
        localStorage.setItem("theme", "light"); //if false, it saves the theme preference as "light" in localStorage
        btn.textContent = "🌞 Light Mode";       //changes the button text to "Light Mode"
      }
    }

    // Load saved theme on page load
    window.onload = function() {        //function that executes when the window loads
        const btn = document.getElementById("modeBtn");
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        btn.textContent = "🌙 Dark Mode";
      }
        else {
            btn.textContent = "🌞 Light Mode";
    }
    };

    //FAQ Section Toggle
    const questions = document.querySelectorAll(".faq-question");   // Select all FAQ questions
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;

    // Toggle visibility
    answer.classList.toggle("open");    // Toggle the "open" class for styling

    // Adjust max-height for smooth transition
    if (answer.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      q.textContent = q.textContent.replace("▼", "▲");
    } else {
      answer.style.maxHeight = null;
      q.textContent = q.textContent.replace("▲", "▼");
    }
  });
});
