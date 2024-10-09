import { useState, useEffect } from "react";
import { NavbarProducts } from "./products/NavbarProducts";
import { ProductList } from "./products/ProductList";
import { UploadProduct } from "./products/UploadProduct";
import { UpdateProduct } from "./products/UpdateProduct";
import { useSearchContext } from "../../services/SearchProvider";
import { LoadingProducts } from "../../utils/LoadingProducts";

export function AlmacenSection({ productsList, filteredProducts, cat, editMode }) {

  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('List');
  const [page, setPage] = useState(cat);
  const {isLoading, setIsLoading} = useSearchContext();

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      try {
        const products = await productsList;
        let category = await cat;
        if (!products) {
          console.log("NO HAY PRODUCTOS");
          setProductList([]);
        } else {
          setPage(category);
          setProductList(products)
          setIsLoading(false);
          console.log("Cargado..");
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };
    getProducts();
  },[productsList]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <NavbarProducts onCategoryChange={handleCategoryChange} />
        {isLoading && <LoadingProducts /> && console.log('Cargando...')}
        {currentCategory === 'List' && <ProductList productList={productList} filteredProducts={filteredProducts} editMode={editMode} />}
        {currentCategory === 'Upload' && <UploadProduct productList={productList} currentPage={page} />}
        {currentCategory === 'Update' && <UpdateProduct productList={productList} currentPage={page} editMode={editMode} />}
    </>
  );
};

