document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#project-grid");

  if (!grid) return;

  renderCategories(grid);

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


function renderCategories(grid) {
  grid.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const card = document.createElement("article");

    card.className = "project-card";
    card.style.cursor = "pointer";

    const firstProject = category.projects[0];

    if (firstProject) {
      card.style.backgroundImage =
        `url('${firstProject.image}')`;
    }

    card.innerHTML = `
      <div
        class="project-image"
        style="
          background-image:url('${firstProject ? firstProject.image : ""}')
        "
      ></div>

      <div class="project-overlay">
        <div class="project-meta">
          <div>
            <h3 class="project-title">
              ${category.title}
            </h3>

            <p class="project-desc">
              ${category.description}
            </p>
          </div>

          <div class="project-type">
            ${category.projects.length} PROJECT
            ${category.projects.length !== 1 ? "S" : ""}
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openCategory(category);
    });

    grid.appendChild(card);
  });
}


function openCategory(category) {
  const overlay = document.createElement("div");

  overlay.id = "category-overlay";

  overlay.style.cssText = `
    position:fixed;
    inset:0;
    z-index:9999;
    background:rgba(0,0,0,.96);
    overflow-y:auto;
    padding:40px 25px 60px;
    box-sizing:border-box;
  `;

  overlay.innerHTML = `
    <div style="
      max-width:1400px;
      margin:auto;
    ">

      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:35px;
      ">

        <div>
          <p style="
            margin:0 0 8px;
            color:rgba(255,255,255,.5);
            font-size:13px;
            letter-spacing:1.5px;
          ">
            CATEGORY
          </p>

          <h2 style="
            margin:0;
            color:white;
            font-size:32px;
          ">
            ${category.title}
          </h2>
        </div>

        <button
          id="close-category"
          style="
            width:48px;
            height:48px;
            border-radius:50%;
            border:1px solid rgba(255,255,255,.3);
            background:rgba(255,255,255,.1);
            color:white;
            font-size:28px;
            cursor:pointer;
          "
        >
          ×
        </button>

      </div>

      <div style="
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
        gap:20px;
      ">
        ${category.projects.map((project) => `
          <article
            class="category-project"
            data-project="${project.title}"
            style="
              position:relative;
              min-height:340px;
              border-radius:16px;
              overflow:hidden;
              cursor:pointer;
              background:#111;
            "
          >

            <img
              src="${project.image}"
              alt="${project.title}"
              loading="lazy"
              style="
                width:100%;
                height:100%;
                min-height:340px;
                object-fit:cover;
                display:block;
              "
            >

            <div style="
              position:absolute;
              inset:auto 0 0 0;
              padding:60px 20px 20px;
              background:
                linear-gradient(
                  transparent,
                  rgba(0,0,0,.9)
                );
            ">

              <h3 style="
                margin:0;
                color:white;
                font-size:22px;
              ">
                ${project.title}
              </h3>

              <p style="
                margin:6px 0 0;
                color:rgba(255,255,255,.65);
                font-size:14px;
              ">
                ${project.year}
              </p>

            </div>

          </article>
        `).join("")}
      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  document
    .querySelector("#close-category")
    .addEventListener("click", () => {
      overlay.remove();
      document.body.style.overflow = "";
    });

  overlay
    .querySelectorAll(".category-project")
    .forEach((card, index) => {
      card.addEventListener("click", () => {
        openProject(category.projects[index]);
      });
    });
}


function openProject(project) {
  const images =
    project.gallery && project.gallery.length
      ? project.gallery
      : [project.image];

  const overlay = document.createElement("div");

  overlay.id = "project-gallery-overlay";

  overlay.style.cssText = `
    position:fixed;
    inset:0;
    z-index:10000;
    background:rgba(0,0,0,.97);
    overflow-y:auto;
    padding:40px 25px 60px;
    box-sizing:border-box;
  `;

  overlay.innerHTML = `
    <div style="
      max-width:1400px;
      margin:auto;
    ">

      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:30px;
      ">

        <div>
          <p style="
            margin:0 0 8px;
            color:rgba(255,255,255,.5);
            font-size:13px;
            letter-spacing:1.5px;
          ">
            ${project.category || "PROJECT"}
          </p>

          <h2 style="
            margin:0;
            color:white;
            font-size:32px;
          ">
            ${project.title}
          </h2>

          <p style="
            margin:6px 0 0;
            color:rgba(255,255,255,.6);
          ">
            ${project.year}
          </p>
        </div>

        <button
          id="close-gallery"
          style="
            width:48px;
            height:48px;
            border-radius:50%;
            border:1px solid rgba(255,255,255,.3);
            background:rgba(255,255,255,.1);
            color:white;
            font-size:28px;
            cursor:pointer;
          "
        >
          ×
        </button>

      </div>

      <div style="
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
        gap:20px;
      ">
        ${images.map((image) => `
          <img
            src="${image}"
            alt="${project.title}"
            loading="lazy"
            style="
              width:100%;
              height:auto;
              display:block;
              border-radius:14px;
            "
          >
        `).join("")}
      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  document
    .querySelector("#close-gallery")
    .addEventListener("click", () => {
      overlay.remove();
      document.body.style.overflow = "";
    });
}
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

  overlay.style.cssText = `
    position:fixed;
    inset:0;
    z-index:9999;
    background:rgba(0,0,0,.96);
    overflow-y:auto;
    padding:40px 25px 60px;
    box-sizing:border-box;
  `;

  overlay.innerHTML = `
    <div style="
      max-width:1400px;
      margin:auto;
    ">

      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:30px;
      ">
        <div>
          <h2 style="
            margin:0;
            color:white;
            font-size:32px;
          ">
            ${project.title}
          </h2>

          <p style="
            margin:6px 0 0;
            color:rgba(255,255,255,.6);
          ">
            ${project.category} · ${project.year}
          </p>
        </div>

        <button
          id="close-gallery"
          style="
            width:48px;
            height:48px;
            border-radius:50%;
            border:1px solid rgba(255,255,255,.3);
            background:rgba(255,255,255,.1);
            color:white;
            font-size:28px;
            cursor:pointer;
          "
        >
          ×
        </button>
      </div>

      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
        gap:20px;
      ">
        ${images.map((image) => `
          <img
            src="${image}"
            alt="${project.title}"
            loading="lazy"
            style="
              width:100%;
              height:auto;
              display:block;
              border-radius:14px;
            "
          >
        `).join("")}
      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  document
    .querySelector("#close-gallery")
    .addEventListener("click", () => {
      overlay.remove();
      document.body.style.overflow = "";
    });
}
