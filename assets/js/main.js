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

    const clientWorkGrid =
        document.querySelector("#client-work-grid");


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
                    "Live performance documentation of Stereowall at Trilogigs Bogor.",

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


            {
                title: "The Paps",

                description:
                    "Event documentation at Dreyy Fest Bogor 2026.",

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
            },

            {
                title: "Dongker at MM2100 Skateboard Bekasi",

                description:
                    "Live performance Dongker di acara MM2100 Skateboard rooftop gor Chandrabhaga Bekasi",

                images: [
                    "assets/images/documentation/dongker-ms-bekasi-10.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-12.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-15.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-16.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-17.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-18.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-21.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-23.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-25.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-27.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-3.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-31.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-32.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-4.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-6.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-8.jpg",
                    "assets/images/documentation/dongker-ms-bekasi-9.jpg"
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
                    "The artist behind an unreleased custom footwear project.",

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
            },

             {
                title: "bynsa wear",

                description:
                    "Photo-shoot for bynsa wear campaign 2021",

                images: [
                    "assets/images/portrait-commercial/bynsaa-1.jpg",
                    "assets/images/portrait-commercial/bynsaa-2.jpg",
                    "assets/images/portrait-commercial/bynsaa-3.jpg",
                    "assets/images/portrait-commercial/bynsaa-4.jpg",
                    "assets/images/portrait-commercial/bynsaa-5.jpg",
                    "assets/images/portrait-commercial/bynsaa-6.jpg",
                    "assets/images/portrait-commercial/bynsaa-7.jpg"
                ]
            },

            {
                title: "Haelum by Rizki Nazar",

                description:
                    "Photo-shoot for Haelum by Rizki Nazar campaign 2021",

                images: [
                    "assets/images/portrait-commercial/haelum-1.jpg",
                    "assets/images/portrait-commercial/haelum-2.jpg",
                    "assets/images/portrait-commercial/haelum-3.jpg",
                    "assets/images/portrait-commercial/haelum-4.jpg"
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

        ],


        /* =================================================
           ART DIRECTION
        ================================================= */

        "art-direction": [

            {
                title: "Dalmention",

                description:
                    "Fashion rework campaign. Art direction by WaterBoys, photography by Amaylia (Ayas).",

                role:
                    "Art Direction",

                photographer:
                    "Amaylia (Ayas)",

                photographerInstagram:
                    "https://www.instagram.com/am.liyas/",

                details:
                    "Concept development, lighting setup, location selection, client communication, and photographer direction.",

                images: [
                    "assets/images/art-direction/dalmention/dalmention-01.jpg",
                    "assets/images/art-direction/dalmention/dalmention-02.jpg",
                    "assets/images/art-direction/dalmention/dalmention-03.jpg",
                    "assets/images/art-direction/dalmention/dalmention-04.jpg",
                    "assets/images/art-direction/dalmention/dalmention-05.jpg",
                    "assets/images/art-direction/dalmention/dalmention-06.jpg",
                    "assets/images/art-direction/dalmention/dalmention-07.jpg",
                    "assets/images/art-direction/dalmention/dalmention-08.jpg",
                    "assets/images/art-direction/dalmention/dalmention-09.jpg",
                    "assets/images/art-direction/dalmention/dalmention-10.jpg",
                    "assets/images/art-direction/dalmention/dalmention-11.jpg",
                    "assets/images/art-direction/dalmention/dalmention-12.jpg",
                    "assets/images/art-direction/dalmention/dalmention-13.jpg",
                    "assets/images/art-direction/dalmention/dalmention-14.jpg",
                    "assets/images/art-direction/dalmention/dalmention-15.jpg"
                ]
            }

        ],


        /* =================================================
           OTHERS
        ================================================= */

        others: [

            {
                title: "Prewedding — Hilda & Fikar",

                description:
                    "Prewedding photography for Hilda and Fikar.",

                images: [
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-01.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-02.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-03.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-04.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-05.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-06.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-07.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-08.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-09.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-10.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-11.jpg",
                    "assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-12.jpg"
                ]
            },


            {
                title: "Syahrin — Graduation",

                description:
                    "Graduation photography for client Syahrin.",

                images: [
                    "assets/images/others/syahrin-graduation/syahrin-01.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-02.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-03.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-04.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-05.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-06.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-07.jpg",
                    "assets/images/others/syahrin-graduation/syahrin-08.jpg"
                ]
            },

                {
                title: "Svacasa Sawangan",

                description:
                    "Architecture Photography fot Svacasa Sawangan",

                images: [
                    "assets/images/others/svacasa-sawangan/svacasa-01.jpg",
                    "assets/images/others/svacasa-sawangan/svacasa-02.jpg",
                    "assets/images/others/svacasa-sawangan/svacasa-03.jpg",
                    "assets/images/others/svacasa-sawangan/svacasa-04.jpg",
                    "assets/images/others/svacasa-sawangan/svacasa-05.jpg",
                    "assets/images/others/svacasa-sawangan/svacasa-06.jpg"
                ]
            }

        ]

    };


    /* =====================================================
       CLIENT WORK
    ===================================================== */

    const CLIENT_WORK = [

        {
            client:
                "WALL OF JAKARTA",

            title:
                "Video Documentation",

            role:
                "Video Documentation",

            description:
                "Video documentation for Wall of Jakarta.",

            link:
                "https://www.instagram.com/reel/Dam-Z9dpo6k/"
        },


        {
            client:
                "TITANS",

            title:
                "Friend Flash 03 — Hari Kartini",

            role:
                "Campaign / Video",

            description:
                "Friend Flash 03 campaign created for TITANS in celebration of Hari Kartini.",

            link:
                "https://www.instagram.com/reel/DXYuDpcz2Pp/"
        },


        {
            client:
                "INDO WATCH COLLECTION × HARD THIRTEEN",

            title:
                "Custom Watch Collection",

            role:
                "Photography / Documentation",

            description:
                "Indo Watch Collection featuring a custom watch by Hard Thirteen.",

            link:
                "https://www.instagram.com/p/DUGKWsqj8xM/"
        },


        {
            client:
                "ORSE",

            title:
                "Connect Happily Vol. 3",

            role:
                "Campaign / Documentation",

            description:
                "Connect Happily Volume 3 by ORSE.",

            link:
                "https://www.instagram.com/p/DSRXRRQj5U6/"
        },


        {
            client:
                "PAYPORSE",

            title:
                "Pattern Horizon",

            role:
                "Campaign / Video",

            description:
                "Pattern Horizon campaign for Payporse.",

            link:
                "https://www.instagram.com/reel/DbX9dJVRHls/"
        },


        {
            client:
                "ORSE × KFC",

            title:
                "Pekan Raya Jakarta Campaign",

            role:
                "Video Documentation",

            description:
                "Campaign video documentation for ORSE's collaboration with KFC at Pekan Raya Jakarta.",

            link:
                "https://www.instagram.com/reel/DaNKoCJx4yC/"
        }

    ];


    /* =====================================================
       STATE
    ===================================================== */

    let activeViewer = null;

    let activeFullscreen = null;


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    function handleImageError(image) {

        image.classList.add("image-error");

        image.alt = "Image unavailable";

    }


    /* =====================================================
       CLIENT WORK RENDER
    ===================================================== */

    function renderClientWork() {

        if (!clientWorkGrid) {
            return;
        }

        clientWorkGrid.innerHTML = "";

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


            clientWorkGrid.appendChild(card);

        });

    }


    /* =====================================================
       CATEGORY EVENTS
    ===================================================== */

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;

            openCategory(category);

        });


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
       CATEGORY NAMES
    ===================================================== */

    const CATEGORY_NAMES = {

        documentation:
            "DOCUMENTATION",

        "portrait-commercial":
            "PORTRAIT / COMMERCIAL",

        product:
            "PRODUCT",

        "art-direction":
            "ART DIRECTION",

        others:
            "OTHERS"

    };


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


        projectTitle.textContent =
            CATEGORY_NAMES[category] ||
            category.toUpperCase();


        projectLabel.textContent =
            "SELECTED PROJECTS";


        projectGrid.innerHTML = "";


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


            const cardImage =
                card.querySelector("img");


            cardImage.addEventListener(
                "error",
                () => handleImageError(cardImage)
            );


            card.addEventListener(
                "click",
                () => openProject(project)
            );


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


                    ${
                        project.role
                            ? `
                                <p class="viewer-project-role">
                                    ${project.role}
                                </p>
                              `
                            : ""
                    }


                    ${
                        project.photographer
                            ? `
                                <p class="viewer-project-photographer">
                                    PHOTOGRAPHY BY
                                    <strong>
                                        ${project.photographer}
                                    </strong>
                                </p>
                              `
                            : ""
                    }


                    ${
                        project.details
                            ? `
                                <p class="viewer-project-details">
                                    ${project.details}
                                </p>
                              `
                            : ""
                    }


                    ${
                        project.photographerInstagram
                            ? `
                                <a
                                    class="viewer-project-link"
                                    href="${project.photographerInstagram}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    PHOTOGRAPHER INSTAGRAM ↗
                                </a>
                              `
                            : ""
                    }

                </div>


                <div class="viewer-grid"></div>

            </div>

        `;


        const viewerGrid =
            viewer.querySelector(
                ".viewer-grid"
            );


        /* =================================================
           ADD PROJECT PHOTOS
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


                const img =
                    imageCard.querySelector("img");


                img.addEventListener(
                    "error",
                    () => handleImageError(img)
                );


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
           ESCAPE
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


        const img =
            fullscreen.querySelector("img");


        img.addEventListener(
            "error",
            () => handleImageError(img)
        );


        document.body.appendChild(
            fullscreen
        );


        activeFullscreen =
            fullscreen;


        document.body.style.overflow =
            "hidden";


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
       BACK BUTTON
    ===================================================== */

    if (backButton) {

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

                    top:
                        workSection.offsetTop,

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* =====================================================
       BRAND / HOME
    ===================================================== */

    if (brand) {

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

    }


    /* =====================================================
       INIT
    ===================================================== */

    renderClientWork();

});

