

/* =========================
     CLEAR PROJECT AREA
     MAIN CATEGORY CARDS
     ONLY THESE SLIDESHOW
 ========================= */

  projectGrid.innerHTML = "";
  CATEGORIES.forEach((category) => {

    const categoryCard = document.createElement("article");

  /* =========================
     CATEGORY CARDS
  ========================= */
    categoryCard.className = "category-card";

  CATEGORIES.forEach((category) => {

    /*
     * Satu kategori = satu box.
     * Semua gallery dari semua project
     * di dalam kategori digabung menjadi
     * satu kumpulan gambar.
     */
    /* Collect ALL images from this category
       ONLY for the category thumbnail */

    const images = [];
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

        project.gallery.forEach((image) => {
          images.push(image);
        });
    });

      } else if (project.image) {

        images.push(project.image);
    categoryCard.innerHTML = `
      <div class="category-image"></div>

      }
      <div class="category-overlay">

    });
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

    /* Hapus gambar duplikat */
        <span class="category-arrow">↗</span>

    const uniqueImages = [...new Set(images)];
      </div>
    `;


    if (!uniqueImages.length) {
      return;
    }
    projectGrid.appendChild(categoryCard);


/* =========================
       CATEGORY SECTION
       CATEGORY SLIDESHOW
       RANDOM IMAGE
   ========================= */

    const categorySection =
      document.createElement("section");
    const categoryImage =
      categoryCard.querySelector(".category-image");

    categorySection.className =
      "project-category";
    let currentImage = 0;


    /* =========================
       CATEGORY HEADER
    ========================= */
    if (categoryImages.length > 0) {

    const categoryHeader =
      document.createElement("div");
      currentImage =
        Math.floor(
          Math.random() * categoryImages.length
        );

    categoryHeader.className =
      "category-heading";
      categoryImage.style.backgroundImage =
        `url("${categoryImages[currentImage]}")`;
    }

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
    if (categoryImages.length > 1) {

    categorySection.appendChild(categoryHeader);
      setInterval(() => {

        let nextImage;

    /* =========================
       ONE BOX FOR CATEGORY
    ========================= */
        do {

    const categoryGrid =
      document.createElement("div");
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

    categoryGrid.className =
      "project-grid-inner";

        setTimeout(() => {

    const card =
      document.createElement("article");
          categoryImage.style.backgroundImage =
            `url("${categoryImages[currentImage]}")`;

    card.className =
      "project-card";
          categoryImage.classList.remove(
            "changing"
          );

        }, 250);

      }, 3500);

    }


/* =========================
       RANDOM START IMAGE
       OPEN CATEGORY
   ========================= */

    let current =
      Math.floor(
        Math.random() * uniqueImages.length
      );
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

    card.innerHTML = `
      <div class="project-image"></div>
    modal.className =
      "category-modal";


    modal.innerHTML = `

      <div class="category-modal-backdrop"></div>

      <div class="project-overlay">
      <div class="category-modal-window">

        <div class="project-meta">
        <div class="category-modal-header">

         <div>
            <p class="project-title">
              ${category.title}

            <p class="eyebrow">
              PROJECTS
           </p>

            <p class="project-desc">
            <h2>
              ${category.title}
            </h2>

            <p>
             ${category.description}
           </p>
          </div>

          <div class="project-type">
            ${uniqueImages.length} IMAGES
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


    const image =
      card.querySelector(".project-image");
    document.body.appendChild(modal);


    const projectsContainer =
      modal.querySelector(
        ".category-projects"
      );


/* =========================
       SHOW IMAGE
       PROJECTS INSIDE CATEGORY
       NO SLIDESHOW HERE
   ========================= */

    function showRandomImage() {
    category.projects.forEach((project) => {

      if (uniqueImages.length <= 1) {
        return;
      }
      const images =
        Array.isArray(project.gallery) &&
        project.gallery.length
          ? project.gallery
          : [project.image];

      let next;

      do {
      const projectCard =
        document.createElement("article");

        next =
          Math.floor(
            Math.random() *
            uniqueImages.length
          );
      projectCard.className =
        "category-project-card";

      } while (next === current);

      projectCard.innerHTML = `

      current = next;
        <div
          class="category-project-image"
          style="background-image:url('${images[0]}')">
        </div>

      image.style.backgroundImage =
        `url("${uniqueImages[current]}")`;
    }
        <div class="category-project-info">

          <div>

    /* Initial image */
            <h3>
              ${project.title}
            </h3>

    image.style.backgroundImage =
      `url("${uniqueImages[current]}")`;
            <p>
              ${project.description}
            </p>

          </div>

    /* =========================
       RANDOM SLIDESHOW
    ========================= */
          <span>
            ${project.year}
          </span>

    if (uniqueImages.length > 1) {
        </div>

      setInterval(() => {
      `;

        showRandomImage();

      }, 3500);
      projectsContainer.appendChild(
        projectCard
      );

    }

      /* =========================
         OPEN PROJECT GALLERY
      ========================= */

    /* =========================
       OPEN CATEGORY GALLERY
    ========================= */
      projectCard.addEventListener(
        "click",
        () => {

    card.addEventListener("click", () => {
          openGallery(
            project.title,
            project.description,
            images
          );

      openGallery(
        category.title,
        category.description,
        uniqueImages
        }
);

});


    categoryGrid.appendChild(card);
    /* CLOSE */

    categorySection.appendChild(categoryGrid);
    modal
      .querySelector(
        ".category-modal-close"
      )
      .addEventListener(
        "click",
        closeCategory
      );

    projectGrid.appendChild(categorySection);

  });
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
     GALLERY
     PROJECT GALLERY
 ========================= */

function openGallery(
@@ -255,11 +378,14 @@ document.addEventListener("DOMContentLoaded", () => {
images
) {

    const oldModal =
      document.querySelector(".gallery-modal");
    const oldGallery =
      document.querySelector(
        ".gallery-modal"
      );


    if (oldModal) {
      oldModal.remove();
    if (oldGallery) {
      oldGallery.remove();
}


@@ -285,6 +411,7 @@ document.addEventListener("DOMContentLoaded", () => {
         ×
       </button>


       <div class="gallery-image-wrap">

         <img
@@ -306,6 +433,7 @@ document.addEventListener("DOMContentLoaded", () => {

       </div>


       <div class="gallery-info">

         <div>
@@ -331,10 +459,12 @@ document.addEventListener("DOMContentLoaded", () => {
   `;


    document.body.appendChild(modal);
    document.body.appendChild(
      modal
    );


    const mainImage =
    const image =
modal.querySelector(
".gallery-main-image"
);
@@ -346,16 +476,12 @@ document.addEventListener("DOMContentLoaded", () => {
);


    /* =========================
       UPDATE GALLERY
    ========================= */

function updateGallery() {

      mainImage.src =
      image.src =
images[current];

      mainImage.alt =
      image.alt =
`${title} - image ${current + 1}`;

counter.textContent =
@@ -364,73 +490,94 @@ document.addEventListener("DOMContentLoaded", () => {
}


    /* =========================
       PREVIOUS
    ========================= */
    /* PREVIOUS */

modal
      .querySelector(".gallery-prev")
      .addEventListener("click", () => {

        current =
          (current - 1 + images.length) %
          images.length;

        updateGallery();

      });
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


    /* =========================
       NEXT
    ========================= */
    /* NEXT */

modal
      .querySelector(".gallery-next")
      .addEventListener("click", () => {

        current =
          (current + 1) %
          images.length;

        updateGallery();

      });
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


    /* =========================
       CLOSE
    ========================= */
    /* CLOSE */

modal
      .querySelector(".gallery-close")
      .addEventListener("click", () => {
      .querySelector(
        ".gallery-close"
      )
      .addEventListener(
        "click",
        () => {

        modal.remove();
          modal.remove();

      });
        }
      );


modal
      .querySelector(".gallery-backdrop")
      .addEventListener("click", () => {
      .querySelector(
        ".gallery-backdrop"
      )
      .addEventListener(
        "click",
        () => {

        modal.remove();
          modal.remove();

      });
        }
      );


    /* =========================
       KEYBOARD
    ========================= */
    /* KEYBOARD */

    function keyboardHandler(event) {
    function keyboard(event) {

      if (!document.body.contains(modal)) {
      if (
        !document.body.contains(modal)
      ) {

document.removeEventListener(
"keydown",
          keyboardHandler
          keyboard
);

return;
@@ -448,7 +595,9 @@ document.addEventListener("DOMContentLoaded", () => {
if (event.key === "ArrowRight") {

current =
          (current + 1) %
          (
            current + 1
          ) %
images.length;

updateGallery();
@@ -459,7 +608,11 @@ document.addEventListener("DOMContentLoaded", () => {
if (event.key === "ArrowLeft") {

current =
          (current - 1 + images.length) %
          (
            current -
            1 +
            images.length
          ) %
images.length;

updateGallery();
@@ -471,7 +624,7 @@ document.addEventListener("DOMContentLoaded", () => {

document.addEventListener(
"keydown",
      keyboardHandler
      keyboard
);

}
