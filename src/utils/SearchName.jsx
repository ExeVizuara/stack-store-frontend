export const searchName = (products, search) => {
    let results = [];
        if (!search) {
            results = products;
        } else {
            return results = products.filter((data) =>
                data.name.toLowerCase().includes(search.toLocaleLowerCase()));
        }
}