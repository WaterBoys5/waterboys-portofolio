document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#project-grid");

  PROJECTS.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-image" style="background-image:url('${project.image}')"></div>
      <div class="project-overlay">
        <div class="project-meta">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
          </div>
          <div class="project-type">${project.category}<br>${project.year}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelector("#year").textContent = new Date().getFullYear();

  const behance = SITE.behance;
  const behanceLink = document.querySelector("#behance-link");
  if (behance && !behance.includes("USERNAME-BEHANCE")) {
    behanceLink.href = behance;
  } else {
    behanceLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Buka assets/js/projects.js lalu ganti USERNAME-BEHANCE dengan username/link Behance kamu.");
    });
  }
});
