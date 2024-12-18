import { generateClient } from "aws-amplify/api";
import { listProducts } from "../graphql/queries";
import { updateProducts as updateProductMutation } from "../graphql/mutations";
import { createProducts as createProductMutation } from "../graphql/mutations";
import { deleteProducts as deleteProductsMutation } from "../graphql/mutations";

let globalProducts=[];

export const loadAllProducts = async () => {
    if (globalProducts.length > 0) {
        return globalProducts;
    }
    const API = generateClient();
    let allProducts=[];
    try {
        let nextToken = null;
        const limit = 100;
        do {
            const apiData = await API.graphql({
                query: listProducts,
                variables: {
                    limit,
                    nextToken
                }
            });    
            const products = apiData.data.listProducts.items;
            allProducts.push(...products);
            nextToken = apiData.data.listProducts.nextToken;
        } while (nextToken);
        globalProducts = allProducts;
        return globalProducts;
    } catch (error) {
        console.error('Error al cargar todos los productos:', error);
    }
};

export const loadProductsByCategory = async (category) => {
    const API = generateClient();
    try {
        if (globalProducts.length === 0) {
            await loadAllProducts();
        }
        const filteredProducts = globalProducts.filter((data) => data.category === category);
        return filteredProducts;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        throw error;
    }
};

export const addProduct = async (product) => {
    const API = generateClient();
    const data = {
        name: product.name,
        category: product.category,
        code: product.code,
        expiration: product.expiration,
        stock: product.stock,
        cost: product.cost,
        discount: product.discount,
        price: product.price
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
        }
    } catch (error) {
        // Manejar errores de red u otros errores de la operación GraphQL
        console.error("Error al realizar la operación GraphQL:", error);
        // Mostrar un mensaje de error genérico en la interfaz de usuario
        alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde si tenes ganas");
    }
};


export const updateProduct = async (product) => {
    const API = generateClient();
    const data = {
        id: product.id,
        name: product.name,
        category: product.category,
        code: product.code,
        expiration: product.expiration,
        stock: product.stock,
        cost: product.cost,
        discount: product.discount,
        price: product.price
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
        }
    } catch (error) {
        console.error("Error al realizar la operación GraphQL:", error);
        alert("Ocurrió un error al procesar la solicitud. Por favor, intenta nuevamente más tarde.");
    }
};

export const deleteProduct = async (productID) => {
    const API = generateClient();
    console.log('Seleccionado producto ID: ', productID);

    try {
        const deleteProductForID = await API.graphql({
            query: deleteProductsMutation,
            variables: { input: { id: productID } }
        });
        console.log('Respuesta completa de la API:', deleteProductForID);

        if (deleteProductForID.data) {
            console.log('Producto eliminado:', deleteProductForID.data.deleteProducts);
        } else {
            console.log('La respuesta de la API no contiene datos:', deleteProductForID);
        }
    } catch (error) {
        console.log('Error al eliminar producto', error);
    };
};
export const actualizeStock = async (products, stock) => {
    const API = generateClient();
    try {
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

