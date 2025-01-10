const sectionHome = document.getElementById("home");
const sectionAbout = document.getElementById("about");
const sectionProjects = document.getElementById("projects");
const sectionSkills = document.getElementById("skills");
const nav = document.getElementsByClassName("nav-buttons");
const helloWorld = document.getElementById("helloworld");
const intro_name = document.getElementById("name");

let timeout;
window.addEventListener("scroll", () => {
  clearTimeout(timeout);
  timeout = setTimeout(checkCurrentSection, 100);
});

function checkCurrentSection() {
  const scrollPosition = window.scrollY;
  const homeHeight = sectionHome.offsetTop;
  const aboutHeight = sectionAbout.offsetTop;
  const projectsHeight = sectionProjects.offsetTop;
  const skillsHeight = sectionSkills.offsetTop;

  if (scrollPosition >= projectsHeight) {
    updateNav(3);
  } else if (scrollPosition >= skillsHeight) {
    updateNav(2);
  } else if (scrollPosition >= aboutHeight) {
    updateNav(1);
  } else if (scrollPosition >= 0) {
    updateNav(0);
  }
}

function updateNav(activeIndex) {
  Array.from(nav).forEach((button, index) => {
    button.classList.toggle("currentSection", index === activeIndex);
  });
}

function animate_Text(element, text, i) {
  if (i > text.length) return;
  element.innerHTML = text.slice(0, i);
  setTimeout(() => {
    animate_Text(element, text, i + 1);
  }, 50);
}

animate_Text(helloWorld, "Hello World!", 0);
setTimeout(() => {
  animate_Text(intro_name, "My name is Imad Mahmoud.", 0);
}, 1000);
