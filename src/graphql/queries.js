/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    $category: String
    $limit: Int
    $nextToken: String
  ) {
    listProducts(
      filter: {
        category: {
          contains: $category
        }
      }
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

export const listAllProducts = /* GraphQL */ `
  query ListAllProducts(
    $filter: ModelSalesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
