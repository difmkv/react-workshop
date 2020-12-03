import { getApiUrl } from "../helpers";

export const fetchBeers = async (args) => {
    const response = await fetch(getApiUrl(args), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });

    return response.json();
};
