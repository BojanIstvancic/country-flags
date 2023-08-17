import { useAppDispatch, useAppSelector } from "../utils/hooks";

import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { changeTheme, selectTheme } from "../redux/reducers/theme/themeSlice";
import { Theme } from "../data/constants";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(selectTheme);

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={`${theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"}`}
    >
      <div
        className={`container mx-auto p-4 flex items-center justify-between`}
      >
        <h6 className="mb-0 cursor-pointer">
          <Link to="/">Pokemons</Link>
        </h6>
        <div
          className="flex items-center cursor-pointer"
          onClick={handleChangeTheme}
        >
          {theme === Theme.DARK && <NightlightRoundedIcon />}
          {theme === Theme.LIGHT && <WbSunnyRoundedIcon />}
          <p className="ml-2">Change Theme</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
