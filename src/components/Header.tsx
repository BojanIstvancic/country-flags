import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

function Header() {
  return (
    <div className="container mx-auto p-4 flex justify-between">
      <h1 className="mb-0">Pokemon App</h1>
      <div className="flex items-center">
        <NightlightRoundedIcon />
        <WbSunnyRoundedIcon />
        <p> Change Theme</p>
      </div>
    </div>
  );
}

export default Header;
