import { generateClient } from "aws-amplify/api";
import { listProducts } from "../../graphql/queries";
import { updateProducts as updateProductMutation } from "../../graphql/mutations";
import { createProducts as createProductMutation } from "../../graphql/mutations";

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

export const addProduct = async (name, category, code, expiration, stock, cost, discount, price) => {
    const API = generateClient();
    const data = {
        name: name,
        category: category,
        code: code,
        expiration: expiration,
        stock: stock,
        cost: cost,
        discount: discount,
        price: price
    };
    console.log(data);
    try {
        const result = await API.graphql({
            query: createProductMutation,
            variables: {
                input: data
            }
        });
        // Verificar si hay errores en la respuesta GraphQL
        if (result.errors) {
            console.error("Errores de GraphQL:", result.errors);
            alert("Ocurrieron errores al procesar la solicitud. Por favor, revisa los datos ingresados.");
        } else {
            alert("Producto registrado exitosamente.");
            window.location.reload();
            setAll();
        }
    } catch (error) {
        // Manejar errores de red u otros errores de la operación GraphQL
        console.error("Error al realizar la operación GraphQL:", error);
        // Mostrar un mensaje de error genérico en la interfaz de usuario
        alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde si tenes ganas");
    }
};


export const updateProduct = async (id, name, category, code, expiration, stock, cost, discount, price) => {
    const API = generateClient();
    const data = {
        id: id,
        name: name,
        category: category,
        code: code,
        expiration: expiration,
        stock: stock,
        cost: cost,
        discount: discount,
        price: price
    };

    try {
        const result = await API.graphql({
            query: updateProductMutation,
            variables: {
                input: data
            }
        });

        if (result.errors) {
            console.error("Errores de GraphQL:", result.errors);
            alert("Ocurrieron errores al procesar la solicitud. Por favor, revisa los datos ingresados.");
        } else {
            alert("Producto actualizado exitosamente.");
            window.location.reload(); // Recargar la página después de la actualización
            // Si tienes una función setAll, puedes llamarla aquí para restablecer los valores del formulario
        }
    } catch (error) {
        console.error("Error al realizar la operación GraphQL:", error);
        alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde.");
    }
};

export const actualizeStock = async (products, stock) => {
    const API = generateClient();
    try {
        // Realizar la consulta de actualización para cada producto en selectProduct
        await products.map(async (product) => {
            await API.graphql({
                query: updateProductMutation,
                variables: {
                    input: {
                        id: product.id,
                        stock: stock[product.id],
                    }
                }
            });
        });
    } catch (error) {
        console.error('Error al realizar la operación de carga:', error);
        // Manejar cualquier error que ocurra durante la actualización de los productos
        // Puedes mostrar un mensaje de error o tomar otras medidas según sea necesario
    }
};

