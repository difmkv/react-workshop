export function fetchBeers(beerSpecs) {
    let { beer_name, brewed_before, brewed_after } = beerSpecs;

    return fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${beer_name}&brewed_before=${brewed_before}&brewed_after=${brewed_after}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
    );
}