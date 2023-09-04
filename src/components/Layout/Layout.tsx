import { JSXElementConstructor, ReactElement } from "react";
import { useAppSelector } from "../../redux/hooks";

import Header from "./Header";
import { selectTheme } from "../../redux/features/theme/themeSlice";
import { Theme } from "../../shared/types";

interface LayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>> | null;
}

const Layout = ({ children }: LayoutProps) => {
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
      <main className={`container mx-auto min-h-screen`}>{children}</main>
    </div>
  );
};

export default Layout;
