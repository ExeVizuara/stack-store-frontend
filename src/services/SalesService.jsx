import { generateClient } from "aws-amplify/api";
import { createSales as createSalesMutation } from "../graphql/mutations";
import { listSales } from "../graphql/queries";
import { CurrentTime } from "../components/shared/Clock";

export const loadSales = async () => {
    const API = generateClient();
    try {
        const apiData = await API.graphql({ query: listSales });
        const productsFromAPI = apiData.data.listSales.items;
        return productsFromAPI;
    } catch (error) {
        console.error('Error al cargar registro de ventas:', error);
    }
};

export const loadDailySales = async (date) => {
    try {
        const salesFromAPI = await loadSales();
        const filteredSales = salesFromAPI.filter((data) => data.product_date.includes(date));
        console.log("Ventas de hoy " + date + " : " + filteredSales.length);
        console.log(filteredSales);
        return filteredSales;
    } catch (error) {
        console.error('Error al cargar las ventas del hoy:', error);
        throw error;
    }
};


export const addSale = async (selectProduct, quantity) => {
    const API = generateClient();
    const currentDateTime = CurrentTime();
    try {
        selectProduct.map(async (product) => {
            console.log(quantity[product.id]);
            const saleData = {
                product_name: product.name,
                product_category: product.category,
                product_date: currentDateTime,
                product_quantity: quantity[product.id],
                price: product.price,
            };

            const result = await API.graphql({
                query: createSalesMutation,
                variables: {
                    input: saleData
                }
            });

            if (result.errors) {
                console.error("Errores de GraphQL:", result.errors);
                alert("Ocurrieron errores al procesar la solicitud. Por favor, revisa los datos ingresados.");
                return;
            }
        });
        console.log(selectProduct);
        await loadSales();
        const daily = await loadDailySales(currentDateTime);
        return daily;
    } catch (error) {
        console.error("Error al realizar la operación GraphQL:", error);
        alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde.");
    }
}

export const getSales = async (setAllSales) => {
    const currentDateTime = CurrentTime();
    try {
        const sales = await loadDailySales(currentDateTime);
        if (!sales) {
            console.log("NO HAY VENTAS HOY")
            setAllSales([]);
        } else {
            const sortedSales = await sales.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setAllSales(sortedSales);
            console.log(sortedSales);
        }
        console.log(sales);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};