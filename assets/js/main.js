/* =========================================================
   SITE CONFIG
========================================================= */

const SITE = {
  behance: "https://www.behance.net/waterboys1"
};


/* =========================================================
   CATEGORIES / PROJECT DATA
========================================================= */

const CATEGORIES = [
  {
    title: "STAGE PHOTOGRAPHY",
    description: "Live performances, concerts, and stage documentation.",

    projects: [
      {
        title: "Stereo Wall",
        year: "2026",
        description: "Stage photography for Stereo Wall at Trilogigs 2025.",

        image: "assets/images/stage-photography/201401.jpg",

        images: [
          "assets/images/stage-photography/201401.jpg"
        ]
      }
    ]
  },

  {
    title: "PORTRAIT COMMERCIAL",
    description: "Portrait and commercial photography for brands, campaigns, and creative projects.",

    projects: [
      {
        title: "Peron Long Sleeve",
        year: "2026",
        description: "Commercial portrait photography for Peron Long Sleeve.",

        image: "assets/images/portrait-commercial/peron-long-sleeve-01.jpg",

        images: [
          "assets/images/portrait-commercial/peron-long-sleeve-01.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-02.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-03.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-04.jpg",
          "assets/images/portrait-commercial/peron-long-sleeve-05.jpg"
        ]
      },

      {
        title: "WKA x Simpati",
        year: "2026",
        description: "Commercial campaign photography for WKA x Simpati.",

        image: "assets/images/portrait-commercial/wka-simpati-01.jpg",

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
      },

      {
        title: "Vishgazine",
        year: "2026",
        description: "Portrait and campaign photography for Vishgazine.",

        image: "assets/images/portrait-commercial/vishgazine-01.jpg",

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
      }
    ]
  }
];


/* =========================================================
   STATE
========================================================= */

let activeCategoryIndex = 0;
let activeProjectIndex = 0;
let activeImageIndex = 0;


/* =========================================================
   DOM
========================================================= */

const categoryGrid = document.querySelector(".category-grid");

const categoryModal = document.querySelector(".category-modal");
const categoryModalPanel = document.querySelector(".category-modal-panel");

const projectList = document.querySelector(".project-list");

const galleryModal = document.querySelector(".gallery-modal");
const galleryPanel = document.querySelector(".gallery-panel");

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".mobile-nav");


/* =========================================================
   HELPERS
========================================================= */

function $(selector, parent = document) {
  return parent.querySelector(selector);
}


