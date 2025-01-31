"use client";
import ItemCard from "@/components/ItemCard";
import { Category, objct, PRODUCT } from "@/lib/const";
import { useEffect } from "react";
import { useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const page = () => {
  const [collection, setCollection] = useState<string>("");
  const [collectionCheck, setCollectionCheck] = useState<
    Category[] | undefined
  >([]);

  const [ItemsperRowState, setItemsperRowStart] = useState(1);

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

    const updateItemsPerRow = () => {
      const width = window.innerWidth;

      if (width >= 640 && width < 768) setItemsperRowStart(1);
      else if (width >= 768 && width < 1024) setItemsperRowStart(3);
      else if (width >= 1024) setItemsperRowStart(4);
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);

    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const filteredProducts = PRODUCT.filter(
    (Product) => Product.collection === collection
  );
  return (
    <div className="h-screen w-full">
      <AutoSizer>
        {({ height, width }) => {
          const itemsPerRow = ItemsperRowState;
          const rowCount = Math.ceil(filteredProducts.length / itemsPerRow);
          const columnCount = itemsPerRow;

          return (
            <Grid
              columnCount={columnCount}
              columnWidth={width / itemsPerRow}
              height={height}
              rowCount={rowCount}
              rowHeight={520}
              width={width}
              className=""
            >
              {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * itemsPerRow + columnIndex;
                const product = filteredProducts[index];

                if (product) {
                  return (
                    <div
                      style={style}
                      key={product.id}
                      className="flex flex-wrap justify-center gap-3"
                    >
                      <ItemCard
                        collection={collection}
                        className=""
                        id={product.id}
                        price={product.price}
                        title={product.title}
                        size={product.size}
                        colors={product.colors}
                      />
                    </div>
                  );
                }
              }}
            </Grid>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default page;
//test
