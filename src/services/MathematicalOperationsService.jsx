
export const calculateInGrams = (quantityInserted, productPrice) => {
    const quantityInHundredGrams = quantityInserted / 100; // Convertir gramos a unidades de 100 gramos
    const totalPrice = productPrice * quantityInHundredGrams; // Calcular el precio total basado en la cantidad ingresada
    return totalPrice;
}