"use client";
import ItemCard from "@/components/ItemCard";
import { objct, PRODUCT } from "@/lib/const";

const page = () => {
  const collection = window.location.pathname.slice(4);

  return (
    <div className="h-full w-full m-5 flex flex-wrap justify-center gap-3 lg:gap-5">
      {PRODUCT.map((Product, index) =>
        Product.collection === collection ? (
          <ItemCard
            collection={collection}
            className=""
            id={Product.id}
            price={Product.price}
            title={Product.title}
            size={Product.size}
            colors={Product.colors}
            key={index + Product.id}
          />
        ) : null
      )}
    </div>
  );
};

export default page;
