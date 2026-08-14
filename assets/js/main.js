assets/js/main.js  ========================= */

  CATEGORIES.forEach((category, categoryIndex) => {

    const categoryCard = document.createElement("article");

    categoryCard.className = "category-card";


    /* Collect ALL images from category
       ONLY for category thumbnail */

    const categoryImages = [];

    if (Array.isArray(category.projects)) {

      category.projects.forEach((project) => {

        if (
          Array.isArray(project.gallery) &&
          project.gallery.length
        ) {

          categoryImages.push(
            ...project.gallery
          );

        } else if (project.image) {

          categoryImages.push(
            project.image
          );

        }

      });

    }


    categoryCard.innerHTML = `
      <div class="category-image"></div>

      <div class="category-overlay">

        <div>

          <p class="category-number">
            ${String(categoryIndex + 1).padStart(2, "0")}
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


    projectGrid.appendChild(
      categoryCard
    );


    /* =========================
       CATEGORY SLIDESHOW
       RANDOM IMAGE
    ========================= */

    const categoryImage =
      categoryCard.querySelector(
        ".category-image"
      );

    let currentImage = 0;


    if (
      categoryImage &&
      categoryImages.length > 0
    ) {

      currentImage =
        Math.floor(
          Math.random() *
          categoryImages.length
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
              Math.random() *
              categoryImages.length
            );

        } while (
          nextImage === currentImage
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

    /* Remove existing category modal */

    closeCategory();


    /* Close any old gallery */

    const oldGallery =
      document.querySelector(
        ".gallery-modal"
      );

    if (oldGallery) {
      oldGallery.remove();
    }


    const modal =
      document.createElement("div");

    modal.className =
      "category-modal";


    modal.innerHTML = `

      <div class="category-modal-backdrop"></div>

      <div
        class="category-modal-window"
        role="dialog"
        aria-modal="true"
      >

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


    document.body.appendChild(
      modal
    );


    const projectsContainer =
      modal.querySelector(
        ".category-projects"
      );


    /* =========================
       PROJECTS INSIDE CATEGORY
       NO SLIDESHOW HERE
    ========================= */

    if (
      Array.isArray(category.projects)
    ) {

      category.projects.forEach(
        (project) => {

          const images =
            Array.isArray(project.gallery) &&
            project.gallery.length
              ? project.gallery
              : project.image
                ? [project.image]
                : [];


          const projectCard =
            document.createElement(
              "article"
            );

          projectCard.className =
            "category-project-card";


          projectCard.innerHTML = `

            <div
              class="category-project-image"
              style="background-image:url('${images[0] || ""}')">
            </div>

            <div class="category-project-info">

              <div>

                <h3>
                  ${project.title || ""}
                </h3>

                <p>
                  ${project.description || ""}
                </p>

              </div>

              <span>
                ${project.year || ""}
              </span>

            </div>

          `;


          projectsContainer.appendChild(
            projectCard
          );


          /* =========================
             OPEN PROJECT GALLERY
          ========================= */

          if (images.length > 0) {

            projectCard.addEventListener(
              "click",
              (event) => {

                event.preventDefault();
                event.stopPropagation();

                openGallery(
                  project.title || "",
                  project.description || "",
                  images
                );

              }
            );

          }

        }
      );

    }


    /* =========================
       CLOSE BUTTON
    ========================= */

    const closeButton =
      modal.querySelector(
        ".category-modal-close"
      );

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          closeCategory();

        }
      );

    }


    /* =========================
       BACKDROP
    ========================= */

    const backdrop =
      modal.querySelector(
        ".category-modal-backdrop"
      );

    if (backdrop) {

      backdrop.addEventListener(
        "click",
        closeCategory
      );

    }


    /* =========================
       ESC KEY
    ========================= */

    categoryKeyboard = (event) => {

      if (event.key === "Escape") {

        closeCategory();

      }

    };


    document.addEventListener(
      "keydown",
      categoryKeyboard
    );

  }


  /* =========================
     CLOSE CATEGORY
  ========================= */

  function closeCategory() {

    const modal =
      document.querySelector(
        ".category-modal"
      );


    if (modal) {
      modal.remove();
    }


    if (categoryKeyboard) {

      document.removeEventListener(
        "keydown",
        categoryKeyboard
      );

      categoryKeyboard = null;

    }

  }


  /* =========================
     PROJECT GALLERY
  ========================= */

  function openGallery(
    title,
    description,
    images
  ) {

    if (
      !Array.isArray(images) ||
      images.length === 0
    ) {
      return;
    }


    /* Remove old gallery */

    const oldGallery =
      document.querySelector(
        ".gallery-modal"
      );

    if (oldGallery) {
      oldGallery.remove();
    }


    /* Remove category keyboard
       while gallery is open */

    if (categoryKeyboard) {

      document.removeEventListener(
        "keydown",
        categoryKeyboard
      );

      categoryKeyboard = null;

    }


    let current = 0;


    const modal =
      document.createElement("div");

    modal.className =
      "gallery-modal";


    modal.innerHTML = `

      <div class="gallery-backdrop"></div>

      <div
        class="gallery-window"
        role="dialog"
        aria-modal="true"
      >

        <button
          class="gallery-close"
          type="button"
          aria-label="Close">
          ×
        </button>


        <div class="gallery-image-wrap">

          <img
            class="gallery-main-image"
            src="${images[0]}"
            alt="${title}"
          >

          <button
            class="gallery-prev"
            type="button"
            aria-label="Previous image">
            ‹
          </button>

          <button
            class="gallery-next"
            type="button"
            aria-label="Next image">
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


    /* =========================
       UPDATE IMAGE
    ========================= */

    function updateGallery() {

      image.src =
        images[current];

      image.alt =
        `${title} - image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    }


    /* =========================
       PREVIOUS
    ========================= */

    const previousButton =
      modal.querySelector(
        ".gallery-prev"
      );

    if (previousButton) {

      previousButton.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();

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

    }


    /* =========================
       NEXT
    ========================= */

    const nextButton =
      modal.querySelector(
        ".gallery-next"
      );

    if (nextButton) {

      nextButton.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          current =
            (
              current +
              1
            ) %
            images.length;

          updateGallery();

        }
      );

    }


    /* =========================
       CLOSE GALLERY
    ========================= */

    function closeGallery() {

      if (modal) {
        modal.remove();
      }


      if (galleryKeyboard) {

        document.removeEventListener(
          "keydown",
          galleryKeyboard
        );

        galleryKeyboard = null;

      }

    }


    const closeButton =
      modal.querySelector(
        ".gallery-close"
      );

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          closeGallery();

        }
      );

    }


    /* =========================
       BACKDROP
    ========================= */

    const backdrop =
      modal.querySelector(
        ".gallery-backdrop"
      );

    if (backdrop) {

      backdrop.addEventListener(
        "click",
        closeGallery
      );

    }


    /* =========================
       KEYBOARD
    ========================= */

    galleryKeyboard = (event) => {

      if (
        !document.body.contains(modal)
      ) {

        document.removeEventListener(
          "keydown",
          galleryKeyboard
        );

        galleryKeyboard = null;

        return;

      }


      if (event.key === "Escape") {

        closeGallery();

        return;

      }


      if (event.key === "ArrowRight") {

        current =
          (
            current +
            1
          ) %
          images.length;

        updateGallery();

        return;

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

    };


    document.addEventListener(
      "keydown",
      galleryKeyboard
    );


    /* Make sure first image is loaded */

    updateGallery();

  }

});
