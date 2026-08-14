const SITE = {
  behance: "https://www.behance.net/waterboys1"
};


/* =========================================================
   PROJECT DATA
========================================================= */

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
      "Product, campaign, commercial, and brand photography.",

    projects: [

      {
        title: "LV Wallet",

        year: "2026",

        description:
          "Commercial product photography of a Louis Vuitton wallet.",

        images: [
          "assets/images/product/lv-wallet-01.jpg",
          "assets/images/product/lv-wallet-02.jpg",
          "assets/images/product/lv-wallet-03.jpg",
          "assets/images/product/lv-wallet-04.jpg"
        ]
      },


      {
        title: "TITANS",

        year: "2026",

        description:
          "Commercial photography for TITANS spray paint.",

        images: [
          "assets/images/product/titans-01.jpg",
          "assets/images/product/titans-02.jpg",
          "assets/images/product/titans-03.jpg",
          "assets/images/product/titans-04.jpg",
          "assets/images/product/titans-05.jpg",
          "assets/images/product/titans-06.jpg",
          "assets/images/product/titans-07.jpg",
          "assets/images/product/titans-08.jpg",
          "assets/images/product/titans-09.jpg"
        ]
      }

    ]
  },


  {
    title: "PORTRAIT / FASHION",

    description:
      "Portraits, fashion, creative direction, and visual storytelling.",

    projects: [

      {
        title: "Peron Long Sleeve",

        year: "2026",

        description:
          "Portrait and fashion photography featuring Peron Long Sleeve.",

        images: [
          "assets/images/portrait-commercial/peron-long-sleeve-01.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-02.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-03.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-04.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-05.jpg"
        ]
      },


      {
        title: "Vishgazine",

        year: "2026",

        description:
          "Fashion and portrait photography for Vishgazine.",

        images: [
          "assets/images/portrait-commercial/vishgazine-01.jpg",
          "assets/images/portrait-commercial/vishgazine-02.jpg",
          "assets/images/portrait-commercial/vishgazine-03.jpg",
          "assets/images/portrait-commercial/vishgazine-04.jpg",
          "assets/images/portrait-commercial/vishgazine-05.jpg",
          "assets/images/portrait-commercial/vishgazine-06.jpg",
          "assets/images/portrait-commercial/vishgazine-07.jpg",
          "assets/images/portrait-commercial/vishgazine-08.jpg",
          "assets/images/portrait-commercial/vishgazine-09.jpg"
        ]
      },


      {
        title: "WKA x Simpati",

        year: "2026",

        description:
          "Portrait and campaign photography for WKA x Simpati.",

        images: [
          "assets/images/portrait-commercial/wka-simpati-01.jpg",
          "assets/images/portrait-commercial/wka-simpati-02.jpg",
          "assets/images/portrait-commercial/wka-simpati-03.jpg",
          "assets/images/portrait-commercial/wka-simpati-04.jpg",
          "assets/images/portrait-commercial/wka-simpati-05.jpg",
          "assets/images/portrait-commercial/wka-simpati-06.jpg",
          "assets/images/portrait-commercial/wka-simpati-07.jpg",
          "assets/images/portrait-commercial/wka-simpati-08.jpg",
          "assets/images/portrait-commercial/wka-simpati-09.jpg",
          "assets/images/portrait-commercial/wka-simpati-10.jpg"
        ]
      }

    ]
  }

];


/* =========================================================
   STATE
========================================================= */

let currentCategoryIndex = 0;
let currentProjectIndex = 0;
let currentImageIndex = 0;


/* =========================================================
   ELEMENTS
========================================================= */

const categoryGrid =
  document.getElementById("category-grid");

const categoryModal =
  document.getElementById("category-modal");

const categoryModalNumber =
  document.getElementById("category-modal-number");

const categoryModalTitle =
  document.getElementById("category-modal-title");

const categoryModalDescription =
  document.getElementById("category-modal-description");

const categoryClose =
  document.getElementById("category-close");

const projectList =
  document.getElementById("project-list");

const galleryModal =
  document.getElementById("gallery-modal");

const galleryCategoryLabel =
  document.getElementById("gallery-category-label");

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
  document.getElementById("gallery-description");

const mobileMenuButton =
  document.querySelector(".mobile-menu-button");

const mobileNav =
  document.getElementById("mobile-nav");


