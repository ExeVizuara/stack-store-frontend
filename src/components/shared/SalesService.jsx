import { generateClient } from "aws-amplify/api";
import { createSales as createSalesMutation } from "../../graphql/mutations";
import { listSales } from "../../graphql/queries";

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

export const addSale = async (selectProduct) => {
    const API = generateClient();
    try {
        for (const product of selectProduct) {
            const saleData = {
                product_name: product.name,
                product_category: 1,
                price: product.price,
            };

            // Llamar a la función GraphQL mutation para crear el nuevo registro en la base de datos
            const result = await API.graphql({
                query: createSalesMutation, // Reemplaza createSaleMutation con el nombre de tu mutación GraphQL
                variables: {
                    input: saleData
                }
            });

            // Verificar si hubo errores en la respuesta GraphQL
            if (result.errors) {
                console.error("Errores de GraphQL:", result.errors);
                alert("Ocurrieron errores al procesar la solicitud. Por favor, revisa los datos ingresados.");
                return; // Salir de la función en caso de errores
            }
        }

        // Si se registraron todos los productos sin errores, mostrar un mensaje de éxito
        alert("Venta registrada exitosamente.");
        // Puedes realizar otras acciones después de registrar la venta aquí
    } catch (error) {
        console.error("Error al realizar la operación GraphQL:", error);
        alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde.");
    }
}