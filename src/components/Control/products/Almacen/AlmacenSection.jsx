import { useState, useEffect } from "react";
import { NavbarProducts } from "../NavbarProducts";
import { ProductList } from "../ProductList";
import { UploadProduct } from "../UploadProduct";
import { Messages } from "../Messages";
import { generateClient } from "aws-amplify/api";
import { listProducts } from "../../../../graphql/queries";

export function AlmacenSection({ cat }) {

  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('List');
  const [page, setPage] = useState(cat);
  const API = generateClient();

  useEffect(() => {
    getProducts();
  },[cat]);

  const getProducts = async () => {
    try {
      const apiData = await API.graphql({ query: listProducts });
      const productsFromAPI = apiData.data.listProducts.items;
      setProductList(productsFromAPI);
      handlePageChange(cat);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const handlePageChange = (category) => {
    const lowercaseCategory = category.toLowerCase();
    let results = productList.filter((data) => data.category.toLowerCase().includes(lowercaseCategory));
    if (!results) {
      console.log("NO HAY PRODUCTOS")
      setProductList([]);
    } else {
      setPage(category);
      setProductList(results)
      console.log(results);
    }
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <NavbarProducts onCategoryChange={handleCategoryChange} />
      {currentCategory === 'List' && <ProductList productList={productList} />}
      {currentCategory === 'Upload' && <UploadProduct currentPage={page} />}
      {currentCategory === 'Messages' && <Messages />}
    </>
  );
};

