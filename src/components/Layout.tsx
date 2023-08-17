import { JSXElementConstructor, ReactElement } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>> | null;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <p>dudaluda</p>
    </div>
  );
}

export default Layout;
