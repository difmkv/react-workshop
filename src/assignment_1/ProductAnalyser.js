/**
 * @summary ProductAnalyser with () => {}
 *
 * getProductById(id)
 * @param {Number} id
 * @return {Object}
 *
 * getAvailableProducts()
 * @return {Array.<Object>}
 *
 * getProductNames()
 * @return {Array.<String>}
 *
 * getPriceSumByCategory
 * @return {Object}
 *
 */

import { products } from "../constants";

const ProductAnalyser = {
    products,
    getProductById: (id) => {
        return products.find((p) => p.id === id);
    },
    getAvailableProducts: () => {
        return products.filter((p) => p.isAvailable);
    },
    getProductNames: () => {
        let names = [];
        products.forEach((p) => names.push(p.name));
        return names;
    },
    getPriceSumByCategory: () => {
        return products.reduce((acc, curr) => {
            acc[curr.category] = curr.price + (acc[curr.category] || 0);
            return acc;
        }, {});
    }
};

export default ProductAnalyser;
