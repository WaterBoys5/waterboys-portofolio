const CATEGORIES = [
  {
    id: "documentation",
    number: "01",
    title: "DOCUMENTATION",
    description: "Event, stage, live performance, and visual documentation.",
    previewImages: [
      "assets/images/documentation/01.jpg",
      "assets/images/documentation/02.jpg",
      "assets/images/documentation/03.jpg"
    ],
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
    id: "product",
    number: "02",
    title: "PRODUCT",
    description: "Commercial product photography, catalog, and campaign visuals.",
    previewImages: [
      "assets/images/product/01.jpg",
      "assets/images/product/02.jpg",
      "assets/images/product/03.jpg"
    ],
    projects: [
      {
        title: "Product Photography",
        year: "2026",
        description: "Selected commercial product photography.",
        images: [
          "assets/images/product/01.jpg",
          "assets/images/product/02.jpg",
          "assets/images/product/03.jpg"
        ]
      }
    ]
  },

  {
    id: "portrait-commercial",
    number: "03",
    title: "PORTRAIT / COMMERCIAL",
    description: "Portrait, fashion, campaign, and commercial visual work.",
    previewImages: [
      "assets/images/portrait-commercial/01.jpg",
      "assets/images/portrait-commercial/02.jpg",
      "assets/images/portrait-commercial/03.jpg"
    ],
    projects: [
      {
        title: "Portrait / Commercial",
        year: "2026",
        description: "Selected portrait and commercial photography.",
        images: [
          "assets/images/portrait-commercial/01.jpg",
          "assets/images/portrait-commercial/02.jpg",
          "assets/images/portrait-commercial/03.jpg"
        ]
      }
    ]
  }
];

const categoryGrid = document.getElementById("category-grid");

const categoryModal = document.getElementById("category-modal");
const categoryModalTitle = document.getElementById("category-modal-title");
const categoryModalNumber = document.getElementById("category-modal-number");
const categoryModalDescription = document.getElementById("category-modal-description");
const projectList = document.getElementById("project-list");
const categoryClose = document.getElementById("category-close");

const galleryModal = document.getElementById("gallery-modal");
const galleryTitle = document.getElementById("gallery-title");
const galleryCategoryLabel = document.getElementById("gallery-category-label");
const galleryDescription = document.getElementById("gallery-description");
const galleryCounter = document.getElementById("gallery-counter");
const galleryImage = document.getElementById("gallery-image");
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const galleryClose = document.getElementById("gallery-close");

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.getElementById("mobile-nav");

let activeCategory = null;
let activeProject = null;
let galleryIndex = 0;
let lastFocusedElement = null;

function createCategoryCards() {
  categoryGrid.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "category-card";
    card.dataset.categoryId = category.id;
    card.setAttribute("aria-label", `Open ${category.title}`);

    const imageOne = document.createElement("img");
    imageOne.className = "category-image";
    imageOne.src = category.previewImages[0];
    imageOne.alt = `${category.title} preview`;
    imageOne.loading = "lazy";

    const imageTwo = document.createElement("img");
    imageTwo.className = "category-image next";
    imageTwo.src = category.previewImages[1] || category.previewImages[0];
    imageTwo.alt = "";
    imageTwo.setAttribute("aria-hidden", "true");

    const overlay = document.createElement("span");
    overlay.className = "category-overlay";

    const number = document.createElement("span");
    number.className = "category-number";
    number.textContent = category.number;

    const bottom = document.createElement("span");
    bottom.className = "category-bottom";

    const title = document.createElement("span");
    title.className = "category-title";
    title.textContent = category.title;

    const arrow = document.createElement("span");
    arrow.className = "category-arrow";
    arrow.textContent = "↗";

    bottom.append(title, arrow);
    overlay.append(number, bottom);
    card.append(imageOne, imageTwo, overlay);

    categoryGrid.appendChild(card);

    startCategorySlideshow(card, category);
  });
}

