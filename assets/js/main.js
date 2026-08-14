const SITE = {
  behance: "https://www.behance.net/waterboys1"
};


/* =========================
   CATEGORIES
========================= */

const CATEGORIES = [
  {
    title: "DOCUMENTATION",

    description:
      "Live performances, events, and visual documentation.",

    projects: [
      {
        title: "Stereo Wall",

        year: "2026",

        description:
          "Visual documentation of Stereo Wall at Trilogigs 2025.",

        images: [
          "assets/images/documentation/stereo-wall-01.jpg",
          "assets/images/documentation/stereo-wall-02.jpg",
          "assets/images/documentation/stereo-wall-03.jpg",
          "assets/images/documentation/stereo-wall-04.jpg",
          "assets/images/documentation/stereo-wall-05.jpg",
          "assets/images/documentation/stereo-wall-06.jpg",
          "assets/images/documentation/stereo-wall-07.jpg",
          "assets/images/documentation/stereo-wall-08.jpg",
          "assets/images/documentation/stereo-wall-09.jpg",
          "assets/images/documentation/stereo-wall-10.jpg",
          "assets/images/documentation/stereo-wall-11.jpg",
          "assets/images/documentation/stereo-wall-12.jpg",
          "assets/images/documentation/stereo-wall-13.jpg",
          "assets/images/documentation/stereo-wall-14.jpg"
        ]
      }
    ]
  },


  {
    title: "PRODUCT PHOTOGRAPHY",

    description:
      "Product, campaign, catalog, and commercial photography.",

    projects: []
  },


  {
    title: "PORTRAIT/FASHION",

    description:
      "Portraits, fashion, creative portraits, and visual storytelling.",

    projects: []
  }
];


/* =========================
   STATE
========================= */

let currentCategoryIndex = 0;
let currentProjectIndex = 0;
let currentImageIndex = 0;


/* =========================
   ELEMENTS
========================= */

const categoryGrid =
  document.getElementById("category-grid");

const categoryModal =
  document.getElementById("category-modal");

const categoryModalNumber =
  document.getElementById("category-modal-number");

const categoryModalTitle =
  document.getElementById("category-modal-title");

const categoryModalDescription =
  document.getElementById(
    "category-modal-description"
  );

const categoryClose =
  document.getElementById("category-close");

const projectList =
  document.getElementById("project-list");


const galleryModal =
  document.getElementById("gallery-modal");

const galleryCategoryLabel =
  document.getElementById(
    "gallery-category-label"
  );

const galleryTitle =
  document.getElementById("gallery-title");

const galleryClose =
  document.getElementById("gallery-close");

const galleryImage =
  document.getElementById("gallery-image");

const galleryPrev =
  document.getElementById("gallery-prev");

const galleryNext =
  document.getElementById("gallery-next");

const galleryCounter =
  document.getElementById("gallery-counter");

const galleryDescription =
  document.getElementById(
    "gallery-description"
  );


const mobileMenuButton =
  document.querySelector(
    ".mobile-menu-button"
  );

const mobileNav =
  document.getElementById("mobile-nav");


/* =========================
   RENDER CATEGORY CARDS
========================= */

function renderCategories() {

  if (!categoryGrid) {
    return;
  }

  categoryGrid.innerHTML = "";

  CATEGORIES.forEach(
    (category, index) => {

      const card =
        document.createElement("article");

      card.className =
        "category-card";

      card.setAttribute(
        "tabindex",
        "0"
      );

      card.setAttribute(
        "role",
        "button"
      );


      const firstProject =
        category.projects?.[0];

      const firstImage =
        firstProject?.images?.[0] || "";


      card.innerHTML = `
        ${
          firstImage
            ? `
              <img
                class="category-image"
                src="${firstImage}"
                alt="${category.title}"
                loading="lazy"
              >
            `
            : `
              <div
                class="category-placeholder"
                aria-hidden="true"
              ></div>
            `
        }


        <div class="category-overlay">

          <div class="category-top">

            <span class="category-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="category-arrow">
              ↗
            </span>

          </div>


          <div class="category-bottom">

            <div class="category-text">

              <span class="category-title">
                ${category.title}
              </span>

              <span class="category-description">
                ${category.description}
              </span>

            </div>

          </div>

        </div>
      `;


      /* CLICK */

      card.addEventListener(
        "click",
        () => {

          openCategory(index);

        }
      );


      /* KEYBOARD */

      card.addEventListener(
        "keydown",
        (event) => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            openCategory(index);

          }

        }
      );


      categoryGrid.appendChild(card);

    }
  );
}


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(index) {

  const category =
    CATEGORIES[index];

  if (
    !category ||
    !categoryModal
  ) {
    return;
  }


  currentCategoryIndex =
    index;


  if (categoryModalNumber) {

    categoryModalNumber.textContent =
      String(index + 1).padStart(2, "0");

  }


  if (categoryModalTitle) {

    categoryModalTitle.textContent =
      category.title;

  }


  if (categoryModalDescription) {

    categoryModalDescription.textContent =
      category.description;

  }


  renderProjects(category);


  categoryModal.classList.add(
    "is-open"
  );


  categoryModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );
}


