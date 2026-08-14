document.addEventListener("DOMContentLoaded", () => {

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
    ========================================
    PROJECT DATA
    ========================================
    */

    const PROJECTS = {

        documentation: [

            {
                title: "Stereo Wall",
                description: "Live performance documentation.",
                image: "assets/images/documentation/stage-01.jpg"
            },

            {
                title: "Stereo Wall",
                description: "Concert and stage documentation.",
                image: "assets/images/documentation/stage-02.jpg"
            }

        ],


        "portrait-commercial": [

            {
                title: "Peron Long Sleeve",
                description: "Commercial portrait campaign.",
                image:
                    "assets/images/portrait-commercial/peron-long-sleeve-01.jpg"
            },

            {
                title: "Vishgazine",
                description: "Commercial portrait campaign.",
                image:
                    "assets/images/portrait-commercial/vishgazine-01.jpg"
            },

            {
                title: "WKA × Simpati",
                description: "Commercial campaign.",
                image:
                    "assets/images/portrait-commercial/wka-simpati-01.jpg"
            }

        ],


        product: [

            {
                title: "Product Campaign",
                description: "Commercial product photography.",
                image:
                    "assets/images/product/product-01.jpg"
            },

            {
                title: "Product Catalog",
                description: "Studio product photography.",
                image:
                    "assets/images/product/product-02.jpg"
            }

        ]

    };


    /*
    ========================================
    OPEN CATEGORY
    ========================================
    */

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;

            openCategory(category);

        });

    });


    function openCategory(category) {

        const projects =
            PROJECTS[category];

        if (!projects) return;


        let readableName =
            category
                .replaceAll("-", " ")
                .toUpperCase();


        projectTitle.textContent =
            readableName;

        projectLabel.textContent =
            "SELECTED PROJECTS";


        projectGrid.innerHTML = "";


        projects.forEach(project => {

            const card =
                document.createElement("article");

            card.className =
                "project-card";


            card.innerHTML = `

                <div class="project-card-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>

                <div class="project-card-title">

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openImage(
                        project.image,
                        project.title
                    );

                }
            );


            projectGrid.appendChild(card);

        });


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
    ========================================
    BACK
    ========================================
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


    /*
    ========================================
    IMAGE VIEWER
    ========================================
    */

    function openImage(image, title) {

        const viewer =
            document.createElement("div");

        viewer.className =
            "image-viewer";


        viewer.innerHTML = `

            <button class="viewer-close">
                ×
            </button>

            <img
                src="${image}"
                alt="${title}"
            >

        `;


        document.body.appendChild(viewer);

        document.body.style.overflow =
            "hidden";


        const close =
            () => {

                viewer.remove();

                document.body.style.overflow =
                    "";

            };


        viewer
            .querySelector(".viewer-close")
            .addEventListener(
                "click",
                close
            );


        viewer.addEventListener(
            "click",
            event => {

                if (
                    event.target === viewer
                ) {
                    close();
                }

            }
        );

    }

});
