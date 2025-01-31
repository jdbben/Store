"use client";
import ItemCard from "@/components/ItemCard";
import { Category, objct, PRODUCT } from "@/lib/const";
import { useEffect } from "react";
import { useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";

const page = () => {
  const [collection, setCollection] = useState<string>("");
  const [collectionCheck, setCollectionCheck] = useState<
    Category[] | undefined
  >([]);

  useEffect(() => {
    let dublecations: Category[] = [];
    setCollection(
      window.location.pathname.split("/").pop() ??
        window.location.pathname.slice(4)
    );
    PRODUCT.map((product) => dublecations.push(product.collection));
    const filtredArray = dublecations.filter(
      (item, index) =>
        dublecations.indexOf(item) !== index &&
        dublecations.lastIndexOf(item) === index
    );
    setCollectionCheck(filtredArray);

    collectionCheck?.forEach((item, index) => {
      window.location.pathname.includes(item);
      setCollection(item);
    });
  }, []);

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
