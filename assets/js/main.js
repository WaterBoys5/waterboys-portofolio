document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#project-grid");

  if (!grid) return;

  PROJECTS.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <div
        class="project-image"
        style="background-image: url('${project.image}')"
      ></div>

      <div class="project-overlay">
        <div class="project-meta">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
          </div>

          <div class="project-type">
            ${project.category}<br>${project.year}
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const behanceLink = document.querySelector("#behance-link");

  if (behanceLink && typeof SITE !== "undefined" && SITE.behance) {
    behanceLink.href = SITE.behance;
  }
});
