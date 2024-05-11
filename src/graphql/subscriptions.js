/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSale = /* GraphQL */ `
  subscription OnCreateSale {
    onCreateSale {
      id
      product_name
      product_category
      product_date
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
export const onCreateSales = /* GraphQL */ `
  subscription OnCreateSales($filter: ModelSubscriptionSalesFilterInput) {
    onCreateSales(filter: $filter) {
      id
      product_name
      product_category
      product_date
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSales = /* GraphQL */ `
  subscription OnUpdateSales($filter: ModelSubscriptionSalesFilterInput) {
    onUpdateSales(filter: $filter) {
      id
      product_name
      product_category
      product_date
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSales = /* GraphQL */ `
  subscription OnDeleteSales($filter: ModelSubscriptionSalesFilterInput) {
    onDeleteSales(filter: $filter) {
      id
      product_name
      product_category
      product_date
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
