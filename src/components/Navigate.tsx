"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Bg from "./Bg";
import LocaleSwitcher from "./LocaleSwitcher";

const Navigate = () => {
  const title = useTranslations("NaveTitel");
  const t = useTranslations("NavegationLinks");
  const links = ["about", "contact"] as const;

  return (
    <div className="fixed left-0 h-full w-[30vh] p-11 pt-36 flex flex-col justify-between">
      <Bg />
      <div className="flex flex-col justify-center">
        <LocaleSwitcher />
        <p className="text-2xl font-extrabold">{title("title")}</p>
      </div>

      <div className="flex flex-col gap-1 ">
        {links.map((key) => (
          <Link
            key={key}
            href={{ pathname: `/infos/${key}` } as any}
            className="font-bold text-sm  hover:text-blue-600 w-fit "
          >
            {t(key)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigate;
