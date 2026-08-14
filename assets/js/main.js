const SITE = {
  behance: "https://www.behance.net/waterboys1"
};


/* =========================
   CATALOG DATA
========================= */

const CATEGORIES = [

  {
    title: "DOCUMENTATION",
    description: "Live events, performances, concerts, and visual documentation.",
    projects: [

      {
        title: "Stereo Wall",
        year: "2026",
        description: "Visual documentation of Stereo Wall at Trilogigs 2025.",

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
    title: "COMMERCIAL",
    description: "Product, campaign, brand, and commercial photography.",
    projects: []
  },


  {
    title: "PORTRAIT",
    description: "Personal portraits, creative portraits, and visual storytelling.",
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
   RENDER CATEGORIES
========================= */

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

      <div class="category-media">

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

        <div class="category-gradient"></div>

        <div class="category-top">

          <span class="category-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span class="category-label">
            ${category.title}
          </span>

        </div>

      </div>


      <div class="category-info">

        <p>
          ${category.description}
        </p>

        <span class="category-arrow">
          ↗
        </span>

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


/* =========================
   OPEN CATEGORY
========================= */

function openCategory(index) {

  const category =
    CATEGORIES[index];

  if (!category) return;


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
   RENDER PROJECT CARDS
========================= */

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

      const card =
        document.createElement("button");

      card.type =
        "button";

      card.className =
        "project-card";


      const thumbnail =
        project.images?.[0] || "";


      card.innerHTML = `

        <div class="project-media">

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
                <div class="project-placeholder"></div>
              `
          }

          <div class="project-gradient"></div>

          <div class="project-heading">

            <span class="project-category">
              ${category.title}
            </span>

            <h3>
              ${project.title}
            </h3>

          </div>

        </div>


        <div class="project-info">

          <span class="project-year">
            ${project.year || ""}
          </span>

          <span class="project-description">
            ${project.description || ""}
          </span>

          <span class="project-arrow">
            ↗
          </span>

        </div>

      `;


      card.addEventListener(
        "click",
        () => openGallery(index)
      );


      projectList.appendChild(card);

    }
  );

}


/* =========================
   CLOSE CATEGORY
========================= */

function closeCategory() {

  if (!categoryModal) return;


  categoryModal.classList.remove(
    "is-open"
  );

  categoryModal.setAttribute(
    "aria-hidden",
    "true"
  );


  if (
    !galleryModal?.classList.contains(
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

    galleryPrev.disabled =
      true;

    galleryNext.disabled =
      true;

    return;

  }


  galleryImage.src =
    images[currentImageIndex];

  galleryImage.alt =
    project.title;


  galleryCounter.textContent =
    `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;


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

  if (
    currentImageIndex <= 0
  ) return;


  currentImageIndex--;

  updateGallery();

}


/* =========================
   CLOSE GALLERY
========================= */

function closeGallery() {

  if (!galleryModal) return;


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

document
  .querySelectorAll(
    "[data-close-category]"
  )
  .forEach((element) => {

    element.addEventListener(
      "click",
      closeCategory
    );

  });


document
  .querySelectorAll(
    "[data-close-gallery]"
  )
  .forEach((element) => {

    element.addEventListener(
      "click",
      closeGallery
    );

  });


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

    if (
      event.key === "Escape"
    ) {

      if (
        galleryModal?.classList.contains(
          "is-open"
        )
      ) {

        closeGallery();

        return;

      }


      if (
        categoryModal?.classList.contains(
          "is-open"
        )
      ) {

        closeCategory();

        return;

      }

    }


    if (
      galleryModal?.classList.contains(
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
    .forEach((link) => {

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

    });

}


/* =========================
   BEHANCE
========================= */

document
  .querySelectorAll(
    "[data-behance]"
  )
  .forEach((link) => {

    link.href =
      SITE.behance;

  });


/* =========================
   INIT
========================= */

renderCategories();    projects: []
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

    const firstProject = category.projects?.[0];
    const firstImage = firstProject?.images?.[0] || "";

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

    card.addEventListener("click", () => {
      openCategory(index);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
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

  if (!category || !categoryModal) return;

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
  categoryModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}


/* =========================
   RENDER PROJECTS
========================= */

function renderProjects(category) {
  if (!projectList) return;

  projectList.innerHTML = "";

  if (!category.projects || category.projects.length === 0) {
    projectList.innerHTML = `
      <div style="padding: 30px 22px; color: #777;">
        No projects available yet.
      </div>
    `;

    return;
  }

  category.projects.forEach((project, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "project-item";

    const thumbnail = project.images?.[0] || "";

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

    button.addEventListener("click", () => {
      openGallery(index);
    });

    projectList.appendChild(button);
  });
}


/* =========================
   CLOSE CATEGORY
========================= */

function closeCategory() {
  if (!categoryModal) return;

  categoryModal.classList.remove("is-open");
  categoryModal.setAttribute("aria-hidden", "true");

  if (!galleryModal?.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }
}


/* =========================
   OPEN GALLERY
========================= */

function openGallery(projectIndex) {
  const category = CATEGORIES[currentCategoryIndex];

  if (!category) return;

  const project = category.projects?.[projectIndex];

  if (!project) return;

  currentProjectIndex = projectIndex;
  currentImageIndex = 0;

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

  if (galleryModal) {
    galleryModal.classList.add("is-open");
    galleryModal.setAttribute("aria-hidden", "false");
  }

  document.body.classList.add("modal-open");
}


/* =========================
   UPDATE GALLERY
========================= */

function updateGallery() {
  const category = CATEGORIES[currentCategoryIndex];

  if (!category) return;

  const project =
    category.projects?.[currentProjectIndex];

  if (!project) return;

  const images = project.images || [];

  if (!images.length) {
    if (galleryImage) {
      galleryImage.removeAttribute("src");
      galleryImage.alt = "";
    }

    if (galleryCounter) {
      galleryCounter.textContent = "00 / 00";
    }

    if (galleryPrev) {
      galleryPrev.disabled = true;
    }

    if (galleryNext) {
      galleryNext.disabled = true;
    }

    return;
  }

  if (galleryImage) {
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = project.title;
  }

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


/* =========================
   NEXT IMAGE
========================= */

function nextImage() {
  const category = CATEGORIES[currentCategoryIndex];

  const project =
    category?.projects?.[currentProjectIndex];

  if (!project) return;

  const images = project.images || [];

  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    updateGallery();
  }
}


/* =========================
   PREVIOUS IMAGE
========================= */

function previousImage() {
  if (currentImageIndex <= 0) return;

  currentImageIndex--;
  updateGallery();
}


/* =========================
   CLOSE GALLERY
========================= */

function closeGallery() {
  if (!galleryModal) return;

  galleryModal.classList.remove("is-open");
  galleryModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}


/* =========================
   BACKDROP
========================= */

document
  .querySelectorAll("[data-close-category]")
  .forEach((element) => {
    element.addEventListener("click", closeCategory);
  });

document
  .querySelectorAll("[data-close-gallery]")
  .forEach((element) => {
    element.addEventListener("click", closeGallery);
  });


/* =========================
   CLOSE BUTTONS
========================= */

if (categoryClose) {
  categoryClose.addEventListener("click", closeCategory);
}

if (galleryClose) {
  galleryClose.addEventListener("click", closeGallery);
}


/* =========================
   GALLERY BUTTONS
========================= */

if (galleryPrev) {
  galleryPrev.addEventListener("click", previousImage);
}

if (galleryNext) {
  galleryNext.addEventListener("click", nextImage);
}


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    if (galleryModal?.classList.contains("is-open")) {
      closeGallery();
      return;
    }

    if (categoryModal?.classList.contains("is-open")) {
      closeCategory();
      return;
    }
  }

  if (galleryModal?.classList.contains("is-open")) {

    if (event.key === "ArrowRight") {
      nextImage();
    }

    if (event.key === "ArrowLeft") {
      previousImage();
    }
  }
});


/* =========================
   MOBILE MENU
========================= */

if (mobileMenuButton && mobileNav) {

  mobileMenuButton.addEventListener("click", () => {

    const isOpen =
      mobileNav.classList.toggle("is-open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        mobileNav.classList.remove("is-open");

        mobileMenuButton.setAttribute(
          "aria-expanded",
          "false"
        );
      });

    });
}


/* =========================
   INIT
========================= */

renderCategories();
