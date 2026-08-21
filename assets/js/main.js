document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const categoryGrid =
        document.querySelector(".category-grid");

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
                    "Live performance documentation of Stereo Wall at Trilogigs Bogor.",

                role:
                    "PHOTOGRAPHY",

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

                role:
                    "PHOTOGRAPHY",

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


            {
                title: "The Paps",

                description:
                    "Event documentation at Dreyy Fest Bogor 2026.",

                role:
                    "PHOTOGRAPHY",

                images: [
                    "assets/images/documentation/thepaps-01.jpg",
                    "assets/images/documentation/thepaps-02.jpg",
                    "assets/images/documentation/thepaps-03.jpg",
                    "assets/images/documentation/thepaps-04.jpg",
                    "assets/images/documentation/thepaps-05.jpg",
                    "assets/images/documentation/thepaps-06.jpg",
                    "assets/images/documentation/thepaps-07.jpg",
                    "assets/images/documentation/thepaps-08.jpg",
                    "assets/images/documentation/thepaps-09.jpg"
                ]
            }

        ],


        /* =================================================
           PORTRAIT / COMMERCIAL
        ================================================= */

        "portrait-commercial": [

            {
                title: "Peron Long Sleeve",

                description:
                    "Commercial portrait campaign.",

                role:
                    "PHOTOGRAPHY",

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
                    "Commercial portrait campaign for Vish by Nevertoolavish.",

                role:
                    "PHOTOGRAPHY",

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
                    "Commercial campaign for WKA from Nevertoolavish to SIMPATI.",

                role:
                    "PHOTOGRAPHY",

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
                title: "Unreleased",

                description:
                    "The artist behind Unreleased custom footwear project.",

                role:
                    "PHOTOGRAPHY",

                images: [
                    "assets/images/portrait-commercial/unreleased-01.jpg",
                    "assets/images/portrait-commercial/unreleased-02.jpg",
                    "assets/images/portrait-commercial/unreleased-03.jpg",
                    "assets/images/portrait-commercial/unreleased-04.jpg",
                    "assets/images/portrait-commercial/unreleased-05.jpg",
                    "assets/images/portrait-commercial/unreleased-06.jpg"
                ]
            },


            {
                title: "Back 2 Bloom",

                description:
                    "Commercial campaign photography for Back 2 Bloom.",

                role:
                    "PHOTOGRAPHY",

                images: [
                    "assets/images/portrait-commercial/b2b-01.jpg",
                    "assets/images/portrait-commercial/b2b-02.jpg",
                    "assets/images/portrait-commercial/b2b-03.jpg",
                    "assets/images/portrait-commercial/b2b-04.jpg",
                    "assets/images/portrait-commercial/b2b-05.jpg",
                    "assets/images/portrait-commercial/b2b-06.jpg",
                    "assets/images/portrait-commercial/b2b-07.jpg",
                    "assets/images/portrait-commercial/b2b-08.jpg",
                    "assets/images/portrait-commercial/b2b-09.jpg",
                    "assets/images/portrait-commercial/b2b-10.jpg",
                    "assets/images/portrait-commercial/b2b-11.jpg",
                    "assets/images/portrait-commercial/b2b-12.jpg",
                    "assets/images/portrait-commercial/b2b-13.jpg",
                    "assets/images/portrait-commercial/b2b-14.jpg"
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

                role:
                    "PHOTOGRAPHY",

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

                role:
                    "PHOTOGRAPHY",

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

                role:
                    "PHOTOGRAPHY",

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

        ],


        /* =================================================
           ART DIRECTION
        ================================================= */

        "art-direction": [

            {
                title: "Dalmention",

                description:
                    "Fashion campaign for Dalmention, a reworked fashion brand. Art direction covering concept development, lighting setup, location selection, client communication, and directing the photographer during the shoot.",

                role:
                    "ART DIRECTION",

                photographer:
                    "Amaylia (Ayas)",

                instagram:
                    "https://www.instagram.com/am.liyas/",

                images: [
                    "assets/images/art-direction/dalmention-01.jpg",
                    "assets/images/art-direction/dalmention-02.jpg",
                    "assets/images/art-direction/dalmention-03.jpg",
                    "assets/images/art-direction/dalmention-04.jpg",
                    "assets/images/art-direction/dalmention-05.jpg",
                    "assets/images/art-direction/dalmention-06.jpg",
                    "assets/images/art-direction/dalmention-07.jpg",
                    "assets/images/art-direction/dalmention-08.jpg",
                    "assets/images/art-direction/dalmention-09.jpg",
                    "assets/images/art-direction/dalmention-10.jpg",
                    "assets/images/art-direction/dalmention-11.jpg",
                    "assets/images/art-direction/dalmention-12.jpg",
                    "assets/images/art-direction/dalmention-13.jpg",
                    "assets/images/art-direction/dalmention-14.jpg",
                    "assets/images/art-direction/dalmention-15.jpg"
                ]
            }

        ],


        /* =================================================
           OTHER
        ================================================= */

        other: [

            {
                title: "Syahrin Graduation",

                description:
                    "Graduation portrait session for client Syahrin.",

                role:
                    "PHOTOGRAPHY",

                client:
                    "Syahrin",

                images: [
                    "assets/images/other/syahrin-01.jpg",
                    "assets/images/other/syahrin-02.jpg",
                    "assets/images/other/syahrin-03.jpg",
                    "assets/images/other/syahrin-04.jpg",
                    "assets/images/other/syahrin-05.jpg",
                    "assets/images/other/syahrin-06.jpg",
                    "assets/images/other/syahrin-07.jpg",
                    "assets/images/other/syahrin-08.jpg"
                ]
            }

        ]

    };


    /* =====================================================
       CLIENT WORK
    ===================================================== */

    const CLIENT_WORK = [

        {
            client: "ORSE × KFC",

            title:
                "Pekan Raya Jakarta Campaign",

            role:
                "VIDEO DOCUMENTATION",

            description:
                "Campaign video documentation for ORSE's collaboration with KFC at Pekan Raya Jakarta.",

            link:
                "https://www.instagram.com/reel/DaNKoCJx4yC/"
        }

    ];


    /* =====================================================
       CATEGORY INFORMATION
    ===================================================== */

    const CATEGORY_INFO = {

        documentation: {
            label: "DOCUMENTATION",
            title: "DOCUMENTATION",
            description:
                "Live performances, events, and visual documentation."
        },

        "portrait-commercial": {
            label: "PORTRAIT / COMMERCIAL",
            title: "PORTRAIT / COMMERCIAL",
            description:
                "Portrait campaigns, fashion, and commercial photography."
        },

        product: {
            label: "PRODUCT",
            title: "PRODUCT",
            description:
                "Product photography, campaigns, and commercial still life."
        },

        "art-direction": {
            label: "ART DIRECTION",
            title: "ART DIRECTION",
            description:
                "Concept development, visual direction, and photography."
        },

        other: {
            label: "OTHER",
            title: "OTHER",
            description:
                "Personal work, client portraits, and projects outside the main categories."
        }

    };


    /* =====================================================
       STATE
    ===================================================== */

    let activeViewer = null;
    let activeFullscreen = null;


    /* =====================================================
       CREATE CATEGORY CARD
       Only creates cards that don't already exist in HTML.
    ===================================================== */

    function createCategoryCard(category) {

        if (!categoryGrid) {
            return null;
        }

        if (
            categoryGrid.querySelector(
                `[data-category="${category}"]`
            )
        ) {
            return categoryGrid.querySelector(
                `[data-category="${category}"]`
            );
        }

        const projects =
            PROJECTS[category];

        if (!projects || !projects.length) {
            return null;
        }

        const info =
            CATEGORY_INFO[category];

        const card =
            document.createElement("article");

        card.className =
            "category-card";

        card.dataset.category =
            category;

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "role",
            "button"
        );

        const thumbnail =
            projects[0].images[0];

        card.innerHTML = `

            <div class="category-image">

                <img
                    src="${thumbnail}"
                    alt="${info.title}"
                    loading="lazy"
                >

                <div class="image-overlay"></div>

                <div class="image-heading">

                    <span>
                        ${info.label}
                    </span>

                    <h3>
                        ${info.title}
                    </h3>

                </div>

            </div>

            <div class="category-info">

                <p>
                    ${info.description}
                </p>

            </div>

        `;

        categoryGrid.appendChild(card);

        bindCategoryCard(card);

        return card;
    }


    /* =====================================================
       BIND CATEGORY CARD
    ===================================================== */

    function bindCategoryCard(card) {

        if (!card) {
            return;
        }

        if (
            card.dataset.bound === "true"
        ) {
            return;
        }

        card.dataset.bound =
            "true";

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                openCategory(category);

            }
        );

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    const category =
                        card.dataset.category;

                    openCategory(category);

                }

            }
        );

    }


    /* =====================================================
       EXISTING CATEGORY CARDS
    ===================================================== */

    document
        .querySelectorAll(".category-card")
        .forEach(bindCategoryCard);


    /* =====================================================
       ADD NEW CATEGORIES
    ===================================================== */

    createCategoryCard("art-direction");
    createCategoryCard("other");


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

        const info =
            CATEGORY_INFO[category];

        projectTitle.textContent =
            info ? info.title : category.toUpperCase();

        projectLabel.textContent =
            info ? info.label : "SELECTED PROJECTS";

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

            card.addEventListener(
                "click",
                () => {

                    openProject(project);

                }
            );


            /* =================================================
               KEYBOARD PROJECT
            ================================================= */

            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openProject(project);

                    }

                }
            );


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

                    <div class="viewer-meta"></div>

                </div>

                <div class="viewer-grid"></div>

            </div>

        `;


        /* =================================================
           PROJECT META
        ================================================= */

        const meta =
            viewer.querySelector(
                ".viewer-meta"
            );

        let metaHTML = "";


        if (project.role) {

            metaHTML += `

                <p>
                    <span>ROLE</span>
                    ${project.role}
                </p>

            `;

        }


        if (project.client) {

            metaHTML += `

                <p>
                    <span>CLIENT</span>
                    ${project.client}
                </p>

            `;

        }


        if (project.photographer) {

            metaHTML += `

                <p>
                    <span>PHOTOGRAPHY</span>
                    ${
                        project.instagram
                            ? `
                                <a
                                    href="${project.instagram}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ${project.photographer} ↗
                                </a>
                            `
                            : project.photographer
                    }
                </p>

            `;

        }


        if (project.description) {

            metaHTML += `

                <p class="viewer-description">
                    ${project.description}
                </p>

            `;

        }


        meta.innerHTML =
            metaHTML;


        /* =================================================
           VIEWER GRID
        ================================================= */

        const viewerGrid =
            viewer.querySelector(
                ".viewer-grid"
            );


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


    /* =====================================================
       CLIENT WORK SECTION
    ===================================================== */

    function createClientWorkSection() {

        if (!workSection) {
            return;
        }

        if (
            document.querySelector(
                ".client-work-section"
            )
        ) {
            return;
        }

        const section =
            document.createElement("section");

        section.className =
            "client-work-section";

        section.innerHTML = `

            <div class="client-work-header">

                <p class="client-work-label">
                    CLIENT WORK
                </p>

                <h2 class="client-work-title">
                    SELECTED CLIENT POSTS
                </h2>

            </div>

            <div class="client-work-grid"></div>

        `;

        const grid =
            section.querySelector(
                ".client-work-grid"
            );

        CLIENT_WORK.forEach(work => {

            const card =
                document.createElement("article");

            card.className =
                "client-work-card";

            card.innerHTML = `

                <div class="client-work-card-content">

                    <p class="client-work-client">
                        ${work.client}
                    </p>

                    <h3>
                        ${work.title}
                    </h3>

                    <p class="client-work-role">
                        ${work.role}
                    </p>

                    <p class="client-work-description">
                        ${work.description}
                    </p>

                    <a
                        class="client-work-link"
                        href="${work.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VIEW CLIENT POST ↗
                    </a>

                </div>

            `;

            grid.appendChild(card);

        });

        workSection.appendChild(
            section
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    createClientWorkSection();

});