function createElement(tag, className, text = "") {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

function handleImageError(img) {
  img.style.display = "none";

  const fallback = img.parentElement.querySelector(".image-fallback");

  if (fallback) {
    fallback.style.display = "grid";
  }
}


/* =========================================================
   CATEGORY CARDS
========================================================= */

function renderCategories() {
  if (!categoryGrid) return;

  categoryGrid.innerHTML = "";

  CATEGORIES.forEach((category, index) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "category-card";

    const firstProject = category.projects?.[0];

    const image = firstProject?.image || "";

    card.innerHTML = `
      ${
        image
          ? `
            <img
              class="category-image"
              src="${image}"
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

          <div class="category-title">
            ${category.title}
          </div>

        </div>

      </div>
    `;

    const img = card.querySelector(".category-image");

    if (img) {
      img.addEventListener("error", () => {
        handleImageError(img);
      });
    }

    card.addEventListener("click", () => {
      openCategory(index);
    });

    categoryGrid.appendChild(card);
  });
}


/* =========================================================
   CATEGORY MODAL
========================================================= */

function openCategory(categoryIndex) {
  const category = CATEGORIES[categoryIndex];

  if (!category || !categoryModal) return;

  activeCategoryIndex = categoryIndex;

  const eyebrow = $(".category-modal-heading .eyebrow", categoryModal);
  const heading = $(".category-modal-heading h2", categoryModal);
  const description = $(".category-modal-heading > p:last-child", categoryModal);

  if (eyebrow) {
    eyebrow.textContent =
      `CATEGORY ${String(categoryIndex + 1).padStart(2, "0")}`;
  }

  if (heading) {
    heading.textContent = category.title;
  }

  if (description) {
    description.textContent = category.description || "";
  }

  renderProjects();

  categoryModal.classList.add("is-open");

  document.body.classList.add("modal-open");

  categoryModal.setAttribute("aria-hidden", "false");
}


function closeCategory() {
  if (!categoryModal) return;

  categoryModal.classList.remove("is-open");

  categoryModal.setAttribute("aria-hidden", "true");

  if (!galleryModal?.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }
}


/* =========================================================
   PROJECT LIST
========================================================= */

function renderProjects() {
  if (!projectList) return;

  const category = CATEGORIES[activeCategoryIndex];

  if (!category) return;

  projectList.innerHTML = "";

  if (!category.projects || category.projects.length === 0) {
    projectList.innerHTML = `
      <div class="empty-projects">
        No projects available.
      </div>
    `;

    return;
  }

  category.projects.forEach((project, index) => {
    const item = document.createElement("button");

    item.type = "button";
    item.className = "project-item";

    const image = project.image || project.images?.[0] || "";

    item.innerHTML = `
      <div class="project-image-wrap">

        ${
          image
            ? `
              <img
                class="project-thumb"
                src="${image}"
                alt="${project.title}"
                loading="lazy"
              >
            `
            : `
              <div class="category-placeholder"></div>
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

    const img = item.querySelector(".project-thumb");

    if (img) {
      img.addEventListener("error", () => {
        handleImageError(img);
      });
    }

    item.addEventListener("click", () => {
      openGallery(index);
    });

    projectList.appendChild(item);
  });
}


/* =========================================================
   GALLERY
========================================================= */

function openGallery(projectIndex) {
  const category = CATEGORIES[activeCategoryIndex];

  if (!category) return;

  const project = category.projects?.[projectIndex];

  if (!project) return;

  activeProjectIndex = projectIndex;
  activeImageIndex = 0;

  if (!galleryModal) return;

  updateGallery();

  galleryModal.classList.add("is-open");

  document.body.classList.add("modal-open");

  galleryModal.setAttribute("aria-hidden", "false");
}


function closeGallery() {
  if (!galleryModal) return;

  galleryModal.classList.remove("is-open");

  galleryModal.setAttribute("aria-hidden", "true");

  if (!categoryModal?.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }
}


/* =========================================================
   UPDATE GALLERY
========================================================= */

function updateGallery() {
  const category = CATEGORIES[activeCategoryIndex];

  if (!category) return;

  const project = category.projects?.[activeProjectIndex];

  if (!project) return;

  const images = project.images?.length
    ? project.images
    : [project.image].filter(Boolean);

  const image =
    images[activeImageIndex] || images[0];

  const galleryImage = $(".gallery-image-wrap img", galleryModal);

  const galleryTitle = $(".gallery-topbar h2", galleryModal);

  const galleryCaption = $(".gallery-caption p", galleryModal);

  const prevButton = $(".gallery-arrow.prev", galleryModal);

  const nextButton = $(".gallery-arrow.next", galleryModal);

  if (galleryTitle) {
    galleryTitle.textContent = project.title;
  }

  if (galleryCaption) {
    galleryCaption.textContent =
      project.description || "";
  }

  if (galleryImage) {
    galleryImage.src = image;
    galleryImage.alt =
      `${project.title} ${activeImageIndex + 1}`;

    galleryImage.style.display = "block";
  }

  if (prevButton) {
    prevButton.disabled =
      activeImageIndex <= 0;
  }

  if (nextButton) {
    nextButton.disabled =
      activeImageIndex >= images.length - 1;
  }

  const counter = $(".gallery-counter", galleryModal);

  if (counter) {
    counter.textContent =
      `${String(activeImageIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
  }
}


/* =========================================================
   GALLERY NAVIGATION
========================================================= */

function nextImage() {
  const category = CATEGORIES[activeCategoryIndex];

  const project = category?.projects?.[activeProjectIndex];

  if (!project) return;

  const images = project.images?.length
    ? project.images
    : [project.image].filter(Boolean);

  if (activeImageIndex < images.length - 1) {
    activeImageIndex++;

    updateGallery();
  }
}


function previousImage() {
  if (activeImageIndex > 0) {
    activeImageIndex--;

    updateGallery();
  }
}


/* =========================================================
   PROJECT NAVIGATION
========================================================= */

function nextProject() {
  const category = CATEGORIES[activeCategoryIndex];

  if (!category?.projects?.length) return;

  if (
    activeProjectIndex <
    category.projects.length - 1
  ) {
    activeProjectIndex++;
    activeImageIndex = 0;

    updateGallery();
  }
}


function previousProject() {
  if (activeProjectIndex > 0) {
    activeProjectIndex--;
    activeImageIndex = 0;

    updateGallery();
  }
}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {
  if (!mobileNav || !mobileMenuButton) return;

  const isOpen =
    mobileNav.classList.contains("is-open");

  mobileNav.classList.toggle(
    "is-open",
    !isOpen
  );

  mobileMenuButton.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );
}


function closeMobileMenu() {
  if (!mobileNav || !mobileMenuButton) return;

  mobileNav.classList.remove("is-open");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    "false"
  );
}


/* =========================================================
   KEYBOARD
========================================================= */

function handleKeyboard(event) {

  /* Gallery */

  if (
    galleryModal?.classList.contains("is-open")
  ) {

    if (event.key === "Escape") {
      closeGallery();
      return;
    }

    if (event.key === "ArrowRight") {
      nextImage();
      return;
    }

    if (event.key === "ArrowLeft") {
      previousImage();
      return;
    }

    return;
  }


  /* Category */

  if (
    categoryModal?.classList.contains("is-open")
  ) {

    if (event.key === "Escape") {
      closeCategory();
    }

  }

}


/* =========================================================
   CLICK OUTSIDE MODALS
========================================================= */

function setupModalEvents() {

  if (categoryModal) {

    categoryModal.addEventListener(
      "click",
      event => {

        if (
          event.target === categoryModal ||
          event.target.classList.contains("modal-backdrop")
        ) {
          closeCategory();
        }

      }
    );

  }


  if (galleryModal) {

    galleryModal.addEventListener(
      "click",
      event => {

        if (
          event.target === galleryModal ||
          event.target.classList.contains("modal-backdrop")
        ) {
          closeGallery();
        }

      }
    );

  }

}


/* =========================================================
   CLOSE BUTTONS
========================================================= */

function setupCloseButtons() {

  document.querySelectorAll(
    "[data-close-category]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      closeCategory
    );

  });


  document.querySelectorAll(
    "[data-close-gallery]"
  ).forEach(button => {

    button.addEventListener(
      "click",
      closeGallery
    );

  });

}


