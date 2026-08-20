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

    const projectTitle =
        document.querySelector("#project-category-title");

    const projectLabel =
        document.querySelector("#project-category-label");

    const backButton =
        document.querySelector("#back-button");

    const brand =
        document.querySelector(".brand");


    /* =====================================================
       PROJECT DATA
    ===================================================== */

    const PROJECTS = {

        /* =================================================
           DOCUMENTATION
        ================================================= */

        documentation: [

            {
                title: "Stereo Wall",

                description:
                    "Live performance documentation.",

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
            },

            {
             title: "Jerana",

             description:
                 "Event documentation at Krapela.",
 
             images: [
                 "assets/images/documentation/jerana-01.jpg",
                 "assets/images/documentation/jerana-02.jpg",
                 "assets/images/documentation/jerana-03.jpg",
                 "assets/images/documentation/jerana-04.jpg",
                 "assets/images/documentation/jerana-05.jpg",
                 "assets/images/documentation/jerana-06.jpg",
                 "assets/images/documentation/jerana-07.jpg"
       ]
            },

        ],


        /* =================================================
           PORTRAIT COMMERCIAL
        ================================================= */

        "portrait-commercial": [

            {
                title: "Peron Long Sleeve",

                description:
                    "Commercial portrait campaign.",

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

                description:
                    "Commercial portrait campaign.",

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

                description:
                    "Commercial campaign.",

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


            /* =================================================
               UNRELEASED
            ================================================= */

            {
                title: "Unreleased",

                description:
                    "Unreleased custom footwear project.",

                images: [
                    "assets/images/portrait-commercial/unreleased-01.jpg",
                    "assets/images/portrait-commercial/unreleased-02.jpg",
                    "assets/images/portrait-commercial/unreleased-03.jpg",
                    "assets/images/portrait-commercial/unreleased-04.jpg",
                    "assets/images/portrait-commercial/unreleased-05.jpg",
                    "assets/images/portrait-commercial/unreleased-06.jpg"
                ]
            }

        ],


        /* =================================================
           PRODUCT
        ================================================= */

        product: [

            {
                title: "LV Wallet",

                description:
                    "Luxury product photography.",

                images: [
                    "assets/images/product/lv-wallet-01.jpg",
                    "assets/images/product/lv-wallet-02.jpg",
                    "assets/images/product/lv-wallet-03.jpg",
                    "assets/images/product/lv-wallet-04.jpg"
                ]
            },


            {
                title: "TITANS",

                description:
                    "Commercial product campaign.",

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
            },

            {
    title: "Nevertoolavish Custom Shoes",

    description:
        "Still life product photography for custom shoes by Nevertoolavish.",

    images: [
        "assets/images/product/nevertoolavish-shoes-01.jpg",
        "assets/images/product/nevertoolavish-shoes-02.jpg",
        "assets/images/product/nevertoolavish-shoes-03.jpg",
        "assets/images/product/nevertoolavish-shoes-04.jpg",
        "assets/images/product/nevertoolavish-shoes-05.jpg",
        "assets/images/product/nevertoolavish-shoes-06.jpg",
        "assets/images/product/nevertoolavish-shoes-07.jpg",
        "assets/images/product/nevertoolavish-shoes-08.jpg",
        "assets/images/product/nevertoolavish-shoes-09.jpg",
        "assets/images/product/nevertoolavish-shoes-10.jpg",
        "assets/images/product/nevertoolavish-shoes-11.jpg",
        "assets/images/product/nevertoolavish-shoes-12.jpg",
        "assets/images/product/nevertoolavish-shoes-13.jpg",
        "assets/images/product/nevertoolavish-shoes-14.jpg",
        "assets/images/product/nevertoolavish-shoes-15.jpg"
    ]
}
        ]

    };


    /* =====================================================
       STATE
    ===================================================== */

    let activeViewer = null;
    let activeFullscreen = null;


    /* =====================================================
       CATEGORY CLICK
    ===================================================== */

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;

            openCategory(category);

        });


        /* =================================================
           CATEGORY KEYBOARD
        ================================================= */

        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                const category =
                    card.dataset.category;

                openCategory(category);

            }

        });

    });


    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(category) {

        const projects =
            PROJECTS[category];

        if (!projects) {

            console.error(
                "Category tidak ditemukan:",
                category
            );

            return;

        }


        const readableName =
            category
                .replaceAll("-", " ")
                .toUpperCase();


        projectTitle.textContent =
            readableName;

        projectLabel.textContent =
            "SELECTED PROJECTS";


        projectGrid.innerHTML = "";


        /* =================================================
           CREATE PROJECT CARDS
        ================================================= */

        projects.forEach(project => {

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


            const thumbnail =
                project.images[0];


            card.innerHTML = `

                <div class="project-card-image">

                    <img
                        src="${thumbnail}"
                        alt="${project.title}"
                        loading="lazy"
                    >

                    <div class="project-card-overlay">

                        <span>
                            ${project.images.length} IMAGES
                        </span>

                    </div>

                </div>

                <div class="project-card-info">

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                </div>

            `;


            /* =================================================
               CLICK PROJECT
            ================================================= */

            card.addEventListener("click", () => {

                openProject(project);

            });


            /* =================================================
               KEYBOARD PROJECT
            ================================================= */

            card.addEventListener("keydown", event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openProject(project);

                }

            });


            projectGrid.appendChild(card);

        });


        /* =================================================
           CHANGE VIEW
        ================================================= */

        workSection.style.display =
            "none";

        projectView.classList.remove(
            "hidden"
        );

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
       OPEN PROJECT
    ===================================================== */

    function openProject(project) {

        closeProject();


        const viewer =
            document.createElement("div");

        viewer.className =
            "project-viewer";


        viewer.innerHTML = `

            <div class="project-viewer-inner">

                <button
                    class="viewer-close"
                    type="button"
                    aria-label="Close project"
                >
                    ×
                </button>

                <div class="viewer-heading">

                    <p>
                        PROJECT
                    </p>

                    <h2>
                        ${project.title}
                    </h2>

                </div>

                <div class="viewer-grid"></div>

            </div>

        `;


        const viewerGrid =
            viewer.querySelector(".viewer-grid");


        /* =================================================
           ADD PHOTOS
        ================================================= */

        project.images.forEach(
            (image, index) => {

                const imageCard =
                    document.createElement("div");

                imageCard.className =
                    "viewer-image";


                imageCard.innerHTML = `

                    <img
                        src="${image}"
                        alt="${project.title} ${index + 1}"
                        loading="lazy"
                    >

                `;


                imageCard.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();
                        event.stopPropagation();

                        openFullscreen(
                            image,
                            project.title
                        );

                    }
                );


                viewerGrid.appendChild(
                    imageCard
                );

            }
        );


        document.body.appendChild(
            viewer
        );

        document.body.style.overflow =
            "hidden";


        activeViewer =
            viewer;


        /* =================================================
           CLOSE BUTTON
        ================================================= */

        viewer
            .querySelector(".viewer-close")
            .addEventListener(
                "click",
                closeProject
            );


        /* =================================================
           ESCAPE KEY
        ================================================= */

        viewer._escapeHandler =
            event => {

                if (
                    event.key === "Escape"
                ) {

                    if (activeFullscreen) {

                        closeFullscreen();

                        return;

                    }

                    closeProject();

                }

            };


        document.addEventListener(
            "keydown",
            viewer._escapeHandler
        );

    }


    /* =====================================================
       CLOSE PROJECT
    ===================================================== */

    function closeProject() {

        if (!activeViewer) {
            return;
        }


        if (
            activeViewer._escapeHandler
        ) {

            document.removeEventListener(
                "keydown",
                activeViewer._escapeHandler
            );

        }


        activeViewer.remove();

        activeViewer =
            null;

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       FULLSCREEN IMAGE
    ===================================================== */

    function openFullscreen(
        image,
        title
    ) {

        closeFullscreen();


        const fullscreen =
            document.createElement("div");

        fullscreen.className =
            "fullscreen-viewer";


        fullscreen.innerHTML = `

            <button
                type="button"
                aria-label="Close image"
            >
                ×
            </button>

            <img
                src="${image}"
                alt="${title}"
            >

        `;


        document.body.appendChild(
            fullscreen
        );


        activeFullscreen =
            fullscreen;


        document.body.style.overflow =
            "hidden";


        /* =================================================
           CLOSE BUTTON
        ================================================= */

        const closeButton =
            fullscreen.querySelector(
                "button"
            );


        closeButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                closeFullscreen();

            }
        );


        /* =================================================
           CLICK BACKDROP
        ================================================= */

        fullscreen.addEventListener(
            "click",
            event => {

                if (
                    event.target === fullscreen
                ) {

                    closeFullscreen();

                }

            }
        );


        /* =================================================
           ESCAPE KEY
        ================================================= */

        fullscreen._escapeHandler =
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeFullscreen();

                }

            };


        document.addEventListener(
            "keydown",
            fullscreen._escapeHandler
        );

    }


    /* =====================================================
       CLOSE FULLSCREEN
    ===================================================== */

    function closeFullscreen() {

        if (!activeFullscreen) {
            return;
        }


        if (
            activeFullscreen._escapeHandler
        ) {

            document.removeEventListener(
                "keydown",
                activeFullscreen._escapeHandler
            );

        }


        activeFullscreen.remove();

        activeFullscreen =
            null;


        /* =================================================
           RESTORE SCROLL STATE
        ================================================= */

        if (activeViewer) {

            document.body.style.overflow =
                "hidden";

        } else {

            document.body.style.overflow =
                "";

        }

    }


    /* =====================================================
       BACK TO CATEGORIES
    ===================================================== */

    backButton.addEventListener(
        "click",
        () => {

            projectView.classList.add(
                "hidden"
            );

            projectView.setAttribute(
                "aria-hidden",
                "true"
            );

            workSection.style.display =
                "";

            window.scrollTo({
                top: workSection.offsetTop,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       NAVBAR HOME
    ===================================================== */

    brand.addEventListener(
        "click",
        event => {

            event.preventDefault();

            closeFullscreen();
            closeProject();

            projectView.classList.add(
                "hidden"
            );

            projectView.setAttribute(
                "aria-hidden",
                "true"
            );

            workSection.style.display =
                "";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

});
