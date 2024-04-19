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
