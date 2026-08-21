document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const categoryCards =
        document.querySelectorAll(".category-card");

    const workSection =
        document.querySelector(".work-section");

    const projectView =
        document.querySelector("#project-view");

    const projectGrid =
        document.querySelector("#project-grid");

    const backButton =
        document.querySelector("#back-button");

    const categoryTitle =
        document.querySelector("#project-category-title");

    const categoryLabel =
        document.querySelector("#project-category-label");


    /* =====================================================
       CREATE PROJECT VIEWER
    ===================================================== */

    const projectViewer =
        document.createElement("div");

    projectViewer.className =
        "project-viewer hidden";

    projectViewer.innerHTML = `
        <button
            class="viewer-close"
            type="button"
            aria-label="Close project"
        >
            ×
        </button>

        <div class="project-viewer-inner">

            <div class="viewer-heading">

                <p id="viewer-category">
                    PROJECT
                </p>

                <h2 id="viewer-title">
                    PROJECT
                </h2>

            </div>

            <div
                class="viewer-grid"
                id="viewer-grid"
            ></div>

        </div>
    `;

    document.body.appendChild(projectViewer);


    const viewerClose =
        projectViewer.querySelector(".viewer-close");

    const viewerCategory =
        projectViewer.querySelector("#viewer-category");

    const viewerTitle =
        projectViewer.querySelector("#viewer-title");

    const viewerGrid =
        projectViewer.querySelector("#viewer-grid");


    /* =====================================================
       FULLSCREEN VIEWER
    ===================================================== */

    const fullscreenViewer =
        document.createElement("div");

    fullscreenViewer.className =
        "fullscreen-viewer hidden";

    fullscreenViewer.innerHTML = `
        <button
            type="button"
            aria-label="Close image"
        >
            ×
        </button>

        <img
            src=""
            alt=""
        >
    `;

    document.body.appendChild(fullscreenViewer);


    const fullscreenImage =
        fullscreenViewer.querySelector("img");

    const fullscreenClose =
        fullscreenViewer.querySelector("button");


    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(categoryKey) {

        const category =
            CATEGORIES[categoryKey];

        if (!category) {
            console.error(
                "Category not found:",
                categoryKey
            );

            return;
        }


        categoryTitle.textContent =
            category.title;

        categoryLabel.textContent =
            "SELECTED PROJECTS";


        projectGrid.innerHTML = "";


        category.projects.forEach(
            (project, index) => {

                const card =
                    document.createElement("article");

                card.className =
                    "project-card";

                card.setAttribute(
                    "tabindex",
                    "0"
                );

                card.setAttribute(
                    "role",
                    "button"
                );


                card.innerHTML = `
                    <div class="project-card-image">

                        <img
                            src="${project.cover}"
                            alt="${project.title}"
                            loading="lazy"
                        >

                        <div class="project-card-overlay">
                            <span>
                                ${project.images.length} PHOTOS
                            </span>
                        </div>

                    </div>

                    <div class="project-card-info">

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.year}
                        </p>

                    </div>
                `;


                card.addEventListener(
                    "click",
                    () => {
                        openProject(
                            category,
                            project
                        );
                    }
                );


                card.addEventListener(
                    "keydown",
                    (event) => {

                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {

                            event.preventDefault();

                            openProject(
                                category,
                                project
                            );
                        }

                    }
                );


                projectGrid.appendChild(card);

            }
        );


        workSection.classList.add("hidden");

        projectView.classList.remove("hidden");

        projectView.setAttribute(
            "aria-hidden",
            "false"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =====================================================
       CLOSE CATEGORY
    ===================================================== */

    function closeCategory() {

        projectView.classList.add("hidden");

        projectView.setAttribute(
            "aria-hidden",
            "true"
        );

        workSection.classList.remove("hidden");


        window.scrollTo({
            top: workSection.offsetTop - 80,
            behavior: "smooth"
        });
    }


    /* =====================================================
       OPEN PROJECT
    ===================================================== */

    function openProject(
        category,
        project
    ) {

        viewerCategory.textContent =
            category.title;

        viewerTitle.textContent =
            project.title;

        viewerGrid.innerHTML = "";


        project.images.forEach(
            (imagePath, index) => {

                const imageWrapper =
                    document.createElement("div");

                imageWrapper.className =
                    "viewer-image";


                const image =
                    document.createElement("img");

                image.src =
                    imagePath;

                image.alt =
                    `${project.title} ${index + 1}`;

                image.loading =
                    "lazy";


                imageWrapper.appendChild(
                    image
                );


                imageWrapper.addEventListener(
                    "click",
                    () => {
                        openFullscreen(
                            imagePath,
                            project.title
                        );
                    }
                );


                viewerGrid.appendChild(
                    imageWrapper
                );

            }
        );


        projectViewer.classList.remove(
            "hidden"
        );

        document.body.classList.add(
            "viewer-open"
        );

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }


    /* =====================================================
       CLOSE PROJECT
    ===================================================== */

    function closeProject() {

        projectViewer.classList.add(
            "hidden"
        );

        document.body.classList.remove(
            "viewer-open"
        );
    }


    /* =====================================================
       FULLSCREEN IMAGE
    ===================================================== */

    function openFullscreen(
        imagePath,
        title
    ) {

        fullscreenImage.src =
            imagePath;

        fullscreenImage.alt =
            title;

        fullscreenViewer.classList.remove(
            "hidden"
        );

        document.body.classList.add(
            "fullscreen-open"
        );
    }


    function closeFullscreen() {

        fullscreenViewer.classList.add(
            "hidden"
        );

        fullscreenImage.src =
            "";

        document.body.classList.remove(
            "fullscreen-open"
        );
    }


    /* =====================================================
       CATEGORY EVENTS
    ===================================================== */

    categoryCards.forEach(
        (card) => {

            const categoryKey =
                card.dataset.category;


            card.addEventListener(
                "click",
                () => {
                    openCategory(
                        categoryKey
                    );
                }
            );


            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openCategory(
                            categoryKey
                        );
                    }

                }
            );

        }
    );


    /* =====================================================
       BACK
    ===================================================== */

    backButton.addEventListener(
        "click",
        closeCategory
    );


    /* =====================================================
       VIEWER CLOSE
    ===================================================== */

    viewerClose.addEventListener(
        "click",
        closeProject
    );


    fullscreenClose.addEventListener(
        "click",
        closeFullscreen
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            if (
                !fullscreenViewer.classList.contains(
                    "hidden"
                )
            ) {

                closeFullscreen();

                return;
            }


            if (
                !projectViewer.classList.contains(
                    "hidden"
                )
            ) {

                closeProject();

                return;
            }


            if (
                !projectView.classList.contains(
                    "hidden"
                )
            ) {

                closeCategory();

            }

        }
    );


    /* =====================================================
       PREVENT BACKGROUND SCROLL
    ===================================================== */

    projectViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target === projectViewer
            ) {
                closeProject();
            }

        }
    );


    fullscreenViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target === fullscreenViewer
            ) {
                closeFullscreen();
            }

        }
    );

});
