import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCT, SUB_CATEGORY_GET } from "../Api/endpoints";
import useFetch from "../Hooks/useFetch";

const ProductPageContext = React.createContext({
  subCategoryList: [],
  productsList: [],
});

const ProductPageContextProvider = ({ setLoader, children, setIsPresent }) => {
  const { mainCategoryId, subCategoryId } = useParams();
  const subCategoryList = useFetch(
    `${SUB_CATEGORY_GET}/${mainCategoryId}`,
    false,
    setLoader,
    (data) => {
      if (data.length === 0) {
        setIsPresent(false);
      } else {
        setIsPresent(true);
      }
    }
  );
  const productsList = useFetch(
    `${PRODUCT}/${mainCategoryId}/${subCategoryId}`
  );

  return (
    <ProductPageContext.Provider value={{ subCategoryList, productsList }}>
      {children}
    </ProductPageContext.Provider>
  );
};

export { ProductPageContextProvider };
export default ProductPageContext;
