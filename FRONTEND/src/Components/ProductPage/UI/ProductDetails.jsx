import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";
function ProductDetails() {
  const { description } = useContext(ProductDetailsContext);

  return (
    <div className=" md:border-r border-t  md:pr-20 justify-center   flex flex-col gap-4 ">
      <h1 className=" text-2xl pt-5 md:p-0 font-medium">Product Details</h1>
      <div className="  flex flex-col gap-4">
        <Specification title="Description" body={description} />
        <Specification title="FSSAI License" body="10014011001895" />
        <Specification title="Country Of Origin" body="India" />
        <Specification
          title="Customer Care Details"
          body="Email: info@blinkit.com"
        />
        <Specification
          title="Return Policy"
          body="This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.
In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition."
        />
        <Specification
          title="Expiry Date"
          body="Please refer to the packaging of the product for expiry date."
        />
        <Specification
          title="Disclaimer"
          body="Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
        />
      </div>
    </div>
  );
}

export default ProductDetails;

function Specification({ title, body }) {
  return (
    <div className=" w-full flex flex-col gap-1">
      <p className="   font-medium text-sm">{title}</p>
      <p className=" text-sm text-gray-600">{body}</p>
    </div>
  );
}
