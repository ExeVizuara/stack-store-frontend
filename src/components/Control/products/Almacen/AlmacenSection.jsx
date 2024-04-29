import { useState, useEffect } from "react";
import { NavbarProducts } from "../NavbarProducts";
import { ProductList } from "../ProductList";
import { UploadProduct } from "../UploadProduct";
import { UpdateProduct } from "../UpdateProduct";
import { generateClient } from "aws-amplify/api";
import { loadProducts } from "../../../shared/ProductService";

export function AlmacenSection({ cat, searchProducts, setSearchProducts }) {

  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('List');
  const [page, setPage] = useState(cat);
  const API = generateClient();

  useEffect(() => {
    getProducts();
  },[cat]);

  const getProducts = async () => {
    try {
      const allProducts = await loadProducts();
      handlePageChange(cat, allProducts);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const handlePageChange = async (category, prod) => {
    const lowercaseCategory = await category.toLowerCase();
    const results = prod.filter((data) => data.category.toLowerCase().includes(lowercaseCategory));
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
        {currentCategory === 'Update' && <UpdateProduct currentPage={page} searchProducts={searchProducts} setSearchProducts={ setSearchProducts }/>}
    </>
  );
};

