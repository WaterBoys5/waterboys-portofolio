document.addEventListener("DOMContentLoaded", () => {

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const behance = document.getElementById("behance-link");

  if (behance && typeof SITE !== "undefined") {
    behance.href = SITE.behance;
  }

  const projectGrid = document.getElementById("project-grid");

  if (!projectGrid || typeof CATEGORIES === "undefined") {
    return;
  }

  CATEGORIES.forEach((category) => {

    const categorySection = document.createElement("section");
    categorySection.className = "project-category";

    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-heading";

    categoryHeader.innerHTML = `
      <p class="eyebrow">${category.title}</p>
      <p class="category-description">${category.description}</p>
    `;

    categorySection.appendChild(categoryHeader);

    const categoryGrid = document.createElement("div");
    categoryGrid.className = "project-grid-inner";

    categorySection.appendChild(categoryGrid);

    category.projects.forEach((project) => {

      const images =
        Array.isArray(project.gallery) && project.gallery.length
          ? project.gallery
          : [project.image];

      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <div class="project-image"></div>

        <div class="project-overlay">
          <div class="project-meta">

            <div>
              <p class="project-title">${project.title}</p>
              <p class="project-desc">${project.description}</p>
            </div>

            <div class="project-type">
              ${project.year}
            </div>

          </div>
        </div>
      `;

      const image = card.querySelector(".project-image");

      let current = 0;

      image.style.backgroundImage =
        `url("${images[current]}")`;

      /*
       * RANDOM THUMBNAIL
       */

      if (images.length > 1) {

        setInterval(() => {

          let next;

          do {
            next = Math.floor(
              Math.random() * images.length
            );
          } while (next === current);

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

      categoryGrid.appendChild(card);

    });

    projectGrid.appendChild(categorySection);

  });


  /*
   * GALLERY
   */

  function openGallery(title, description, images) {

    const oldModal =
      document.querySelector(".gallery-modal");

    if (oldModal) {
      oldModal.remove();
    }

    let current = 0;

    const modal =
      document.createElement("div");

    modal.className = "gallery-modal";

    modal.innerHTML = `
      <div class="gallery-backdrop"></div>

      <div class="gallery-window">

        <button
          class="gallery-close"
          type="button">
          ×
        </button>

        <div class="gallery-image-wrap">

          <img
            class="gallery-main-image"
            src="${images[0]}"
            alt="${title}">

          <button
            class="gallery-prev"
            type="button">
            ‹
          </button>

          <button
            class="gallery-next"
            type="button">
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


    function updateGallery() {

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

        updateGallery();

      });


    modal
      .querySelector(".gallery-next")
      .addEventListener("click", () => {

        current =
          (current + 1) % images.length;

        updateGallery();

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

  }

});
