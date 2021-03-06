import ProductAnalyser from "../ProductAnalyser";

describe("ProductAnalyser", () => {
    it("should filter products by id", () => {
        expect(ProductAnalyser.getProductById(1)).toStrictEqual({
            id: 1,
            name: "n1",
            category: "c1",
            price: 1.99,
            isAvailable: false
        });
    });

    it("should return available products", () => {
        expect(ProductAnalyser.getAvailableProducts()).toStrictEqual([
            {
                id: 0,
                name: "n0",
                category: "c0",
                price: 0.99,
                isAvailable: true
            },
            {
                id: 2,
                name: "n2",
                category: "c0",
                price: 2.14,
                isAvailable: true
            },
            {
                id: 4,
                name: "n4",
                category: "c2",
                price: 4.99,
                isAvailable: true
            }
        ]);
    });

    it("should return array with product names", () => {
        expect(ProductAnalyser.getProductNames()).toStrictEqual([
            "n0",
            "n1",
            "n2",
            "n3",
            "n4"
        ]);
    });

    it("should return categories with added sum", () => {
        expect(ProductAnalyser.getPriceSumByCategory()).toStrictEqual({
            c0: 3.13,
            c1: 5.98,
            c2: 4.99
        });
    });
});
