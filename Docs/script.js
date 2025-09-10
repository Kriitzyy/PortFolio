// Lista med projekt
const projects = [
  { title: "ToDo App", desc: "En enkel ToDo-app i vanilla JS", link: "https://dittportfolio.se/todo" },
  { title: "Portfolio", desc: "Min portfolio med HTML, CSS och JS", link: "https://dittportfolio.se" },
  { title: "Calculator", desc: "Räknare i JS med grundläggande funktioner", link: "https://dittportfolio.se/calculator" },
  { title: "Weather App", desc: "Visa väderdata med API", link: "https://dittportfolio.se/weather" }
];


// Funktion som renderar projektkort
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="${project.link}" target="_blank">Se projekt</a>
    `;
    grid.appendChild(card);
  });
}


// Kör funktionen när sidan är laddad
document.addEventListener("DOMContentLoaded", renderProjects);