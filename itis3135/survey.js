function resetForm() {
    document.getElementById("userForm").reset();
}
function addCourseTextBox() {
    const courseContainer = document.getElementById("courseContainer");
    const newTextBox = document.createElement("input");
    newTextBox.type = "text";
    newTextBox.name = "course";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        courseContainer.removeChild(newTextBox);
        courseContainer.removeChild(deleteButton);
    };
    courseContainer.appendChild(newTextBox);
    courseContainer.appendChild(deleteButton);
}
function handleSubmit() {
    var formData = (document.getElementById("UserForm"));
    
    // Collect form data
    var name = document.getElementById('name').value;
    var Mascot = document.getElementById('Mascot').value;
    //var //Reference video create variable for images

    var image = document.getElementById('introImage').files[0];
    
       
        const imageUrl = URL.createObjectURL(image); 
        var textImage = "<img src=\"" + imageUrl + "\" >";   
    
    var imagecaption = document.getElementById('imagecaption').value;
    var personalbackground = document.getElementById('personalbackground').value;
    var professionalbackground = document.getElementById('professionalbackground').value;
    var academicabackground = document.getElementById('academicbackground').value;
    var primarycomputerplatform = document.getElementById('primarycomputerplatform').value;
    var webdevelopmentbackground = document.getElementById('webdevelopmentbackground').value;
    var courses = document.getElementById('courses').value;
    var funnything = document.getElementById('funnything').value;
    var anythingelse = document.getElementById('anythingelse').value;

    // Replace form content with gathered data
    var outcome = document.getElementById("SurveyOutcome");
    outcome.innerHTML = "<h3> " + name + " " + Mascot + "</h3>";
    outcome.innerHTML += textImage;
    outcome.innerHTML += "<figcaption>" + imagecaption + "</figcaption>" +
    "<ul>";
    outcome.innerHTML += "<li> Personal Background: " + personalbackground + 
    "</li>";
    outcome.innerHTML +=  "<li> Academic Background: " + academicabackground + 
    "</li>";
    outcome.innerHTML +=  "<li> Primary Computer Platfom: " + primarycomputerplatform + 
    "</li>";
    outcome.innerHTML +=  "<li> Web Development Background: " + webdevelopmentbackground + 
    "</li>";
    outcome.innerHTML +=  "<li> Courses: " + courses + 
    "</li>";
    outcome.innerHTML +=  "<li> Funny Thing: " + funnything + 
    "</li>";
    outcome.innerHTML +=  "<li> Anything Else: " + anythingelse + 
    "</li>";
    outcome.innerHTML +=  "<a class= \"Resetbutton\" href=\"BYOIntro.html\">Reset BYO Intro Page</a>"
    formData.remove();
}

