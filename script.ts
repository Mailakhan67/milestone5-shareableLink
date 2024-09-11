document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const profilePic = document.getElementById(
      "profilePic"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const lastNameElement = document.getElementById(
      "last-name"
    ) as HTMLInputElement;
    const ageElement = document.getElementById("age") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillElement = document.getElementById("skills") as HTMLInputElement;
const cvNameElement=document.getElementById('cvname') as HTMLInputElement;
    if (
      profilePic &&
      nameElement &&
      emailElement &&
      phoneElement &&
      lastNameElement &&
      ageElement &&
      educationElement &&
      experienceElement &&
      skillElement &&
      cvNameElement
    ) {

      const name = nameElement.value;
      const email = emailElement.value;
      let phone = phoneElement.value;
      let lastName = lastNameElement.value;
      let age = ageElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillElement.value;
      const cvName = cvNameElement.value;

      const uniquePath=`resumes/ ${cvName.replace(/\s+/g, ' ')}_cv.html`
      // profile
      const profilePicture = profilePic.files?.[0];
      const profilePicUrl = profilePicture
        ? URL.createObjectURL(profilePicture)
        : " ";
      // create resume output
      const resumeOutput = ` <h2>Resume</h2>
      ${profilePicUrl ? `<img src="${profilePicUrl}" class="profilePic">` : ""}
  <p><strong>Name:</strong> <span id="edit-name" class='editable'> ${name}</span>  </p> 
  <p><strong>Email:</strong> <span id="edit-email" class='editable'> ${email}</span></p> 
  <p><strong>Phone:</strong> <span id="edit-phone" class='editable'>${phone}</span></p>
  <p><strong>Last Name:</strong> <span id="edit-last-name" class='editable'>${lastName}</span></p>
  <p><strong>age:</strong> <span id="edit-age" class='editable'>${age}</span></p>

  <h3>Education</h3>
   <p id="edit-education" class='editable'>${education}</p>

     <h3>Experience</h3>
   <p> ${experience}</p>

     <h3>Skills</h3>
   <p id="edit-skills" class='editable'> ${skills}</p>
   `;



   //
const downloadlink = document.createElement('a');
downloadlink.href='data:text/html;charset=utf-8,'+ encodeURIComponent(resumeOutput);
downloadlink.download=uniquePath;
downloadlink.textContent='Download Your Resume';




      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

          
        // makeEditable();
        resumeOutputElement.appendChild(downloadlink)
        resumeOutputElement.style.display='block';
      }
    } else {
      console.error("One Or More Output Element Are Missing");
    }
  });

function makeEditable() {
  const editableElemnt = document.querySelectorAll(".editable");
  editableElemnt.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";
      //replace content
      if (currentElement.tagName === "p" || currentElement.tagName === "span") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
