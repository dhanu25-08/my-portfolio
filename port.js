let projectsEl = document.getElementById("projectsEl");
let skillsEl = document.getElementById("skillsEl");
let projectHeading = document.getElementById("projectHeading");
let skillsHeading = document.getElementById("skillsHeading");


skillsEl.classList.add("d-none");

skillsHeading.onclick = function(evemt) {
    skillsEl.classList.remove("d-none");
    projectsEl.classList.add("d-none");
}
projectHeading.onclick = function(event) {
    skillsEl.classList.add("d-none");
    projectsEl.classList.remove("d-none");
}