/* =========================================================
   GALLERY BUTTONS
========================================================= */

function setupGalleryButtons() {

  const prevButton =
    galleryModal?.querySelector(
      ".gallery-arrow.prev"
    );

  const nextButton =
    galleryModal?.querySelector(
      ".gallery-arrow.next"
    );

  if (prevButton) {
    prevButton.addEventListener(
      "click",
      previousImage
    );
  }

  if (nextButton) {
    nextButton.addEventListener(
      "click",
      nextImage
    );
  }

}


/* =========================================================
   MOBILE NAV
========================================================= */

function setupMobileMenu() {

  if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
      "click",
      toggleMobileMenu
    );

  }


  document.querySelectorAll(
    ".mobile-nav a"
  ).forEach(link => {

    link.addEventListener(
      "click",
      closeMobileMenu
    );

  });

}


/* =========================================================
   BEHANCE
========================================================= */

function setupBehance() {

  document.querySelectorAll(
    "[data-behance]"
  ).forEach(link => {

    link.href = SITE.behance;

    link.target = "_blank";

    link.rel = "noopener noreferrer";

  });

}


/* =========================================================
   INITIALIZE
========================================================= */

function init() {

  renderCategories();

  setupModalEvents();

  setupCloseButtons();

  setupGalleryButtons();

  setupMobileMenu();

  setupBehance();

  document.addEventListener(
    "keydown",
    handleKeyboard
  );

}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
