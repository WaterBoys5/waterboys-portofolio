/* =================================
   WATERBOYS PORTFOLIO
================================= */


/*
  =================================================
  EDIT FOTO DI SINI
  =================================================

  Struktur folder:

  assets/images/
  ├── documentation/
  ├── portrait-commercial/
  └── product/

  Tinggal masukkan nama file foto yang sebenarnya.
*/


const PROJECTS = {

  documentation: [

    {
      title: "DOCUMENTATION 01",
      year: "2026",
      image: "assets/images/documentation/documentation-01.jpg"
    },

    {
      title: "DOCUMENTATION 02",
      year: "2026",
      image: "assets/images/documentation/documentation-02.jpg"
    }

  ],


  portrait: [

    {
      title: "PERON LONG SLEEVE",
      year: "2026",
      image: "assets/images/portrait-commercial/peron-long-sleeve-01.jpg"
    },

    {
      title: "WKA X SIMPATI",
      year: "2026",
      image: "assets/images/portrait-commercial/wka-simpati-01.jpg"
    },

    {
      title: "VISHGAZINE",
      year: "2026",
      image: "assets/images/portrait-commercial/vishgazine-01.jpg"
    }

  ],


  product: [

    {
      title: "PRODUCT 01",
      year: "2026",
      image: "assets/images/product/product-01.jpg"
    },

    {
      title: "PRODUCT 02",
      year: "2026",
      image: "assets/images/product/product-02.jpg"
    }

  ]

};



/* =================================
   CREATE PROJECT CARD
================================= */

function createProjectCard(project) {

  const card = document.createElement("a");

  card.href = "#";

  card.className = "project-card";


  card.innerHTML = `

    <div class="project-image">

      <img
        src="${project.image}"
        alt="${project.title}"
        loading="lazy"
      >

    </div>


    <div class="project-meta">

      <h4>
        ${project.title}
      </h4>

      <span>
        ${project.year}
      </span>

    </div>

  `;


  card.addEventListener("click", function(event) {

    event.preventDefault();

    openLightbox(
      project.image,
      project.title
    );

  });


  return card;

}



/* =================================
   LOAD PROJECTS
================================= */

function loadProjects() {

  const documentationGrid =
    document.getElementById(
      "documentation-grid"
    );


  const portraitGrid =
    document.getElementById(
      "portrait-grid"
    );


  const productGrid =
    document.getElementById(
      "product-grid"
    );


  PROJECTS.documentation.forEach(
    function(project) {

      documentationGrid.appendChild(
        createProjectCard(project)
      );

    }
  );


  PROJECTS.portrait.forEach(
    function(project) {

      portraitGrid.appendChild(
        createProjectCard(project)
      );

    }
  );


  PROJECTS.product.forEach(
    function(project) {

      productGrid.appendChild(
        createProjectCard(project)
      );

    }
  );

}



/* =================================
   LIGHTBOX
================================= */

const lightbox =
  document.getElementById(
    "lightbox"
  );


const lightboxImage =
  document.getElementById(
    "lightbox-image"
  );


const lightboxTitle =
  document.getElementById(
    "lightbox-title"
  );


const lightboxClose =
  document.getElementById(
    "lightbox-close"
  );



function openLightbox(
  image,
  title
) {

  lightboxImage.src = image;

  lightboxImage.alt = title;

  lightboxTitle.textContent = title;

  lightbox.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";

}



function closeLightbox() {

  lightbox.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

}



/* CLOSE BUTTON */

lightboxClose.addEventListener(
  "click",
  closeLightbox
);



/* CLICK OUTSIDE IMAGE */

lightbox.addEventListener(
  "click",
  function(event) {

    if (
      event.target === lightbox
    ) {

      closeLightbox();

    }

  }
);



/* ESC KEY */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      closeLightbox();

    }

  }
);



/* =================================
   START
================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadProjects();

  }
);
