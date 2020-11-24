/**
 * @summary Based on Punk API (https://punkapi.com/) data,
 * create a beer library that has the following functions:
 *
 * findBeers(beerSpecs)
 * @param {Object} beerSpecs
 * @return {Promise}
 *
 * sumOfIngredients(beers)
 * @param {Array.<Object>} beers
 * @return {Object}
 *
 * showBeer(beer)
 * @param {Object} beer
 * @return {String}
 *
 * pairsWith(beers, foods)
 * @param {Array.<Object>} beers
 * @param {Array.<String>} foods
 * @return {Array.<Object>}
 *
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
            return await fetchBeers(beerSpecs);
        } catch (err) {
            console.error(err);
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
