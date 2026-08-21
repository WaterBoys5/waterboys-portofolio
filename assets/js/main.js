document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DATA
    ===================================================== */

    const CATEGORIES = {

        documentation: {
            title: "DOCUMENTATION",
            description:
                "Visual documentation of performances, events, concerts, and creative projects.",

            projects: [

                {
                    title: "STEREO WALL",
                    year: "2026",

                    cover:
                        "assets/images/documentation/stereo-wall-01.jpg",

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
                    title: "JERANA",
                    year: "2026",

                    cover:
                        "assets/images/documentation/jerana-01.jpg",

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
                    title: "THE PAPS",
                    year: "2026",

                    cover:
                        "assets/images/documentation/thepaps-01.jpg",

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

            ]
        },


        "portrait-commercial": {
            title: "PORTRAIT COMMERCIAL",
            description:
                "Portrait and campaign imagery created for brands and creative projects.",

            projects: [

                {
                    title: "PERON.ID LONG SLEEVE T-SHIRT",
                    year: "2026",

                    cover:
                        "assets/images/portrait-commercial/peron-long-sleeve-01.jpg",

                    images: [
                        "assets/images/portrait-commercial/peron-long-sleeve-01.jpg",
                        "assets/images/portrait-commercial/peron-long-sleeve-02.jpg",
                        "assets/images/portrait-commercial/peron-long-sleeve-03.jpg",
                        "assets/images/portrait-commercial/peron-long-sleeve-04.jpg",
                        "assets/images/portrait-commercial/peron-long-sleeve-05.jpg"
                    ]
                },

                {
                    title: "WKA × SIMPATI",
                    year: "2026",

                    cover:
                        "assets/images/portrait-commercial/wka-simpati-01.jpg",

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
                    title: "VISHGAZINE ISSUE",
                    year: "2026",

                    cover:
                        "assets/images/portrait-commercial/vishgazine-01.jpg",

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
                }

            ]
        },


        product: {
            title: "PRODUCT",
            description:
                "Product photography for catalogs, campaigns, and commercial use.",

            projects: [

                {
                    title: "HARDTHIRTEEN FROM NEVERTOOLAVISH",
                    year: "2026",

                    cover:
                        "assets/images/product/lv-wallet-01.jpg",

                    images: [
                        "assets/images/product/lv-wallet-01.jpg",
                        "assets/images/product/lv-wallet-02.jpg",
                        "assets/images/product/lv-wallet-03.jpg",
                        "assets/images/product/lv-wallet-04.jpg"
                    ]
                }

            ]
        },


        others: {
            title: "OTHERS",
            description:
                "Personal, lifestyle, graduation, wedding, and other commissioned photography projects.",

            projects: [

                {
                    title: "SYAHRIN GRADUATION",
                    year: "2026",

                    cover:
                        "assets/images/others/syahrin-graduation/syahrin-01.jpg",

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
                    title: "PREWEDDING HILDA & FIKAR",
                    year: "2026",

                    cover:
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-01.jpg",

                    images: [
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-01.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-02.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-03.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-04.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-05.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-06.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-07.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-08.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-09.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-10.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-11.jpg",
                        "assets/images/others/prewedding-hilda-and-fikar/prewed-fikar-12.jpg"
                    ]
                }

            ]
        },


        "art-direction": {
            title: "ART DIRECTION",
            description:
                "Creative direction, visual concepts, campaigns, and collaborative projects.",

            projects: [

                {
                    title: "DALMENTION",
                    year: "2026",

                    cover:
                        "assets/images/art-direction/dalmention/dalmention-1.jpg",

                    images: [
                        "assets/images/art-direction/dalmention/dalmention-1.jpg",
                        "assets/images/art-direction/dalmention/dalmention-2.jpg",
                        "assets/images/art-direction/dalmention/dalmention-3.jpg",
                        "assets/images/art-direction/dalmention/dalmention-4.jpg",
                        "assets/images/art-direction/dalmention/dalmention-5.jpg",
                        "assets/images/art-direction/dalmention/dalmention-6.jpg",
                        "assets/images/art-direction/dalmention/dalmention-7.jpg",
                        "assets/images/art-direction/dalmention/dalmention-8.jpg",
                        "assets/images/art-direction/dalmention/dalmention-9.jpg",
                        "assets/images/art-direction/dalmention/dalmention-10.jpg",
                        "assets/images/art-direction/dalmention/dalmention-11.jpg",
                        "assets/images/art-direction/dalmention/dalmention-12.jpg",
                        "assets/images/art-direction/dalmention/dalmention-13.jpg",
                        "assets/images/art-direction/dalmention/dalmention-14.jpg",
                        "assets/images/art-direction/dalmention/dalmention-15.jpg"
                    ]
                }

            ]
        }

    };


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const categoryCards =
        document.querySelectorAll(".category-card");

    const workSection =
        document.querySelector(".work-section");

    const categoryGrid =
        document.querySelector(".category-grid");

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
       ADD NEW CATEGORY CARDS
       OTHERS + ART DIRECTION
    ===================================================== */

    function createCategoryCard(
        categoryKey,
        number
    ) {

        const category =
            CATEGORIES[categoryKey];

        if (!category) {
            return;
        }

        const firstProject =
            category.projects[0];

        if (!firstProject) {
            return;
        }

        const card =
            document.createElement("article");

        card.className =
            "category-card";

        card.dataset.category =
            categoryKey;

        card.tabIndex = 0;

        card.setAttribute(
            "role",
            "button"
        );

        card.innerHTML = `
            <div class="category-image">

                <img
                    src="${firstProject.cover}"
                    alt="${category.title}"
                    loading="lazy"
                >

                <div class="image-overlay"></div>

                <div class="image-heading">

                    <span>
                        ${number}
                    </span>

                    <h3>
                        ${category.title}
                    </h3>

                </div>

            </div>

            <div class="category-info">

                <p>
                    ${category.description}
                </p>

            </div>
        `;

        categoryGrid.appendChild(card);

        card.addEventListener(
            "click",
            () => {
                openCategory(categoryKey);
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

                    openCategory(categoryKey);
                }

            }
        );
    }


    /*
       IMPORTANT:
       HTML sudah punya 3 category cards.
       Kita hanya membuat 2 tambahan.
    */

    createCategoryCard(
        "others",
        "04"
    );

    createCategoryCard(
        "art-direction",
        "05"
    );


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

    document.body.appendChild(
        projectViewer
    );


    const viewerClose =
        projectViewer.querySelector(
            ".viewer-close"
        );

    const viewerCategory =
        projectViewer.querySelector(
            "#viewer-category"
        );

    const viewerTitle =
        projectViewer.querySelector(
            "#viewer-title"
        );

    const viewerGrid =
        projectViewer.querySelector(
            "#viewer-grid"
        );


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

    document.body.appendChild(
        fullscreenViewer
    );


    const fullscreenImage =
        fullscreenViewer.querySelector(
            "img"
        );

    const fullscreenClose =
        fullscreenViewer.querySelector(
            "button"
        );


    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(
        categoryKey
    ) {

        const category =
            CATEGORIES[categoryKey];

        if (!category) {

            console.error(
                "Category tidak ditemukan:",
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
            (project) => {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "project-card";

                card.tabIndex = 0;

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
                                ${project.images.length}
                                PHOTOS
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


                projectGrid.appendChild(
                    card
                );

            }
        );


        workSection.classList.add(
            "hidden"
        );

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
       CLOSE CATEGORY
    ===================================================== */

    function closeCategory() {

        projectView.classList.add(
            "hidden"
        );

        projectView.setAttribute(
            "aria-hidden",
            "true"
        );

        workSection.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top:
                workSection.offsetTop - 80,

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
                    document.createElement(
                        "div"
                    );

                imageWrapper.className =
                    "viewer-image";


                const image =
                    document.createElement(
                        "img"
                    );

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
       EXISTING CATEGORY EVENTS
    ===================================================== */

    categoryCards.forEach(
        (card) => {

            const categoryKey =
                card.dataset.category;


            if (
                !CATEGORIES[categoryKey]
            ) {

                console.warn(
                    "Category tidak tersedia:",
                    categoryKey
                );

                return;
            }


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
       BACK BUTTON
    ===================================================== */

    if (backButton) {

        backButton.addEventListener(
            "click",
            closeCategory
        );

    }


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

            if (
                event.key !== "Escape"
            ) {
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
                projectView &&
                !projectView.classList.contains(
                    "hidden"
                )
            ) {

                closeCategory();

            }

        }
    );


    /* =====================================================
       BACKGROUND CLICK
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
