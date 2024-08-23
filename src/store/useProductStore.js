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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/016/934/177/original/351614_00.png",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title: "Air Jordan 11 Retro 'Win Like '96'",
      slug: "air-jordan-11-retro-gym-red-378037-623-abb4fed8-42d8-4998-9858-47500cc06cc7",
      price: 22000,
      category: "lifestyle",
      brand_name: "Air Jordan",
      description:
        "For Chicago Bulls Fans, the historical significance of the Air Jordan 11 Retro ‘Win Like 96’ will be abundantly clear. 1996 is the year that the Bulls capped off the regular season with a record-breaking 72 wins, on their way to a fourth NBA title in six seasons. Michael wore the Jordan 11 during that magical run, and this December 2017 release, dressed in a dazzling shade of red, honors the ’96 squad that couldn’t lose.",
      category: "basketball",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/015/392/851/original/429772_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/018/675/311/original/464372_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/012/478/518/original/365514_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/016/152/710/original/402491_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/018/783/111/original/488879_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/009/559/594/original/144690_00.png.png",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title: "Air Jordan 1 Retro High OG 'Origin Story'",
      slug: "spider-verse-x-air-jordan-1-retro-high-og-origin-story",
      price: 16000,
      brand_name: "Air Jordan",
      description:
        "Air Jordan 1 Retro High OG ‘Origin Story’ was made to celebrate the animated film Spider-Man: Into the Spider-Verse. The high-top features a design that mirrors the pair worn by character Miles Morales, updating the classic Chicago colorway with an icy translucent rubber outsole and a subtle pattern of reflective dots across the shoe’s red leather overlays.",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/016/867/969/original/478648_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/016/596/414/original/376931_00.png.png",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title: "Light Bone/University Red-Sail-Black",
      slug: "air-jordan-11-retro-low-snakeskin-2019-cd6846-002",
      price: 18500,
      brand_name: "Air Jordan",
      description:
        "The Air Jordan 11 Retro Low&#39;s iconic identity was founded when Michael Jordan returned to the game in 1995. Surfacing in June 2019, this &#39;Light Bone Snakeskin&#39; variant reaffirms the allure with a contemporary snakeskin print on the leather upper&#39;s mudguard. Rope laces winding through the lateral webbing customize fit. Signature Jumpman insignias are positioned on the tongue and heel. A translucent rubber outsole and carbon fiber plate form the base.",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/021/219/116/original/CD6846_002.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/021/147/976/original/497870_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/020/095/762/original/411931_00.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/021/317/617/original/SP_AJ1_LOW_BP.png.png",
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
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/015/392/851/original/429772_00.png.png",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 21,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/019/246/220/original/491897_00.png.png",
      title: "Sacai x LDV Waffle 'Varsity Blue'",
      price: 18000,
      description:
        "Sacai and Nike collaborate again, with the Nike LDV Waffle emerging from Paris Fashion Week at the Sacai SP19 runway show...",
      rating: { rate: 4.5, count: 120 },
      slug: "sacai-x-ldv-waffle-varsity-blue",
    },
    {
      id: 22,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/020/249/043/original/494127_00.png.png",
      title: "Atmos x Air Max 2 Light QS 'Logos'",
      price: 16000,
      description:
        "First spotted on the feet of atmos creative director Hirofumi Kojima during ComplexCon 2018...",
      rating: { rate: 4.2, count: 98 },
      slug: "atmos-x-air-max-2-light-qs-logos",
    },
    {
      id: 23,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/019/804/999/original/488028_00.png.png",
      title: "Air Max 90 QS 'Mars Landing'",
      price: 16000,
      description:
        "The Off-White x Air Max 90 ‘Desert Ore’ represents yet another of Virgil Abloh’s fanciful takes on the retro silhouette...",
      rating: { rate: 4.7, count: 75 },
      slug: "air-max-90-qs-mars-landing",
    },
    {
      id: 24,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png",
      title: "OFF-WHITE x Air VaporMax 'Part 2'",
      price: 25000,
      description:
        "The April 2018 version of Virgil Abloh’s all-white Air VaporMax is mostly unchanged from the original pair from ‘The Ten.’...",
      rating: { rate: 4.8, count: 134 },
      slug: "off-white-x-air-vapormax-part-2",
    },
    {
      id: 25,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/013/832/092/original/306892_00.png.png",
      title: "Travis Scott x Air Force 1 'Sail'",
      price: 15000,
      description:
        "The ‘Sail’ colorway of Travis Scott’s Air Force 1 represents the Houston rapper’s second collaboration with Nike...",
      rating: { rate: 4.9, count: 88 },
      slug: "travis-scott-x-air-force-1-sail",
    },
    {
      id: 26,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/010/222/352/original/240_00.png.png",
      title: "Air Force 1 '07 'White'",
      price: 9000,
      description:
        "The Nike Air Force 1 Low is a modern take on the iconic white on white low top Air Force 1...",
      rating: { rate: 4.6, count: 142 },
      slug: "air-force-1-07-white",
    },
    {
      id: 27,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/020/627/586/original/487222_00.png.png",
      title: "Air Fear Of God Raid 'Light Bone'",
      price: 19000,
      description:
        "Created by acclaimed streetwear designer Jerry Lorenzo for release in April 2019...",
      rating: { rate: 4.4, count: 63 },
      slug: "air-fear-of-god-raid-light-bone",
    },
    {
      id: 28,
      brand_name: "Nike",
      category: "lifestyle",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/020/737/643/original/504006_00.png.png",
      title: "Air Fear Of God Moc 'Pure Platinum'",
      price: 17000,
      description:
        "From streetwear fashion designer Jerry Lorenzo comes the Air Fear of God Moc 'Pure Platinum,' released on April 27th, 2019...",
      rating: { rate: 4.1, count: 97 },
      slug: "air-fear-of-god-moc-pure-platinum",
    },
    {
      id: 29,
      brand_name: "Nike",
      category: "running",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/021/321/832/original/503571_00.png.png",
      title: "Cactus Plant Flea Market x Wmns Air VaporMax 2019 'CPFM'",
      price: 25000,
      description:
        "In honor of Air Max Day 2019, Nike collaborated with designer Cynthia Lu for an avant-garde take on the VaporMax...",
      rating: { rate: 4.7, count: 150 },
      slug: "cactus-plant-flea-market-x-wmns-air-vapormax-2019-cpfm",
    },
    {
      id: 30,
      brand_name: "Nike",
      category: "running",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/010/988/952/original/180155_00.png.png",
      title: "Air Max 97 'Triple White'",
      price: 16000,
      description:
        "The Nike Air Max 97 'Triple White' features a white leather and mesh upper with Wolf Grey accents...",
      rating: { rate: 4.5, count: 112 },
      slug: "air-max-97-triple-white",
    },
    {
      id: 31,
      brand_name: "Nike",
      category: "running",
      image:
        "https://image.goat.com/375/attachments/product_template_pictures/images/010/634/133/original/303217_00.png.png",
      title: "Air Max 270 'White'",
      price: 15000,
      description:
        "Released in March 2018, the Air Max 270 'White' takes inspiration from both the Air Max 180 and Air Max 93...",
      rating: { rate: 4.3, count: 90 },
      slug: "air-max-270-white",
    },
    {
      id: 32,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
      slug: "mens-casual-premium-slim-fit-t-shirts",
    },
    {
      id: 33,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband, or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
      slug: "mens-cotton-jacket",
    },
    {
      id: 34,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please check the size chart before order, and allow 1-2 cm difference due to manual measurement. A good choice for casual, office, party, or daily wear. Suitable for spring and autumn.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
      slug: "mens-casual-slim-fit",
    },
    {
      id: 35,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
      slug: "john-hardy-womens-legends-naga-bracelet",
    },
    {
      id: 36,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.   14k White Gold Weighs 0.6 Grams. 100% Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71sbRTjIHPL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
      slug: "solid-gold-petite-micropave",
    },
    {
      id: 37,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.0, count: 400 },
      slug: "white-gold-plated-princess",
    },
    {
      id: 38,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
      slug: "pierced-owl-rose-gold-plated-stainless-steel",
    },
    {
      id: 39,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
      slug: "wd-2tb-elements-portable-external-hard-drive",
    },
    {
      id: 40,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
      slug: "sandisk-ssd-plus-1tb-internal-ssd",
    },
    {
      id: 41,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 319 },
      slug: "silicon-power-256gb-ssd-3d-nand-a55-slc",
    },
    {
      id: 42,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 400 },
      slug: "wd-4tb-gaming-drive-ps4-portable",
    },
    {
      id: 43,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 },
      slug: "acer-sb220q-21-5-inches-full-hd",
    },
    {
      id: 44,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: { rate: 2.2, count: 140 },
      slug: "samsung-49-inch-chg90-gaming-monitor",
    },
    {
      id: 45,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 2.6, count: 235 },
      slug: "biylaclesen-womens-snowboard-jacket",
    },
    {
      id: 46,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: { rate: 2.9, count: 340 },
      slug: "lock-and-love-womens-moto-biker-jacket",
    },
    {
      id: 47,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: { rate: 3.8, count: 679 },
      slug: "rain-jacket-women-windbreaker",
    },
    {
      id: 48,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: { rate: 4.7, count: 130 },
      slug: "mbj-womens-solid-short-sleeve-boat-neck",
    },
    {
      id: 49,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: { rate: 4.5, count: 146 },
      slug: "opna-womens-short-sleeve-moisture",
    },
    {
      id: 50,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: { rate: 3.6, count: 145 },
      slug: "danvouy-womens-t-shirt-casual",
    },
  ],
}));

export default useProductStore;