function startCategorySlideshow(card, category) {
  const images = category.previewImages.filter(Boolean);

  if (images.length < 2) return;

  let index = 0;

  const imageOne = card.querySelector(".category-image:not(.next)");
  const imageTwo = card.querySelector(".category-image.next");

  setInterval(() => {
    const nextIndex = (index + 1) % images.length;

    const nextImage = index % 2 === 0 ? imageTwo : imageOne;
    const currentImage = index % 2 === 0 ? imageOne : imageTwo;

    nextImage.src = images[nextIndex];

    card.classList.add("is-transitioning");

    setTimeout(() => {
      currentImage.src = images[nextIndex];
      card.classList.remove("is-transitioning");
      index = nextIndex;
    }, 900);

  }, 4200);
}

function renderProjectList(category) {
  projectList.innerHTML = "";

  category.projects.forEach((project, index) => {
    const item = document.createElement("button");

    item.type = "button";
    item.className = "project-item";
    item.dataset.projectIndex = String(index);

    const thumb = document.createElement("img");
    thumb.className = "project-thumb";
    thumb.src = project.images[0];
    thumb.alt = `${project.title} thumbnail`;
    thumb.loading = "lazy";

    const meta = document.createElement("span");
    meta.className = "project-meta";

    const title = document.createElement("span");
    title.className = "project-title";
    title.textContent = project.title;

    const year = document.createElement("span");
    year.className = "project-year";
    year.textContent = project.year;

    const arrow = document.createElement("span");
    arrow.className = "project-arrow";
    arrow.textContent = "↗";

    meta.append(title, year);
    item.append(thumb, meta, arrow);

    projectList.appendChild(item);
  });
}

function openCategory(categoryId, trigger) {
  const category = CATEGORIES.find(
    (item) => item.id === categoryId
  );

  if (!category) return;

  activeCategory = category;
  lastFocusedElement = trigger || document.activeElement;

  categoryModalTitle.textContent = category.title;
  categoryModalNumber.textContent = category.number;
  categoryModalDescription.textContent = category.description;

  renderProjectList(category);

  openModal(categoryModal, categoryClose);
}

function openGallery(project, category, trigger) {
  if (!project || !project.images.length) return;

  activeProject = project;
  activeCategory = category;
  galleryIndex = 0;
  lastFocusedElement = trigger || document.activeElement;

  galleryTitle.textContent = project.title;
  galleryCategoryLabel.textContent = category.title;
  galleryDescription.textContent = project.description;

  updateGalleryImage();

  closeModal(categoryModal, false);
  openModal(galleryModal, galleryClose);
}

function updateGalleryImage() {
  if (!activeProject) return;

  const imagePath = activeProject.images[galleryIndex];

  galleryImage.src = imagePath;
  galleryImage.alt =
    `${activeProject.title} image ${galleryIndex + 1}`;

  galleryCounter.textContent =
    `${String(galleryIndex + 1).padStart(2, "0")} / ` +
    `${String(activeProject.images.length).padStart(2, "0")}`;

  const singleImage = activeProject.images.length <= 1;

  galleryPrev.disabled = singleImage;
  galleryNext.disabled = singleImage;
}

function changeGalleryImage(direction) {
  if (!activeProject || activeProject.images.length < 2) return;

  galleryIndex =
    (galleryIndex + direction + activeProject.images.length) %
    activeProject.images.length;

  updateGalleryImage();
}

function openModal(modal, focusTarget) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    focusTarget?.focus();
  });
}

function closeModal(modal, restoreFocus = true) {
  if (!modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  const anotherModalOpen =
    categoryModal.classList.contains("is-open") ||
    galleryModal.classList.contains("is-open");

  if (!anotherModalOpen) {
    document.body.classList.remove("modal-open");

    if (
      restoreFocus &&
      lastFocusedElement &&
      typeof lastFocusedElement.focus === "function"
    ) {
      lastFocusedElement.focus();
    }

    lastFocusedElement = null;
  }
}

function closeCategory() {
  closeModal(categoryModal);
}

function closeGallery() {
  closeModal(galleryModal);
  activeProject = null;
}

categoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".category-card");

  if (!card) return;

  openCategory(card.dataset.categoryId, card);
});