/* =========================================================
   HELPERS
========================================================= */

function lockBody() {
  document.body.classList.add("modal-open");
}


function unlockBodyIfNeeded() {

  const categoryOpen =
    categoryModal &&
    categoryModal.classList.contains("is-open");

  const galleryOpen =
    galleryModal &&
    galleryModal.classList.contains("is-open");

  if (!categoryOpen && !galleryOpen) {
    document.body.classList.remove("modal-open");
  }
}


/* =========================================================
   RENDER CATEGORY CARDS
========================================================= */

function renderCategories() {

  if (!categoryGrid) return;

  categoryGrid.innerHTML = "";

  CATEGORIES.forEach((category, index) => {

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
            <div class="category-placeholder"></div>
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

          <span class="category-title">
            ${category.title}
          </span>

        </div>

      </div>

    `;


    card.addEventListener(
      "click",
      () => openCategory(index)
    );


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

  });

}


/* =========================================================
   OPEN CATEGORY
========================================================= */

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


  lockBody();

}


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects(category) {

  if (!projectList) return;

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

      button.type = "button";

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
                <div class="project-thumb-placeholder"></div>
              `
          }

          <div class="project-image-overlay">

            <div class="project-image-title">

              <span class="project-title-overlay">
                ${project.title}
              </span>

              <span class="project-year-overlay">
                ${project.year || ""}
              </span>

            </div>

            <span class="project-arrow">
              ↗
            </span>

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
        () => openGallery(index)
      );


      projectList.appendChild(button);

    }
  );

}


/* =========================================================
   CLOSE CATEGORY
========================================================= */

function closeCategory() {

  if (!categoryModal) return;


  categoryModal.classList.remove(
    "is-open"
  );


  categoryModal.setAttribute(
    "aria-hidden",
    "true"
  );


  unlockBodyIfNeeded();

}


/* =========================================================
   OPEN GALLERY
========================================================= */

function openGallery(projectIndex) {

  const category =
    CATEGORIES[currentCategoryIndex];

  if (!category) return;


  const project =
    category.projects?.[projectIndex];

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


  lockBody();

}


/* =========================================================
   UPDATE GALLERY
========================================================= */

function updateGallery() {

  const category =
    CATEGORIES[currentCategoryIndex];

  if (!category) return;


  const project =
    category.projects?.[currentProjectIndex];

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

    galleryImage.alt = "";


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


  if (
    currentImageIndex >= images.length
  ) {

    currentImageIndex =
      images.length - 1;

  }


  galleryImage.src =
    images[currentImageIndex];

  galleryImage.alt =
    project.title;


  if (galleryCounter) {

    galleryCounter.textContent =
      `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  }


  if (galleryPrev) {

    galleryPrev.disabled =
      currentImageIndex <= 0;

  }


  if (galleryNext) {

    galleryNext.disabled =
      currentImageIndex >= images.length - 1;

  }

}


/* =========================================================
   NEXT IMAGE
========================================================= */

function nextImage() {

  const category =
    CATEGORIES[currentCategoryIndex];

  const project =
    category?.projects?.[currentProjectIndex];

  if (!project) return;


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


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function previousImage() {

  if (
    currentImageIndex <= 0
  ) {
    return;
  }


  currentImageIndex--;

  updateGallery();

}


/* =========================================================
   CLOSE GALLERY
========================================================= */

function closeGallery() {

  if (!galleryModal) return;


  galleryModal.classList.remove(
    "is-open"
  );


  galleryModal.setAttribute(
    "aria-hidden",
    "true"
  );


  unlockBodyIfNeeded();

}


/* =========================================================
   CATEGORY BACKDROP
========================================================= */

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


/* =========================================================
   GALLERY BACKDROP
========================================================= */

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


/* =========================================================
   CLOSE BUTTONS
========================================================= */

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


/* =========================================================
   GALLERY CONTROLS
========================================================= */

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


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.target &&
      (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
      )
    ) {
      return;
    }


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


/* =========================================================
   MOBILE MENU
========================================================= */

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


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
  "error",
  (event) => {

    const element =
      event.target;


    if (
      element &&
      element.tagName === "IMG"
    ) {

      element.classList.add(
        "image-load-error"
      );

      console.warn(
        "Image failed to load:",
        element.src
      );

    }

  },
  true
);


/* =========================================================
   INIT
========================================================= */

renderCategories();
