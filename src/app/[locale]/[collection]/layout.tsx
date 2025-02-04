import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <MaxWidthWrapper>
        <Nav className="mb-4 " />
      </MaxWidthWrapper>

      {children}
    </div>
  );
};

export default Layout;
