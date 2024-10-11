import { useState, useEffect } from "react";
import { NavbarProducts } from "./products/NavbarProducts";
import { ProductList } from "./products/ProductList";
import { UploadProduct } from "./products/UploadProduct";
import { UpdateProduct } from "./products/UpdateProduct";
import { useSearchContext } from "../../services/SearchProvider";
import { LoadingProducts } from "../../utils/LoadingProducts";

export function AlmacenSection({ productsList, loadProducts, filteredProducts, cat, editMode }) {

  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('List');
  const [page, setPage] = useState(cat);
  const {isLoading, setIsLoading} = useSearchContext();

  const getProducts = async () => {
    try {
      setIsLoading(true);
      if (!productsList || productsList.length === 0) {
        console.log("NO HAY PRODUCTOS");
        setProductList([]);
      } else {
        setPage(cat);
        setProductList(productsList)
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  },[productsList]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    getProducts();
  };

  return (
    <>
      <NavbarProducts onCategoryChange={handleCategoryChange} />
        {isLoading && <LoadingProducts /> && console.log('Cargando...')}
        {currentCategory === 'List' && <ProductList productList={productList} filteredProducts={filteredProducts} editMode={editMode} isLoading={isLoading} />}
        {currentCategory === 'Upload' && <UploadProduct productList={productList} loadProducts={loadProducts} currentPage={page} />}
        {currentCategory === 'Update' && <UpdateProduct productList={productList} currentPage={page} editMode={editMode} />}
    </>
  );
};

