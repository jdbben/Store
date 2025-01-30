import ItemCard from "@/components/ItemCard";
import { PRODUCT } from "@/lib/const";

const page = () => {
  return (
    <div className="h-full w-full m-5 flex flex-wrap justify-center gap-3 lg:gap-5">
      {PRODUCT.map((Product, index) => (
        <ItemCard
          className=""
          id={Product.id}
          price={Product.price}
          title={Product.title}
          size={Product.size}
          colors={Product.colors}
          key={index + Product.id}
        />
      ))}
    </div>
  );
};

export default page;
