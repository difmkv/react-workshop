// import BeerLibrary from "../BeerLibrary";
import { fetchBeers } from "../services";

jest.mock("../services");

describe("BeerLibrary", () => {
    it("should return data from API", async () => {
        expect.assertions(1);

        const data = await fetchBeers({
            beer_name: "IPA",
            brewed_before: "12-2016",
            brewed_after: "04-2010"
        });

        expect(data[0].name).toEqual("Russian Doll – India Pale Ale");
    });

    it("tests error with async/await and rejects", async () => {
        expect.assertions(1);

        await expect(fetchBeers({})).rejects.toEqual({
            error: "Something went wrong."
        });
    });
});
