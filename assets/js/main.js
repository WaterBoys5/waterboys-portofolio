document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BASIC SITE
  ========================= */

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


  /* =========================
     CLEAR PROJECT AREA
  ========================= */

  projectGrid.innerHTML = "";


  /* =========================
     CATEGORY CARDS
  ========================= */

  CATEGORIES.forEach((category) => {

    /*
     * Satu kategori = satu box.
     * Semua gallery dari semua project
     * di dalam kategori digabung menjadi
     * satu kumpulan gambar.
     */

    const images = [];

    category.projects.forEach((project) => {

      if (
        Array.isArray(project.gallery) &&
        project.gallery.length
      ) {

        project.gallery.forEach((image) => {
          images.push(image);
        });

      } else if (project.image) {

        images.push(project.image);

      }

    });


    /* Hapus gambar duplikat */

    const uniqueImages = [...new Set(images)];


    if (!uniqueImages.length) {
      return;
    }


    /* =========================
       CATEGORY SECTION
    ========================= */

    const categorySection =
      document.createElement("section");

    categorySection.className =
      "project-category";


    /* =========================
       CATEGORY HEADER
    ========================= */

    const categoryHeader =
      document.createElement("div");

    categoryHeader.className =
      "category-heading";

    categoryHeader.innerHTML = `
      <div>
        <p class="eyebrow">
          ${category.title}
        </p>

        <p class="category-description">
          ${category.description}
        </p>
      </div>
    `;

    categorySection.appendChild(categoryHeader);


    /* =========================
       ONE BOX FOR CATEGORY
    ========================= */

    const categoryGrid =
      document.createElement("div");

    categoryGrid.className =
      "project-grid-inner";


    const card =
      document.createElement("article");

    card.className =
      "project-card";


    /* =========================
       RANDOM START IMAGE
    ========================= */

    let current =
      Math.floor(
        Math.random() * uniqueImages.length
      );


    card.innerHTML = `
      <div class="project-image"></div>

      <div class="project-overlay">

        <div class="project-meta">

          <div>
            <p class="project-title">
              ${category.title}
            </p>

            <p class="project-desc">
              ${category.description}
            </p>
          </div>

          <div class="project-type">
            ${uniqueImages.length} IMAGES
          </div>

        </div>

      </div>
    `;


    const image =
      card.querySelector(".project-image");


    /* =========================
       SHOW IMAGE
    ========================= */

    function showRandomImage() {

      if (uniqueImages.length <= 1) {
        return;
      }

      let next;

      do {

        next =
          Math.floor(
            Math.random() *
            uniqueImages.length
          );

      } while (next === current);


      current = next;

      image.style.backgroundImage =
        `url("${uniqueImages[current]}")`;
    }


    /* Initial image */

    image.style.backgroundImage =
      `url("${uniqueImages[current]}")`;


    /* =========================
       RANDOM SLIDESHOW
    ========================= */

    if (uniqueImages.length > 1) {

      setInterval(() => {

        showRandomImage();

      }, 3500);

    }


    /* =========================
       OPEN CATEGORY GALLERY
    ========================= */

    card.addEventListener("click", () => {

      openGallery(
        category.title,
        category.description,
        uniqueImages
      );

    });


    categoryGrid.appendChild(card);

    categorySection.appendChild(categoryGrid);

    projectGrid.appendChild(categorySection);

  });


  /* =========================
     GALLERY
  ========================= */

  function openGallery(
    title,
    description,
    images
  ) {

    const oldModal =
      document.querySelector(".gallery-modal");

    if (oldModal) {
      oldModal.remove();
    }


    let current = 0;


    const modal =
      document.createElement("div");

    modal.className =
      "gallery-modal";


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

            <h3>
              ${title}
            </h3>

            <p>
              ${description}
            </p>

          </div>

          <span class="gallery-counter">
            1 / ${images.length}
          </span>

        </div>

      </div>

    `;


    document.body.appendChild(modal);


    const mainImage =
      modal.querySelector(
        ".gallery-main-image"
      );


    const counter =
      modal.querySelector(
        ".gallery-counter"
      );


    /* =========================
       UPDATE GALLERY
    ========================= */

    function updateGallery() {

      mainImage.src =
        images[current];

      mainImage.alt =
        `${title} - image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    }


    /* =========================
       PREVIOUS
    ========================= */

    modal
      .querySelector(".gallery-prev")
      .addEventListener("click", () => {

        current =
          (current - 1 + images.length) %
          images.length;

        updateGallery();

      });


    /* =========================
       NEXT
    ========================= */

    modal
      .querySelector(".gallery-next")
      .addEventListener("click", () => {

        current =
          (current + 1) %
          images.length;

        updateGallery();

      });


    /* =========================
       CLOSE
    ========================= */

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


    /* =========================
       KEYBOARD
    ========================= */

    function keyboardHandler(event) {

      if (!document.body.contains(modal)) {

        document.removeEventListener(
          "keydown",
          keyboardHandler
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

        updateGallery();

      }


      if (event.key === "ArrowLeft") {

        current =
          (current - 1 + images.length) %
          images.length;

        updateGallery();

      }

    }


    document.addEventListener(
      "keydown",
      keyboardHandler
    );

  }

});
