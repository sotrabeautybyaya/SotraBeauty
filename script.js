/* =========================================
   SOTRA BEAUTY BY AYA
   MAIN JAVASCRIPT
   LANGUAGE SYSTEM INCLUDED
========================================= */


/* =========================================
   TRANSFER FEE
========================================= */

const transferFee = 8;


/* =========================================
   ACCESSORIES BOXES
========================================= */

const accessoryBoxes = [

    {
        id: 1,
        name: "Accessorie Box 01",
        price: "37 DT",
        priceNumber: 37,

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
        priceNumber: 34,

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
        priceNumber: 46,

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
        priceNumber: 39,

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
        priceNumber: 36,

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
        priceNumber: 36,

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
        priceNumber: 24,

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
        priceNumber: 34,

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
        priceNumber: 36,

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
        priceNumber: 40,

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
        priceNumber: 35,

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
   HIJAB BOXES
========================================= */

const hijabBoxes = [

    {
        id: 12,
        name: "Trio Nude",
        price: "50 DT",
        priceNumber: 50,

        description:
            "A timeless trio of soft nude tones, elegant and effortlessly chic.",

        items: [
            "Elegant hijabs",
            "Soft nude shades",
            "Classic & refined style"
        ],

        images: [
            "images/hijab.jpg"
        ],

        featured: false
    },


    {
        id: 13,
        name: "Mocha Nude",
        price: "50 DT",
        priceNumber: 50,

        description:
            "Warm mocha tones blended with timeless elegance for a beautifully refined look.",

        items: [
            "Elegant hijabs",
            "Mocha & nude shades",
            "Chic & sophisticated style"
        ],

        images: [
            "images/hijab2.jpg"
        ],

        featured: false
    },


    {
        id: 14,
        name: "Blush Mix",
        price: "37 DT",
        priceNumber: 37,

        description:
            "A delicate mix of beautiful blush tones, perfect for a soft and feminine touch.",

        items: [
            "Elegant hijabs",
            "Soft blush shades",
            "Feminine & graceful style"
        ],

        images: [
            "images/hijab3.jpg"
        ],

        featured: false
    },


    {
        id: 15,
        name: "Nuances Marbrées",
        price: "70 DT",
        priceNumber: 70,

        description:
            "A sophisticated collection of marbled shades, where elegance meets effortless beauty.",

        items: [
            "Elegant hijabs",
            "Marbled shades",
            "Classic & luxurious style"
        ],

        images: [
            "images/hijab4-1.jpg",
            "images/hijab4-2.jpg"
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
   ALL BOXES
========================================= */

const allBoxes = [
    ...accessoryBoxes,
    ...cosmeticBoxes,
    ...hijabBoxes
];


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    en: {

        home: "Home",
        accessoriesBoxes: "Accessories Boxes",
        cosmeticsBoxes: "Cosmetics Boxes",
        hijabBoxes: "Hijab Boxes",
        aboutUs: "About Us",
        contact: "Contact",

        followInstagram: "FOLLOW US ON INSTAGRAM",

        collection: "OUR COLLECTION",
        accessoriesTitle: "Accessories Boxes",

        discover: "DISCOVER",
        accessoriesCollection: "Our Accessories Boxes",
        cosmeticsCollection: "Our Cosmetics Boxes",
        hijabCollection: "Our Hijab Boxes",

        accessoriesIntro:
            "Discover our carefully selected accessories boxes, created to bring together beautiful pieces that complement your style.",

        simpleEasy: "SIMPLE & EASY",
        howToOrder: "How To Order",

        step1Title: "Choose Your Box",
        step1Text:
            "Explore our collection and choose the box you love.",

        step2Title: "Contact Aya",
        step2Text:
            "Send us a message through Instagram to place your order.",

        step3Title: "Enjoy Your Box",
        step3Text:
            "Receive your beautiful Sotra Beauty box and enjoy every detail.",

        aboutTitle: "ABOUT SOTRA BEAUTY",

        aboutHeading:
            "Elegance In Every Detail.",

        aboutText1:
            "Sotra Beauty by Aya was created with one simple idea: bringing beautiful feminine pieces together in carefully selected boxes.",

        aboutText2:
            "Every box is prepared with attention to detail, style and elegance.",

        contactSmall:
            "WE WOULD LOVE TO HEAR FROM YOU",

        contactTitle:
            "Get In Touch",

        contactText:
            "Have a question about one of our boxes? Contact Aya directly through Instagram.",

        instagram:
            "INSTAGRAM",

        footerText:
            "Beauty, elegance & little details made with love.",

        featured:
            "FEATURED",

        box:
            "BOX",

        transferFee:
            "transfer fee",

        total:
            "Total",

        viewDetails:
            "VIEW DETAILS",

        orderInstagram:
            "ORDER ON INSTAGRAM",

        whatsInside:
            "WHAT'S INSIDE",

        boxPrice:
            "Box price",

        transferFeeLabel:
            "Transfer fee",

        totalLabel:
            "TOTAL",

        close:
            "Close"

    },


    fr: {

        home: "Accueil",
        accessoriesBoxes: "Box Accessoires",
        cosmeticsBoxes: "Box Cosmétiques",
        hijabBoxes: "Box Hijabs",
        aboutUs: "À propos",
        contact: "Contact",

        followInstagram: "SUIVEZ-NOUS SUR INSTAGRAM",

        collection: "NOTRE COLLECTION",
        accessoriesTitle: "Box Accessoires",

        discover: "DÉCOUVREZ",
        accessoriesCollection: "Nos Box Accessoires",
        cosmeticsCollection: "Nos Box Cosmétiques",
        hijabCollection: "Nos Box Hijabs",

        accessoriesIntro:
            "Découvrez nos box d'accessoires soigneusement sélectionnées, créées pour réunir de magnifiques pièces qui complètent votre style.",

        simpleEasy: "SIMPLE & FACILE",
        howToOrder: "Comment Commander",

        step1Title: "Choisissez Votre Box",
        step1Text:
            "Découvrez notre collection et choisissez la box qui vous plaît.",

        step2Title: "Contactez Aya",
        step2Text:
            "Envoyez-nous un message sur Instagram pour passer votre commande.",

        step3Title: "Profitez de Votre Box",
        step3Text:
            "Recevez votre magnifique box Sotra Beauty et profitez de chaque détail.",

        aboutTitle: "À PROPOS DE SOTRA BEAUTY",

        aboutHeading:
            "L'élégance dans chaque détail.",

        aboutText1:
            "Sotra Beauty by Aya est née d'une idée simple : réunir de magnifiques pièces féminines dans des box soigneusement sélectionnées.",

        aboutText2:
            "Chaque box est préparée avec attention, style et élégance.",

        contactSmall:
            "NOUS SERIONS RAVIS DE VOUS ENTENDRE",

        contactTitle:
            "Contactez-Nous",

        contactText:
            "Une question concernant l'une de nos box ? Contactez Aya directement sur Instagram.",

        instagram:
            "INSTAGRAM",

        footerText:
            "Beauté, élégance et petits détails préparés avec amour.",

        featured:
            "À LA UNE",

        box:
            "BOX",

        transferFee:
            "frais de livraison",

        total:
            "Total",

        viewDetails:
            "VOIR LES DÉTAILS",

        orderInstagram:
            "COMMANDER SUR INSTAGRAM",

        whatsInside:
            "CE QUE CONTIENT LA BOX",

        boxPrice:
            "Prix de la box",

        transferFeeLabel:
            "Frais de livraison",

        totalLabel:
            "TOTAL",

        close:
            "Fermer"

    },


    ar: {

        home: "الرئيسية",
        accessoriesBoxes: "علب الإكسسوارات",
        cosmeticsBoxes: "علب مستحضرات التجميل",
        hijabBoxes: "علب الحجاب",
        aboutUs: "من نحن",
        contact: "اتصل بنا",

        followInstagram: "تابعونا على إنستغرام",

        collection: "مجموعتنا",
        accessoriesTitle: "علب الإكسسوارات",

        discover: "اكتشفي",
        accessoriesCollection: "علب الإكسسوارات لدينا",
        cosmeticsCollection: "علب مستحضرات التجميل لدينا",
        hijabCollection: "علب الحجاب لدينا",

        accessoriesIntro:
            "اكتشفي علب الإكسسوارات المختارة بعناية، والتي تجمع قطعاً جميلة لتكمّل أناقتك.",

        simpleEasy: "بسيط وسهل",
        howToOrder: "كيفية الطلب",

        step1Title: "اختاري علبتك",
        step1Text:
            "اكتشفي مجموعتنا واختاري العلبة التي تحبينها.",

        step2Title: "تواصلي مع Aya",
        step2Text:
            "أرسلي لنا رسالة عبر إنستغرام لإتمام طلبك.",

        step3Title: "استمتعي بعلبتك",
        step3Text:
            "استلمي علبة Sotra Beauty الخاصة بك واستمتعي بكل تفاصيلها.",

        aboutTitle: "عن SOTRA BEAUTY",

        aboutHeading:
            "الأناقة في كل التفاصيل.",

        aboutText1:
            "تأسست Sotra Beauty by Aya بفكرة بسيطة: جمع قطع نسائية جميلة في علب مختارة بعناية.",

        aboutText2:
            "يتم إعداد كل علبة بعناية واهتمام بالتفاصيل والأناقة.",

        contactSmall:
            "يسعدنا أن نسمع منك",

        contactTitle:
            "تواصلي معنا",

        contactText:
            "لديك سؤال حول إحدى علبنا؟ تواصلي مع Aya مباشرة عبر إنستغرام.",

        instagram:
            "إنستغرام",

        footerText:
            "الجمال والأناقة وأجمل التفاصيل المصنوعة بحب.",

        featured:
            "مميز",

        box:
            "علبة",

        transferFee:
            "مصاريف التوصيل",

        total:
            "المجموع",

        viewDetails:
            "عرض التفاصيل",

        orderInstagram:
            "اطلبي عبر إنستغرام",

        whatsInside:
            "ماذا تحتوي العلبة؟",

        boxPrice:
            "سعر العلبة",

        transferFeeLabel:
            "مصاريف التوصيل",

        totalLabel:
            "المجموع",

        close:
            "إغلاق"

    }

};


/* =========================================
   PRODUCT TRANSLATIONS
========================================= */

const productTranslations = {

    fr: {

        1: {
            name: "Accessorie Box 01",
            description:
                "Une magnifique sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "Magnifiques accessoires",
                "Bijoux élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        2: {
            name: "Accessorie Box 02",
            description:
                "Une collection soigneusement sélectionnée pour faire sentir chaque femme spéciale.",
            items: [
                "Magnifiques accessoires",
                "Bijoux élégants",
                "Détails soigneusement sélectionnés"
            ]
        },

        3: {
            name: "Accessorie Box 03",
            description:
                "Des pièces élégantes et de magnifiques détails réunis dans une box spéciale.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        4: {
            name: "Accessorie Box 04",
            description:
                "Une combinaison spéciale de magnifiques pièces adaptée à toutes les occasions.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        5: {
            name: "Accessorie Box 05",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention aux détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        6: {
            name: "Accessorie Box 06",
            description:
                "Une box spéciale combinant élégance, style et de magnifiques petits détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        7: {
            name: "Accessorie Box 07",
            description:
                "Une magnifique sélection de pièces féminines soigneusement choisies par Aya.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "Une belle collection de pièces féminines sélectionnées avec amour et attention aux détails.",
            items: [
                "Magnifiques accessoires",
                "Détails élégants",
                "Pièces soigneusement sélectionnées"
            ]
        },

        9: {
            name: "Cosmetic Box 09",
            description:
                "Une magnifique collection cosmétique avec des accessoires féminins et des essentiels beauté soigneusement sélectionnés par Aya.",
            items: [
                "2 éponges de maquillage",
                "Petite vaseline pour les lèvres",
                "Crème pour les mains",
                "Pince à cheveux en forme de papillon",
                "Strass",
                "Huile / gloss à lèvres rose",
                "Petite pochette en fourrure blanche avec nœud vichy et cerises",
                "Porte-clés Angel - Stitch rose"
            ]
        },

        10: {
            name: "Cosmetic Box 10",
            description:
                "Une jolie box beauté combinant cosmétiques, accessoires et détails féminins élégants.",
            items: [
                "Miroir",
                "Pochette en fourrure rose avec cerises",
                "2 crèmes pour les mains",
                "Gloss à lèvres",
                "Vaseline pour les lèvres",
                "1 pince à cheveux fleur dorée",
                "1 bague avec sa petite boîte",
                "2 beauty blenders",
                "1 porte-clés (Stitch)"
            ]
        },

        11: {
            name: "Cosmetic Box 11",
            description:
                "Une collection beauté simple et élégante avec des essentiels cosmétiques du quotidien.",
            items: [
                "Miroir",
                "2 beauty blenders Anguoer",
                "Vaseline pour les lèvres",
                "2 crèmes pour les mains",
                "Gloss / huile à lèvres brillante"
            ]
        },

        12: {
            name: "Trio Nude",
            description:
                "Un trio intemporel de tons nude doux, élégant et naturellement chic.",
            items: [
                "Hijabs élégants",
                "Tons nude doux",
                "Style classique et raffiné"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "Des tons moka chaleureux associés à une élégance intemporelle pour un look raffiné.",
            items: [
                "Hijabs élégants",
                "Tons moka et nude",
                "Style chic et sophistiqué"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "Un mélange délicat de magnifiques tons blush, parfait pour une touche douce et féminine.",
            items: [
                "Hijabs élégants",
                "Tons blush doux",
                "Style féminin et gracieux"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "Une collection sophistiquée de tons marbrés où l'élégance rencontre une beauté naturelle.",
            items: [
                "Hijabs élégants",
                "Tons marbrés",
                "Style classique et luxueux"
            ]
        }

    },


    ar: {

        1: {
            name: "Accessorie Box 01",
            description:
                "مجموعة جميلة من القطع النسائية المختارة بعناية من طرف Aya.",
            items: [
                "إكسسوارات جميلة",
                "قطع مجوهرات أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        2: {
            name: "Accessorie Box 02",
            description:
                "مجموعة مختارة بعناية لتجعل كل امرأة تشعر بأنها مميزة.",
            items: [
                "إكسسوارات جميلة",
                "قطع مجوهرات أنيقة",
                "تفاصيل مختارة بعناية"
            ]
        },

        3: {
            name: "Accessorie Box 03",
            description:
                "قطع أنيقة وتفاصيل جميلة مجمعة في علبة مميزة.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        4: {
            name: "Accessorie Box 04",
            description:
                "مجموعة خاصة من القطع الجميلة المناسبة لكل المناسبات.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        5: {
            name: "Accessorie Box 05",
            description:
                "مجموعة جميلة من القطع النسائية المختارة بحب واهتمام بالتفاصيل.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        6: {
            name: "Accessorie Box 06",
            description:
                "علبة جمال مميزة تجمع بين الأناقة والأسلوب والتفاصيل الجميلة.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        7: {
            name: "Accessorie Box 07",
            description:
                "مجموعة جميلة من القطع النسائية المختارة بعناية من طرف Aya.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        8: {
            name: "Accessorie Box 08",
            description:
                "مجموعة جميلة من القطع النسائية المختارة بحب واهتمام بالتفاصيل.",
            items: [
                "إكسسوارات جميلة",
                "تفاصيل أنيقة",
                "قطع مختارة بعناية"
            ]
        },

        9: {
            name: "Cosmetic Box 09",
            description:
                "مجموعة جميلة من مستحضرات التجميل والإكسسوارات النسائية المختارة بعناية من طرف Aya.",
            items: [
                "إسفنجتان للمكياج",
                "فازلين صغير للشفاه",
                "كريم لليدين",
                "مشبك شعر على شكل فراشة",
                "أحجار زينة",
                "زيت / ملمع شفاه وردي",
                "حقيبة صغيرة من الفرو الأبيض مع فيونكة بنقشة Vichy وكرز",
                "سلسلة مفاتيح Angel - Stitch وردي"
            ]
        },

        10: {
            name: "Cosmetic Box 10",
            description:
                "علبة جمال جميلة تجمع بين مستحضرات التجميل والإكسسوارات والتفاصيل النسائية الأنيقة.",
            items: [
                "مرآة",
                "حقيبة من الفرو الوردي مع الكرز",
                "كريمان لليدين",
                "ملمع شفاه",
                "فازلين للشفاه",
                "مشبك شعر على شكل زهرة ذهبية",
                "خاتم مع علبته الصغيرة",
                "إسفنجتان للمكياج",
                "سلسلة مفاتيح Stitch"
            ]
        },

        11: {
            name: "Cosmetic Box 11",
            description:
                "مجموعة جمال بسيطة وأنيقة تحتوي على أساسيات التجميل اليومية.",
            items: [
                "مرآة",
                "إسفنجتان للمكياج Anguoer",
                "فازلين للشفاه",
                "كريمان لليدين",
                "ملمع / زيت شفاه لامع"
            ]
        },

        12: {
            name: "Trio Nude",
            description:
                "ثلاثة ألوان نود ناعمة وأنيقة تمنحك إطلالة راقية وسهلة.",
            items: [
                "حجابات أنيقة",
                "ألوان نود ناعمة",
                "أسلوب كلاسيكي وراقي"
            ]
        },

        13: {
            name: "Mocha Nude",
            description:
                "ألوان موكا دافئة ممزوجة بأناقة خالدة لإطلالة راقية.",
            items: [
                "حجابات أنيقة",
                "ألوان موكا ونود",
                "أسلوب أنيق ومتطور"
            ]
        },

        14: {
            name: "Blush Mix",
            description:
                "مزيج رقيق من ألوان البلاش الجميلة، مثالي لإطلالة ناعمة وأنثوية.",
            items: [
                "حجابات أنيقة",
                "ألوان بلاش ناعمة",
                "أسلوب أنثوي ورقيق"
            ]
        },

        15: {
            name: "Nuances Marbrées",
            description:
                "مجموعة راقية من الألوان الرخامية تجمع بين الأناقة والجمال الطبيعي.",
            items: [
                "حجابات أنيقة",
                "ألوان رخامية",
                "أسلوب كلاسيكي وفاخر"
            ]
        }

    }

};


/* =========================================
   CURRENT LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem("sotraLanguage") || "en";


/* =========================================
   GET TRANSLATION
========================================= */

function getText(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}


/* =========================================
   GET PRODUCT TRANSLATION
========================================= */

function getProductTranslation(box) {

    if (currentLanguage === "en") {

        return {
            name: box.name,
            description: box.description,
            items: box.items
        };

    }


    const languageProducts =
        productTranslations[currentLanguage];

    if (
        languageProducts &&
        languageProducts[box.id]
    ) {

        return languageProducts[box.id];

    }


    return {
        name: box.name,
        description: box.description,
        items: box.items
    };

}


/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(box) {

    const translated =
        getProductTranslation(box);

    const card =
        document.createElement("div");

    card.classList.add("box-card");


    /* FEATURED */

    let featuredLabel = "";

    if (box.featured) {

        featuredLabel = `
            <div class="featured-label">
                ${getText("featured")}
            </div>
        `;

    }


    /* IMAGE */

    const firstImage =
        box.images[0];


    /* TOTAL */

    const totalPrice =
        box.priceNumber + transferFee;


    /* CARD */

    card.innerHTML = `

        <div class="box-image">

            ${featuredLabel}

            <img
                class="box-product-image"
                src="${firstImage}"
                alt="${translated.name}"
            >

        </div>


        <div class="box-info">

            <p class="box-number">
                ${getText("box")}
                ${String(box.id).padStart(2, "0")}
            </p>


            <h3>
                ${translated.name}
            </h3>


            <p class="box-description">
                ${translated.description}
            </p>


            <div class="box-bottom">


                <div class="price-area">

                    <span class="price">
                        ${box.price}
                    </span>


                    <span class="transfer-fee">
                        + ${transferFee} DT
                        ${getText("transferFee")}
                    </span>


                    <span class="total-price">
                        ${getText("total")}: ${totalPrice} DT
                    </span>

                </div>


                <div class="box-buttons">

                    <button
                        class="details-button"
                        data-id="${box.id}"
                    >
                        ${getText("viewDetails")}
                    </button>


                    <a
                        href="${instagramURL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="gold-button order-button"
                    >
                        ${getText("orderInstagram")}
                    </a>

                </div>


            </div>

        </div>

    `;


    /* =========================================
       IMAGE SLIDESHOW
    ========================================= */

    if (box.images.length > 1) {

        const image =
            card.querySelector(
                ".box-product-image"
            );

        let currentImage = 0;


        setInterval(() => {

            currentImage =
                (currentImage + 1) %
                box.images.length;


            image.classList.add(
                "image-changing"
            );


            setTimeout(() => {

                image.src =
                    box.images[currentImage];

                image.classList.remove(
                    "image-changing"
                );

            }, 400);

        }, 5000);

    }


    return card;

}


/* =========================================
   DISPLAY ACCESSORIES
========================================= */

function displayAccessories() {

    const container =
        document.getElementById(
            "boxes-container"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    accessoryBoxes.forEach((box) => {

        container.appendChild(
            createProductCard(box)
        );

    });

}


/* =========================================
   DISPLAY COSMETICS
========================================= */

function displayCosmetics() {

    const container =
        document.getElementById(
            "cosmetics-container"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    cosmeticBoxes.forEach((box) => {

        container.appendChild(
            createProductCard(box)
        );

    });

}


/* =========================================
   DISPLAY HIJABS
========================================= */

function displayHijabs() {

    const container =
        document.getElementById(
            "hijabs-container"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    hijabBoxes.forEach((box) => {

        container.appendChild(
            createProductCard(box)
        );

    });

}


/* =========================================
   DISPLAY ALL PRODUCTS
========================================= */

function displayAllProducts() {

    displayAccessories();
    displayCosmetics();
    displayHijabs();

}


/* =========================================
   PRODUCT DETAILS POPUP
========================================= */

const popup =
    document.createElement("div");

popup.classList.add(
    "product-popup"
);


popup.innerHTML = `

    <div class="popup-content">


        <button
            class="close-popup"
            aria-label="${getText("close")}"
        >
            ×
        </button>


        <p class="popup-number">
            SOTRA BEAUTY
        </p>


        <h2 id="popup-name">
            Beauty Box
        </h2>


        <p id="popup-description"></p>


        <div class="popup-items">

            <h3 id="popup-inside-title">
                ${getText("whatsInside")}
            </h3>


            <ul id="popup-items-list"></ul>

        </div>


        <div class="popup-price-details">


            <div class="popup-price-row">

                <span id="popup-box-price-label">
                    ${getText("boxPrice")}
                </span>

                <strong id="popup-box-price">
                </strong>

            </div>


            <div class="popup-price-row">

                <span id="popup-transfer-label">
                    ${getText("transferFeeLabel")}
                </span>

                <strong id="popup-transfer-fee">
                    ${transferFee} DT
                </strong>

            </div>


            <div class="popup-total-row">

                <span id="popup-total-label">
                    ${getText("totalLabel")}
                </span>

                <strong id="popup-total-price">
                </strong>

            </div>


        </div>


        <div class="popup-bottom">

            <a
                href="${instagramURL}"
                target="_blank"
                rel="noopener noreferrer"
                id="popup-instagram"
                class="gold-button"
            >
                ${getText("orderInstagram")}
            </a>

        </div>


    </div>

`;


document.body.appendChild(popup);


/* =========================================
   POPUP ELEMENTS
========================================= */

const popupName =
    document.getElementById(
        "popup-name"
    );


const popupDescription =
    document.getElementById(
        "popup-description"
    );


const popupBoxPrice =
    document.getElementById(
        "popup-box-price"
    );


const popupTotalPrice =
    document.getElementById(
        "popup-total-price"
    );


const popupItemsList =
    document.getElementById(
        "popup-items-list"
    );


const popupInstagram =
    document.getElementById(
        "popup-instagram"
    );


const closePopup =
    document.querySelector(
        ".close-popup"
    );


const popupInsideTitle =
    document.getElementById(
        "popup-inside-title"
    );


const popupBoxPriceLabel =
    document.getElementById(
        "popup-box-price-label"
    );


const popupTransferLabel =
    document.getElementById(
        "popup-transfer-label"
    );


const popupTransferFee =
    document.getElementById(
        "popup-transfer-fee"
    );


const popupTotalLabel =
    document.getElementById(
        "popup-total-label"
    );


/* =========================================
   CURRENT POPUP BOX
========================================= */

let currentPopupBox = null;


/* =========================================
   OPEN PRODUCT DETAILS
========================================= */

function openProductDetails(boxID) {

    const box =
        allBoxes.find(
            item => item.id === boxID
        );


    if (!box) {
        return;
    }


    currentPopupBox = box;


    const translated =
        getProductTranslation(box);


    /* NAME */

    popupName.textContent =
        translated.name;


    /* DESCRIPTION */

    popupDescription.textContent =
        translated.description;


    /* BOX PRICE */

    popupBoxPrice.textContent =
        box.price;


    /* TOTAL */

    const totalPrice =
        box.priceNumber + transferFee;


    popupTotalPrice.textContent =
        totalPrice + " DT";


    /* TRANSFER */

    popupTransferFee.textContent =
        transferFee + " DT";


    /* ITEMS */

    popupItemsList.innerHTML = "";


    translated.items.forEach(
        (item) => {

            const li =
                document.createElement("li");


            li.textContent =
                item;


            popupItemsList.appendChild(li);

        }
    );


    /* INSTAGRAM */

    popupInstagram.href =
        instagramURL;


    /* OPEN */

    popup.classList.add(
        "active"
    );


    document.body.classList.add(
        "popup-open"
    );

}


/* =========================================
   VIEW DETAILS EVENT
========================================= */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".details-button"
            );


        if (!button) {
            return;
        }


        const boxID =
            Number(button.dataset.id);


        openProductDetails(boxID);

    }
);


/* =========================================
   UPDATE POPUP LANGUAGE
========================================= */

function updatePopupLanguage() {

    if (!popup) {
        return;
    }


    popupInsideTitle.textContent =
        getText("whatsInside");


    popupBoxPriceLabel.textContent =
        getText("boxPrice");


    popupTransferLabel.textContent =
        getText("transferFeeLabel");


    popupTotalLabel.textContent =
        getText("totalLabel");


    popupInstagram.textContent =
        getText("orderInstagram");


    closePopup.setAttribute(
        "aria-label",
        getText("close")
    );


    if (currentPopupBox) {

        const translated =
            getProductTranslation(
                currentPopupBox
            );


        popupName.textContent =
            translated.name;


        popupDescription.textContent =
            translated.description;


        popupItemsList.innerHTML =
            "";


        translated.items.forEach(
            (item) => {

                const li =
                    document.createElement(
                        "li"
                    );

                li.textContent =
                    item;

                popupItemsList.appendChild(
                    li
                );

            }
        );

    }

}


/* =========================================
   CLOSE POPUP
========================================= */

function closeProductPopup() {

    popup.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "popup-open"
    );


    currentPopupBox = null;

}


/* =========================================
   CLOSE BUTTON
========================================= */

if (closePopup) {

    closePopup.addEventListener(
        "click",
        closeProductPopup
    );

}


/* =========================================
   CLICK OUTSIDE POPUP
========================================= */

popup.addEventListener(
    "click",
    (event) => {

        if (
            event.target === popup
        ) {

            closeProductPopup();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeProductPopup();

        }

    }
);


/* =========================================
   STATIC PAGE TRANSLATION
========================================= */

function updateStaticText() {

    const navLinks =
        document.querySelectorAll(
            ".nav-links > li > a"
        );


    if (navLinks.length >= 6) {

        navLinks[0].textContent =
            getText("home");

        navLinks[1].textContent =
            getText("accessoriesBoxes");

        navLinks[2].textContent =
            getText("cosmeticsBoxes");

        navLinks[3].textContent =
            getText("hijabBoxes");

        navLinks[4].textContent =
            getText("aboutUs");

        navLinks[5].textContent =
            getText("contact");

    }


    /* HERO */

    const heroButton =
        document.querySelector(
            ".instagram-hero-button"
        );


    if (heroButton) {

        const spans =
            heroButton.querySelectorAll(
                "span"
            );


        heroButton.childNodes.forEach(
            (node) => {

                if (
                    node.nodeType ===
                    Node.TEXT_NODE
                ) {

                    node.textContent =
                        ` ${getText("followInstagram")} `;

                }

            }
        );

    }


    /* INTRO */

    const introSmall =
        document.querySelector(
            ".intro .section-title p"
        );


    const introTitle =
        document.querySelector(
            ".intro .section-title h2"
        );


    const introText =
        document.querySelector(
            ".intro-text"
        );


    if (introSmall) {

        introSmall.textContent =
            getText("collection");

    }


    if (introTitle) {

        introTitle.textContent =
            getText("accessoriesTitle");

    }


    if (introText) {

        introText.textContent =
            getText("accessoriesIntro");

    }


    /* SECTION TITLES */

    const boxSection =
        document.querySelector(
            "#boxes"
        );


    if (boxSection) {

        const small =
            boxSection.querySelector(
                ".section-title p"
            );

        const title =
            boxSection.querySelector(
                ".section-title h2"
            );


        if (small) {
            small.textContent =
                getText("discover");
        }


        if (title) {
            title.textContent =
                getText("accessoriesCollection");
        }

    }


    const cosmeticsSection =
        document.querySelector(
            "#cosmetics"
        );


    if (cosmeticsSection) {

        const small =
            cosmeticsSection.querySelector(
                ".section-title p"
            );

        const title =
            cosmeticsSection.querySelector(
                ".section-title h2"
            );


        if (small) {
            small.textContent =
                getText("discover");
        }


        if (title) {
            title.textContent =
                getText("cosmeticsCollection");
        }

    }


    const hijabsSection =
        document.querySelector(
            "#hijabs"
        );


    if (hijabsSection) {

        const small =
            hijabsSection.querySelector(
                ".section-title p"
            );

        const title =
            hijabsSection.querySelector(
                ".section-title h2"
            );


        if (small) {
            small.textContent =
                getText("discover");
        }


        if (title) {
            title.textContent =
                getText("hijabCollection");
        }

    }


    /* HOW TO ORDER */

    const howSection =
        document.querySelector(
            ".how-it-works"
        );


    if (howSection) {

        const small =
            howSection.querySelector(
                ".section-title p"
            );

        const title =
            howSection.querySelector(
                ".section-title h2"
            );


        if (small) {

            small.textContent =
                getText("simpleEasy");

        }


        if (title) {

            title.textContent =
                getText("howToOrder");

        }


        const steps =
            howSection.querySelectorAll(
                ".step"
            );


        if (steps.length >= 3) {

            const step1Title =
                steps[0].querySelector(
                    "h3"
                );

            const step1Text =
                steps[0].querySelector(
                    "p"
                );


            const step2Title =
                steps[1].querySelector(
                    "h3"
                );

            const step2Text =
                steps[1].querySelector(
                    "p"
                );


            const step3Title =
                steps[2].querySelector(
                    "h3"
                );

            const step3Text =
                steps[2].querySelector(
                    "p"
                );


            if (step1Title) {

                step1Title.textContent =
                    getText("step1Title");

            }


            if (step1Text) {

                step1Text.textContent =
                    getText("step1Text");

            }


            if (step2Title) {

                step2Title.textContent =
                    getText("step2Title");

            }


            if (step2Text) {

                step2Text.textContent =
                    getText("step2Text");

            }


            if (step3Title) {

                step3Title.textContent =
                    getText("step3Title");

            }


            if (step3Text) {

                step3Text.textContent =
                    getText("step3Text");

            }

        }

    }


    /* ABOUT */

    const about =
        document.querySelector(
            "#about"
        );


    if (about) {

        const small =
            about.querySelector(
                ".small-title"
            );

        const heading =
            about.querySelector(
                "h2"
            );

        const paragraphs =
            about.querySelectorAll(
                "p:not(.small-title)"
            );


        if (small) {

            small.textContent =
                getText("aboutTitle");

        }


        if (heading) {

            heading.textContent =
                getText("aboutHeading");

        }


        if (paragraphs.length >= 2) {

            paragraphs[0].textContent =
                getText("aboutText1");

            paragraphs[1].textContent =
                getText("aboutText2");

        }

    }


    /* CONTACT */

    const contact =
        document.querySelector(
            "#contact"
        );


    if (contact) {

        const small =
            contact.querySelector(
                ".section-title p"
            );

        const title =
            contact.querySelector(
                ".section-title h2"
            );

        const text =
            contact.querySelector(
                ".contact-text"
            );

        const button =
            contact.querySelector(
                ".gold-button"
            );


        if (small) {

            small.textContent =
                getText("contactSmall");

        }


        if (title) {

            title.textContent =
                getText("contactTitle");

        }


        if (text) {

            text.textContent =
                getText("contactText");

        }


        if (button) {

            button.textContent =
                getText("instagram");

        }

    }


    /* FOOTER */

    const footer =
        document.querySelector(
            "footer"
        );


    if (footer) {

        const footerParagraph =
            footer.querySelector(
                "p"
            );


        if (footerParagraph) {

            footerParagraph.textContent =
                getText("footerText");

        }

    }


    /* LANGUAGE BUTTON */

    const languageButton =
        document.querySelector(
            ".language-button"
        );


    if (languageButton) {

        const languageNames = {

            en: "EN",
            fr: "FR",
            ar: "AR"

        };


        languageButton.textContent =
            `${languageNames[currentLanguage]} ▾`;

    }

}


/* =========================================
   RTL / LTR
========================================= */

function updateDirection() {

    const html =
        document.documentElement;


    if (currentLanguage === "ar") {

        html.lang = "ar";
        html.dir = "rtl";

    } else {

        html.lang =
            currentLanguage;

        html.dir = "ltr";

    }

}


/* =========================================
   LANGUAGE SWITCHER
========================================= */

function setupLanguageSwitcher() {

    const languageButton =
        document.querySelector(
            ".language-button"
        );


    const languageMenu =
        document.querySelector(
            ".language-menu"
        );


    const languageOptions =
        document.querySelectorAll(
            ".language-menu button"
        );


    if (
        !languageButton ||
        !languageMenu
    ) {

        return;

    }


    /* OPEN / CLOSE */

    languageButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            const isOpen =
                languageMenu.classList.toggle(
                    "active"
                );


            languageButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    /* CHOOSE LANGUAGE */

    languageOptions.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.language;


                    if (
                        !translations[language]
                    ) {

                        return;

                    }


                    setLanguage(
                        language
                    );


                    languageMenu.classList.remove(
                        "active"
                    );


                    languageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


    /* CLOSE WHEN CLICKING OUTSIDE */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !event.target.closest(
                    ".language-switcher"
                )
            ) {

                languageMenu.classList.remove(
                    "active"
                );


                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================
   SET LANGUAGE
========================================= */

function setLanguage(language) {

    if (
        !translations[language]
    ) {

        language = "en";

    }


    currentLanguage =
        language;


    /* SAVE */

    localStorage.setItem(
        "sotraLanguage",
        currentLanguage
    );


    /* DIRECTION */

    updateDirection();


    /* STATIC CONTENT */

    updateStaticText();


    /* PRODUCTS */

    displayAllProducts();


    /* POPUP */

    updatePopupLanguage();

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


if (
    menuToggle &&
    navLinks
) {

    menuToggle.addEventListener(
        "click",
        () => {

            menuToggle.classList.toggle(
                "active"
            );


            navLinks.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                }


                if (navLinks) {

                    navLinks.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   INITIALIZE
========================================= */

setupLanguageSwitcher();

setLanguage(
    currentLanguage
);