/* =========================
   RENDER PROJECTS
========================= */

function renderProjects(category) {

  if (!projectList) {
    return;
  }


  projectList.innerHTML = "";


  if (
    !category.projects ||
    category.projects.length === 0
  ) {

    projectList.innerHTML = `
      <div class="empty-projects">
        No projects available yet.
      </div>
    `;

    return;
  }


  category.projects.forEach(
    (project, index) => {

      const button =
        document.createElement("button");


      button.type =
        "button";


      button.className =
        "project-item";


      const thumbnail =
        project.images?.[0] || "";


      button.innerHTML = `

        <div class="project-image-wrap">

          ${
            thumbnail
              ? `
                <img
                  class="project-thumb"
                  src="${thumbnail}"
                  alt="${project.title}"
                  loading="lazy"
                >
              `
              : `
                <div
                  class="project-thumb-placeholder"
                  aria-hidden="true"
                ></div>
              `
          }


          <div class="project-image-gradient">
          </div>


          <div class="project-image-top">

            <span class="project-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="project-arrow">
              ↗
            </span>

          </div>


          <div class="project-image-title">

            <span>
              ${project.title}
            </span>

            <small>
              ${project.year || ""}
            </small>

          </div>

        </div>


        <div class="project-info">

          <span class="project-description">
            ${project.description || ""}
          </span>

        </div>

      `;


      button.addEventListener(
        "click",
        () => {

          openGallery(index);

        }
      );


      projectList.appendChild(
        button
      );

    }
  );
}


/* =========================
   CLOSE CATEGORY
========================= */

function closeCategory() {

  if (!categoryModal) {
    return;
  }


  categoryModal.classList.remove(
    "is-open"
  );


  categoryModal.setAttribute(
    "aria-hidden",
    "true"
  );


  if (
    !galleryModal ||
    !galleryModal.classList.contains(
      "is-open"
    )
  ) {

    document.body.classList.remove(
      "modal-open"
    );

  }
}


/* =========================
   OPEN GALLERY
========================= */

function openGallery(projectIndex) {

  const category =
    CATEGORIES[
      currentCategoryIndex
    ];


  if (!category) {
    return;
  }


  const project =
    category.projects?.[
      projectIndex
    ];


  if (
    !project ||
    !galleryModal
  ) {
    return;
  }


  currentProjectIndex =
    projectIndex;


  currentImageIndex =
    0;


  if (galleryCategoryLabel) {

    galleryCategoryLabel.textContent =
      category.title;

  }


  if (galleryTitle) {

    galleryTitle.textContent =
      project.title;

  }


  if (galleryDescription) {

    galleryDescription.textContent =
      project.description || "";

  }


  updateGallery();


  galleryModal.classList.add(
    "is-open"
  );


  galleryModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );
}


/* =========================
   UPDATE GALLERY
========================= */

