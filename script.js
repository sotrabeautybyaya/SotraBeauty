/* =========================================
   SOTRA BEAUTY BY AYA
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   ACCESSORIES BOXES
========================================= */

const accessoryBoxes = [

    {
        id: 1,

        name: "Accessorie Box 01",

        price: "37 DT",

        description:
            "A beautiful selection of feminine pieces carefully chosen by Aya.",

        items: [
            "Beautiful accessories",
            "Elegant jewelry pieces",
            "Carefully selected details"
        ],

        images: [
            "images/pack1-1.jpg",
            "images/pack1-2.jpg"
        ],

        featured: true
    },


    {
        id: 2,

        name: "Accessorie Box 02",

        price: "34 DT",

        description:
            "A carefully selected collection designed to make every woman feel special.",

        items: [
            "Beautiful accessories",
            "Elegant jewelry pieces",
            "Carefully selected details"
        ],

        images: [
            "images/pack2-1.jpg",
            "images/pack2-2.jpg"
        ],

        featured: false
    },


    {
        id: 3,

        name: "Accessorie Box 03",

        price: "46 DT",

        description:
            "Elegant pieces and beautiful details gathered together in one special box.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack3.jpg"
        ],

        featured: false
    },


    {
        id: 4,

        name: "Accessorie Box 04",

        price: "39 DT",

        description:
            "A special combination of beautiful pieces made for every occasion.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack4.jpg"
        ],

        featured: false
    },


    {
        id: 5,

        name: "Accessorie Box 05",

        price: "36 DT",

        description:
            "A beautiful collection of feminine pieces selected with love and attention to detail.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack5.jpg"
        ],

        featured: false
    },


    {
        id: 6,

        name: "Accessorie Box 06",

        price: "36 DT",

        description:
            "A special beauty box combining elegance, style and beautiful little details.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/pack6.jpg"
        ],

        featured: false
    },


    {
        id: 7,

        name: "Accessorie Box 07",

        price: "24 DT",

        description:
            "A beautiful selection of feminine pieces carefully chosen by Aya.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/Pack7.jpg"
        ],

        featured: false
    },


    {
        id: 8,

        name: "Accessorie Box 08",

        price: "34 DT",

        description:
            "A beautiful collection of feminine pieces selected with love and attention to detail.",

        items: [
            "Beautiful accessories",
            "Elegant details",
            "Carefully selected pieces"
        ],

        images: [
            "images/Pack8-1.jpg",
            "images/Pack8-2.jpg"
        ],

        featured: false
    }

];



/* =========================================
   COSMETICS BOXES
========================================= */

const cosmeticBoxes = [

    {
        id: 9,

        name: "Cosmetic Box 09",

        price: "36 DT",

        description:
            "A beautiful cosmetic collection with feminine accessories and beauty essentials, carefully selected by Aya.",

        items: [
            "2 éponges de maquillage",
            "Petit Vaseline pour les lèvres",
            "Crème pour les mains",
            "Pince à cheveux en forme de papillon",
            "Strass",
            "Huile / gloss à lèvres rose",
            "Petite pochette en fourrure blanche avec nœud vichy et cerises",
            "Porte-clés Angel - Stitch rose"
        ],

        images: [
            "images/pack9.jpg"
        ],

        featured: false
    },


    {
        id: 10,

        name: "Cosmetic Box 10",

        price: "40 DT",

        description:
            "A charming beauty box combining cosmetics, accessories and elegant feminine details.",

        items: [
            "Miroir",
            "Pochette en fourrure rose avec cerises",
            "2 crèmes pour les mains",
            "Lip gloss",
            "Vaseline pour les lèvres",
            "1 pince à cheveux fleur dorée",
            "1 bague avec sa petite boîte",
            "2 beauty blenders",
            "1 porte-clés (Stitch)"
        ],

        images: [
            "images/pack10.jpg"
        ],

        featured: false
    },


    {
        id: 11,

        name: "Cosmetic Box 11",

        price: "35 DT",

        description:
            "A simple and elegant beauty collection with everyday cosmetic essentials.",

        items: [
            "Miroir",
            "2 beauty blenders Anguoer",
            "Vaseline pour les lèvres",
            "2 crèmes pour les mains",
            "Lip gloss / huile à lèvres brillante"
        ],

        images: [
            "images/pack11.jpg"
        ],

        featured: false
    }

];



/* =========================================
   INSTAGRAM
========================================= */

const instagramURL =
    "https://www.instagram.com/sotra_beauty_by_aya/";



/* =========================================
   CONTAINERS
========================================= */

const boxesContainer =
    document.getElementById("boxes-container");

const cosmeticsContainer =
    document.getElementById("cosmetics-container");



