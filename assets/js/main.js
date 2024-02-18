document.addEventListener("DOMContentLoaded", function () {
  //start the script after loading page
  function updateProfileInfo(profileData) {
    //function to change profile info
    // photo -----------------------
    const photo = document.querySelector(".profile.photo");
    if (photo) {
      photo.src = profileData.photo;
      photo.alt = profileData.name;
    } else {
      console.error("Profile photo element not found");
    }
    // Name -------------------------
    const name = document.querySelector(".profile.name");
    if (name) {
      name.innerHTML = profileData.name;
    } else {
      console.error("Profile name element not found");
    }
    // job --------------------------
    const job = document.querySelector(".profile.job");
    if (job) {
      job.innerHTML = profileData.job;
      job.href = "https://www.linkedin.com/in/leonardo-oliveira-9b3102223/";
    } else {
      console.error("Profile job element not found");
    }
    // location ---------------------
    const location = document.querySelector(".profile.location");
    if (location) {
      location.innerHTML = profileData.location;
    } else {
      console.error("Profile location element not found");
    }
    // phone ------------------------
    const phone = document.querySelector(".profile.phone");
    if (phone) {
      phone.innerHTML = profileData.phone;
      phone.href = `https://wa.me/${profileData.phone}`;
    } else {
      console.error("Profile phone element not found");
    }
    // email ------------------------
    const email = document.querySelector(".profile.email");
    if (email) {
      email.innerHTML = profileData.email;
      email.href = `mailto:${profileData.email}`;
    } else {
      console.error("Profile email element not found");
    }
    return profileData; // to the next promisse this line is necessary
  }
  function updateSoftSkills(profileData) {
    //function to change softSkills
    const softSkills = document.querySelector(".profile.skills.softSkills");
    softSkills.innerHTML = profileData.skills.softSkills
      .map((skill) => `<li>${skill}</li>`)
      .join("");
    return profileData; // to the next promisse this line is necessary
  }
  function updateHardSkills(profileData) {
    //function to change hardSkills
    const hardSkills = document.querySelector(".profile.skills.hardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills
      .map(
        (skill) =>
          `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
      )
      .join("");
    return profileData; // to the next promisse this line is necessary
  }
  function updatelanguages(profileData) {
    //function to change languages skills
    const languages = document.querySelector(".profile.languages");
    languages.innerHTML = profileData.languages
      .map((language) => `<li>${language}</li>`)
      .join("");
    return profileData; // to the next promisse this line is necessary
  }
  function updateEducation(profileData) {
    //function to change education skills
    const education = document.querySelector(".education.profile");
    education.innerHTML = profileData.education
      .map(
        (education) =>
          ` <li>
      <div class="institute-info">
        <h3 class="institute">${education.institute}</h3>
        <span class="date">${education.date}</span>
        <span class="state">${education.state}</span>
      </div>
      <div class="title-description">
        <span class="title">${education.course}</span>
        <br>
        <p>
          ${education.description}
        </p>
      </div>
    </li>`
      )
      .join("");
  }
  function updatePortfolio(profileData) {
    //function to change portfolio skills
    const portfolio = document.querySelector(".profile.portfolio");
    portfolio.innerHTML = profileData.portfolio
      .map(
        (project) =>
          `<li>
      <h4 class="title ${project.github ? "github" : ""}">${project.name}</h4>
      <a href="${project.url}" target="_blank">${project.url}</a>
      </li>`
      )
      .join("");
    return profileData; // to the next promisse this line is necessary
  }
  function updateExperience(profileData) {
    //function to change experience skills
    const experience = document.querySelector(".profile.experience");
    experience.innerHTML = profileData.professionalExperience
      .map(
        (experience) =>
          `<li>
        <h3 class="expTitle">${experience.name}</h3>
        <span class="period">${experience.period}</span>
        <p class="expText">${experience.description}</p>
        </li>`
      )
      .join("");
    return profileData; // to the next promisse this line is necessary
  }
  function loadProfile() {
    //funtion to fetch to profile from the json to this script
    const profile = "/assets/data/profile.json";
    return fetch(profile)
      .then((response) => response.json())
      .then(function (result) {
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.error("Error loading profile:", error);
        throw error;
      });
  }
  // call to the function and sequece of promisses to update the profile info, softSkills, hardSkills, languages, education and portfolio.
  loadProfile()
    .then((profileData) => updateProfileInfo(profileData))
    .then((profileData) => updateSoftSkills(profileData))
    .then((profileData) => updateHardSkills(profileData))
    .then((profileData) => updatelanguages(profileData))
    .then((profileData) => updatePortfolio(profileData))
    .then((profileData) => updateExperience(profileData))
    .then((profileData) => updateEducation(profileData))
    .catch((error) => {
      console.error("Error updating profile info:", error);
    });
});
