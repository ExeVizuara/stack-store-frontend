import { useState, useEffect } from "react";
import { NavbarProducts } from "./NavbarProducts";
import { ProductList } from "./ProductList";
import { UploadProduct } from "./UploadProduct";
import { Messages } from "./Messages";
import { generateClient } from "aws-amplify/api";
import { listProducts } from "../../../graphql/queries";

export function AlmacenSection() {

  const [productList, setProductList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('List');
  const API = generateClient();

  useEffect(() => {
    async () => {
      try {
        const apiData = await API.graphql({ query: listProducts });
        const productsFromAPI = apiData.data.listProducts.items;
        setProductList(productsFromAPI);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };
  }, []);

  const filteredProductList = productList.filter(product => product.category === currentCategory);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="grid grid-cols-3 h-auto w-full mb-4 sm:px-2 xl:h-[570px]">
      <div className="md:bg-[#1F1D2B] pt-4 sm:pb-8 sm:px-4 px-2 md:px-8 lg:px-12 xl:pt-10 rounded-xl items-center text-center text-gray-300 col-span-3">
        <NavbarProducts onCategoryChange={handleCategoryChange} />
        {currentCategory === 'List' && <ProductList productList={filteredProductList} />}
        {currentCategory === 'Upload' && <UploadProduct />}
        {currentCategory === 'Messages' && <Messages />}
      </div>
    </div>
  );
};

