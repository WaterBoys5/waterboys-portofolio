/* =========================================================
   WATERBOYS PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const CATEGORIES = {

  "portrait-commercial": {
    title: "PORTRAIT & COMMERCIAL",

    description:
      "Portrait and commercial photography projects focused on people, fashion, brands, and visual campaigns.",

    projects: [

      {
        title: "Peron Long Sleeve",
        year: "2026",

        description:
          "Portrait and commercial photography for Peron Long Sleeve.",

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
          "Portrait and campaign photography for Vishgazine.",

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
        title: "WKA × Simpati",
        year: "2026",

        description:
          "Commercial campaign photography for WKA × Simpati.",

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
  },


  /* =======================================================
     STAGE
  ======================================================== */

  "stage": {

    title: "STAGE PHOTOGRAPHY",

    description:
      "Live performances, concerts, and stage documentation.",

    projects: []

  },


  /* =======================================================
     PRODUCT
  ======================================================== */

  "product": {

    title: "PRODUCT PHOTOGRAPHY",

    description:
      "Commercial product photography for brands, campaigns, and catalogues.",

    projects: []

  }

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const categoryModal =
  document.getElementById("categoryModal");

const categoryModalTitle =
  document.getElementById("categoryModalTitle");

const categoryModalDescription =
  document.getElementById("categoryModalDescription");

const projectList =
  document.getElementById("projectList");

const closeCategory =
  document.getElementById("closeCategory");


const galleryModal =
  document.getElementById("galleryModal");

const galleryTitle =
  document.getElementById("galleryTitle");

const galleryImage =
  document.getElementById("galleryImage");

const galleryDescription =
  document.getElementById("galleryDescription");

const galleryYear =
  document.getElementById("galleryYear");

const galleryCounter =
  document.getElementById("galleryCounter");

const galleryPrev =
  document.getElementById("galleryPrev");

const galleryNext =
  document.getElementById("galleryNext");

const closeGallery =
  document.getElementById("closeGallery");


const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileNav =
  document.getElementById("mobileNav");


/* =========================================================
   STATE
========================================================= */

let currentProject = null;

let currentImageIndex = 0;


/* =========================================================
   CATEGORY
========================================================= */

function openCategory(categoryName) {

  const category =
    CATEGORIES[categoryName];

  if (!category) {
    console.error(
      "Category tidak ditemukan:",
      categoryName
    );

    return;
  }


  categoryModalTitle.textContent =
    category.title;

  categoryModalDescription.textContent =
    category.description;


  renderProjects(category.projects);


  categoryModal.classList.add("is-open");

  categoryModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");

}


/* =========================================================
   CLOSE CATEGORY
========================================================= */

function closeCategoryModal() {

  categoryModal.classList.remove(
    "is-open"
  );

  categoryModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects(projects) {

  projectList.innerHTML = "";


  if (!projects.length) {

    projectList.innerHTML = `
      <div class="empty-projects">
        Projects coming soon.
      </div>
    `;

    return;
  }


  projects.forEach(
    (project, projectIndex) => {

      const firstImage =
        project.images?.[0];


      const article =
        document.createElement("button");


      article.type = "button";

      article.className =
        "project-item";


      article.innerHTML = `

        <div class="project-image-wrap">

          ${
            firstImage

            ? `
              <img
                class="project-thumb"
                src="${firstImage}"
                alt="${project.title}"
                loading="lazy"
              >
            `

            : ""
          }


          <div class="project-image-overlay">

            <div class="project-image-title">

              <span class="project-title-overlay">
                ${project.title}
              </span>

              <span class="project-year-overlay">
                ${project.year}
              </span>

            </div>


            <span class="project-arrow">
              ↗
            </span>

          </div>

        </div>


        <div class="project-info">

          <span class="project-description">
            ${project.description}
          </span>

        </div>

      `;


      article.addEventListener(
        "click",
        () => {

          openGallery(
            projects,
            projectIndex
          );

        }
      );


      projectList.appendChild(
        article
      );

    }
  );

}


/* =========================================================
   GALLERY
========================================================= */

function openGallery(
  projects,
  projectIndex
) {

  const project =
    projects[projectIndex];


  if (!project) {
    return;
  }


  currentProject = project;

  currentImageIndex = 0;


  galleryTitle.textContent =
    project.title;


  galleryYear.textContent =
    project.year;


  galleryDescription.textContent =
    project.description;


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


/* =========================================================
   UPDATE GALLERY
========================================================= */

function updateGallery() {

  if (!currentProject) {
    return;
  }


  const images =
    currentProject.images || [];


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


  const image =
    images[currentImageIndex];


  galleryImage.src =
    image;


  galleryImage.alt =
    `${currentProject.title} - image ${currentImageIndex + 1}`;


  galleryCounter.textContent =
    `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;


  galleryPrev.disabled =
    currentImageIndex === 0;


  galleryNext.disabled =
    currentImageIndex === images.length - 1;

}


/* =========================================================
   NEXT IMAGE
========================================================= */

function nextImage() {

  if (!currentProject) {
    return;
  }


  const images =
    currentProject.images || [];


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

  if (!currentProject) {
    return;
  }


  if (currentImageIndex > 0) {

    currentImageIndex--;

    updateGallery();

  }

}


/* =========================================================
   CLOSE GALLERY
========================================================= */

function closeGalleryModal() {

  galleryModal.classList.remove(
    "is-open"
  );

  galleryModal.setAttribute(
    "aria-hidden",
    "true"
  );


  galleryImage.removeAttribute(
    "src"
  );


  currentProject = null;

  currentImageIndex = 0;


  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   CATEGORY CARD EVENTS
========================================================= */

const categoryCards =
  document.querySelectorAll(
    ".category-card"
  );


categoryCards.forEach(
  (card) => {

    card.addEventListener(
      "click",
      () => {

        const category =
          card.dataset.category;


        openCategory(category);

      }
    );

  }
);


/* =========================================================
   CATEGORY CLOSE EVENTS
========================================================= */

if (closeCategory) {

  closeCategory.addEventListener(
    "click",
    closeCategoryModal
  );

}


document.querySelectorAll(
  "[data-close-category]"
).forEach(
  (element) => {

    element.addEventListener(
      "click",
      closeCategoryModal
    );

  }
);


/* =========================================================
   GALLERY EVENTS
========================================================= */

if (closeGallery) {

  closeGallery.addEventListener(
    "click",
    closeGalleryModal
  );

}


document.querySelectorAll(
  "[data-close-gallery]"
).forEach(
  (element) => {

    element.addEventListener(
      "click",
      closeGalleryModal
    );

  }
);


if (galleryNext) {

  galleryNext.addEventListener(
    "click",
    nextImage
  );

}


if (galleryPrev) {

  galleryPrev.addEventListener(
    "click",
    previousImage
  );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      galleryModal &&
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


      if (event.key === "Escape") {

        closeGalleryModal();

      }

      return;
    }


    if (
      categoryModal &&
      categoryModal.classList.contains(
        "is-open"
      )
    ) {

      if (event.key === "Escape") {

        closeCategoryModal();

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
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

window.addEventListener(
  "click",
  (event) => {

    if (
      event.target === categoryModal
    ) {

      closeCategoryModal();

    }


    if (
      event.target === galleryModal
    ) {

      closeGalleryModal();

    }

  }
);


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
  "error",
  (event) => {

    const element =
      event.target;


    if (
      element.tagName === "IMG"
    ) {

      console.warn(
        "Image gagal dimuat:",
        element.src
      );

    }

  },
  true
);


/* =========================================================
   INIT
========================================================= */

console.log(
  "WaterBoys Portfolio loaded."
);
