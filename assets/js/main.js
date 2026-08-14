```js
document.addEventListener("DOMContentLoaded", () => {

    /*
    =====================================================
    ELEMENTS
    =====================================================
    */

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


    /*
    =====================================================
    PROJECT DATA
    =====================================================

    SATU OBJECT = SATU PROJECT

    images[] = semua foto yang ada di project tersebut
    =====================================================
    */

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
            }

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


            {
                title: "Unreleased — Nevertoolavish",

                description:
                    "Artist portrait series for Nevertoolavish.",

                images: [

                    "assets/images/portrait-commercial/unreleased-nevertoolavish-01.jpg",
                    "assets/images/portrait-commercial/unreleased-nevertoolavish-02.jpg",
                    "assets/images/portrait-commercial/unreleased-nevertoolavish-03.jpg",
                    "assets/images/portrait-commercial/unreleased-nevertoolavish-04.jpg",
                    "assets/images/portrait-commercial/unreleased-nevertoolavish-05.jpg",
                    "assets/images/portrait-commercial/unreleased-nevertoolavish-06.jpg"

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
            }

        ]

    };


    /*
    =====================================================
    CATEGORY CLICK
    =====================================================
    */

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;

            openCategory(category);

        });

    });


    /*
    =====================================================
    OPEN CATEGORY
    =====================================================
    */

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


        /*
        =================================================
        CREATE PROJECT CARDS
        =================================================
        */

        projects.forEach(project => {

            const card =
                document.createElement("article");

            card.className =
                "project-card";


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


            /*
            =================================================
            CLICK PROJECT
            =================================================
            */

            card.addEventListener(
                "click",
                () => {

                    openProject(project);

                }
            );


            projectGrid.appendChild(card);

        });


        /*
        =================================================
        CHANGE VIEW
        =================================================
        */

        workSection.style.display =
            "none";

        projectView.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /*
    =====================================================
    OPEN PROJECT
    =====================================================
    */

    function openProject(project) {

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


        /*
        =================================================
        ADD ALL PHOTOS
        =================================================
        */

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
                    () => {

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


        /*
        =================================================
        CLOSE PROJECT
        =================================================
        */

        const closeProject =
            () => {

                viewer.remove();

                document.body.style.overflow =
                    "";

            };


        viewer
            .querySelector(".viewer-close")
            .addEventListener(
                "click",
                closeProject
            );


        /*
        =================================================
        ESC KEY
        =================================================
        */

        const escapeHandler =
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeProject();

                    document.removeEventListener(
                        "keydown",
                        escapeHandler
                    );

                }

            };


        document.addEventListener(
            "keydown",
            escapeHandler
        );

    }


    /*
    =====================================================
    FULLSCREEN IMAGE
    =====================================================
    */

    function openFullscreen(
        image,
        title
    ) {

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


        const closeFullscreen =
            () => {

                fullscreen.remove();

            };


        fullscreen
            .querySelector("button")
            .addEventListener(
                "click",
                closeFullscreen
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


        /*
        =================================================
        ESC KEY
        =================================================
        */

        const escapeHandler =
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeFullscreen();

                    document.removeEventListener(
                        "keydown",
                        escapeHandler
                    );

                }

            };


        document.addEventListener(
            "keydown",
            escapeHandler
        );

    }


    /*
    =====================================================
    BACK TO CATEGORIES
    =====================================================
    */

    backButton.addEventListener(
        "click",
        () => {

            projectView.classList.add(
                "hidden"
            );

            workSection.style.display =
                "";

            workSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});
```
