document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#project-grid");

  if (!grid) return;

  PROJECTS.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <div
        class="project-image"
        style="background-image:url('${project.image}')"
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

    card.addEventListener("click", () => {
      openProject(project);
    });

    grid.appendChild(card);
  });

  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const behanceLink = document.querySelector("#behance-link");

  if (
    behanceLink &&
    typeof SITE !== "undefined" &&
    SITE.behance
  ) {
    behanceLink.href = SITE.behance;
    behanceLink.target = "_blank";
    behanceLink.rel = "noopener noreferrer";
  }
});


function openProject(project) {
  const images =
    project.gallery && project.gallery.length
      ? project.gallery
      : [project.image];

  const overlay = document.createElement("div");

  overlay.id = "project-gallery-overlay";

  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.94);
    overflow-y: auto;
    padding: 40px 30px 60px;
    box-sizing: border-box;
  `;

  overlay.innerHTML = `
    <div style="
      max-width: 1400px;
      margin: 0 auto;
    ">

      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        position: sticky;
        top: 0;
        z-index: 2;
        padding: 10px 0;
      ">

        <div>
          <h2 style="
            margin: 0;
            color: white;
            font-size: 32px;
            font-weight: 600;
          ">
            ${project.title}
          </h2>

          <p style="
            margin: 6px 0 0;
            color: rgba(255,255,255,0.6);
            font-size: 14px;
          ">
            ${project.category} · ${project.year}
          </p>
        </div>

        <button
          id="close-project-gallery"
          aria-label="Close gallery"
          style="
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.25);
            background: rgba(255,255,255,0.08);
            color: white;
            font-size: 28px;
            cursor: pointer;
          "
        >
          ×
        </button>

      </div>

      <div style="
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
      ">
        ${images.map((image) => `
          <div style="
            background: #111;
            border-radius: 16px;
            overflow: hidden;
          ">
            <img
              src="${image}"
              alt="${project.title}"
              loading="lazy"
              style="
                width: 100%;
                height: auto;
                display: block;
              "
            >
          </div>
        `).join("")}
      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const closeButton =
    document.querySelector("#close-project-gallery");

  closeButton.addEventListener("click", closeProject);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeProject();
    }
  });

  function closeProject() {
    overlay.remove();
    document.body.style.overflow = "";
  }
}
