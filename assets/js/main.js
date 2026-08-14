const SITE = {
  behance: "https://www.behance.net/waterboys1"
};

const CATEGORIES = [
  {
    title: "STAGE PHOTOGRAPHY",
    description: "Live performances, concerts, and stage documentation.",

    projects: [
      {
        title: "Stereo Wall",
        year: "2026",
        description: "Stage photography for Stereo Wall at Trilogigs 2025.",

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
    title: "COMMERCIAL PHOTOGRAPHY",
    description: "Commercial, product, campaign, and brand photography.",

    projects: []
  },

  {
    title: "PORTRAIT PHOTOGRAPHY",
    description: "Portraits, creative portraits, and visual storytelling.",

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


/* =========================
   RENDER CATEGORY CARDS
========================= */

function renderCategories() {

  if (!categoryGrid) return;

  categoryGrid.innerHTML = "";

  CATEGORIES.forEach((category, index) => {

    const card = document.createElement("article");

    card.className = "category-card";

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const firstProject =
      category.projects?.[0];

    const firstImage =
      firstProject?.images?.[0] ||
      "";

    card.innerHTML = `
      <img
        class="category-image"
        src="${firstImage}"
        alt="${category.title}"
        loading="lazy"
      >

      <img
        class="category-image next"
        src="${firstImage}"
        alt=""
        aria-hidden="true"
      >

      <div class="category-overlay">

        <span class="category-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <div class="category-bottom">

          <span class="category-title">
            ${category.title}
          </span>

          <span class="category-arrow">
            ↗
          </span>

        </div>

      </div>
    `;

    /* CLICK CARD */

    card.addEventListener("click", function () {
      openCategory(index);
    });


    /* KEYBOARD */

    card.addEventListener("keydown", function (event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openCategory(index);
      }

    });


    categoryGrid.appendChild(card);
  });
}


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(index) {

  const category = CATEGORIES[index];

  if (!category) return;

  currentCategoryIndex = index;

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

  categoryModal.classList.add("is-open");

  categoryModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");
}


/* =========================
   RENDER PROJECTS
========================= */

function renderProjects(category) {

  if (!projectList) return;

  projectList.innerHTML = "";

  if (
    !category.projects ||
    category.projects.length === 0
  ) {

    projectList.innerHTML = `
      <div
        style="
          padding: 30px 22px;
          color: #777;
        "
      >
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

        <img
          class="project-thumb"
          src="${thumbnail}"
          alt="${project.title}"
          loading="lazy"
        >

        <span class="project-meta">

          <span class="project-title">
            ${project.title}
          </span>

          <span class="project-year">
            ${project.year || ""}
          </span>

        </span>

        <span class="project-arrow">
          ↗
        </span>

      `;


      /* PROJECT CLICK */

      button.addEventListener(
        "click",
        function () {

          openGallery(index);

        }
      );


      projectList.appendChild(button);
    }
  );
}


/* =========================
   CLOSE CATEGORY
========================= */

function closeCategory() {

  categoryModal.classList.remove(
    "is-open"
  );

  categoryModal.setAttribute(
    "aria-hidden",
    "true"
  );

  if (
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
    CATEGORIES[currentCategoryIndex];

  if (!category) return;

  const project =
    category.projects[projectIndex];

  if (!project) return;

  currentProjectIndex =
    projectIndex;

  currentImageIndex = 0;


  /* CATEGORY LABEL */

  galleryCategoryLabel.textContent =
    category.title;


  /* PROJECT TITLE */

  galleryTitle.textContent =
    project.title;


  /* DESCRIPTION */

  galleryDescription.textContent =
    project.description || "";


  updateGallery();


  /* OPEN */

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
    CATEGORIES[currentCategoryIndex];

  if (!category) return;

  const project =
    category.projects[currentProjectIndex];

  if (!project) return;

  const images =
    project.images || [];


  if (!images.length) {

    galleryImage.removeAttribute(
      "src"
    );

    galleryImage.alt = "";

    galleryCounter.textContent =
      "00 / 00";

    galleryPrev.disabled = true;
    galleryNext.disabled = true;

    return;
  }


  /* IMAGE */

  galleryImage.src =
    images[currentImageIndex];

  galleryImage.alt =
    project.title;


  /* COUNTER */

  galleryCounter.textContent =
    `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;


  /* BUTTONS */

  galleryPrev.disabled =
    currentImageIndex <= 0;

  galleryNext.disabled =
    currentImageIndex >= images.length - 1;
}


/* =========================
   NEXT IMAGE
========================= */

function nextImage() {

  const category =
    CATEGORIES[currentCategoryIndex];

  const project =
    category?.projects[currentProjectIndex];

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


/* =========================
   PREVIOUS IMAGE
========================= */

function previousImage() {

  if (currentImageIndex <= 0) {
    return;
  }

  currentImageIndex--;

  updateGallery();
}


/* =========================
   CLOSE GALLERY
========================= */

function closeGallery() {

  galleryModal.classList.remove(
    "is-open"
  );

  galleryModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}


/* =========================
   BACKDROP
========================= */

document.querySelectorAll(
  "[data-close-category]"
).forEach((element) => {

  element.addEventListener(
    "click",
    closeCategory
  );

});


document.querySelectorAll(
  "[data-close-gallery]"
).forEach((element) => {

  element.addEventListener(
    "click",
    closeGallery
  );

});


/* =========================
   CLOSE BUTTON
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
  function (event) {

    /* ESC */

    if (event.key === "Escape") {

      if (
        galleryModal.classList.contains(
          "is-open"
        )
      ) {

        closeGallery();

        return;
      }


      if (
        categoryModal.classList.contains(
          "is-open"
        )
      ) {

        closeCategory();

        return;
      }
    }


    /* GALLERY */

    if (
      galleryModal.classList.contains(
        "is-open"
      )
    ) {

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
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
    function () {

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
    .forEach((link) => {

      link.addEventListener(
        "click",
        function () {

          mobileNav.classList.remove(
            "is-open"
          );

          mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================
   INIT
========================= */

renderCategories();
