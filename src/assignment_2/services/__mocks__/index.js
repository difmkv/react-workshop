import beers from "./beers";

export function fetchBeers(beerSpecs) {
    let { beer_name, brewed_before, brewed_after } = beerSpecs;

    return new Promise((resolve, reject) => {
        process.nextTick(() =>
            beer_name && brewed_before && brewed_after
                ? resolve(beers)
                : reject({ error: "Something went wrong." })
        );
    });
}
