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
     MAIN CATEGORY CARDS
     ONLY THESE SLIDESHOW
  ========================= */

  CATEGORIES.forEach((category) => {

    const categoryCard = document.createElement("article");

    categoryCard.className = "category-card";


    /* Collect ALL images from this category
       ONLY for the category thumbnail */

    const categoryImages = [];

    category.projects.forEach((project) => {

      if (
        Array.isArray(project.gallery) &&
        project.gallery.length
      ) {
        categoryImages.push(...project.gallery);
      } else if (project.image) {
        categoryImages.push(project.image);
      }

    });


    categoryCard.innerHTML = `
      <div class="category-image"></div>

      <div class="category-overlay">

        <div>
          <p class="category-number">
            ${String(CATEGORIES.indexOf(category) + 1).padStart(2, "0")}
          </p>

          <h3 class="category-title">
            ${category.title}
          </h3>

          <p class="category-description">
            ${category.description}
          </p>
        </div>

        <span class="category-arrow">↗</span>

      </div>
    `;


    projectGrid.appendChild(categoryCard);


    /* =========================
       CATEGORY SLIDESHOW
       RANDOM IMAGE
    ========================= */

    const categoryImage =
      categoryCard.querySelector(".category-image");

    let currentImage = 0;


    if (categoryImages.length > 0) {

      currentImage =
        Math.floor(
          Math.random() * categoryImages.length
        );

      categoryImage.style.backgroundImage =
        `url("${categoryImages[currentImage]}")`;
    }


    if (categoryImages.length > 1) {

      setInterval(() => {

        let nextImage;

        do {

          nextImage =
            Math.floor(
              Math.random() * categoryImages.length
            );

        } while (
          nextImage === currentImage &&
          categoryImages.length > 1
        );


        currentImage = nextImage;


        categoryImage.classList.add(
          "changing"
        );


        setTimeout(() => {

          categoryImage.style.backgroundImage =
            `url("${categoryImages[currentImage]}")`;

          categoryImage.classList.remove(
            "changing"
          );

        }, 250);

      }, 3500);

    }


    /* =========================
       OPEN CATEGORY
    ========================= */

    categoryCard.addEventListener(
      "click",
      () => {

        openCategory(category);

      }
    );

  });


  /* =========================
     CATEGORY WINDOW
  ========================= */

  function openCategory(category) {

    closeCategory();


    const modal =
      document.createElement("div");

    modal.className =
      "category-modal";


    modal.innerHTML = `

      <div class="category-modal-backdrop"></div>

      <div class="category-modal-window">

        <div class="category-modal-header">

          <div>

            <p class="eyebrow">
              PROJECTS
            </p>

            <h2>
              ${category.title}
            </h2>

            <p>
              ${category.description}
            </p>

          </div>

          <button
            class="category-modal-close"
            type="button"
            aria-label="Close">
            ×
          </button>

        </div>


        <div class="category-projects"></div>

      </div>

    `;


    document.body.appendChild(modal);


    const projectsContainer =
      modal.querySelector(
        ".category-projects"
      );


    /* =========================
       PROJECTS INSIDE CATEGORY
       NO SLIDESHOW HERE
    ========================= */

    category.projects.forEach((project) => {

      const images =
        Array.isArray(project.gallery) &&
        project.gallery.length
          ? project.gallery
          : [project.image];


      const projectCard =
        document.createElement("article");

      projectCard.className =
        "category-project-card";


      projectCard.innerHTML = `

        <div
          class="category-project-image"
          style="background-image:url('${images[0]}')">
        </div>

        <div class="category-project-info">

          <div>

            <h3>
              ${project.title}
            </h3>

            <p>
              ${project.description}
            </p>

          </div>

          <span>
            ${project.year}
          </span>

        </div>

      `;


      projectsContainer.appendChild(
        projectCard
      );


      /* =========================
         OPEN PROJECT GALLERY
      ========================= */

      projectCard.addEventListener(
        "click",
        () => {

          openGallery(
            project.title,
            project.description,
            images
          );

        }
      );

    });


    /* CLOSE */

    modal
      .querySelector(
        ".category-modal-close"
      )
      .addEventListener(
        "click",
        closeCategory
      );


    modal
      .querySelector(
        ".category-modal-backdrop"
      )
      .addEventListener(
        "click",
        closeCategory
      );


    document.addEventListener(
      "keydown",
      categoryKeyboard
    );


    function categoryKeyboard(event) {

      if (event.key === "Escape") {

        closeCategory();

      }

    }

  }


  function closeCategory() {

    const modal =
      document.querySelector(
        ".category-modal"
      );


    if (modal) {
      modal.remove();
    }


    document.removeEventListener(
      "keydown",
      categoryKeyboard
    );

  }


  /* =========================
     PROJECT GALLERY
  ========================= */

  function openGallery(
    title,
    description,
    images
  ) {

    const oldGallery =
      document.querySelector(
        ".gallery-modal"
      );


    if (oldGallery) {
      oldGallery.remove();
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


    document.body.appendChild(
      modal
    );


    const image =
      modal.querySelector(
        ".gallery-main-image"
      );


    const counter =
      modal.querySelector(
        ".gallery-counter"
      );


    function updateGallery() {

      image.src =
        images[current];

      image.alt =
        `${title} - image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    }


    /* PREVIOUS */

    modal
      .querySelector(
        ".gallery-prev"
      )
      .addEventListener(
        "click",
        () => {

          current =
            (
              current -
              1 +
              images.length
            ) %
            images.length;

          updateGallery();

        }
      );


    /* NEXT */

    modal
      .querySelector(
        ".gallery-next"
      )
      .addEventListener(
        "click",
        () => {

          current =
            (
              current +
              1
            ) %
            images.length;

          updateGallery();

        }
      );


    /* CLOSE */

    modal
      .querySelector(
        ".gallery-close"
      )
      .addEventListener(
        "click",
        () => {

          modal.remove();

        }
      );


    modal
      .querySelector(
        ".gallery-backdrop"
      )
      .addEventListener(
        "click",
        () => {

          modal.remove();

        }
      );


    /* KEYBOARD */

    function keyboard(event) {

      if (
        !document.body.contains(modal)
      ) {

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
          (
            current + 1
          ) %
          images.length;

        updateGallery();

      }


      if (event.key === "ArrowLeft") {

        current =
          (
            current -
            1 +
            images.length
          ) %
          images.length;

        updateGallery();

      }

    }


    document.addEventListener(
      "keydown",
      keyboard
    );

  }

});
