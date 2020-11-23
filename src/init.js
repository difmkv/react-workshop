import BeerLibrary from "./assignment_2/BeerLibrary";

(async () => {
    const beers = await BeerLibrary.findBeers({
        beer_name: "IPA",
        brewed_before: "12-2016",
        brewed_after: "04-2010"
    });

    console.log(beers);
    console.log(BeerLibrary.showBeer(beers?.[0]));
    console.log(BeerLibrary.sumOfIngredients(beers));
    console.log(BeerLibrary.pairsWith(beers, ["tacos", "spicy"]));
})();
