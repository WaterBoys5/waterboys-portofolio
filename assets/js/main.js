document.addEventListener("DOMContentLoaded", () => {
    const categoryCards = document.querySelectorAll(".category-card");
    const workSection = document.querySelector(".work-section");
    const projectView = document.querySelector("#project-view");
    const projectGrid = document.querySelector("#project-grid");
    const projectTitle = document.querySelector("#project-category-title");
    const projectLabel = document.querySelector("#project-category-label");
    const backButton = document.querySelector("#back-button");
    const brand = document.querySelector(".brand");
    const clientWorkGrid = document.querySelector("#client-work-grid");

    /* =====================================================
       IMAGE PATH FALLBACK
       GitHub currently contains some numbered files without a
       leading zero (for example dalmention-1.jpg), while the
       project data uses the preferred 01, 02, 03 naming.
       Try the preferred path first, then the unpadded filename.
    ===================================================== */

    function getFallbackPath(source) {
        if (typeof source !== "string") return null;

        const match = source.match(/-(\d{2})(\.jpg)$/i);
        if (!match) return null;

        const number = Number(match[1]);
        return source.replace(match[0], `-${number}${match[2]}`);
    }

    function applyImageSource(img, source) {
        const primary = typeof source === "string" ? source : source?.src;
        const explicitFallback = typeof source === "string" ? null : source?.fallback;
        const automaticFallback = getFallbackPath(primary);
        const fallback = explicitFallback || automaticFallback;

        if (!primary) return;

        img.dataset.primary = primary;
        img.dataset.fallback = fallback || "";
        img.src = primary;

        img.addEventListener("error", () => {
            const fallbackSrc = img.dataset.fallback;

            if (!fallbackSrc || img.dataset.fallbackUsed === "true") {
                img.classList.add("image-error");
                return;
            }

            img.dataset.fallbackUsed = "true";
            img.src = fallbackSrc;
        });
    }

    const PROJECTS = {
        documentation: [
            {
                title: "Stereo Wall",
                description: "Live performance documentation of Stereowall at Trilogigs Bogor.",
                images: Array.from({ length: 14 }, (_, i) =>
                    `assets/images/documentation/stereo-wall-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "Jerana",
                description: "Event documentation at Krapela.",
                images: Array.from({ length: 7 }, (_, i) =>
                    `assets/images/documentation/jerana-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "The Paps",
                description: "Event documentation at Dreyy Fest Bogor 2026.",
                images: Array.from({ length: 9 }, (_, i) =>
                    `assets/images/documentation/thepaps-${String(i + 1).padStart(2, "0")}.jpg`
                )
            }
        ],

        "portrait-commercial": [
            {
                title: "Peron Long Sleeve",
                description: "Commercial portrait campaign.",
                images: Array.from({ length: 5 }, (_, i) =>
                    `assets/images/portrait-commercial/peron-long-sleeve-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "Vishgazine",
                description: "Commercial portrait campaign for Vish by Nevertoolavish.",
                images: Array.from({ length: 9 }, (_, i) =>
                    `assets/images/portrait-commercial/vishgazine-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "WKA Ã— Simpati",
                description: "Commercial campaign for WKA from Nevertoolavish to SIMPATI.",
                images: Array.from({ length: 10 }, (_, i) =>
                    `assets/images/portrait-commercial/wka-simpati-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "Unreleased",
                description: "The artist behind an unreleased custom footwear project.",
                images: Array.from({ length: 6 }, (_, i) =>
                    `assets/images/portrait-commercial/unreleased-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "Back 2 Bloom",
                description: "Commercial campaign photography for Back 2 Bloom.",
                images: Array.from({ length: 14 }, (_, i) =>
                    `assets/images/portrait-commercial/b2b-${String(i + 1).padStart(2, "0")}.jpg`
                )
            }
        ],

        product: [
            {
                title: "LV Wallet",
                description: "Luxury product photography.",
                images: Array.from({ length: 4 }, (_, i) =>
                    `assets/images/product/lv-wallet-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "TITANS",
                description: "Commercial product campaign.",
                images: Array.from({ length: 9 }, (_, i) =>
                    `assets/images/product/titans-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "Nevertoolavish Custom Shoes",
                description: "Still life product photography for custom shoes by Nevertoolavish.",
                images: Array.from({ length: 15 }, (_, i) =>
                    `assets/images/product/nevertoolavish-shoes-${String(i + 1).padStart(2, "0")}.jpg`
                )
            }
        ],

        "art-direction": [
            {
                title: "Dalmention",
                description: "Fashion rework campaign. Art direction by WaterBoys, photography by Amaylia (Ayas).",
                role: "Art Direction",
                photographer: "Amaylia (Ayas)",
                photographerInstagram: "https://www.instagram.com/am.liyas/",
                details: "Concept development, lighting setup, location selection, client communication, and photographer direction.",
                images: Array.from({ length: 15 }, (_, i) => dalmentionImage(i + 1))
            }
        ],

        others: [
            {
                title: "Prewedding â€” Hilda & Fikar",
                description: "Prewedding photography.",
                images: Array.from({ length: 12 }, (_, i) =>
                    `assets/images/others/Prewedding-hilda-and-fikar/prewed-fikar-${String(i + 1).padStart(2, "0")}.jpg`
                )
            },
            {
                title: "Syahrin â€” Graduation",
                description: "Graduation photography for client Syahrin.",
                images: Array.from({ length: 8 }, (_, i) =>
                    `assets/images/others/syahrin-graduation/syahrin-${String(i + 1).padStart(2, "0")}.jpg`
                )
            }
        ]
    };

    const CLIENT_WORK = [
        {
            client: "WALL OF JAKARTA",
            title: "Video Documentation",
            role: "Video Documentation",
            description: "Video documentation for Wall of Jakarta.",
            link: "https://www.instagram.com/reel/Dam-Z9dpo6k/"
        },
        {
            client: "TITANS",
            title: "Friend Flash 03 â€” Hari Kartini",
            role: "Campaign / Video",
            description: "Friend Flash 03 campaign created for TITANS in celebration of Hari Kartini.",
            link: "https://www.instagram.com/reel/DXYuDpcz2Pp/"
        },
        {
            client: "INDO WATCH COLLECTION Ã— HARD THIRTEEN",
            title: "Custom Watch Collection",
            role: "Photography / Documentation",
            description: "Indo Watch Collection featuring a custom watch by Hard Thirteen.",
            link: "https://www.instagram.com/p/DUGKWsqj8xM/"
        },
        {
            client: "ORSE",
            title: "Connect Happily Vol. 3",
            role: "Campaign / Documentation",
            description: "Connect Happily Volume 3 by ORSE.",
            link: "https://www.instagram.com/p/DSRXRRQj5U6/"
        },
        {
            client: "PAYPORSE",
            title: "Pattern Horizon",
            role: "Campaign / Video",
            description: "Pattern Horizon campaign for Payporse.",
            link: "https://www.instagram.com/reel/DbX9dJVRHls/"
        },
        {
            client: "ORSE Ã— KFC",
            title: "Pekan Raya Jakarta Campaign",
            role: "Video Documentation",
            description: "Campaign video documentation for ORSE's collaboration with KFC at Pekan Raya Jakarta.",
            link: "https://www.instagram.com/reel/DaNKoCJx4yC/"
        }
    ];

    const readableNames = {
        documentation: "DOCUMENTATION",
        "portrait-commercial": "PORTRAIT / COMMERCIAL",
        product: "PRODUCT",
        "art-direction": "ART DIRECTION",
        others: "OTHERS"
    };

    let activeViewer = null;
    let activeFullscreen = null;

    function createImage(source, alt, className = "") {
        const img = document.createElement("img");
        if (className) img.className = className;
        img.alt = alt;
        img.loading = "lazy";
        applyImageSource(img, source);
        return img;
    }


    /* =====================================================
       STATIC IMAGE FALLBACKS
    ===================================================== */

    document.querySelectorAll("img[data-fallback]").forEach(img => {
        if (img.dataset.fallbackUsed === "true") return;

        img.addEventListener("error", () => {
            const fallback = img.dataset.fallback;
            if (!fallback || img.dataset.fallbackUsed === "true") return;
            img.dataset.fallbackUsed = "true";
            img.src = fallback;
        }, { once: true });
    });

    function createClientWorkSection() {
        if (!clientWorkGrid) return;

        clientWorkGrid.innerHTML = "";

        CLIENT_WORK.forEach(work => {
            const card = document.createElement("article");
            card.className = "client-work-card";

            card.innerHTML = `
                <div class="client-work-card-content">
                    <p class="client-work-client">${work.client}</p>
                    <h3>${work.title}</h3>
                    <p class="client-work-role">${work.role}</p>
                    <p class="client-work-description">${work.description}</p>
                    <a class="client-work-link"
                       href="${work.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                        VIEW CLIENT POST â†—
                    </a>
                </div>
            `;

            clientWorkGrid.appendChild(card);
        });
    }

    function bindCategoryCard(card) {
        const open = () => openCategory(card.dataset.category);

        card.addEventListener("click", open);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });
    }

    function renderProjectCard(project) {
        const card = document.createElement("article");
        card.className = "project-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        const imageWrap = document.createElement("div");
        imageWrap.className = "project-card-image";

        const thumbnail = createImage(project.images[0], project.title);
        imageWrap.appendChild(thumbnail);

        const overlay = document.createElement("div");
        overlay.className = "project-card-overlay";
        overlay.innerHTML = `<span>${project.images.length} IMAGES</span>`;
        imageWrap.appendChild(overlay);

        const info = document.createElement("div");
        info.className = "project-card-info";
        info.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        card.append(imageWrap, info);

        const open = () => openProject(project);
        card.addEventListener("click", open);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open();
            }
        });

        return card;
    }

    function openCategory(category) {
        const projects = PROJECTS[category];

        if (!projects) {
            console.error("Category tidak ditemukan:", category);
            return;
        }

        projectTitle.textContent = readableNames[category] || category.toUpperCase();
        projectLabel.textContent = "SELECTED PROJECTS";
        projectGrid.innerHTML = "";

        projects.forEach(project => {
            projectGrid.appendChild(renderProjectCard(project));
        });

        workSection.style.display = "none";
        projectView.classList.remove("hidden");
        projectView.setAttribute("aria-hidden", "false");

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openProject(project) {
        closeProject();

        const viewer = document.createElement("div");
        viewer.className = "project-viewer";

        viewer.innerHTML = `
            <div class="project-viewer-inner">
                <button class="viewer-close" type="button" aria-label="Close project">Ã—</button>
                <div class="viewer-heading">
                    <p>PROJECT</p>
                    <h2>${project.title}</h2>
                    ${project.role ? `<p class="viewer-project-role">${project.role}</p>` : ""}
                    ${project.photographer ? `<p class="viewer-project-photographer">PHOTOGRAPHY BY <strong>${project.photographer}</strong></p>` : ""}
                    ${project.details ? `<p class="viewer-project-details">${project.details}</p>` : ""}
                    ${project.photographerInstagram ? `
                        <a class="viewer-project-link"
                           href="${project.photographerInstagram}"
                           target="_blank"
                           rel="noopener noreferrer">
                            PHOTOGRAPHER INSTAGRAM â†—
                        </a>` : ""}
                </div>
                <div class="viewer-grid"></div>
            </div>
        `;

        const viewerGrid = viewer.querySelector(".viewer-grid");

        project.images.forEach((source, index) => {
            const imageCard = document.createElement("div");
            imageCard.className = "viewer-image";

            const img = createImage(source, `${project.title} ${index + 1}`);
            imageCard.appendChild(img);

            imageCard.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
                openFullscreen(source, project.title);
            });

            viewerGrid.appendChild(imageCard);
        });

        document.body.appendChild(viewer);
        document.body.style.overflow = "hidden";
        activeViewer = viewer;

        viewer.querySelector(".viewer-close").addEventListener("click", closeProject);

        viewer._escapeHandler = event => {
            if (event.key === "Escape") {
                if (activeFullscreen) {
                    closeFullscreen();
                } else {
                    closeProject();
                }
            }
        };

        document.addEventListener("keydown", viewer._escapeHandler);
    }

    function closeProject() {
        if (!activeViewer) return;

        if (activeViewer._escapeHandler) {
            document.removeEventListener("keydown", activeViewer._escapeHandler);
        }

        activeViewer.remove();
        activeViewer = null;

        if (!activeFullscreen) {
            document.body.style.overflow = "";
        }
    }

    function openFullscreen(source, title) {
        closeFullscreen();

        const fullscreen = document.createElement("div");
        fullscreen.className = "fullscreen-viewer";

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.setAttribute("aria-label", "Close image");
        closeButton.textContent = "Ã—";

        const img = createImage(source, title);
        fullscreen.append(closeButton, img);
        document.body.appendChild(fullscreen);

        activeFullscreen = fullscreen;
        document.body.style.overflow = "hidden";

        closeButton.addEventListener("click", event => {
            event.stopPropagation();
            closeFullscreen();
        });

        fullscreen.addEventListener("click", event => {
            if (event.target === fullscreen) {
                closeFullscreen();
            }
        });

        fullscreen._escapeHandler = event => {
            if (event.key === "Escape") closeFullscreen();
        };

        document.addEventListener("keydown", fullscreen._escapeHandler);
    }

    function closeFullscreen() {
        if (!activeFullscreen) return;

        if (activeFullscreen._escapeHandler) {
            document.removeEventListener("keydown", activeFullscreen._escapeHandler);
        }

        activeFullscreen.remove();
        activeFullscreen = null;

        document.body.style.overflow = activeViewer ? "hidden" : "";
    }

    backButton?.addEventListener("click", () => {
        projectView.classList.add("hidden");
        projectView.setAttribute("aria-hidden", "true");
        workSection.style.display = "";

        document.getElementById("work").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    brand?.addEventListener("click", event => {
        event.preventDefault();

        closeFullscreen();
        closeProject();

        projectView.classList.add("hidden");
        projectView.setAttribute("aria-hidden", "true");
        workSection.style.display = "";

        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    categoryCards.forEach(bindCategoryCard);

    document.querySelectorAll("img[data-fallback]").forEach(img => {
        const fallback = img.dataset.fallback;
        img.addEventListener("error", () => {
            if (fallback && img.dataset.fallback) {
                img.dataset.fallback = "";
                img.src = fallback;
            }
        }, { once: true });
    });

    createClientWorkSection();
});
