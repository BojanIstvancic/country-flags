import { JSXElementConstructor, ReactElement } from "react";
import { useAppSelector } from "../utils/hooks";

import Header from "./Header";
import { selectTheme } from "../redux/reducers/theme/themeSlice";

interface LayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>> | null;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useAppSelector(selectTheme);

  return (
    <div className={`min-h-screen ${theme}`}>
      <Header />
      {children}
      <p>dudaluda</p>
    </div>
  );
}

export default Layout;