projectList.addEventListener("click", (event) => {
  const item = event.target.closest(".project-item");

  if (!item || !activeCategory) return;

  const index = Number(item.dataset.projectIndex);
  const project = activeCategory.projects[index];

  if (project) {
    openGallery(project, activeCategory, item);
  }
});

categoryClose.addEventListener("click", closeCategory);
galleryClose.addEventListener("click", closeGallery);

document
  .querySelector("[data-close-category]")
  .addEventListener("click", closeCategory);

document
  .querySelector("[data-close-gallery]")
  .addEventListener("click", closeGallery);

galleryPrev.addEventListener("click", () => {
  changeGalleryImage(-1);
});

galleryNext.addEventListener("click", () => {
  changeGalleryImage(1);
});

document.addEventListener("keydown", (event) => {
  if (galleryModal.classList.contains("is-open")) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeGalleryImage(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeGalleryImage(1);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeGallery();
    }

    return;
  }

  if (
    categoryModal.classList.contains("is-open") &&
    event.key === "Escape"
  ) {
    event.preventDefault();
    closeCategory();
  }
});

mobileMenuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  mobileMenuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

mobileNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;

  mobileNav.classList.remove("is-open");

  mobileMenuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileMenuButton.setAttribute(
    "aria-label",
    "Open navigation"
  );
});

createCategoryCards();    description: "Commercial product imagery, catalog, campaign, and brand visuals.",
    previewImages: [
      "assets/images/product/product-01.jpg",
      "assets/images/product/product-02.jpg",
      "assets/images/product/product-03.jpg",
      "assets/images/product/product-04.jpg"
    ],
    projects: [
      {
        title: "Nevertoolavish — Unreleased",
        year: "2026",
        description: "Studio product photography for custom Nike Air Force 1 racing-inspired artwork.",
        images: [
          "assets/images/product/unreleased-01.jpg",
          "assets/images/product/unreleased-02.jpg",
          "assets/images/product/unreleased-03.jpg"
        ]
      },
      {
        title: "Vish — WKA",
        year: "2026",
        description: "Product campaign photography for Vish by Nevertoolavish.",
        images: [
          "assets/images/product/vish-wka-01.jpg",
          "assets/images/product/vish-wka-02.jpg"
        ]
      }
    ]
  },
  {
    id: "portrait",
    number: "03",
    title: "PORTRAIT / FASHION",
    description: "Portrait and fashion work focused on character, styling, and visual identity.",
    previewImages: [
      "assets/images/portrait/portrait-01.jpg",
      "assets/images/portrait/portrait-02.jpg",
      "assets/images/portrait/portrait-03.jpg",
      "assets/images/portrait/portrait-04.jpg"
    ],
    projects: [
      {
        title: "Portrait Study",
        year: "2026",
        description: "Portrait study exploring expression, lighting, and visual character.",
        images: [
          "assets/images/portrait/portrait-study-01.jpg",
          "assets/images/portrait/portrait-study-02.jpg"
        ]
      }
    ]
  },
  {
    id: "fashion",
    number: "04",
    title: "FASHION",
    description: "Fashion and streetwear imagery for creative direction, editorial, and brand work.",
    previewImages: [
      "assets/images/fashion/fashion-01.jpg",
      "assets/images/fashion/fashion-02.jpg",
      "assets/images/fashion/fashion-03.jpg",
      "assets/images/fashion/fashion-04.jpg"
    ],
    projects: [
      {
        title: "Fashion Editorial",
        year: "2026",
        description: "Fashion-focused visual series with an editorial and contemporary approach.",
        images: [
          "assets/images/fashion/fashion-editorial-01.jpg",
          "assets/images/fashion/fashion-editorial-02.jpg"
        ]
      }
    ]
  }
];

