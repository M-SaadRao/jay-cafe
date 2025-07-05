import React, { memo, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { Skeleton } from "antd"; // Import Skeleton from Ant Design
import Container from "./Container";

const CatProducts = () => {
  const { allProducts } = useSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const cat = useSelector((state) => state.user.activeProductCat);

  useEffect(() => {
    if (allProducts && cat) {
      setFilteredProducts(
        allProducts.filter((product) => product.cid === cat.c_id)
      );
    }
  }, [allProducts, cat]);

  return (
    <Container>
      <div className="mb-6 sm:mb-12">
        <h3 className="text-[27px] capitalize text-center md:text-[50px] my-5 leading-none yellowtail-font">
          {cat.c_name}
        </h3>
        <hr className="h-1 bg-primary" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 my-4 pb-4 border-b border-gray-300">
          {filteredProducts.length === 0
            ? // Show Skeleton Loader when there are no filtered products
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-full">
                  <Skeleton
                    active
                    paragraph={{ rows: 4 }}
                    title={{ width: "100%" }}
                    className="h-[400px]"
                  />
                </div>
              ))
            : filteredProducts.map((product) => (
                <ProductCard key={product.f_id} product={product} />
              ))}
        </div>
      </div>
    </Container>
  );
};

export default memo(CatProducts);
