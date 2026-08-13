document.addEventListener("DOMContentLoaded", () => {

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const behance = document.getElementById("behance-link");
  if (behance && typeof SITE !== "undefined") {
    behance.href = SITE.behance;
  }

  const grid = document.getElementById("project-grid");

  if (!grid || typeof CATEGORIES === "undefined") return;

  CATEGORIES.forEach(category => {

    const section = document.createElement("section");
    section.className = "project-category";

    section.innerHTML = `
      <div class="section-heading">
        <div>
          <p class="eyebrow">${category.title}</p>
          <p class="section-note">${category.description}</p>
        </div>
      </div>
    `;

    const projects = document.createElement("div");
    projects.className = "project-grid";

    category.projects.forEach(project => {

      const images =
        Array.isArray(project.gallery) && project.gallery.length
          ? project.gallery
          : [project.image];

      const card = document.createElement("article");
      card.className = "project-card";

      const image = document.createElement("div");
      image.className = "project-image";

      image.style.backgroundImage =
        `url("${images[0]}")`;

      const overlay = document.createElement("div");
      overlay.className = "project-overlay";

      overlay.innerHTML = `
        <div class="project-meta">
          <div>
            <p class="project-title">${project.title}</p>
            <p class="project-desc">${project.description}</p>
          </div>

          <div class="project-type">
            ${project.year}
          </div>
        </div>
      `;

      card.appendChild(image);
      card.appendChild(overlay);
      projects.appendChild(card);

      /*
       * RANDOM SLIDESHOW
       */

      if (images.length > 1) {

        let current = 0;

        setInterval(() => {

          let next;

          do {
            next = Math.floor(
              Math.random() * images.length
            );
          } while (
            images.length > 1 &&
            next === current
          );

          current = next;

          image.style.backgroundImage =
            `url("${images[current]}")`;

        }, 3500);
      }

      /*
       * OPEN GALLERY
       */

      card.addEventListener("click", () => {
        openGallery(
          project.title,
          project.description,
          images
        );
      });

    });

    section.appendChild(projects);
    grid.appendChild(section);

  });


  function openGallery(title, description, images) {

    const old = document.querySelector(".gallery-modal");
    if (old) old.remove();

    let current = 0;

    const modal = document.createElement("div");
    modal.className = "gallery-modal";

    modal.innerHTML = `
      <div class="gallery-backdrop"></div>

      <div class="gallery-window">

        <button class="gallery-close">
          ×
        </button>

        <div class="gallery-image-wrap">

          <img
            class="gallery-main-image"
            src="${images[0]}"
            alt="${title}"
          >

          <button class="gallery-prev">
            ‹
          </button>

          <button class="gallery-next">
            ›
          </button>

        </div>

        <div class="gallery-info">

          <div>
            <h3>${title}</h3>
            <p>${description}</p>
          </div>

          <span class="gallery-counter">
            1 / ${images.length}
          </span>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    const mainImage =
      modal.querySelector(".gallery-main-image");

    const counter =
      modal.querySelector(".gallery-counter");


    function update() {

      mainImage.src = images[current];

      mainImage.alt =
        `${title} - image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    }


    modal
      .querySelector(".gallery-prev")
      .addEventListener("click", () => {

        current =
          (current - 1 + images.length) %
          images.length;

        update();

      });


    modal
      .querySelector(".gallery-next")
      .addEventListener("click", () => {

        current =
          (current + 1) %
          images.length;

        update();

      });


    modal
      .querySelector(".gallery-close")
      .addEventListener("click", () => {
        modal.remove();
      });


    modal
      .querySelector(".gallery-backdrop")
      .addEventListener("click", () => {
        modal.remove();
      });


    function keyboard(event) {

      if (!document.body.contains(modal)) {
        document.removeEventListener(
          "keydown",
          keyboard
        );
        return;
      }

      if (event.key === "Escape") {
        modal.remove();
      }

      if (event.key === "ArrowRight") {

        current =
          (current + 1) %
          images.length;

        update();

      }

      if (event.key === "ArrowLeft") {

        current =
          (current - 1 + images.length) %
          images.length;

        update();

      }

    }

    document.addEventListener(
      "keydown",
      keyboard
    );

  }

});
