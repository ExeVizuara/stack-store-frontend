/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProductsByCategory = /* GraphQL */ `
  query ListProductsByCategory(
    $category: String
    $limit: Int
    $nextToken: String
  ) {
    listProductsByCategory(
      category: $category
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSales = /* GraphQL */ `
  query GetSales($id: ID!) {
    getSales(id: $id) {
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
export const listSales = /* GraphQL */ `
  query ListSales(
    $filter: ModelSalesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getWeeklySale = /* GraphQL */ `
  query GetWeeklySale($id: ID!) {
    getWeeklySale(id: $id) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWeeklySales = /* GraphQL */ `
  query ListWeeklySales(
    $filter: ModelWeeklySaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeklySales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
