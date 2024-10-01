import { generateClient } from "aws-amplify/api";
import {
    createSales as createSalesMutation,
    updateWeeklySale as updateWeeklySaleMutation,
    createWeeklySale as createWeeklySaleMutation
} from "../graphql/mutations";
import { listSales, listWeeklySales } from "../graphql/queries";
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

export const loadWeeklySales = async () => {
    const API = generateClient();
    try {
        const apiData = await API.graphql({ query: listWeeklySales });
        const weeklySaleFromAPI = apiData.data.listSales.items;
        return weeklySaleFromAPI;
    } catch (error) {
        console.error('Error al cargar registro de venta semanal:', error);
    }
};

export const addOrUpdateWeeklySale = async (totalAmount) => {
    const API = generateClient();
    const currentDateTime = CurrentTime();
    try {
        const result = await API.graphql({
            query: listWeeklySales,
            variables: { date: currentDateTime },
        });
        const sale = result.data.listWeeklySales;

        if (sale) {
            const updatedTotal = sale.total + totalAmount;
            const updateResult = await API.graphql({
                query: updateWeeklySaleMutation,
                variables: {
                    input: {
                        id: sale.id,
                        total: updatedTotal,
                    },
                },
            });
            console.log('Registro semanal acualizado. Total: ', updatedTotal);
            return updateResult.data.updateWeeklySaleMutation;
        } else {
            const createResult = await API.graphql({
                query: createWeeklySaleMutation,
                variables: {
                    input: {
                        fecha: currentDateTime,
                        total: totalAmount,
                    },
                },
            });

            return createResult.data.createWeeklySaleMutation;
        }
    } catch (error) {
        console.error("Error al actualizar o crear venta semanal:", error);
    }
}

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

export const loadWeeklySale = async (date) => {
    try {
        const weeklySalesFromAPI = await loadWeeklySales();
        const filteredSales = weeklySalesFromAPI.filter((data) => data.date.includes(date));
        console.log("Ventas de la semana " + date + " : " + filteredSales.length);
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
                price: product.price
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

export const getWeeklySale = async (setAllWeeklySale) => {
    const currentDateTime = CurrentTime();
    try {
        const sales = await loadWeeklySale(currentDateTime);
        if (!sales) {
            console.log("NO HAY VENTAS HOY")
            setAllWeeklySale([]);
        } else {
            const sortedSales = await sales.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setAllWeeklySale(sortedSales);
            console.log(sortedSales);
        }
        console.log(sales);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};

export const getDailyGain = async () => {
    const currentDateTime = CurrentTime();
    try {
        const sales = await loadDailySales(currentDateTime);
        const dailyGain = await sales.reduce((total, sale) => {
            console.log(total + sale.price)
            return total + sale.price;
        }, 0);
        console.log(dailyGain);
        return dailyGain;
    } catch (error) {
        console.error('Error al cargar total de ganancias:', error);
    }
};