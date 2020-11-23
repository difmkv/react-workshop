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
    sumOfIngredients: (beers) => {
        return beers.reduce((acc, curr) => {
            let {
                ingredients: { malt }
            } = curr;

            let {
                ingredients: { hops }
            } = curr;

            acc[curr.name] = {
                malt: getTotalAmounts(malt),
                hops: getTotalAmounts(hops)
            };
            return acc;
        }, {});
    },
    showBeer: ({ name, first_brewed, ingredients }) => {
        let { malt } = ingredients;

        return dedent(`Name: ${name}
            First brewed in: ${prettifyDate(first_brewed)}
            Ingredients: 
            malt:
            ${showIngredientDetails(malt)}`);
    },
    pairsWith: (beers, foods) => {
        let regex = new RegExp(
            foods.map((f) => "(?=.*" + f + ")").join(""),
            "gi"
        );

        return beers.filter((b) => {
            return regex.test(b.food_pairing.join(","));
        });
    }
};

export default BeerLibrary;
