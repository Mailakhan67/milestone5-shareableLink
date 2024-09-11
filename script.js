var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePic = document.getElementById("profilePic");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var lastNameElement = document.getElementById("last-name");
    var ageElement = document.getElementById("age");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skills");
    var cvNameElement = document.getElementById('cvname');
    if (profilePic &&
        nameElement &&
        emailElement &&
        phoneElement &&
        lastNameElement &&
        ageElement &&
        educationElement &&
        experienceElement &&
        skillElement &&
        cvNameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var lastName = lastNameElement.value;
        var age = ageElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillElement.value;
        var cvName = cvNameElement.value;
        var uniquePath = "resumes/ ".concat(cvName.replace(/\s+/g, ' '), "_cv.html");
        // profile
        var profilePicture = (_a = profilePic.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicUrl = profilePicture
            ? URL.createObjectURL(profilePicture)
            : "";
        // create resume output
        var resumeOutput = " <h2>Resume</h2>\n      ".concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" class=\"profilePic\">") : "", "\n  <p><strong>Name:</strong> <span id=\"edit-name\" class='editable'> ").concat(name_1, "</span>  </p> \n  <p><strong>Email:</strong> <span id=\"edit-email\" class='editable'> ").concat(email, "</span></p> \n  <p><strong>Phone:</strong> <span id=\"edit-phone\" class='editable'>").concat(phone, "</span></p>\n  <p><strong>Last Name:</strong> <span id=\"edit-last-name\" class='editable'>").concat(lastName, "</span></p>\n  <p><strong>age:</strong> <span id=\"edit-age\" class='editable'>").concat(age, "</span></p>\n\n  <h3>Education</h3>\n   <p id=\"edit-education\" class='editable'>").concat(education, "</p>\n\n     <h3>Experience</h3>\n   <p> ").concat(experience, "</p>\n\n     <h3>Skills</h3>\n   <p id=\"edit-skills\" class='editable'> ").concat(skills, "</p>\n   ");
        //
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadlink.download = uniquePath;
        downloadlink.textContent = 'Download Your Resume';
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // makeEditable();
            resumeOutputElement.appendChild(downloadlink);
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error("One Or More Output Element Are Missing");
    }
});
function makeEditable() {
    var editableElemnt = document.querySelectorAll(".editable");
    editableElemnt.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