function updateGallery() {

  const category =
    CATEGORIES[
      currentCategoryIndex
    ];


  if (!category) {
    return;
  }


  const project =
    category.projects?.[
      currentProjectIndex
    ];


  if (
    !project ||
    !galleryImage
  ) {
    return;
  }


  const images =
    project.images || [];


  if (!images.length) {

    galleryImage.removeAttribute(
      "src"
    );


    galleryImage.alt =
      "";


    if (galleryCounter) {

      galleryCounter.textContent =
        "00 / 00";

    }


    if (galleryPrev) {

      galleryPrev.disabled =
        true;

    }


    if (galleryNext) {

      galleryNext.disabled =
        true;

    }


    return;
  }


  /* =========================
     IMAGE
  ========================= */

  galleryImage.src =
    images[currentImageIndex];


  galleryImage.alt =
    project.title;


  /* =========================
     COUNTER
  ========================= */

  if (galleryCounter) {

    galleryCounter.textContent =
      `${String(
        currentImageIndex + 1
      ).padStart(2, "0")} / ${String(
        images.length
      ).padStart(2, "0")}`;

  }


  /* =========================
     PREVIOUS
  ========================= */

  if (galleryPrev) {

    galleryPrev.disabled =
      currentImageIndex <= 0;

  }


  /* =========================
     NEXT
  ========================= */

  if (galleryNext) {

    galleryNext.disabled =
      currentImageIndex >=
      images.length - 1;

  }
}


/* =========================
   NEXT IMAGE
========================= */

function nextImage() {

  const category =
    CATEGORIES[
      currentCategoryIndex
    ];


  const project =
    category?.projects?.[
      currentProjectIndex
    ];


  if (!project) {
    return;
  }


  const images =
    project.images || [];


  if (
    currentImageIndex <
    images.length - 1
  ) {

    currentImageIndex++;

    updateGallery();

  }
}


/* =========================
   PREVIOUS IMAGE
========================= */

function previousImage() {

  if (
    currentImageIndex <= 0
  ) {
    return;
  }


  currentImageIndex--;


  updateGallery();
}


/* =========================
   CLOSE GALLERY
========================= */

function closeGallery() {

  if (!galleryModal) {
    return;
  }


  galleryModal.classList.remove(
    "is-open"
  );


  galleryModal.setAttribute(
    "aria-hidden",
    "true"
  );


  if (
    !categoryModal ||
    !categoryModal.classList.contains(
      "is-open"
    )
  ) {

    document.body.classList.remove(
      "modal-open"
    );

  }
}


/* =========================
   BACKDROP
========================= */

document
  .querySelectorAll(
    "[data-close-category]"
  )
  .forEach(
    (element) => {

      element.addEventListener(
        "click",
        closeCategory
      );

    }
  );


document
  .querySelectorAll(
    "[data-close-gallery]"
  )
  .forEach(
    (element) => {

      element.addEventListener(
        "click",
        closeGallery
      );

    }
  );


/* =========================
   CLOSE BUTTONS
========================= */

if (categoryClose) {

  categoryClose.addEventListener(
    "click",
    closeCategory
  );

}


if (galleryClose) {

  galleryClose.addEventListener(
    "click",
    closeGallery
  );

}


/* =========================
   GALLERY BUTTONS
========================= */

if (galleryPrev) {

  galleryPrev.addEventListener(
    "click",
    previousImage
  );

}


if (galleryNext) {

  galleryNext.addEventListener(
    "click",
    nextImage
  );

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
  "keydown",
  (event) => {


    /* ESC */

    if (
      event.key === "Escape"
    ) {

      if (
        galleryModal &&
        galleryModal.classList.contains(
          "is-open"
        )
      ) {

        closeGallery();

        return;

      }


      if (
        categoryModal &&
        categoryModal.classList.contains(
          "is-open"
        )
      ) {

        closeCategory();

        return;

      }

    }


    /* GALLERY NAVIGATION */

    if (
      galleryModal &&
      galleryModal.classList.contains(
        "is-open"
      )
    ) {

      if (
        event.key === "ArrowRight"
      ) {

        nextImage();

      }


      if (
        event.key === "ArrowLeft"
      ) {

        previousImage();

      }

    }

  }
);


/* =========================
   MOBILE MENU
========================= */

if (
  mobileMenuButton &&
  mobileNav
) {


  mobileMenuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        mobileNav.classList.toggle(
          "is-open"
        );


      mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  mobileNav
    .querySelectorAll("a")
    .forEach(
      (link) => {

        link.addEventListener(
          "click",
          () => {

            mobileNav.classList.remove(
              "is-open"
            );


            mobileMenuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      }
    );

}


/* =========================
   IMAGE ERROR HANDLING
========================= */

if (galleryImage) {

  galleryImage.addEventListener(
    "error",
    () => {

      galleryImage.style.opacity =
        "0";

    }
  );


  galleryImage.addEventListener(
    "load",
    () => {

      galleryImage.style.opacity =
        "1";

    }
  );

}


/* =========================
   INIT
========================= */

renderCategories();
