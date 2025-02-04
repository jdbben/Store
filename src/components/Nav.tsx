import { cn } from "@/lib/utils";
import LocaleSwitcher from "./LocaleSwitcher";
interface Prop {
  className: string;
}
const Nav = ({ className }: Prop) => {
  return (
    <div
      className={cn(
        `h-[8vh] w-full justify-center items-center mx-auto p-3 ${className}`
      )}
    >
      <LocaleSwitcher />
    </div>
  );
};

export default Nav;