const categoryGrid = document.getElementById("category-grid");
const categoryModal = document.getElementById("category-modal");
const categoryModalTitle = document.getElementById("category-modal-title");
const categoryModalNumber = document.getElementById("category-modal-number");
const categoryModalDescription = document.getElementById("category-modal-description");
const projectList = document.getElementById("project-list");
const categoryClose = document.getElementById("category-close");

const galleryModal = document.getElementById("gallery-modal");
const galleryTitle = document.getElementById("gallery-title");
const galleryCategoryLabel = document.getElementById("gallery-category-label");
const galleryDescription = document.getElementById("gallery-description");
const galleryCounter = document.getElementById("gallery-counter");
const galleryImage = document.getElementById("gallery-image");
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const galleryClose = document.getElementById("gallery-close");

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.getElementById("mobile-nav");

let activeCategory = null;
let activeProject = null;
let galleryIndex = 0;
let lastFocusedElement = null;

const slideshowTimers = new Map();

function createCategoryCards() {
  categoryGrid.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "category-card";
    card.dataset.categoryId = category.id;
    card.setAttribute("aria-label", `Open ${category.title}`);

    const imageOne = document.createElement("img");
    imageOne.className = "category-image";
    imageOne.src = category.previewImages[0] || "";
    imageOne.alt = `${category.title} preview`;
    imageOne.loading = "lazy";

    const imageTwo = document.createElement("img");
    imageTwo.className = "category-image next";
    imageTwo.src = category.previewImages[1] || category.previewImages[0] || "";
    imageTwo.alt = "";
    imageTwo.setAttribute("aria-hidden", "true");

    const overlay = document.createElement("span");
    overlay.className = "category-overlay";

    const number = document.createElement("span");
    number.className = "category-number";
    number.textContent = category.number;

    const bottom = document.createElement("span");
    bottom.className = "category-bottom";

    const title = document.createElement("span");
    title.className = "category-title";
    title.textContent = category.title;

    const arrow = document.createElement("span");
    arrow.className = "category-arrow";
    arrow.textContent = "↗";

    bottom.append(title, arrow);
    overlay.append(number, bottom);
    card.append(imageOne, imageTwo, overlay);
    categoryGrid.appendChild(card);

    startCategorySlideshow(card, category);
  });
}

function startCategorySlideshow(card, category) {
  const images = category.previewImages.filter(Boolean);

  if (images.length < 2) return;

  let index = 0;
  const imageOne = card.querySelector(".category-image:not(.next)");
  const imageTwo = card.querySelector(".category-image.next");

  const timer = window.setInterval(() => {
    const nextIndex = (index + 1) % images.length;
    const nextImage = index % 2 === 0 ? imageTwo : imageOne;
    const currentImage = index % 2 === 0 ? imageOne : imageTwo;

    nextImage.src = images[nextIndex];
    nextImage.alt = `${category.title} preview`;
    card.classList.add("is-transitioning");

    window.setTimeout(() => {
      currentImage.src = images[nextIndex];
      currentImage.alt = `${category.title} preview`;
      card.classList.remove("is-transitioning");
      index = nextIndex;
    }, 900);
  }, 4200);

  slideshowTimers.set(category.id, timer);
}

function renderProjectList(category) {
  projectList.innerHTML = "";

  if (!category.projects.length) {
    const empty = document.createElement("p");
    empty.className = "project-empty";
    empty.textContent = "No projects added yet.";
    projectList.appendChild(empty);
    return;
  }

  category.projects.forEach((project, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "project-item";
    item.dataset.projectIndex = String(index);
    item.setAttribute("aria-label", `Open ${project.title}`);

    const thumb = document.createElement("img");
    thumb.className = "project-thumb";
    thumb.src = project.images[0] || "";
    thumb.alt = `${project.title} thumbnail`;
    thumb.loading = "lazy";

    const meta = document.createElement("span");
    meta.className = "project-meta";

    const title = document.createElement("span");
    title.className = "project-title";
    title.textContent = project.title;

    const year = document.createElement("span");
    year.className = "project-year";
    year.textContent = project.year;

    const arrow = document.createElement("span");
    arrow.className = "project-arrow";
    arrow.textContent = "↗";

    meta.append(title, year);
    item.append(thumb, meta, arrow);
    projectList.appendChild(item);
  });
}

