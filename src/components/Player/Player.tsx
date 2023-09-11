import { selectTheme } from "../../redux/features/theme/themeSlice";
import { useAppSelector } from "../../redux/hooks";
import { Theme } from "../../shared/types";
import ThemeSong from "../../assets/ThemeSong.mp3";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

const Player = () => {
  const { theme } = useAppSelector(selectTheme);
  const [displayPlayer, setDisplayPlayer] = useState(true);

  const showPlayer = () => {
    setDisplayPlayer(true);
  };

  const hidePlayer = () => {
    setDisplayPlayer(false);
  };

  return (
    <div
      className={`sticky bottom-0 w-full ${
        theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"
      }`}
    >
      <div className={`container mx-auto flex flex-col items-center group`}>
        <KeyboardArrowDownIcon
          className="hover:translate-y-0.5 cursor-pointer"
          sx={{
            display: `${displayPlayer ? "block" : "none"}`,
          }}
          onClick={hidePlayer}
        />
        <KeyboardArrowUp
          className="hover:-translate-y-0.5 cursor-pointer"
          onClick={showPlayer}
          sx={{
            display: `${displayPlayer ? "none" : "block"}`,
          }}
        />
        <audio
          controls
          className={`mx-auto transition-all ${
            displayPlayer ? "h-8 mb-2 opacity-100" : "h-0 mb-0 opacity-0"
          }`}
        >
          <source src={ThemeSong} type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
};

export default Player;
