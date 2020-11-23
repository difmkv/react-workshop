const beers = [
    {
        id: 18,
        name: "Russian Doll – India Pale Ale",
        tagline: "Nesting Hop Bomb.",
        first_brewed: "08/2014",
        description:
            "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each",
        image_url: "https://images.punkapi.com/v2/18.png",
        abv: 6,
        ibu: 70,
        target_fg: 1012,
        target_og: 1058,
        ebc: 25,
        srm: 12.5,
        ph: 5.2,
        attenuation_level: 79.3,
        volume: { value: 20, unit: "litres" },
        boil_volume: { value: 25, unit: "litres" },
        method: {
            mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
            fermentation: { temp: { value: 19, unit: "celsius" } },
            twist: null
        },
        ingredients: {
            malt: [
                {
                    name: "Extra Pale",
                    amount: { value: 5.06, unit: "kilograms" }
                },
                {
                    name: "Caramalt",
                    amount: { value: 0.25, unit: "kilograms" }
                },
                {
                    name: "Dark Crystal",
                    amount: { value: 0.06, unit: "kilograms" }
                }
            ],
            hops: [
                {
                    name: "Cascade",
                    amount: { value: 2.5, unit: "grams" },
                    add: "start",
                    attribute: "bitter"
                },
                {
                    name: "Centennial",
                    amount: { value: 12.5, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Simcoe",
                    amount: { value: 17.5, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Simcoe",
                    amount: { value: 17.5, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Citra",
                    amount: { value: 17.5, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Simcoe",
                    amount: { value: 75, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                },
                {
                    name: "Cascade",
                    amount: { value: 75, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                },
                {
                    name: "Centennial",
                    amount: { value: 75, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                },
                {
                    name: "Citra",
                    amount: { value: 25, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                }
            ],
            yeast: "Wyeast 1056 - American Ale™"
        },
        food_pairing: [
            "Spicy chicken skewers",
            "Fish tacos with hot sauce",
            "Lemon pound cake with a ice sugar glaze"
        ],
        brewers_tips:
            "Create balance through experimentation with the hop amounts and malt backbone.",
        contributed_by: "Sam Mason <samjbmason>"
    },
    {
        id: 30,
        name: "Dana - IPA Is Dead",
        tagline: "Single Hop India Pale Ale.",
        first_brewed: "02/2013",
        description:
            "Hailing from Slovenia, Dana was originally cross bred from the German Hallertau Magnum and native Slovenian varieties. Like any good faux noble hop should, it infuses a rustic, musty spiciness into a toasty beast of a malt base.",
        image_url: "https://images.punkapi.com/v2/30.png",
        abv: 6.7,
        ibu: 70,
        target_fg: 1015,
        target_og: 1066,
        ebc: 30,
        srm: 15,
        ph: 4.4,
        attenuation_level: 77.3,
        volume: { value: 20, unit: "litres" },
        boil_volume: { value: 25, unit: "litres" },
        method: {
            mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
            fermentation: { temp: { value: 19, unit: "celsius" } },
            twist: null
        },
        ingredients: {
            malt: [
                {
                    name: "Extra Pale",
                    amount: { value: 5, unit: "kilograms" }
                },
                {
                    name: "Caramalt",
                    amount: { value: 0.31, unit: "kilograms" }
                },
                {
                    name: "Dark Crystal",
                    amount: { value: 0.06, unit: "kilograms" }
                },
                {
                    name: "Munich",
                    amount: { value: 0.31, unit: "kilograms" }
                }
            ],
            hops: [
                {
                    name: "Dana",
                    amount: { value: 2.5, unit: "grams" },
                    add: "start",
                    attribute: "bitter"
                },
                {
                    name: "Dana",
                    amount: { value: 25, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Dana",
                    amount: { value: 37.5, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Dana",
                    amount: { value: 125, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                }
            ],
            yeast: "Wyeast 1056 - American Ale™"
        },
        food_pairing: [
            "Spicy Asian-style noodles",
            "Smokey chipotle beef brisket tostada",
            "Sweet potato pie"
        ],
        brewers_tips:
            "Noble hops (and their offspring) have a fundamentally different profile to many other hops, down to their different oil fractions. Chill your hops to retain all of the spicy, delicate volatile hop oils!",
        contributed_by: "Matt Ball <GeordieMatt>"
    },
    {
        id: 36,
        name: "Shipwrecker Circus (w/ Oskar Blues)",
        tagline: "American Barley Wine - Oskar Blues Collab.",
        first_brewed: "09/2013",
        description:
            "In collaboration with the awesome Oskar Blues from Colorado, we created this big, twisted 10.5% American style barley wine. Big boozy aromas and a sweet viscosity, packed in with some heavy-hitting C-hops, for an intense bitterness to balance this full-bodied malt monster.",
        image_url: "https://images.punkapi.com/v2/36.png",
        abv: 10.5,
        ibu: 85,
        target_fg: 1022,
        target_og: 1102,
        ebc: 64,
        srm: 32,
        ph: 4.4,
        attenuation_level: 102,
        volume: { value: 20, unit: "litres" },
        boil_volume: { value: 25, unit: "litres" },
        method: {
            mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
            fermentation: { temp: { value: 21, unit: "celsius" } },
            twist: null
        },
        ingredients: {
            malt: [
                {
                    name: "Extra Pale",
                    amount: { value: 9.35, unit: "kilograms" }
                },
                {
                    name: "Munich",
                    amount: { value: 0.63, unit: "kilograms" }
                },
                {
                    name: "Crystal 150",
                    amount: { value: 1, unit: "kilograms" }
                },
                {
                    name: "Chocolate",
                    amount: { value: 0.06, unit: "kilograms" }
                }
            ],
            hops: [
                {
                    name: "Chinook",
                    amount: { value: 50, unit: "grams" },
                    add: "start",
                    attribute: "bitter"
                },
                {
                    name: "Cascade",
                    amount: { value: 25, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Citra",
                    amount: { value: 25, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Chinook",
                    amount: { value: 25, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Chinook",
                    amount: { value: 25, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Citra",
                    amount: { value: 25, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Cascade",
                    amount: { value: 25, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Cascade",
                    amount: { value: 125, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                },
                {
                    name: "Chinook",
                    amount: { value: 125, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                },
                {
                    name: "Citra",
                    amount: { value: 125, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                }
            ],
            yeast: "Wyeast 1272 - American Ale II™"
        },
        food_pairing: ["Stilton", "Pan seared steak", "Dark Chocolate Fondant"],
        brewers_tips:
            "Age this beer in the cellar for a few months to allow the warm alcohol flavours to reduce.",
        contributed_by: "Ali Skinner <AliSkinner>"
    },
    {
        id: 39,
        name: "Kohatu - IPA Is Dead",
        tagline: "Single Hop India Pale Ale.",
        first_brewed: "02/2014",
        description:
            "As you’d expect from a New Zealand hop variety, Kohatu contributes bags of tropical fruit, but with loads of lime notes, & pineapple hits. Seriously fruity, with sweet, juicy melon and stonefruit notes.",
        image_url: "https://images.punkapi.com/v2/39.png",
        abv: 7.2,
        ibu: 70,
        target_fg: 1012,
        target_og: 1067,
        ebc: 30,
        srm: 15,
        ph: 4.4,
        attenuation_level: 82.1,
        volume: { value: 20, unit: "litres" },
        boil_volume: { value: 25, unit: "litres" },
        method: {
            mash_temp: [
                { temp: { value: 65, unit: "celsius" }, duration: null }
            ],
            fermentation: { temp: { value: 19, unit: "celsius" } },
            twist: null
        },
        ingredients: {
            malt: [
                {
                    name: "Extra Pale",
                    amount: { value: 5.65, unit: "kilograms" }
                },
                {
                    name: "Caramalt",
                    amount: { value: 0.31, unit: "kilograms" }
                },
                {
                    name: "Dark Crystal",
                    amount: { value: 0.06, unit: "kilograms" }
                }
            ],
            hops: [
                {
                    name: "Kohatu",
                    amount: { value: 37.5, unit: "grams" },
                    add: "start",
                    attribute: "bitter"
                },
                {
                    name: "Kohatu",
                    amount: { value: 25, unit: "grams" },
                    add: "middle",
                    attribute: "flavour"
                },
                {
                    name: "Kohatu",
                    amount: { value: 37.5, unit: "grams" },
                    add: "end",
                    attribute: "flavour"
                },
                {
                    name: "Kohatu",
                    amount: { value: 250, unit: "grams" },
                    add: "dry hop",
                    attribute: "aroma"
                }
            ],
            yeast: "Wyeast 1056 - American Ale™"
        },
        food_pairing: [
            "Tuna sushi roll with spicy mayonnaise sauce",
            "Thai green curry",
            "Pineapple upside down cake"
        ],
        brewers_tips:
            "New Zealand hops are in short supply - club together with other brewers to try and get hold of some, or ask your local brewery if you can buy small amounts from them.",
        contributed_by: "Sam Mason <samjbmason>"
    }
];

export default beers;
