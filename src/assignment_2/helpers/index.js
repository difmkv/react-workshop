export function dedent(str) {
    return str.replace(/(\n)\s+/g, "$1");
}

export function prettifyDate(apiDate) {
    const month = apiDate.split("/")[0];
    const year = apiDate.split("/")[1];
    const dict = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        10: "October",
        11: "November",
        12: "December"
    };
    return `${dict[month]} ${year}`;
}

export function showIngredientDetails(ingredient) {
    return ingredient.reduce(
        (acc, curr) =>
            (acc += `name: ${curr.name} amount: ${curr.amount.value} ${curr.amount.unit}\n`),
        ""
    );
}

export function getTotalAmounts(ingredient) {
    return ingredient.reduce((acc, curr) => (acc += curr.amount.value), 0);
}
