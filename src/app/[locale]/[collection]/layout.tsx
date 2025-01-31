import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <MaxWidthWrapper>
        {/* <Nav /> */}
        {children}
      </MaxWidthWrapper>
    </div>
  );
};

export default Layout;
