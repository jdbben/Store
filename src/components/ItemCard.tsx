"use client";
import { useRouter, redirect } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { RadioGroup } from "@headlessui/react";
import { useTranslations, useFormatter } from "next-intl";
import { useState, MouseEvent } from "react";

interface Prop {
  collection: string;
  className?: string;
  price: number;
  title: string;
  id: number;
  size: string[];
  colors: {
    Name: string;
    tw: string;
    img: string;
    shoeSize: string;
  }[];
}

const ItemCard = ({
  price,
  title,
  id,
  size,
  colors,
  className,
  collection,
}: Prop) => {
  const [option, setOption] = useState(colors[0]);
  const format = useFormatter();
  const t = useTranslations("ProductDetailsCard");
  const { push } = useRouter();

  const NavigateTo = () => {
    push({
      pathname: "/[collection]/[product]",
      params: { collection: collection, product: `${id}-${title}` },
    });
  };
  return (
    <div
      className={cn(
        `flex flex-col justify-center items-center h-[550px] w-[250px] overflow-hidden  border-2 border-gray-400 rounded-2xl hover:scale-105 transition duration-100${className}`
      )}
      onClick={() => NavigateTo()}
    >
      {" "}
      <div className="h-full w-full justify-center items-center flex  p-1 overflow-hidden ">
        <img className="rounded-2xl " src={option.img} alt="" />
      </div>
      <div className="flex flex-col h-[300px] w-full p-2 ">
        <p className="text-xl font-bold ">{title}</p>
        <div className="w-full h-px bg-zinc-200 my-6" />
        <p className="font-bold">{t("size")}</p>
        <div className="flex flex-row gap-2 m-2">
          <RadioGroup
            key={option.shoeSize}
            className="flex flex-row justify-center items-center gap-2 "
            value={option.shoeSize}
            onChange={(val) => {
              setOption((prev) => ({
                ...prev,
                shoeSize: val,
              }));
            }}
          >
            {size.map((Size, index) => (
              <RadioGroup.Option
                className={({ active, checked }) =>
                  cn(
                    ` relative -m-0.5 flex cursor-pointer items-center justify-center hover:bg-zinc-100 px-2 py-1 active:ring-0 focuse:ring-0 active:outline-none focuse:outline-none border-2 border-transparent`,
                    { [`border-zinc-200`]: active || checked }
                  )
                }
                value={Size}
                key={index * id}
              >
                {Size}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <p className="font-bold">{t("color")}</p>
        <div className="flex flex-row gap-2 m-2 ">
          <RadioGroup
            key={option.Name}
            value={option}
            onChange={(val) => {
              setOption(val);
            }}
            data-value={option}
          >
            <div className="mt-3 flex items-center space-x-3 ">
              {colors.map((color, index) => (
                <RadioGroup.Option
                  key={index}
                  value={color}
                  className={({ active, checked }) =>
                    cn(
                      ` relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focuse:ring-0 active:outline-none focuse:outline-none border-2 border-transparent`,
                      { [`border-[${color.tw}]`]: active || checked }
                    )
                  }
                >
                  <span
                    style={{ backgroundColor: color.tw }}
                    className={cn(
                      "h-8 w-8 rounded-full border border-black border-opacity-10 "
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <p className="pl-4">
            {format.number(price, { style: "currency", currency: "USD" })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
