import { generateClient } from "aws-amplify/api";
import { listProducts } from "../../graphql/queries";

export const loadProducts = async (currentPage) => {
    const API = generateClient();
    const page = currentPage;

    try {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        return productsFromAPI;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
};