document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BASIC SITE
  ========================= */

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const behanceLink = document.getElementById("behance-link");

  if (behanceLink && typeof SITE !== "undefined") {
    behanceLink.href = SITE.behance;
  }


  /* =========================
     PROJECT GRID
  ========================= */

  const projectGrid = document.getElementById("project-grid");

  if (!projectGrid || typeof CATEGORIES === "undefined") {
    return;
  }

  CATEGORIES.forEach((category) => {

    if (!category.projects || !category.projects.length) {
      return;
    }


    /* =========================
       CATEGORY WRAPPER
    ========================= */

    const categorySection = document.createElement("div");

    categorySection.className = "category-block";


    /* =========================
       CATEGORY HEADER
    ========================= */

    const categoryHeader = document.createElement("div");

    categoryHeader.className = "section-heading";

    categoryHeader.innerHTML = `
      <div>
        <p class="eyebrow">${category.title}</p>
      </div>

      <p class="section-note">
        ${category.description}
      </p>
    `;

    categorySection.appendChild(categoryHeader);


    /* =========================
       ONE PROJECT CARD ONLY
    ========================= */

    const card = document.createElement("article");

    card.className = "project-card";


    let projectIndex = 0;
    let photoIndex = 0;

    let projectTimer;
    let photoTimer;


    /* =========================
       GET PROJECT IMAGES
    ========================= */

    const getImages = (project) => {

      if (
        Array.isArray(project.gallery) &&
        project.gallery.length
      ) {
        return project.gallery;
      }

      return [project.image];

    };


    /* =========================
       SHOW PROJECT
    ========================= */

    const showProject = (index, random = false) => {

      const projects = category.projects;

      if (!projects.length) {
        return;
      }


      if (random && projects.length > 1) {

        let nextIndex;

        do {

          nextIndex =
            Math.floor(Math.random() * projects.length);

        } while (nextIndex === projectIndex);

        projectIndex = nextIndex;

      } else {

        projectIndex =
          (index + projects.length) %
          projects.length;

      }


      const project =
        projects[projectIndex];

      const images =
        getImages(project);


      photoIndex = 0;


      /* =========================
         CARD CONTENT
      ========================= */

      card.innerHTML = `

        <div class="project-image slideshow">

          <div
            class="project-slide active"
            style="background-image:url('${images[0]}')">
          </div>

          <button
            class="slide-prev"
            type="button"
            aria-label="Previous project">
            ‹
          </button>

          <button
            class="slide-next"
            type="button"
            aria-label="Next project">
            ›
          </button>

          <div class="project-dots">

            ${images.map((image, i) => `
              <button
                class="project-dot ${i === 0 ? "active" : ""}"
                type="button"
                data-photo="${i}"
                aria-label="View image ${i + 1}">
              </button>
            `).join("")}

          </div>

        </div>


        <div class="project-overlay">

          <div class="project-meta">

            <div>

              <p class="project-title">
                ${project.title}
              </p>

              <p class="project-desc">
                ${project.description}
              </p>

            </div>

            <div class="project-type">
              ${project.year}
            </div>

          </div>

        </div>

      `;


      /* =========================
         ELEMENTS
      ========================= */

      const slide =
        card.querySelector(".project-slide");

      const dots =
        card.querySelectorAll(".project-dot");

      const previous =
        card.querySelector(".slide-prev");

      const next =
        card.querySelector(".slide-next");


      /* =========================
         SHOW PHOTO
      ========================= */

      const showPhoto = (index) => {

        photoIndex =
          (index + images.length) %
          images.length;


        slide.style.backgroundImage =
          `url('${images[photoIndex]}')`;


        dots.forEach((dot, i) => {

          dot.classList.toggle(
            "active",
            i === photoIndex
          );

        });

      };


      /* =========================
         PHOTO PREVIOUS
      ========================= */

      previous.addEventListener("click", (event) => {

        event.stopPropagation();

        showPhoto(photoIndex - 1);

        restartPhotoTimer();

      });


      /* =========================
         PHOTO NEXT
      ========================= */

      next.addEventListener("click", (event) => {

        event.stopPropagation();

        showPhoto(photoIndex + 1);

        restartPhotoTimer();

      });


      /* =========================
         PHOTO DOTS
      ========================= */

      dots.forEach((dot) => {

        dot.addEventListener("click", (event) => {

          event.stopPropagation();

          showPhoto(
            Number(dot.dataset.photo)
          );

          restartPhotoTimer();

        });

      });


      /* =========================
         PHOTO AUTO SLIDE
      ========================= */

      const startPhotoTimer = () => {

        clearInterval(photoTimer);

        if (images.length <= 1) {
          return;
        }

        photoTimer = setInterval(() => {

          showPhoto(photoIndex + 1);

        }, 3000);

      };


      const restartPhotoTimer = () => {

        clearInterval(photoTimer);

        startPhotoTimer();

      };


      startPhotoTimer();


      /* =========================
         OPEN GALLERY
      ========================= */

      card.addEventListener("click", () => {

        openGallery(
          project.title,
          project.description,
          images
        );

      });


      /* =========================
         PROJECT AUTO CHANGE
      ========================= */

      clearTimeout(projectTimer);

      if (category.projects.length > 1) {

        projectTimer = setTimeout(() => {

          showProject(
            projectIndex + 1
          );

        }, 9000);

      }

    };


    /* =========================
       FIRST PROJECT
    ========================= */

    showProject(0);


    /* =========================
       MANUAL PROJECT NAVIGATION
       Shift + Arrow buttons
    ========================= */

    categorySection.addEventListener(
      "dblclick",
      () => {

        showProject(
          projectIndex + 1,
          true
        );

      }
    );


    /* =========================
       ADD CARD
    ========================= */

    categorySection.appendChild(card);

    projectGrid.appendChild(categorySection);

  });


  /* =========================
     LIGHTBOX / GALLERY
  ========================= */

  function openGallery(title, description, images) {

    const existing =
      document.querySelector(".gallery-modal");

    if (existing) {
      existing.remove();
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


    const image =
      modal.querySelector(".gallery-main-image");

    const counter =
      modal.querySelector(".gallery-counter");


    const updateGallery = () => {

      image.src = images[current];

      image.alt =
        `${title} — image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    };


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
          (current + 1) %
          images.length;

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


    /* =========================
       KEYBOARD
    ========================= */

    const keyboardHandler = (event) => {

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

    };


    document.addEventListener(
      "keydown",
      keyboardHandler
    );

  }

});    categorySection.className = "project-category";


    /* =========================
       CATEGORY HEADER
    ========================= */

    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-heading";

    categoryHeader.innerHTML = `
      <div>
        <p class="eyebrow">${category.title}</p>
        <p class="category-description">
          ${category.description}
        </p>
      </div>
    `;

    categorySection.appendChild(categoryHeader);


    /* =========================
       CATEGORY PROJECT GRID
    ========================= */

    const categoryGrid = document.createElement("div");
    categoryGrid.className = "project-grid-inner";

    categorySection.appendChild(categoryGrid);


    /* =========================
       PROJECTS
    ========================= */

    category.projects.forEach((project) => {

      const images =
        Array.isArray(project.gallery) && project.gallery.length
          ? project.gallery
          : [project.image];

      const card = document.createElement("article");

      card.className = "project-card";


      /* =========================
         SLIDES
      ========================= */

      const imageSlides = images
        .map((src, index) => `
          <div
            class="project-slide ${index === 0 ? "active" : ""}"
            style="background-image: url('${src}')"
            data-index="${index}">
          </div>
        `)
        .join("");


      /* =========================
         DOTS
      ========================= */

      const dots = images
        .map((src, index) => `
          <button
            class="project-dot ${index === 0 ? "active" : ""}"
            type="button"
            data-slide="${index}"
            aria-label="View image ${index + 1}">
          </button>
        `)
        .join("");


      /* =========================
         CARD HTML
      ========================= */

      card.innerHTML = `

        <div class="project-image slideshow">

          ${imageSlides}

          <div class="project-slideshow-controls">

            <button
              class="slide-prev"
              type="button"
              aria-label="Previous image">
              ‹
            </button>

            <button
              class="slide-next"
              type="button"
              aria-label="Next image">
              ›
            </button>

          </div>

          <div class="project-dots">
            ${dots}
          </div>

        </div>

        <div class="project-overlay">

          <div class="project-meta">

            <div>

              <p class="project-title">
                ${project.title}
              </p>

              <p class="project-desc">
                ${project.description}
              </p>

            </div>

            <div class="project-type">
              ${project.year}
            </div>

          </div>

        </div>

      `;


      categoryGrid.appendChild(card);


      /* =========================
         SLIDESHOW
      ========================= */

      let currentSlide = 0;
      let autoSlide;

      const slides =
        card.querySelectorAll(".project-slide");

      const dotsElements =
        card.querySelectorAll(".project-dot");


      const showSlide = (index) => {

        if (!slides.length) {
          return;
        }

        currentSlide =
          (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          slide.classList.toggle(
            "active",
            i === currentSlide
          );
        });

        dotsElements.forEach((dot, i) => {
          dot.classList.toggle(
            "active",
            i === currentSlide
          );
        });

      };


      /* =========================
         AUTO SLIDE
      ========================= */

      const startAutoSlide = () => {

        if (images.length <= 1) {
          return;
        }

        clearInterval(autoSlide);

        autoSlide = setInterval(() => {
          showSlide(currentSlide + 1);
        }, 3500);

      };


      const restartAutoSlide = () => {
        clearInterval(autoSlide);
        startAutoSlide();
      };


      /* =========================
         PREVIOUS
      ========================= */

      const previousButton =
        card.querySelector(".slide-prev");

      if (previousButton) {

        previousButton.addEventListener("click", (event) => {

          event.stopPropagation();

          showSlide(currentSlide - 1);
          restartAutoSlide();

        });

      }


      /* =========================
         NEXT
      ========================= */

      const nextButton =
        card.querySelector(".slide-next");

      if (nextButton) {

        nextButton.addEventListener("click", (event) => {

          event.stopPropagation();

          showSlide(currentSlide + 1);
          restartAutoSlide();

        });

      }


      /* =========================
         DOTS
      ========================= */

      dotsElements.forEach((dot) => {

        dot.addEventListener("click", (event) => {

          event.stopPropagation();

          const index =
            Number(dot.dataset.slide);

          showSlide(index);
          restartAutoSlide();

        });

      });


      /* =========================
         HOVER PAUSE
      ========================= */

      card.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
      });

      card.addEventListener("mouseleave", () => {
        startAutoSlide();
      });


      /* =========================
         OPEN GALLERY
      ========================= */

      card.addEventListener("click", () => {

        openGallery(
          project.title,
          project.description,
          images
        );

      });


      startAutoSlide();

    });


    /* =========================
       ADD CATEGORY TO PAGE
    ========================= */

    projectGrid.appendChild(categorySection);

  });


  /* =========================
     LIGHTBOX GALLERY
  ========================= */

  function openGallery(title, description, images) {

    const existing =
      document.querySelector(".gallery-modal");

    if (existing) {
      existing.remove();
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


    const image =
      modal.querySelector(".gallery-main-image");

    const counter =
      modal.querySelector(".gallery-counter");


    const updateGallery = () => {

      image.src = images[current];

      image.alt =
        `${title} — image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    };


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


    /* =========================
       KEYBOARD
    ========================= */

    const keyboardHandler = (event) => {

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
          (current + 1) % images.length;

        updateGallery();

      }

      if (event.key === "ArrowLeft") {

        current =
          (current - 1 + images.length) %
          images.length;

        updateGallery();

      }

    };


    document.addEventListener(
      "keydown",
      keyboardHandler
    );

  }

});    categoryHeader.className = "category-heading";

    categoryHeader.innerHTML = `
      <div>
        <p class="eyebrow">${category.title}</p>
        <p class="category-description">
          ${category.description}
        </p>
      </div>
    `;

    projectGrid.appendChild(categoryHeader);


    /* Projects */

    category.projects.forEach((project) => {

      const images =
        Array.isArray(project.gallery) && project.gallery.length
          ? project.gallery
          : [project.image];

      const card = document.createElement("article");

      card.className = "project-card";
      card.dataset.projectIndex = projectIndex;

      /*
        Project image slideshow
      */

      const imageSlides = images
        .map((src, index) => {
          return `
            <div
              class="project-slide ${index === 0 ? "active" : ""}"
              style="background-image:url('${src}')"
              data-index="${index}">
            </div>
          `;
        })
        .join("");


      /*
        Dots
      */

      const dots = images
        .map((src, index) => {
          return `
            <button
              class="project-dot ${index === 0 ? "active" : ""}"
              type="button"
              data-slide="${index}"
              aria-label="View image ${index + 1}">
            </button>
          `;
        })
        .join("");


      card.innerHTML = `

        <div class="project-image slideshow">

          ${imageSlides}

          <div class="project-slideshow-controls">

            <button
              class="slide-prev"
              type="button"
              aria-label="Previous image">
              ‹
            </button>

            <button
              class="slide-next"
              type="button"
              aria-label="Next image">
              ›
            </button>

          </div>

          <div class="project-dots">
            ${dots}
          </div>

        </div>


        <div class="project-overlay">

          <div class="project-meta">

            <div>
              <p class="project-title">
                ${project.title}
              </p>

              <p class="project-desc">
                ${project.description}
              </p>
            </div>

            <div class="project-type">
              ${project.year}
            </div>

          </div>

        </div>

      `;


      projectGrid.appendChild(card);


      /* =========================
         SLIDESHOW LOGIC
      ========================= */

      let currentSlide = 0;

      const slides = card.querySelectorAll(".project-slide");
      const dotsElements = card.querySelectorAll(".project-dot");

      const showSlide = (index) => {

        if (!slides.length) return;

        currentSlide =
          (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          slide.classList.toggle(
            "active",
            i === currentSlide
          );
        });

        dotsElements.forEach((dot, i) => {
          dot.classList.toggle(
            "active",
            i === currentSlide
          );
        });

      };


      /* Previous */

      const previousButton =
        card.querySelector(".slide-prev");

      if (previousButton) {

        previousButton.addEventListener("click", (event) => {

          event.stopPropagation();

          showSlide(currentSlide - 1);

          restartAutoSlide();

        });

      }


      /* Next */

      const nextButton =
        card.querySelector(".slide-next");

      if (nextButton) {

        nextButton.addEventListener("click", (event) => {

          event.stopPropagation();

          showSlide(currentSlide + 1);

          restartAutoSlide();

        });

      }


      /* Dots */

      dotsElements.forEach((dot) => {

        dot.addEventListener("click", (event) => {

          event.stopPropagation();

          const index =
            Number(dot.dataset.slide);

          showSlide(index);

          restartAutoSlide();

        });

      });


      /* =========================
         AUTO SLIDESHOW
      ========================= */

      let autoSlide;

      const startAutoSlide = () => {

        if (images.length <= 1) {
          return;
        }

        autoSlide = setInterval(() => {

          showSlide(currentSlide + 1);

        }, 3500);

      };


      const restartAutoSlide = () => {

        clearInterval(autoSlide);

        startAutoSlide();

      };


      startAutoSlide();


      /* =========================
         PAUSE WHEN HOVER
      ========================= */

      card.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
      });

      card.addEventListener("mouseleave", () => {
        startAutoSlide();
      });


      /* =========================
         OPEN PROJECT GALLERY
      ========================= */

      card.addEventListener("click", () => {

        openGallery(
          project.title,
          project.description,
          images
        );

      });


      projectIndex++;

    });

  });


  /* =========================
     LIGHTBOX / GALLERY
  ========================= */

  function openGallery(title, description, images) {

    const existing =
      document.querySelector(".gallery-modal");

    if (existing) {
      existing.remove();
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


    const image =
      modal.querySelector(".gallery-main-image");

    const counter =
      modal.querySelector(".gallery-counter");


    const updateGallery = () => {

      image.src = images[current];

      image.alt = `${title} — image ${current + 1}`;

      counter.textContent =
        `${current + 1} / ${images.length}`;

    };


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
          (current + 1) %
          images.length;

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


    /* Keyboard */

    const keyboardHandler = (event) => {

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

    };


    document.addEventListener(
      "keydown",
      keyboardHandler
    );

  }

});
