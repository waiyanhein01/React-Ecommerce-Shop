import { create } from "zustand";

const useProductStore = create(() => ({
  products: [
    {
      id: 1,
      title: "Air Jordan 1 Retro High OG 'Shadow' 2018",
      slug: "air-jordan-1-retro-high-og-shadow-2018-555088-013",
      brand_name: "Air Jordan",
      price: 16000,
      description:
        "This Nike Air Jordan 1 Retro High OG 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.",
      category: "basketball",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Air Jordan 4 Retro OG GS 'Bred' 2019",
      slug: "air-jordan-4-retro-og-gs-bred-408452-060",
      brand_name: "Air Jordan",
      price: 14000,
      description: "loremm",
      category: "basketball",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Air Jordan 11 Retro 'Space Jam' 2016",
      slug: "air-jordan-11-retro-space-jam-378037-003",
      brand_name: "Air Jordan",
      price: 22000,
      description:
        "The Air Jordan 11 Retro 'Space Jam' 2016 commemorates the 20th anniversary of the movie 'Space Jam.' Worn by Michael Jordan as a Player Exclusive (PE) in both the movie and the 1995 NBA Playoffs, the 2016 retro ended up being Nike's largest and most successful shoe launch ever. This 2016 sneaker is a more faithful reproduction of the original PE than the 2000 and 2009 retros. The sneaker also swaps the traditional #23 for MJ's comeback #45 on the heel, a first for an Air Jordan 11 retail release.",
      category: "basketball",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "White/Black-Dark Concord",
      slug: "air-jordan-11-retro-concord-2018-378037-100",
      price: 22000,
      brand_name: "Air Jordan",
      description:
        "The 2018 edition of the Air Jordan 11 Retro ‘Concord’ features ‘45’ stamped on the black heel tab—a nod to the jersey number that Michael Jordan wore upon his return to basketball following his first retirement. The rest of the build keeps the shoe’s signature details intact, including a white ballistic mesh upper, black patent leather overlays and an icy translucent outsole underfoot.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/016/934/177/original/351614_00.png",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
      "Air Jordan 11 Retro 'Win Like '96'",
      slug: "air-jordan-11-retro-gym-red-378037-623-abb4fed8-42d8-4998-9858-47500cc06cc7",
      price: 22000,
      category: "lifestyle",
      brand_name: "Air Jordan",
      description:
      "For Chicago Bulls Fans, the historical significance of the Air Jordan 11 Retro ‘Win Like 96’ will be abundantly clear. 1996 is the year that the Bulls capped off the regular season with a record-breaking 72 wins, on their way to a fourth NBA title in six seasons. Michael wore the Jordan 11 during that magical run, and this December 2017 release, dressed in a dazzling shade of red, honors the ’96 squad that couldn’t lose.",      category: "basketball",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Platinum Tint/Sail-University Red",
      slug: "air-jordan-11-retro-platinum-tint-378037-016",
      price: 22000,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan 11 Retro ‘Platinum Tint’ does away with the one detail most commonly associated with the classic silhouette—its shiny patent leather overlay. Instead, the mid-top takes on a nubuck and ballistic mesh build, finished entirely in understated Platinum Tint. Contrasting color arrives via University Red detailing on the tongue and Jumpman on the lateral heel.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/015/392/851/original/429772_00.png.png",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "Black/Infrared 23-Black",
      slug: "air-jordan-6-retro-black-infrared-384664-060",
      price: 20000,
      brand_name: "Air Jordan",
      description:
        "The 2019 edition of the Air Jordan 6 Retro ‘Infrared’ is true to the original colorway, which Michael Jordan wore when he captured his first NBA title. Dressed primarily in black nubuck with a reflective 3M layer underneath, the mid-top features Infrared accents on the midsole, heel tab and lace lock. Nike Air branding adorns the heel and sockliner, an OG detail last seen on the 2000 retro.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/018/675/311/original/464372_00.png.png",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "university blue/varsity red-black",
      slug: "travis-scott-x-air-jordan-4-retro-cactus-jack-308497-406",
      price: 22500,
      brand_name: "Air Jordan",
      description:
        "The Wmns Air Jordan 12 Retro sneaker draws details from the 1996 classic and elevates them with luxe style additions. This April 2019-released, women&#39;s-exclusive shoe features the AJ12’s original stitching, inspired by the Rising Sun Flag of Japan. Its black leather upper is laden with exotic reptile-inspired texture and embellished with gold accents. This edition is completed with classic Zoom cushioning and sections of herringbone tread.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/012/478/518/original/365514_00.png.png",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "Gold Harvest/Black-Sail",
      slug: "air-jordan-1-retro-high-og-rookie-of-the-year-555088-700",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "In 1985, Michael Jordan received the NBA’s Rookie of the Year Award after launching his career with a remarkable point per game average and a thirst for success. To celebrate, Jordan Brand released the Air Jordan 1 Retro High OG &#39;Rookie of the Year.&#39; The high top features a white-based leather upper with perforations on the toe box for breathability and Gold Harvest leather overlays on the mudguard, ankle, eyestay, and heel. Hidden on the inside of each strap on the upper are callouts to MJ’s outstanding rookie season. ‘1984-85 R.O.Y. 2313 POINTS 28.2 PPG’ can be found on the inside of one strap, and a quote from Jordan can be found on the other.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/016/152/710/original/402491_00.png.png",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "Sail/Dark Mocha-University Red-Black",
      slug: "patta-x-air-jordan-7-retro-og-sp-shimmer-patta-aj7-shm",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "Amsterdam-based boutique and streetwear brand, Patta joins forces with Jordan Brand to lend their signature aesthetic to the Patta x Air Jordan 7 Retro OG SP &#39;Shimmer&#39; sneaker. Part of a limited-edition capsule collection released in May 2019, this rendition sports an earth-toned color palette of Shimmer, Mahogany Mink, Velvet Brown and Tough Red hues on a premium leather and suede upper. Unique perforation patterns and an offset Jumpman logo accent the underlay, while signature Patta script dresses the triple-tone midsole. A durable rubber outsole equipped with Air technology reinforces the design, which is inspired by Michael Jordan&#39;s run with the Dream Team at the 1992 Summer Games in Barcelona.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/018/783/111/original/488879_00.png.png",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title: "Turbo Green/White-Light Smoke Grey-Sail",
      slug: "air-jordan-1-retro-high-og-turbo-green-555088-311",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan 1 Retro High OG ‘Turbo Green’ complements the silhouette’s clean lines with a classic two-tone design. A textured white leather base is contrasted by soft suede overlays in Turbo Green. The latter design element is burnished to give off a vintage aesthetic, a quality that’s further enhanced by a midsole finished in off-white Sail. In addition to a woven Nike Air tongue tag in purple and yellow, exterior branding also includes a line of text at the base of the quarter panel that reads ‘SP 19 Air Jordan 1 High OG.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title: "Black/Crimson Tint-Hyper Pink-White",
      brand_name: "Air Jordan",
      slug: "wd-4tb-gaming-drive-works-with-playstation-4-portable-external-hard-drive",
      price: 16000,
      description:
        "An original colorway of the Air Jordan 11 Low back in 2001, this low-cut style is revived with the ladies’-exclusive Wmns Air Jordan 11 Retro Low &#39;Pink Snakeskin&#39; sneaker. Released in May 2019, its smooth white leather upper is decorated with glossy snakeskin mudguards. Below, the shoe rides along a foam midsole and translucent outsole.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Gym Red/Summit White-Black",
      slug: "air-jordan-1-high-og-defiant-cd6578-507",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "Arriving in stores in February 2018, the Air Jordan 1 Retro High OG ‘Bred Toe’ is a new spin on a classic design. The Chicago Bulls-inspired colorway combines elements of the ‘Bred’ and ‘Black Toe’ editions of the Air Jordan 1, executed on a premium leather build. The high-top features a black Swoosh on the white quarter panel, along with contrasting pops of red on the toe box, heel, collar, and outsole. The shoe stays true to its OG 1985 roots with Nike Air branding on the tongue tag and sockliner.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/009/559/594/original/144690_00.png.png",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title:
        "Air Jordan 1 Retro High OG 'Origin Story'",
      slug: "spider-verse-x-air-jordan-1-retro-high-og-origin-story",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "Air Jordan 1 Retro High OG ‘Origin Story’ was made to celebrate the animated film Spider-Man: Into the Spider-Verse. The high-top features a design that mirrors the pair worn by character Miles Morales, updating the classic Chicago colorway with an icy translucent rubber outsole and a subtle pattern of reflective dots across the shoe’s red leather overlays.",
      category: "electronics",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/016/867/969/original/478648_00.png.png",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "Gym Red/Gym Red-Black",
      slug: "air-jordan-12-retro-bulls-130690-601",
      price: 19000,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan 12 Retro ‘Gym Red’ presents a monochromatic take on Tinker Hatfield’s 1996 design. The entirety of the mid-top silhouette is dipped in red, including the rubber tooling and herringbone tread outsole. Contrasting hits of black are used throughout the shoe’s branding elements and sockliner. While the all-red finish presents a radical new look for the vintage silhouette, the performance benefits remain unchanged, highlighted by full-length Zoom Air that extends from heel to toe.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/016/596/414/original/376931_00.png.png",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "Light Bone/University Red-Sail-Black",
      slug: "air-jordan-11-retro-low-snakeskin-2019-cd6846-002",
      price: 18500,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan 11 Retro Low&#39;s iconic identity was founded when Michael Jordan returned to the game in 1995. Surfacing in June 2019, this &#39;Light Bone Snakeskin&#39; variant reaffirms the allure with a contemporary snakeskin print on the leather upper&#39;s mudguard. Rope laces winding through the lateral webbing customize fit. Signature Jumpman insignias are positioned on the tongue and heel. A translucent rubber outsole and carbon fiber plate form the base.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/021/219/116/original/CD6846_002.png.png",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Light Bone/Crimson Tint-Hyper Pink-Black",
      slug: "air-jordan-1-retro-high-sb-light-bone-cd6578-006",
      price: 17000,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan SB 1 Retro High is representative of the decades-old influence that the iconic shoe has had on skate culture. Revealed in May 2019, this &#39;Light Bone&#39; update is formed by a classic leather upper treated with a wear-away finish concealing an alternate tint. Custom branding resurfaces via the lateral Swooshes, Jumpman tongue label and Wings logo. The encapsulated Air unit and concentric circle outsole are mainstays on this classic silhouette.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/021/147/976/original/497870_00.png.png",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "Sail/Black-Phantom-University Red",
      slug: "air-jordan-1-retro-high-og-black-phantom-555088-160",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "Instead of the usual two-tone color blocking, the Air Jordan 1 Retro High OG ‘Phantom’ makes use of contrast stitching in black and red to distinguish the high-top’s clean lines. The shoe’s all-leather upper is finished in off-white Sail, accented by a padded collar and underlayer Swoosh in University Red. True to its OG designation, the design is finished with Nike Air branding on the woven tongue tag and insole.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/020/095/762/original/411931_00.png.png",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "White/White-Gum Yellow",
      slug: "sneaker-politics-x-air-jordan-1-low-block-party-sp-aj1-low-bp",
      price: 10000,
      brand_name: "Air Jordan",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft lightweight fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/021/317/617/original/SP_AJ1_LOW_BP.png.png",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "Platinum Tint/Sail-University Red",
      slug: "air-jordan-11-retro-platinum-tint-378037-016",
      price: 22000,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan 11 Retro ‘Platinum Tint’ does away with the one detail most commonly associated with the classic silhouette—its shiny patent leather overlay. Instead, the mid-top takes on a nubuck and ballistic mesh build, finished entirely in understated Platinum Tint. Contrasting color arrives via University Red detailing on the tongue and Jumpman on the lateral heel.",
      category: "lifestyle",
      image: "https://image.goat.com/375/attachments/product_template_pictures/images/015/392/851/original/429772_00.png.png",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ],
  
  // products: [
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Air Jordan",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Tinker Hatfield",
  //     "details": "White/Black-Dark Concord",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/016/934/177/original/351614_00.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 351614,
  //     "keywords": [
  //       "Concord"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/016/934/177/original/351614_00.png",
  //     "midsole": "Air",
  //     "name": "Air Jordan 11 Retro 'Concord' 2018",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/016/934/177/original/351614_00.png",
  //     "product_template_id": 351614,
  //     "release_date": "2018-12-08T23:59:59.000Z",
  //     "release_date_unix": 1544313599,
  //     "release_year": 2018,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Jordan 11",
  //     "sku": "378037 100",
  //     "slug": "air-jordan-11-retro-concord-2018-378037-100",
  //     "status": "active",
  //     "story_html": "<p>The 2018 edition of the Air Jordan 11 Retro ‘Concord’ features ‘45’ stamped on the black heel tab—a nod to the jersey number that Michael Jordan wore upon his return to basketball following his first retirement. The rest of the build keeps the shoe’s signature details intact, including a white ballistic mesh upper, black patent leather overlays and an icy translucent outsole underfoot. </p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Air Jordan",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Tinker Hatfield",
  //     "details": "White/Black-Navy",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/310/667/original/459705_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 459705,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/310/667/original/459705_00.png.png",
  //     "midsole": "",
  //     "name": "Air Jordan 11 Retro Low 'Navy Snakeskin' 2019",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/310/667/original/459705_00.png.png",
  //     "product_template_id": 459705,
  //     "release_date": "2019-04-19T23:59:59.000Z",
  //     "release_date_unix": 1555718399,
  //     "release_year": 2019,
  //     "retail_price_cents": 18500,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Jordan 11",
  //     "sku": "CD6846 102",
  //     "slug": "air-jordan-11-retro-low-snakeskin-2019-cd6846-102",
  //     "status": "active",
  //     "story_html": "<p>The Air Jordan 11 Retro Low ‘Navy Snakeskin’ returns for the first time since 2000. A true retro to the original, the 2019 version features leather panels on the upper instead of mesh and a translucent outsole, while the mudguard still features a navy snakeskin print.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Air Jordan",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Tinker Hatfield",
  //     "details": "White/Fire Red-Tech Grey-Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/831/original/31342_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 31342,
  //     "keywords": [
  //       "cement",
  //       "white cement"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/008/654/831/original/31342_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Jordan 4 Retro OG 'White Cement' 2016",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/008/654/831/original/31342_00.png.png",
  //     "product_template_id": 31342,
  //     "release_date": "2016-02-13T08:00:00.000Z",
  //     "release_date_unix": 1455350400,
  //     "release_year": 2016,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Jordan 4",
  //     "sku": "840606 192",
  //     "slug": "air-jordan-retro-4-og-cement-2016-836015-192",
  //     "status": "active",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Champion",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Black",
  //     "designer": "",
  //     "details": "Black/White/Red",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/015/567/335/original/CM100018M.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 468155,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/015/567/335/original/CM100018M.png.png",
  //     "midsole": "",
  //     "name": "Rally Pro 'Black'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/015/567/335/original/CM100018M.png.png",
  //     "product_template_id": 468155,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 10000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Rally Pro",
  //     "sku": "CM100018M",
  //     "slug": "rally-pro-black-cm100018m",
  //     "status": "active",
  //     "story_html": "<p>The Champion Rally Pro sneaker packages street style in a sleek, basketball-inspired silhouette with heritage Champion detailing throughout. This ‘Black’ version is styled for growing kids’ feet and features a one-piece bootie construction made from woven mesh and elastic textile with suede trim on the sidewall and heel. It offers a snug, sock-like fit that’s reinforced with tabs at the tongue and heel for easy on and off. A textured chenille ‘C’ logo on the sidewall and branded elastic strap across the forefoot complement the design.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Converse",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Cream",
  //     "designer": "Marquis Mills",
  //     "details": "Cream/Multicolor",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/018/552/840/original/476518_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 476518,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/018/552/840/original/476518_00.png.png",
  //     "midsole": "",
  //     "name": "Tyler, The Creator x Foot Locker x Chuck 70 'Artist Series'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/018/552/840/original/476518_00.png.png",
  //     "product_template_id": 476518,
  //     "release_date": "2018-11-26T23:59:59.000Z",
  //     "release_date_unix": 1543276799,
  //     "release_year": 2018,
  //     "retail_price_cents": 10000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Chuck 70",
  //     "sku": "164531C",
  //     "slug": "tyler-the-creator-x-foot-locker-x-chuck-70-artist-series-ttc-fl-c70-crm",
  //     "status": "active",
  //     "story_html": "<p>Tyler, the Creator teamed up with Foot Locker on the ‘Artist Series’ edition of the Converse Chuck 70, featuring an off-white canvas upper printed with original artwork from Wyatt Navarro. The heightened foxing that’s a signature design element of the silhouette is adorned with contrasting stripes in blue and orange. A gum rubber outsole delivers traction underfoot.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Converse",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Marquis Mills",
  //     "details": "Milk",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/015/298/767/original/77243_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 77243,
  //     "keywords": [
  //       "CDG"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/015/298/767/original/77243_00.png.png",
  //     "midsole": "",
  //     "name": "Comme des Garçons x Chuck Taylor All Star Hi 'Milk'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/015/298/767/original/77243_00.png.png",
  //     "product_template_id": 77243,
  //     "release_date": "2015-05-14T23:59:59.000Z",
  //     "release_date_unix": 1431647999,
  //     "release_year": 2015,
  //     "retail_price_cents": 12000,
  //     "shoe_condition": "used",
  //     "silhouette": "Chuck Taylor All Star",
  //     "sku": "150205C",
  //     "slug": "ct-hi-x-comme-des-garcons-play-150205c",
  //     "status": "active",
  //     "story_html": "<p>This Comme des Garçons x Chuck Taylor All Star Hi features an off-white canvas upper, red CDG heart logo on the side panels, black contrast stripe on the heel, white toe cap, and a vulcanized rubber midsole. Released in June 2017, the sneaker also dropped in a black colorway.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Gucci",
  //     "category": [
  //       "other"
  //     ],
  //     "color": "Black",
  //     "designer": "",
  //     "details": "Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/009/249/006/original/259509_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 259509,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/009/249/006/original/259509_00.png.png",
  //     "midsole": "",
  //     "name": "Gucci Pursuit '72 Rubber Slide 'Black'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/009/249/006/original/259509_00.png.png",
  //     "product_template_id": 259509,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 21000,
  //     "shoe_condition": "used",
  //     "silhouette": "Gucci Slide",
  //     "sku": "308234 GIB10 1098",
  //     "slug": "gucci-pursuit-72-rubber-slides-black-308234-gib10-1098",
  //     "status": "active",
  //     "story_html": "<p>The Gucci Pursuit ‘72 Rubber Slide in ‘Black’ sneaker pays homage to the fashion house&#39;s roots with the iconic Web stripe—first developed by Gucci in the 1950s—taking the stage. The minimal, open-toe silhouette features a thick black rubber sole with a rounded shape. The top portion of the slide is a rubber strap displaying the Gucci Web green and red striped motif, and the design is finished with a Gucci logo embossed on the outer midsole.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "basketball"
  //     ],
  //     "color": "Black",
  //     "designer": "Benjamin Nethongkome",
  //     "details": "Black/White-Bright Crimson",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/840/270/original/491192_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 491192,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/840/270/original/491192_00.png.png",
  //     "midsole": "Air",
  //     "name": "Kyrie 5 'Friends'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/840/270/original/491192_00.png.png",
  //     "product_template_id": 491192,
  //     "release_date": "2019-05-16T07:00:00.000Z",
  //     "release_date_unix": 1557990000,
  //     "release_year": 2019,
  //     "retail_price_cents": 13000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Kyrie 5",
  //     "sku": "AO2918 006",
  //     "slug": "friends-x-kyrie-5-ao2918-006",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": null
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Black",
  //     "designer": "Christian Tresser",
  //     "details": "Black/Reflect Silver-Blue Lagoon",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/627/570/original/491891_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 491891,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/627/570/original/491891_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Max 97 'On Air: Neon Seoul'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/627/570/original/491891_00.png.png",
  //     "product_template_id": 491891,
  //     "release_date": "2019-04-13T07:00:00.000Z",
  //     "release_date_unix": 1555138800,
  //     "release_year": 2019,
  //     "retail_price_cents": 20000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Max 97",
  //     "sku": "CI1503 001",
  //     "slug": "air-max-97-neon-seoul-am-97-seoul",
  //     "status": "active",
  //     "story_html": "<p>In celebration of Air Max Day, Nike hosted the Nike: On Air contest in 2018, giving residents the chance to create their own Air Max designs inspired by their hometowns. After working alongside Nike developers, winner Gwang Shin debuted his Nike Air Max 97 &#39;Neon Seoul&#39; sneaker in April 2019. Paying tribute to his city, Seoul, Shin draws influences from the famed neon signs in South Korea’s capital, decorating the leather upper with vivid-colored piping.</p>\n",
  //     "upper_material": null
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Black",
  //     "designer": "Jerry Lorenzo",
  //     "details": "Black/Black-Fossil",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/549/original/489359_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 489359,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/545/549/original/489359_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Fear Of God Raid 'Black'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/545/549/original/489359_00.png.png",
  //     "product_template_id": 489359,
  //     "release_date": "2019-05-17T07:00:00.000Z",
  //     "release_date_unix": 1558076400,
  //     "release_year": 2019,
  //     "retail_price_cents": 19000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Air Fear Of God Strap",
  //     "sku": "AT8087 002",
  //     "slug": "air-fear-of-god-strap-black-at8087-002",
  //     "status": "active",
  //     "story_html": "<p>Nike and frequent collaborator Fear Of God designer, Jerry Lorenzo, joined forces once again for the Air Fear Of God Raid &#39;Black&#39; sneaker. Released in May 2019, the uniquely designed silhouette is inspired by one of Lorenzo’s favorite Nike designs, the Air Raid. Outfitted with a cross strap suede and textile upper above; below, its equipped with a double stacked Zoom Air unit in heel for a retro, yet futuristic finish.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Black",
  //     "designer": "Tinker Hatfield",
  //     "details": "Black/Black-Cone-White",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/017/763/484/original/466439_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 466439,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/017/763/484/original/466439_00.png.png",
  //     "midsole": "Air",
  //     "name": "OFF-WHITE x Air Max 90 'Black'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/017/763/484/original/466439_00.png.png",
  //     "product_template_id": 466439,
  //     "release_date": "2019-02-07T23:59:59.000Z",
  //     "release_date_unix": 1549583999,
  //     "release_year": 2019,
  //     "retail_price_cents": 16000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Air Max 90",
  //     "sku": "AA7293 001",
  //     "slug": "off-white-x-air-max-90-black-aa7293-001",
  //     "status": "active",
  //     "story_html": "<p>The Off-White x Air Max 90 ‘Black’ offers a unique blend of materials on the upper, which combines a ripstop base with nubuck overlays and a suede mudguard. The all-black finish is contrasted by a white Swoosh with zigzag stitching, a small orange tab on the quarter panel and orange stitching on the exposed-foam tongue. Virgil Abloh’s signature text block makes an appearance on the shoe’s medial side.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Black",
  //     "designer": "Tobie Hatfield",
  //     "details": "Black/White/Cone",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/012/750/761/original/351623_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 351623,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/012/750/761/original/351623_00.png.png",
  //     "midsole": "Air",
  //     "name": "OFF-WHITE x Air Presto 'Black'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/012/750/761/original/351623_00.png.png",
  //     "product_template_id": 351623,
  //     "release_date": "2018-07-27T23:59:59.000Z",
  //     "release_date_unix": 1532735999,
  //     "release_year": 2018,
  //     "retail_price_cents": 16000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Presto",
  //     "sku": "AA3830 002",
  //     "slug": "off-white-x-air-presto-aa3830-002",
  //     "status": "active",
  //     "story_html": "<p>This monochromatic take on the Air Presto is the second time Virgil Abloh and Nike collaborated on this iconic silhouette. The July 2018 iteration came a few mere months after it’s two-tone predecessor made it’s debut as part of Abloh and Nike’s ‘The Ten’ Collection. This pair showcases an all-black finish, accented with unique touches including a plastic zip tie, white Swoosh with conspicuous zig-zag stitching, and lines of text on the medial quarter panel that allude to the shoe’s Beaverton origins.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Blue",
  //     "designer": "",
  //     "details": "Varsity Blue/Del Sol-Varsity Red-Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/019/246/220/original/491897_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 491897,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/019/246/220/original/491897_00.png.png",
  //     "midsole": "",
  //     "name": "Sacai x LDV Waffle 'Varsity Blue'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/019/246/220/original/491897_00.png.png",
  //     "product_template_id": 491897,
  //     "release_date": "2019-05-30T07:00:00.000Z",
  //     "release_date_unix": 1559199600,
  //     "release_year": 2019,
  //     "retail_price_cents": 18000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "LDV Waffle",
  //     "sku": "BV0073 400",
  //     "slug": "sacai-x-ldv-waffle-varsity-blue-bv0073-400",
  //     "status": "active",
  //     "story_html": "<p>Sacai and Nike collaborate again, with the Nike LDV Waffle emerging from Paris Fashion Week at the Sacai SP19 runway show. Featuring a unique hybridization technique, the shoe mixes two Nike runners from the archives: the Waffle Daybreak and the LDV. With two shoes coming together, a unique upper features a double Swoosh, double tongue, double heel counter, double eyestay and double laces. It’s set against a blue and red upper that mixes suede, leather and mesh while a sculpted midsole juts out past the heel, adding an extra element of crazy design lines on an already chaotic shoe. The classic waffle outsole brings everything together, while Nike and Sacai branding can be seen on the back heel and insole.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "missing_lid",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Cream",
  //     "designer": "Bill Bowerman",
  //     "details": "Sail/Obsidian-Total Crimson",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/501/original/507173_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 507173,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/545/501/original/507173_00.png.png",
  //     "midsole": null,
  //     "name": "Blazer Mid '77 Vintage 'City Pride Chicago'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/545/501/original/507173_00.png.png",
  //     "product_template_id": 507173,
  //     "release_date": "2019-05-03T07:00:00.000Z",
  //     "release_date_unix": 1556866800,
  //     "release_year": 2019,
  //     "retail_price_cents": 11000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Blazer",
  //     "sku": "CD9318 100",
  //     "slug": "blazer-mid-77-vintage-cream-navy-cd9318-100",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": null
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Multi-Color",
  //     "designer": "",
  //     "details": "Black/Bright Crimson",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 494127,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png",
  //     "midsole": "Air",
  //     "name": "Atmos x Air Max 2 Light QS 'Logos'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png",
  //     "product_template_id": 494127,
  //     "release_date": "2019-04-05T07:00:00.000Z",
  //     "release_date_unix": 1554447600,
  //     "release_year": 2019,
  //     "retail_price_cents": 16000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Max 2 Light",
  //     "sku": "BV7406 001",
  //     "slug": "atmos-x-air-max-2-light-logos-bv7406-001",
  //     "status": "active",
  //     "story_html": "<p>First spotted on the feet of atmos creative director Hirofumi Kojima during ComplexCon 2018, the atmos x Air Max 2 Light &#39;Logos&#39; releases as part of Air Max Day 2019. The upper showcases a patchwork design made up of different mismatched panels inspired by vintage Nike graphics, with a translucent overlay and Bright Crimson Swoosh. Other details include a sculpted white midsole housing a heel Max Air unit, and the tongue features a sewn on colorful AIR MAX 2 patch.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "badly_damaged",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Orange",
  //     "designer": "Bruce Kilgore",
  //     "details": "Team Orange/White-Black-Tour Yellow",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/019/994/877/original/AJ7747_800.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 443766,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/019/994/877/original/AJ7747_800.png.png",
  //     "midsole": "Air",
  //     "name": "Air Force 1 '07 LV8 'Overbranding'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/019/994/877/original/AJ7747_800.png.png",
  //     "product_template_id": 443766,
  //     "release_date": "2018-08-30T23:59:59.000Z",
  //     "release_date_unix": 1535673599,
  //     "release_year": 2018,
  //     "retail_price_cents": 10000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Force 1",
  //     "sku": "AJ7747 800",
  //     "slug": "air-force-1-07-lv8-team-orange-aj7747-800",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "missing_lid",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Red",
  //     "designer": "Tinker Hatfield",
  //     "details": "Mars Stone/Magma Orange",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/019/804/999/original/488028_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 488028,
  //     "keywords": [
  //       "promoted1",
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/019/804/999/original/488028_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Max 90 QS 'Mars Landing'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/019/804/999/original/488028_00.png.png",
  //     "product_template_id": 488028,
  //     "release_date": "2019-03-16T23:59:59.000Z",
  //     "release_date_unix": 1552780799,
  //     "release_year": 2019,
  //     "retail_price_cents": 16000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Air Max 90",
  //     "sku": "AA7293 200",
  //     "slug": "off-white-x-air-max-90-desert-ore-aa7293-200",
  //     "status": "active",
  //     "story_html": "<p>The Off-White x Air Max 90 ‘Desert Ore’ represents yet another of Virgil Abloh’s fanciful takes on the retro silhouette. Unlike its stark black and white counterparts, this pair features a mixed-material upper dressed in a warm tan shade. A stitched-on in Swoosh in Bright Mango is joined by the usual Virgil flourishes, including a blue zip tie and lines of printed text on the medial side.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Andreas Harlow",
  //     "details": "White/Total Orange-Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 303229,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png",
  //     "midsole": "Air",
  //     "name": "OFF-WHITE x Air VaporMax 'Part 2'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png",
  //     "product_template_id": 303229,
  //     "release_date": "2018-04-14T23:59:59.000Z",
  //     "release_date_unix": 1523750399,
  //     "release_year": 2018,
  //     "retail_price_cents": 25000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air VaporMax",
  //     "sku": "AA3831 100",
  //     "slug": "off-white-x-air-vapormax-part-2-aa3831-100",
  //     "status": "active",
  //     "story_html": "<p>The April 2018 version of Virgil Abloh’s all-white Air VaporMax is mostly unchanged from the original pair from ‘The Ten.’ Stripped of color, the performance runner brings raw materials and unique details to the forefront, including an exposed-foam tongue, translucent Swoosh and off-white suede eyestay. Printed above the clear VaporMax unit, the quotation ‘AIR’ print on the lateral side takes on an extra meta dimension. </p>\n",
  //     "upper_material": "Flyknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Bruce Kilgore",
  //     "details": "Sail/Gum Light Brown/Sail",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/013/832/092/original/306892_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 306892,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/013/832/092/original/306892_00.png.png",
  //     "midsole": "Air",
  //     "name": "Travis Scott x Air Force 1 'Sail'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/013/832/092/original/306892_00.png.png",
  //     "product_template_id": 306892,
  //     "release_date": "2018-08-10T23:59:59.000Z",
  //     "release_date_unix": 1533945599,
  //     "release_year": 2018,
  //     "retail_price_cents": 15000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Force 1",
  //     "sku": "AQ4211 101",
  //     "slug": "travis-scott-x-air-force-1-sail-aq4211-101",
  //     "status": "active",
  //     "story_html": "<p>The ‘Sail’ colorway of Travis Scott’s Air Force 1 represents the Houston rapper’s second collaboration with Nike on the classic silhouette. Aside from swapping out the all-white finish of its predecessor with slightly darker Sail, the new model is mostly unchanged. Tonal canvas construction is accented with removable Swooshes and tongue patches, while the shiny lace jewels give a nod to Scott’s signature grill.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Bruce Kilgore",
  //     "details": "White/Black-Hyper Crimson",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/881/688/original/508101_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 508101,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/881/688/original/508101_00.png.png",
  //     "midsole": "Air",
  //     "name": "Steven Harrington x Air Force 1 Low Flyleather QS 'Earth Day'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/881/688/original/508101_00.png.png",
  //     "product_template_id": 508101,
  //     "release_date": "2019-04-22T23:59:59.000Z",
  //     "release_date_unix": 1555977599,
  //     "release_year": 2019,
  //     "retail_price_cents": 10000,
  //     "shoe_condition": "new_with_defects",
  //     "silhouette": "Air Force 1",
  //     "sku": "CI5545 100",
  //     "slug": "air-force-1-low-earth-day-ci5545-100",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Bruce Kilgore",
  //     "details": "White/Black-White",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/019/367/662/original/484799_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 484799,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/019/367/662/original/484799_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Force 1 Low 'Have a Nike Day - White'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/019/367/662/original/484799_00.png.png",
  //     "product_template_id": 484799,
  //     "release_date": "2019-02-26T23:59:59.000Z",
  //     "release_date_unix": 1551225599,
  //     "release_year": 2019,
  //     "retail_price_cents": 10000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Force 1",
  //     "sku": " BQ9044 100",
  //     "slug": "air-force-1-low-gs-have-a-nike-day-white-af1-gs-hand-wht",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "collection_slugs": [],
  //     "color": "White",
  //     "designer": "Bruce Kilgore",
  //     "details": "White/University Blue",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/018/898/008/original/482531_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 482531,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/018/898/008/original/482531_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Force 1 '07 Low 'University Blue'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/018/898/008/original/482531_00.png.png",
  //     "product_template_id": 482531,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 9000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Force 1",
  //     "sku": "AO2423 100",
  //     "slug": "air-force-1-07-low-university-blue-ao2423-100",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": null
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "collection_slugs": [
  //       "af1",
  //       "coachella",
  //       "diy",
  //       "diy-1",
  //       "drake",
  //       "new-york-fashion-week-fall-2019",
  //       "the-ones-that-started-it-all",
  //       "top-20-trending",
  //       "triple-white"
  //     ],
  //     "color": "White",
  //     "designer": "Bruce Kilgore",
  //     "details": "White/White",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/010/222/352/original/240_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 240,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/010/222/352/original/240_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Force 1 '07 'White'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/010/222/352/original/240_00.png.png",
  //     "product_template_id": 240,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 9000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Force 1",
  //     "sku": "315122 111",
  //     "slug": "nike-air-force-1-315122-111",
  //     "status": "active",
  //     "story_html": "<p>The Nike Air Force 1 Low is a modern take on the iconic white on white low top Air Force 1. Released in honor of the classic shoe&#39;s 25th anniversary in 2007, the sneaker features an upgraded, crispier 10A full grain leather white upper with a matching white Air-cushioned rubber sole.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Christian Tresser",
  //     "details": "Game Royal/Metallic Silver-White",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/562/245/original/480142_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 480142,
  //     "keywords": [
  //       "ASG",
  //       "All Star Game",
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/562/245/original/480142_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Max 97 'All Star Jersey'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/562/245/original/480142_00.png.png",
  //     "product_template_id": 480142,
  //     "release_date": "2019-02-08T23:59:59.000Z",
  //     "release_date_unix": 1549670399,
  //     "release_year": 2019,
  //     "retail_price_cents": 16000,
  //     "shoe_condition": "new_with_defects",
  //     "silhouette": "Air Max 97",
  //     "sku": "921826 404",
  //     "slug": "air-max-97-game-royal-921826-404",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Jerry Lorenzo",
  //     "details": "Light Bone/Black-Sail",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/627/586/original/487222_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 487222,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/627/586/original/487222_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Fear Of God Raid 'Light Bone'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/627/586/original/487222_00.png.png",
  //     "product_template_id": 487222,
  //     "release_date": "2019-04-27T07:00:00.000Z",
  //     "release_date_unix": 1556348400,
  //     "release_year": 2019,
  //     "retail_price_cents": 19000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Air Fear Of God Strap",
  //     "sku": "AT8087 001",
  //     "slug": "air-fear-of-god-strap-light-bone-at8087-001",
  //     "status": "active",
  //     "story_html": "<p>Created by acclaimed streetwear designer Jerry Lorenzo for release in April 2019, the Air Fear of God Raid &#39;Light Bone&#39; draws inspiration from Lorenzo&#39;s favorite silhouette, the Air Raid outdoor basketball shoe first introduced in 1992. Incorporating the same distinct cross straps into the Light Bone upper, a contrasting black Swoosh stands out along with the visible double-stacked Zoom Air units. Modern design lines combine with premium comfort to define this lifestyle shoe.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Jerry Lorenzo",
  //     "details": "Pure Platinum/Black-Sail",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/737/643/original/504006_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 504006,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/737/643/original/504006_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Fear Of God Moc 'Pure Platinum'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/737/643/original/504006_00.png.png",
  //     "product_template_id": 504006,
  //     "release_date": "2019-04-27T07:00:00.000Z",
  //     "release_date_unix": 1556348400,
  //     "release_year": 2019,
  //     "retail_price_cents": 17000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Air Fear of God Moccasin",
  //     "sku": "AT8086 001",
  //     "slug": "air-fear-of-god-moccasin-pure-platinum-afog-moc-plat",
  //     "status": "active",
  //     "story_html": "<p>From streetwear fashion designer Jerry Lorenzo comes the Air Fear of God Moc &#39;Pure Platinum,&#39; released on April 27th, 2019, as part of the second wave of his collaboration with Nike. With a Pure Platinum upper over a Sail midsole and outsole, this lifestyle Moc gets its bounce from stacked visible Zoom Air units in the heel. A toggle drawstring in back allows for on-the-spot adjustments to its streamlined textile upper, which features a forefoot strap for lockdown and a snap button on the side for easy on/off.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "running"
  //     ],
  //     "color": "Grey",
  //     "designer": "Andreas Harlow",
  //     "details": "Green Mist/Light Beige Chalk",
  //     "gender": [
  //       "women"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/321/832/original/503571_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 503571,
  //     "keywords": [
  //       "CPFM"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/321/832/original/503571_00.png.png",
  //     "midsole": "Air",
  //     "name": "Cactus Plant Flea Market x Wmns Air VaporMax 2019 'CPFM'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/321/832/original/503571_00.png.png",
  //     "product_template_id": 503571,
  //     "release_date": "2019-05-14T07:00:00.000Z",
  //     "release_date_unix": 1557817200,
  //     "release_year": 2019,
  //     "retail_price_cents": 25000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Air VaporMax",
  //     "sku": "CD7001 300",
  //     "slug": "cactus-plant-flea-market-x-air-vapormax-2019-cpfm-vapormax",
  //     "status": "active",
  //     "story_html": "<p>In honor of Air Max Day 2019, Nike collaborated with designer Cynthia Lu for an avant-garde take on the VaporMax, which resulted in the Cactus Plant Flea Market x Air VaporMax 2019 sneaker. Released May 2019, the deconstructed design features an exposed-seam mesh upper, underscored by a cord Swoosh and a smiley face at heel, a nod to Nike’s ‘Just Do It’ campaign. Below, the design is padded with its trademark full-length VaporMax bag, completed in a multi-color finish.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Nike",
  //     "category": [
  //       "running"
  //     ],
  //     "collection_slugs": [],
  //     "color": "White",
  //     "designer": "Christian Tresser",
  //     "details": "White/Wolf Grey-Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/010/988/952/original/180155_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 180155,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/010/988/952/original/180155_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Max 97 'Triple White'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/010/988/952/original/180155_00.png.png",
  //     "product_template_id": 180155,
  //     "release_date": "2017-08-01T23:59:59.000Z",
  //     "release_date_unix": 1501631999,
  //     "release_year": 2017,
  //     "retail_price_cents": 16000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Max 97",
  //     "sku": "921826 101",
  //     "slug": "air-max-97-triple-white-921826-101",
  //     "status": "active",
  //     "story_html": "<p>The Nike Air Max 97 &#39;Triple White&#39; features a white leather and mesh upper with Wolf Grey accents. Released in August of 2017, the sneaker also includes a full-length white Air Max unit. </p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "Nike",
  //     "category": [
  //       "running"
  //     ],
  //     "color": "White",
  //     "designer": "Dylan Raasch",
  //     "details": "White/Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/010/634/133/original/303217_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 303217,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/010/634/133/original/303217_00.png.png",
  //     "midsole": "Air",
  //     "name": "Air Max 270 'White'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/010/634/133/original/303217_00.png.png",
  //     "product_template_id": 303217,
  //     "release_date": "2018-03-02T23:59:59.000Z",
  //     "release_date_unix": 1520035199,
  //     "release_year": 2018,
  //     "retail_price_cents": 15000,
  //     "shoe_condition": "used",
  //     "silhouette": "Air Max 270",
  //     "sku": "AH8050 100",
  //     "slug": "air-max-270-white-ah8050-100",
  //     "status": "active",
  //     "story_html": "<p>Released in March 2018, the the Air Max 270 &#39;White&#39; takes inspiration from both the Air Max 180 and Air Max 93. The white mesh upper offers a matching asymmetrical lacing unit, accented by gray hits on the heel pull tab and Swoosh logos on the toe box and side panel. Other details include &#39;Air 270&#39; branding on the tongue, heel and pull tab. A white rubber outsole in the forefront and transparent Air Max sole unit on the heel round out the minimal aesthetic.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "Vans",
  //     "category": [
  //       "skateboarding"
  //     ],
  //     "color": "Multi-Color",
  //     "designer": "Paul Van Doren",
  //     "details": "Blue/Green-Yellow",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/011/051/956/original/335725_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 335725,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/011/051/956/original/335725_00.png.png",
  //     "midsole": "",
  //     "name": "Old Skool 'Yacht Club'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/011/051/956/original/335725_00.png.png",
  //     "product_template_id": 335725,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 6000,
  //     "shoe_condition": "used",
  //     "silhouette": "Old Skool",
  //     "sku": "VN0A38G1R1Q",
  //     "slug": "old-skool-yacht-club-vn0a38g1r1q",
  //     "status": "active",
  //     "story_html": "<p>The Vans Old Skool ‘Yacht Club’ showcases bold color blocking inspired by traditional nautical flags. The shoe’s upper is executed with canvas quarter panels in kelly green, overlaid with a white leather side stripe, and contrasted by a blue suede toe cap and yellow suede heel panel. The multi-color design rests on a crisp white rubber midsole, accented with Vans’ signature ‘Off the Wall’ license plate in red.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "collection_slugs": [
  //       "yeezy-1"
  //     ],
  //     "color": "Black",
  //     "designer": "Kanye West",
  //     "details": "Black/Black/Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/624/696/original/FU9013.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 505488,
  //     "keywords": [
  //       "350 V2",
  //       "350",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/624/696/original/FU9013.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Black Non-Reflective'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/624/696/original/FU9013.png.png",
  //     "product_template_id": 505488,
  //     "release_date": "2019-06-08T23:59:59.000Z",
  //     "release_date_unix": 1560038399,
  //     "release_year": 2019,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "FU9006",
  //     "slug": "yeezy-boost-350-v2-black-yzy-350-v2-blk",
  //     "status": "active",
  //     "story_html": "<p>The adidas Yeezy Boost 350 V2 lives up to its cult appeal through evolved design elements and advanced technology. Released June 2019, this ‘Black Non-Reflective&#39; edition&#39;s re-engineered Primeknit bootie sees futuristic updates including a translucent side stripe and bold stitching on the heel pull. Integrated lacing customizes the fit while a translucent black Boost-equipped midsole complements the covert feel.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "collection_slugs": [
  //       "yeezy-1"
  //     ],
  //     "color": "Black",
  //     "designer": "Kanye West",
  //     "details": "Vanta/Vanta/Vanta",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/147/972/original/504187_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 504187,
  //     "keywords": [
  //       "700",
  //       "Kanye West",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/147/972/original/504187_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 700 V2 'Vanta'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/147/972/original/504187_00.png.png",
  //     "product_template_id": 504187,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 30000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Yeezy Boost 700",
  //     "sku": "FU6684",
  //     "slug": "yeezy-boost-700-v2-vanta-yzy-700-v2-vanta",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Blue",
  //     "designer": "Kanye West",
  //     "details": "Blue Tint/Grey Three/High Resolution Red",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/008/707/328/original/152603_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 152603,
  //     "keywords": [
  //       "350",
  //       "Kanye West",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/008/707/328/original/152603_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Blue Tint'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/008/707/328/original/152603_00.png.png",
  //     "product_template_id": 152603,
  //     "release_date": "2017-12-16T23:59:59.000Z",
  //     "release_date_unix": 1513468799,
  //     "release_year": 2017,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "B37571",
  //     "slug": "yeezy-boost-350-v2-b37571",
  //     "status": "active",
  //     "story_html": "<p>The 5th Yeezy to drop since November 2017 — Yeezy Boost 350 V2 &#39;Semi Frozen Yellow&#39; and ‘Beluga 2.0,’ Yeezy Powerphase Calabasas, and the Yeezy 500 ‘Desert Rat’ — the Yeezy Boost 350 V2 &#39;Blue Tint&#39; was dropped on December 16th, 2017. The sneaker features a neutral white and grey upper with a red ‘SPLY-350’ text on the side in reverse. The shoe also comes with a heel tab, blue tint inner lining, and paste blue laces.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "collection_slugs": [],
  //     "color": "Blue",
  //     "designer": "Nic Galway",
  //     "details": "Power Blue/Core Black/Cloud White",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/467/original/512006_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 512006,
  //     "keywords": [],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/545/467/original/512006_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Pharrell x Billionaire Boys Club x NMD Human Race Trail 'Blue Plaid'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/545/467/original/512006_00.png.png",
  //     "product_template_id": 512006,
  //     "release_date": "2019-05-03T07:00:00.000Z",
  //     "release_date_unix": 1556866800,
  //     "release_year": 2019,
  //     "retail_price_cents": 25000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "NMD Human Race Trail",
  //     "sku": "EF7387",
  //     "slug": "pharrell-x-billionaire-boys-club-x-nmd-human-race-trail-blue-plaid-ef7387",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": null
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Cream",
  //     "designer": "Kanye West",
  //     "details": "Analog/Analog/Analog",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/287/568/original/480136_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 480136,
  //     "keywords": [
  //       "700",
  //       "Yeezy",
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/287/568/original/480136_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 700 'Analog'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/287/568/original/480136_00.png.png",
  //     "product_template_id": 480136,
  //     "release_date": "2019-04-27T23:59:59.000Z",
  //     "release_date_unix": 1556409599,
  //     "release_year": 2019,
  //     "retail_price_cents": 30000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Yeezy Boost 700",
  //     "sku": "EG7596",
  //     "slug": "yeezy-boost-700-analog-yeezy-boost-700-analog",
  //     "status": "active",
  //     "story_html": "<p>Music and fashion icon Kanye West debuted the Yeezy Boost 700 at his Yeezy Season 5 fashion show in February 2017. This &#39;Analog&#39; colorway released April 2019, and provides a monochromatic look to the acclaimed shoe. Dressed in shades of off white, the upper features a variety of panels constructed of leather, mesh, suede with a small hit of reflective material near the heel. Full-length Boost cushioning is embedded in the signature chunky midsole while a black rubber outsole provides contrast.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Green",
  //     "designer": "Kanye West",
  //     "details": "Glow/Glow/Glow",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/021/357/863/original/508082_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 508082,
  //     "keywords": [
  //       "350",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/021/357/863/original/508082_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 GID 'Glow'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/021/357/863/original/508082_00.png.png",
  //     "product_template_id": 508082,
  //     "release_date": "2019-05-25T23:59:59.000Z",
  //     "release_date_unix": 1558828799,
  //     "release_year": 2019,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "EG5293",
  //     "slug": "yeezy-350-v2-glow-in-the-dark-eh5360",
  //     "status": "active",
  //     "story_html": "<p>Regarded as a cultural phenomenon, the adidas Yeezy Boost 350 silhouette generated a cult following when it was initially released in 2015. This ‘Glow’ makeover—released in May 2019—equips the Primeknit upper with a high-visibility treatment and a translucent stripe to the lateral profile. Integrated lacing and a coordinating heel pull provide easy on/off. Underfoot, the signature full-length Boost midsole looks to the future with a bright glow in the dark finish.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Grey",
  //     "designer": "Kanye West",
  //     "details": "Grey/Bold Orange/Dark Solid Grey",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/534/original/152982_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 152982,
  //     "keywords": [
  //       "350",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/008/654/534/original/152982_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Beluga 2.0'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/008/654/534/original/152982_00.png.png",
  //     "product_template_id": 152982,
  //     "release_date": "2017-11-25T23:59:59.000Z",
  //     "release_date_unix": 1511654399,
  //     "release_year": 2017,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "AH2203",
  //     "slug": "yeezy-boost-350-v2-beluga-2-0-ah2203",
  //     "status": "active",
  //     "story_html": "<p>With its name coming from the colorway similarities found on the first Yeezy Boost 350 V2, the Yeezy Boost 350 V2 &#39;Beluga 2.0&#39; dropped on November 25, 2017. It was quickly restocked on November 30th after selling out. The shoe features a muted grey stripe on the laterals instead of the bright orange stripe found on the original ‘Beluga’ sneaker. The Yeezy Boost 350 V2 &#39;Beluga 2.0&#39; also features a heel pull tab with orange stitching and orange ‘SPLY-350’ lettering in reverse on the laterals. </p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Grey",
  //     "designer": "Kanye West",
  //     "details": "Inertia/Inertia/Inertia",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/019/367/689/original/479750_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 479750,
  //     "keywords": [
  //       "700",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/019/367/689/original/479750_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 700 'Inertia'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/019/367/689/original/479750_00.png.png",
  //     "product_template_id": 479750,
  //     "release_date": "2019-03-09T23:59:59.000Z",
  //     "release_date_unix": 1552175999,
  //     "release_year": 2019,
  //     "retail_price_cents": 30000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 700",
  //     "sku": "EG7597",
  //     "slug": "yeezy-boost-700-inertia-yeezy-boost-700-inertia",
  //     "status": "active",
  //     "story_html": "<p>The adidas Yeezy Boost 700 ‘Inertia’ is part of the Yeezy Season 8 lineup that launched March 2019. The ‘Inertia’ colorway showcases the original 700 upper, with a heavily paneled construction made with premium suede, mesh and smooth leather sections. Cast primarily in cool grey tones, the sneaker includes hits of Tangerine for contrast. The shoe’s signature chunky midsole is equipped with full-length Boost cushioning for responsive comfort.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Grey",
  //     "designer": "Kanye West",
  //     "details": "Sesame/Sesame/Sesame",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/014/037/000/original/357808_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 357808,
  //     "keywords": [
  //       "350",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/014/037/000/original/357808_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Sesame'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/014/037/000/original/357808_00.png.png",
  //     "product_template_id": 357808,
  //     "release_date": "2018-11-23T23:59:59.000Z",
  //     "release_date_unix": 1543017599,
  //     "release_year": 2018,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "F99710",
  //     "slug": "yeezy-boost-350-v2-sesame-f99710",
  //     "status": "active",
  //     "story_html": "<p>The Yeezy Boost 350 V2 ‘Sesame’ features a refined color palette that complements the shoe’s minimalist build. The breathable Primeknit upper keeps the heel tab and distinct center stitch detailing but loses the mirrored ‘SPLY-350’ branding. Underneath, a semi-translucent rubber midsole houses a full-length Boost cushioning, while a gum rubber outsole delivers enhanced traction.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "badly_damaged",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Grey",
  //     "designer": "Kanye West",
  //     "details": "Solid Grey/Chalk White/Core Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/014/507/851/original/195483_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 195483,
  //     "keywords": [
  //       "700",
  //       "Wave Runner",
  //       "Yeezy",
  //       "wave"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/014/507/851/original/195483_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 700 'Wave Runner'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/014/507/851/original/195483_00.png.png",
  //     "product_template_id": 195483,
  //     "release_date": "2017-11-01T23:59:59.000Z",
  //     "release_date_unix": 1509580799,
  //     "release_year": 2017,
  //     "retail_price_cents": 30000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 700",
  //     "sku": "B75571",
  //     "slug": "yeezy-wave-runner-700-76fa2bf7-9596-46cb-9842-e024a94baa6c",
  //     "status": "active",
  //     "story_html": "<p>This inaugural colorway of Kanye West’s Yeezy Wave Runner 700 launched in November 2017, following a public debut earlier in the year as part of the Yeezy Season 5 runway show. The sneaker’s retro-inspired lines worked in tandem with a chunky silhouette reminiscent of an earlier era. A mesh base is finished in grey on the quarter panels and bright blue and teal on the forefoot. Suede overlays arrive on the toe and heel accented grey leather eyestays. Other details include neon green laces, a bulky white midsole, and pops of black and bright orange.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Grey",
  //     "designer": "Kanye West",
  //     "details": "Static/Static/Static",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/017/488/396/original/424152_00.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 424152,
  //     "keywords": [
  //       "350",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/017/488/396/original/424152_00.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Static Non-Reflective'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/017/488/396/original/424152_00.png",
  //     "product_template_id": 424152,
  //     "release_date": "2018-12-27T23:59:59.000Z",
  //     "release_date_unix": 1545955199,
  //     "release_year": 2018,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "EF2905",
  //     "slug": "yeezy-boost-350-v2-static-ef2905",
  //     "status": "active",
  //     "story_html": "<p>The Yeezy Boost 350 V2 ‘Static Non-Reflective’ is designed to stand out, thanks to the addition of never-before-seen features. They include a translucent side stripe and 3M reflective detailing on the shoe’s rope laces, Primeknit upper and Three-Stripes branding on the interior heel. The midsole makes use of ridged TPU sidewalls with semi-translucent properties, revealing full-length adidas Boost cushioning within.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "badly_damaged",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Red",
  //     "designer": "",
  //     "details": "Scarlet/Footwear White/Core Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/018/666/882/original/486579_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 486579,
  //     "keywords": [
  //       "promoted1",
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/018/666/882/original/486579_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Pharrell x Solar Hu Glide ST 'Chinese New Year'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/018/666/882/original/486579_00.png.png",
  //     "product_template_id": 486579,
  //     "release_date": "2019-01-26T23:59:59.000Z",
  //     "release_date_unix": 1548547199,
  //     "release_year": 2019,
  //     "retail_price_cents": 15000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Solar Hu",
  //     "sku": "EE8701",
  //     "slug": "pharrell-x-solar-hu-glide-st-chinese-new-year-ee8701",
  //     "status": "active",
  //     "story_html": "<p>Alongside an accompanying Crazy BYW, the Pharrell x Solar Hu Glide ST ‘Chinese New Year’ rings in the Year of the Pig as part of a collaborative CNY Pack. The lifestyle runner features a red and black knitted upper with gold accents and special embroidery on the toe of each shoe: ‘Hu’ on the right and the Chinese ‘Fu’ symbol on the left. It all sits on a full-length Boost midsole in classic white.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Tan",
  //     "designer": "Kanye West",
  //     "details": "Clay/Clay/Clay",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/019/471/948/original/487214_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 487214,
  //     "keywords": [
  //       "350",
  //       "Clay",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/019/471/948/original/487214_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Clay'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/019/471/948/original/487214_00.png.png",
  //     "product_template_id": 487214,
  //     "release_date": "2019-03-30T23:59:59.000Z",
  //     "release_date_unix": 1553990399,
  //     "release_year": 2019,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "EG7490",
  //     "slug": "yeezy-boost-350-v2-clay-yzy-350-v2-clay",
  //     "status": "active",
  //     "story_html": "<p>The adidas Yeezy Boost 350 V2 ‘Clay’ updates the silhouette with a warm palette and semi-translucent, three-tone vent at the side. This ‘Clay’ colorway retains the stand-out features of the original 350 V2 shoe, first seen in September 2016, including a flexible Primeknit upper and full-length Boost cushioning. This shoe released March 2019 exclusively in select cities in North America and Latin America.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "no_original_box",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Kanye West",
  //     "details": "Cream White/Cream White/Core White",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/014/822/680/original/116662_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 116662,
  //     "keywords": [
  //       "350",
  //       "Yeezy",
  //       "cream",
  //       "triple white",
  //       "yeezy triple white"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/014/822/680/original/116662_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Cream White / Triple White'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/014/822/680/original/116662_00.png.png",
  //     "product_template_id": 116662,
  //     "release_date": "2017-04-29T23:59:59.000Z",
  //     "release_date_unix": 1493510399,
  //     "release_year": 2017,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "CP9366",
  //     "slug": "yeezy-boost-350-v2-cream-white-cp9366",
  //     "status": "active",
  //     "story_html": "<p>First released on April 29, 2017, the Yeezy Boost 350 V2 ‘Cream White’ combines a cream Primeknit upper with tonal cream SPLY 350 branding, and a translucent white midsole housing full-length Boost. Released again in October 2018, this retro helped fulfill Kanye West’s oft-repeated ‘YEEZYs for everyone’ Twitter mantra, as adidas organized the biggest drop in Yeezy history by promising pre-sale to anyone who signed up on the website. Similar to the first release, the ‘Triple White’ 2018 model features a Primeknit upper, a Boost midsole and custom adidas and Yeezy co-branding on the insole.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Kanye West",
  //     "details": "Salt/Salt/Salt",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/018/951/283/original/492186_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 492186,
  //     "keywords": [
  //       "700",
  //       "Yeezy",
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/018/951/283/original/492186_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 700 'Salt'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/018/951/283/original/492186_00.png.png",
  //     "product_template_id": 492186,
  //     "release_date": "2019-02-23T23:59:59.000Z",
  //     "release_date_unix": 1550966399,
  //     "release_year": 2019,
  //     "retail_price_cents": 30000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 700",
  //     "sku": "EG7487",
  //     "slug": "yeezy-boost-700-salt-yzy-700-salt",
  //     "status": "active",
  //     "story_html": "<p>The Yeezy Boost 700 ‘Salt’ follows a design trail originally blazed by the Yeezy 500 in November 2018. Like its predecessor, the lifestyle silhouette features a monochromatic light grey finish on a mesh base with tonal overlays in suede and leather. A sculpted midsole in matching grey, concealing full-length Boost cushioning within, features a subtle black accent, matched by the rubber outsole underfoot.</p>\n",
  //     "upper_material": ""
  //   },
  //   {
  //     "box_condition": "badly_damaged",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Kanye West",
  //     "details": "White/Core Black/Red",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/014/979/033/original/105568_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 105568,
  //     "keywords": [
  //       "350",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/014/979/033/original/105568_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Zebra'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/014/979/033/original/105568_00.png.png",
  //     "product_template_id": 105568,
  //     "release_date": "2017-02-25T23:59:59.000Z",
  //     "release_date_unix": 1488067199,
  //     "release_year": 2017,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "CP9654",
  //     "slug": "yeezy-boost-350-v2-zebra-cp9654",
  //     "status": "active",
  //     "story_html": "<p>Released on February 25, 2017, the Yeezy Boost 350 V2 ‘Zebra’ combines a white/core black Primeknit upper with red SPLY 350 branding and a translucent white midsole housing full-length Boost. Sold exclusively at adidas.com, Yeezy Supply, and select adidas flagship stores, the ‘Zebra’ sold out instantly but was restocked on June 24th, 2017. Another restock of the ‘Zebra’ arrived November 16, 2018, with more pairs hitting the marketplace and delivering on Kanye’s promise of Yeezy’s being more accessible to anyone that wanted them.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "White",
  //     "designer": "Nic Galway",
  //     "details": "Cloud White/Cloud White/Core Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/020/249/956/original/EF3326.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 504982,
  //     "keywords": [
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/020/249/956/original/EF3326.png.png",
  //     "midsole": "Boost",
  //     "name": "NMD_R1 'Speckle Pack - White'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/020/249/956/original/EF3326.png.png",
  //     "product_template_id": 504982,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 13000,
  //     "shoe_condition": "new_no_defects",
  //     "silhouette": "NMD Runner",
  //     "sku": "EF3326",
  //     "slug": "nmd_r1-speckle-pack-white-ef3326",
  //     "status": "active",
  //     "story_html": null,
  //     "upper_material": null
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Yellow",
  //     "designer": "Kanye West",
  //     "details": "Butter/Butter/Butter",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/012/598/505/original/348063_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 348063,
  //     "keywords": [
  //       "350",
  //       "Kanye West",
  //       "Yeezy"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/012/598/505/original/348063_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Butter'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/012/598/505/original/348063_00.png.png",
  //     "product_template_id": 348063,
  //     "release_date": "2018-06-30T23:59:59.000Z",
  //     "release_date_unix": 1530403199,
  //     "release_year": 2018,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "F36980",
  //     "slug": "yeezy-boost-350-v2-ice-yellow-f36980",
  //     "status": "active",
  //     "story_html": "<p>Kanye West and adidas continued their partnership with the Yeezy Boost 350 V2 ‘Butter,’ which hit stores in June 2018. The minimalist silhouette features distinct center stitching on a reverse Primeknit upper, with the signature ‘SPLY-350’ inscription now printed on the interior side. The heel tab remains, finished in a bright yellow hue that matches the knitted upper, rope laces, and Boost-infused midsole.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "lifestyle"
  //     ],
  //     "color": "Yellow",
  //     "designer": "Kanye West",
  //     "details": "Semi Frozen Yellow/Raw Steel/Red",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/016/928/118/original/155573_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 155573,
  //     "keywords": [
  //       "350",
  //       "Yeezy",
  //       "yebra"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/016/928/118/original/155573_00.png.png",
  //     "midsole": "Boost",
  //     "name": "Yeezy Boost 350 V2 'Semi Frozen Yellow'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/016/928/118/original/155573_00.png.png",
  //     "product_template_id": 155573,
  //     "release_date": "2017-11-18T23:59:59.000Z",
  //     "release_date_unix": 1511049599,
  //     "release_year": 2017,
  //     "retail_price_cents": 22000,
  //     "shoe_condition": "used",
  //     "silhouette": "Yeezy Boost 350",
  //     "sku": "B37572",
  //     "slug": "yeezy-boost-350-v2-b37572",
  //     "status": "active",
  //     "story_html": "<p>Kanye West’s Yeezy Boost 350 V2 in Semi Frozen Yellow first hit stores in November 2017, with a restock that released on December 14, 2018. Dressed in adidas’ signature Primeknit upper, the lifestyle runner is finished in an energetic bright yellow hue, one that extends to the laces, heel tab, and Boost-infused ribbed rubber midsole. Zebra-like black stripes add another design dimension to the upper, along with a tonal side stripe emblazoned with ‘SPLY 350’ in reverse red print. A gum rubber outsole adds grippy traction to the eye-catching design.</p>\n",
  //     "upper_material": "Primeknit"
  //   },
  //   {
  //     "box_condition": "good_condition",
  //     "brand_name": "adidas",
  //     "category": [
  //       "running"
  //     ],
  //     "color": "White",
  //     "designer": "Nic Galway",
  //     "details": "White/White/Black",
  //     "gender": [
  //       "men"
  //     ],
  //     "grid_picture_url": "https://image.goat.com/375/attachments/product_template_pictures/images/011/292/904/original/298048_00.png.png",
  //     "has_picture": true,
  //     "has_stock": true,
  //     "id": 298048,
  //     "keywords": [
  //       "promoted1",
  //       "underRetail"
  //     ],
  //     "main_picture_url": "https://image.goat.com/750/attachments/product_template_pictures/images/011/292/904/original/298048_00.png.png",
  //     "midsole": "Boost",
  //     "name": "NMD_R1 'Blizzard'",
  //     "original_picture_url": "https://image.goat.com/attachments/product_template_pictures/images/011/292/904/original/298048_00.png.png",
  //     "product_template_id": 298048,
  //     "release_date": null,
  //     "release_date_unix": null,
  //     "release_year": null,
  //     "retail_price_cents": 13000,
  //     "shoe_condition": "used",
  //     "silhouette": "NMD Runner",
  //     "sku": "B79759",
  //     "slug": "nmd_r1-blizzard-b79759",
  //     "status": "active",
  //     "story_html": "<p>adidas dropped the NMD_R1 &#39;Blizzard&#39; colorway in January 2018. It features a stretch mesh upper made from twisted two-tone yarn for a unique textured effect reminiscent of medieval chainmail armor. It also comes with a Carbon tongue patch with a Trefoil, Welded Core Black Three-Stripes on the side panel, and a molded matte black heel patch. Underfoot, the shoe boasts a white Boost midsole with Carbon EVA midsole bumpers and an all-black rubber outsole.</p>\n",
  //     "upper_material": ""
  //   }
  // ]

  // write for me sneaker 30 js array that include id,title,price,slug,description,category,picture,rating have two two object rate and count

  // { id: 0, name: "All", isActive: true },
  // { id: 1, name: "Basketball", isActive: false },
  // { id: 2, name: "Casual", isActive: false },
  // { id: 3, name: "Running", isActive: false },
  // { id: 4, name: "Skate", isActive: false },
  // { id: 5, name: "Training", isActive: false },
}));

export default useProductStore;
