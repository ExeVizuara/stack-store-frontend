/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      name
      category
      code
      expiration
      stock
      cost
      discount
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      name
      category
      code
      expiration
      stock
      cost
      discount
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      name
      category
      code
      expiration
      stock
      cost
      discount
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSales = /* GraphQL */ `
  mutation CreateSales(
    $input: CreateSalesInput!
    $condition: ModelSalesConditionInput
  ) {
    createSales(input: $input, condition: $condition) {
      id
      product_name
      product_category
      product_date
      product_quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSales = /* GraphQL */ `
  mutation UpdateSales(
    $input: UpdateSalesInput!
    $condition: ModelSalesConditionInput
  ) {
    updateSales(input: $input, condition: $condition) {
      id
      product_name
      product_category
      product_date
      product_quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSales = /* GraphQL */ `
  mutation DeleteSales(
    $input: DeleteSalesInput!
    $condition: ModelSalesConditionInput
  ) {
    deleteSales(input: $input, condition: $condition) {
      id
      product_name
      product_category
      product_date
      product_quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createWeeklySale = /* GraphQL */ `
  mutation CreateWeeklySale(
    $input: CreateWeeklySaleInput!
    $condition: ModelWeeklySaleConditionInput
  ) {
    createWeeklySale(input: $input, condition: $condition) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateWeeklySale = /* GraphQL */ `
  mutation UpdateWeeklySale(
    $input: UpdateWeeklySaleInput!
    $condition: ModelWeeklySaleConditionInput
  ) {
    updateWeeklySale(input: $input, condition: $condition) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteWeeklySale = /* GraphQL */ `
  mutation DeleteWeeklySale(
    $input: DeleteWeeklySaleInput!
    $condition: ModelWeeklySaleConditionInput
  ) {
    deleteWeeklySale(input: $input, condition: $condition) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
