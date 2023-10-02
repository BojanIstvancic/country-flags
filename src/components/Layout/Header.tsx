import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import {
  changeTheme,
  selectTheme,
} from "../../redux/features/theme/themeSlice";
import { Theme } from "../../shared/types";
import { Link } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { selectAmountOfPokemons } from "../../redux/features/comparison/comparisonSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(selectTheme);
  const amountOfComparisonPokemons = useAppSelector(selectAmountOfPokemons);

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={`${
        theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"
      } sticky top-0 z-50`}
    >
      <div
        className={`container mx-auto p-4 flex items-center justify-between`}
      >
        <h6 className="mb-0 cursor-pointer">
          <Link to="/">Pokemons</Link>
        </h6>
        <div className="flex">
          <div className="cursor-pointer mr-2 relative">
            <CompareArrowsIcon />
            <div className="absolute right-0 bottom-0 bg-slate-900">
              {amountOfComparisonPokemons}
            </div>
          </div>
          <div className="cursor-pointer" onClick={handleChangeTheme}>
            {theme === Theme.DARK && <NightlightRoundedIcon />}
            {theme === Theme.LIGHT && <WbSunnyRoundedIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
