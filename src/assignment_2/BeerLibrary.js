/**
 * Based on Punk API (https://punkapi.com/) data,
 * create a beer library that has the following functions:
 */

import { fetchBeers } from "./services";
import {
    dedent,
    prettifyDate,
    showIngredientDetails,
    getTotalAmounts
} from "./helpers";

const BeerLibrary = {
    findBeers: async (beerSpecs) => {
        try {
            const response = await fetchBeers(beerSpecs);
            return response.json();
        } catch (error) {
            console.log("error", error);
        }
    },
    sumOfIngredients: (beerArr) => {
        let allMalts = [];
        let allHops = [];

        beerArr.forEach((beer) => {
            let {
                ingredients: { malt }
            } = beer;

            let {
                ingredients: { hops }
            } = beer;

            allMalts = [...allMalts, ...malt];
            allHops = [...allHops, ...hops];
        });

        return {
            malt: getTotalAmounts(allMalts),
            hops: getTotalAmounts(allHops)
        };
    },
    showBeer: ({ name, first_brewed, ingredients }) => {
        let { malt } = ingredients;

        return dedent(`Name: ${name}
            First brewed in: ${prettifyDate(first_brewed)}
            Ingredients: 
            malt:
            ${showIngredientDetails(malt)}`);
    },
    pairsWith: (beerArr, foods) => {
        /* let regex = new RegExp(foods.join("|"), "gi"); */
        let regex = new RegExp(
            foods.map((f) => "(?=.*" + f + ")").join(""),
            "gi"
        );

        return beerArr.filter((b) => {
            return regex.test(b.food_pairing.join(","));
        });
    }
};

export default BeerLibrary;
