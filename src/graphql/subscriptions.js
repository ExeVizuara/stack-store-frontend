/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSale = /* GraphQL */ `
  subscription OnCreateSale {
    onCreateSale {
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
      product_quantity
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
      product_quantity
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
      product_quantity
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateWeeklySale = /* GraphQL */ `
  subscription OnCreateWeeklySale(
    $filter: ModelSubscriptionWeeklySaleFilterInput
  ) {
    onCreateWeeklySale(filter: $filter) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateWeeklySale = /* GraphQL */ `
  subscription OnUpdateWeeklySale(
    $filter: ModelSubscriptionWeeklySaleFilterInput
  ) {
    onUpdateWeeklySale(filter: $filter) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteWeeklySale = /* GraphQL */ `
  subscription OnDeleteWeeklySale(
    $filter: ModelSubscriptionWeeklySaleFilterInput
  ) {
    onDeleteWeeklySale(filter: $filter) {
      id
      date
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
