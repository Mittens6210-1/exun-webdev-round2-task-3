function displayFormData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var about = document.getElementById("about").value;
    var achievements = document.getElementById("achievements").value;
    var grade = document.getElementById("grade").value;
    var notifications = document.querySelector('input[name="notifications"]:checked').value;
  
    var message = "Name: " + name + "\n";
    message += "Email: " + email + "\n";
    message += "Date of Birth: " + dob + "\n";
    message += "Tell us about yourself: " + about + "\n";
    message += "Achievements: " + achievements + "\n";
    message += "Grade: " + grade + "\n";
    message += "Receive notifications: " + notifications;
  
    alert(message);
}

const wrapper = document.querySelector(".wrapper");

function transform() {
    wrapper.style.transform = "scale(1)"
}

function transformBack() {
    wrapper.style.transform = "scale(0)"
}