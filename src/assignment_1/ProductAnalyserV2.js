/**
 * @summary Assignment 1: ProductAnalyser with `this`
 *
 * ProductAnalyser.getProductById.call(products, 1)
 * ProductAnalyser.getAvailableProducts.call(products)
 * ProductAnalyser.getProductNames.call(products)
 * ProductAnalyser.getPriceSumByCategory.call(products)
 *
 */

const ProductAnalyser = {
    getProductById(id) {
        return this.find((p) => p.id === id);
    },
    getAvailableProducts() {
        return this.filter((p) => p.isAvailable);
    },
    getProductNames() {
        let names = [];
        this.forEach((p) => names.push(p.name));
        return names;
    },
    getPriceSumByCategory() {
        return this.reduce((acc, curr) => {
            acc[curr.category] = curr.price + (acc[curr.category] || 0);
            return acc;
        }, {});
    }
};

export default ProductAnalyser;