function openCategory(categoryId, trigger) {
  const category = CATEGORIES.find((item) => item.id === categoryId);
  if (!category) return;

  activeCategory = category;
  lastFocusedElement = trigger || document.activeElement;

  categoryModalTitle.textContent = category.title;
  categoryModalNumber.textContent = category.number;
  categoryModalDescription.textContent = category.description;
  renderProjectList(category);

  openModal(categoryModal, categoryClose);
}

function openGallery(project, category, trigger) {
  if (!project || !project.images || !project.images.length) return;

  activeProject = project;
  activeCategory = category;
  galleryIndex = 0;
  lastFocusedElement = trigger || document.activeElement;

  galleryTitle.textContent = project.title;
  galleryCategoryLabel.textContent = category.title;
  galleryDescription.textContent = project.description || "";
  updateGalleryImage();

  closeModal(categoryModal);
  openModal(galleryModal, galleryClose);
}

function updateGalleryImage() {
  if (!activeProject || !activeProject.images.length) return;

  const imagePath = activeProject.images[galleryIndex];
  galleryImage.src = imagePath;
  galleryImage.alt = `${activeProject.title} — image ${galleryIndex + 1}`;
  galleryCounter.textContent =
    `${String(galleryIndex + 1).padStart(2, "0")} / ${String(activeProject.images.length).padStart(2, "0")}`;

  const singleImage = activeProject.images.length <= 1;
  galleryPrev.disabled = singleImage;
  galleryNext.disabled = singleImage;
}

function changeGalleryImage(direction) {
  if (!activeProject || activeProject.images.length < 2) return;

  galleryIndex =
    (galleryIndex + direction + activeProject.images.length) %
    activeProject.images.length;

  updateGalleryImage();
}

function openModal(modal, focusTarget) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  window.requestAnimationFrame(() => {
    if (focusTarget) focusTarget.focus();
  });
}

function closeModal(modal, restoreFocus = true) {
  if (!modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  const otherModalOpen =
    categoryModal.classList.contains("is-open") ||
    galleryModal.classList.contains("is-open");

  if (!otherModalOpen) {
    document.body.classList.remove("modal-open");

    if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }

    lastFocusedElement = null;
  }
}

function closeCategory() {
  closeModal(categoryModal);
}

function closeGallery() {
  closeModal(galleryModal);
  activeProject = null;
}

categoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".category-card");
  if (!card) return;
  openCategory(card.dataset.categoryId, card);
});

projectList.addEventListener("click", (event) => {
  const item = event.target.closest(".project-item");
  if (!item || !activeCategory) return;

  const index = Number(item.dataset.projectIndex);
  const project = activeCategory.projects[index];
  if (project) openGallery(project, activeCategory, item);
});

categoryClose.addEventListener("click", closeCategory);
galleryClose.addEventListener("click", closeGallery);

document.querySelector("[data-close-category]").addEventListener("click", closeCategory);
document.querySelector("[data-close-gallery]").addEventListener("click", closeGallery);

galleryPrev.addEventListener("click", () => changeGalleryImage(-1));
galleryNext.addEventListener("click", () => changeGalleryImage(1));

document.addEventListener("keydown", (event) => {
  if (galleryModal.classList.contains("is-open")) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeGalleryImage(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      changeGalleryImage(1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeGallery();
    }
    return;
  }

  if (categoryModal.classList.contains("is-open") && event.key === "Escape") {
    event.preventDefault();
    closeCategory();
  }
});

mobileMenuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mobileNav.classList.remove("is-open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute("aria-label", "Open navigation");
  }
});

window.addEventListener("beforeunload", () => {
  slideshowTimers.forEach((timer) => window.clearInterval(timer));
});

createCategoryCards();