/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(box) {

    const card =
        document.createElement("div");

    card.classList.add("box-card");


    /* FEATURED LABEL */

    let featuredLabel = "";

    if (box.featured) {

        featuredLabel = `
            <div class="featured-label">
                FEATURED
            </div>
        `;

    }


    /* FIRST IMAGE */

    const firstImage =
        box.images[0];


    /* CARD HTML */

    card.innerHTML = `

        <div class="box-image">

            ${featuredLabel}

            <img
                class="box-product-image"
                src="${firstImage}"
                alt="${box.name}"
            >

        </div>


        <div class="box-info">

            <p class="box-number">
                BOX ${String(box.id).padStart(2, "0")}
            </p>


            <h3>
                ${box.name}
            </h3>


            <p class="box-description">
                ${box.description}
            </p>


            <div class="box-bottom">

                <span class="price">
                    ${box.price}
                </span>


                <div class="box-buttons">

                    <button
                        class="details-button"
                        data-id="${box.id}"
                    >
                        VIEW DETAILS
                    </button>


                    <a
                        href="${instagramURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="gold-button order-button"
                    >
                        ORDER ON INSTAGRAM
                    </a>

                </div>

            </div>

        </div>

    `;


    /* =========================================
       AUTOMATIC IMAGE SLIDESHOW
    ========================================= */

    if (box.images.length > 1) {

        const image =
            card.querySelector(".box-product-image");


        let currentImage = 0;


        setInterval(() => {

            currentImage =
                (currentImage + 1) % box.images.length;


            /* FADE OUT */

            image.classList.add("image-changing");


            setTimeout(() => {

                image.src =
                    box.images[currentImage];


                /* FADE IN */

                image.classList.remove("image-changing");

            }, 400);


        }, 5000);

    }


    return card;

}



/* =========================================
   DISPLAY ACCESSORIES
========================================= */

function displayAccessories() {

    if (!boxesContainer) {
        return;
    }


    boxesContainer.innerHTML = "";


    accessoryBoxes.forEach((box) => {

        const card =
            createProductCard(box);

        boxesContainer.appendChild(card);

    });

}



/* =========================================
   DISPLAY COSMETICS
========================================= */

function displayCosmetics() {

    if (!cosmeticsContainer) {
        return;
    }


    cosmeticsContainer.innerHTML = "";


    cosmeticBoxes.forEach((box) => {

        const card =
            createProductCard(box);

        cosmeticsContainer.appendChild(card);

    });

}



/* =========================================
   DISPLAY ALL PRODUCTS
========================================= */

displayAccessories();

displayCosmetics();



/* =========================================
   PRODUCT DETAILS POPUP
========================================= */

const popup =
    document.createElement("div");

popup.classList.add("product-popup");


popup.innerHTML = `

    <div class="popup-content">

        <button class="close-popup">
            ×
        </button>


        <p class="popup-number">
            SOTRA BEAUTY
        </p>


        <h2 id="popup-name">
            Beauty Box
        </h2>


        <p id="popup-description">
        </p>


        <div class="popup-items">

            <h3>
                WHAT'S INSIDE
            </h3>


            <ul id="popup-items-list">
            </ul>

        </div>


        <div class="popup-bottom">

            <span id="popup-price">
            </span>


            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                id="popup-instagram"
                class="gold-button"
            >
                ORDER ON INSTAGRAM
            </a>

        </div>

    </div>

`;


document.body.appendChild(popup);



/* =========================================
   POPUP ELEMENTS
========================================= */

const popupName =
    document.getElementById("popup-name");

const popupDescription =
    document.getElementById("popup-description");

const popupPrice =
    document.getElementById("popup-price");

const popupItemsList =
    document.getElementById("popup-items-list");

const popupInstagram =
    document.getElementById("popup-instagram");

const closePopup =
    document.querySelector(".close-popup");



/* =========================================
   FIND PRODUCT
========================================= */

function findBoxByID(boxID) {

    let box =
        accessoryBoxes.find(
            item => item.id === boxID
        );


    if (!box) {

        box =
            cosmeticBoxes.find(
                item => item.id === boxID
            );

    }


    return box;

}



/* =========================================
   ADD VIEW DETAILS EVENTS
========================================= */

function addDetailButtonEvents() {

    const detailButtons =
        document.querySelectorAll(".details-button");


    detailButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const boxID =
                Number(button.dataset.id);


            const box =
                findBoxByID(boxID);


            if (!box) {
                return;
            }


            /* BOX NAME */

            popupName.textContent =
                box.name;


            /* DESCRIPTION */

            popupDescription.textContent =
                box.description;


            /* PRICE */

            popupPrice.textContent =
                box.price;


            /* ITEMS */

            popupItemsList.innerHTML = "";


            box.items.forEach((item) => {

                const li =
                    document.createElement("li");

                li.textContent =
                    item;

                popupItemsList.appendChild(li);

            });


            /* INSTAGRAM */

            popupInstagram.href =
                instagramURL;


            /* OPEN POPUP */

            popup.classList.add("active");

            document.body.classList.add("popup-open");

        });

    });

}


/* ADD EVENTS AFTER CARDS ARE CREATED */

addDetailButtonEvents();



/* =========================================
   CLOSE POPUP
========================================= */

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

    document.body.classList.remove("popup-open");

});



/* =========================================
   CLICK OUTSIDE POPUP
========================================= */

popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.classList.remove("active");

        document.body.classList.remove("popup-open");

    }

});



/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        popup.classList.remove("active");

        document.body.classList.remove("popup-open");

    }

});



/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("active");

    });

}



/* =========================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (menuToggle) {

            menuToggle.classList.remove("active");

        }


        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});
