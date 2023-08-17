import { JSXElementConstructor, ReactElement } from "react";
import { useAppSelector } from "../utils/hooks";

import Header from "./Header";
import { selectTheme } from "../redux/reducers/theme/themeSlice";
import { Theme } from "../data/constants";

interface LayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>> | null;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useAppSelector(selectTheme);

  return (
    <div
      className={`min-h-screen transition ease-in-out ${
        theme === Theme.DARK
          ? "bg-slate-900 text-slate-200"
          : "bg-white text-slate-700"
      }`}
    >
      <Header />
      {children}
      <p>dudaluda</p>
    </div>
  );
}

export default Layout;
