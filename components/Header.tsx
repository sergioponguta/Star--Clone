import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  EyeIcon,
  FilmIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import HeaderButton from "./HeaderButton";
function Header() {
  return (
    <div>
      <div className="flex">
        <img className="h-12 w-20 object-contain" src="https://iili.io/6JcG9e.png"></img>
        <HeaderButton title={"HOME"} icon={<HomeIcon className="HeaderButtonIcon" />} />
        <HeaderButton
          title={"SEARCH"}
          icon={<MagnifyingGlassIcon className="HeaderButtonIcon" />}
        />
        <HeaderButton title={"WATCHLIST"} icon={<PlusIcon className="HeaderButtonIcon" />} />
        <HeaderButton title={"ESPN"} icon={<EyeIcon className="HeaderButtonIcon" />} />
        <HeaderButton title={"MOVIES"} icon={<FilmIcon className="HeaderButtonIcon" />} />
        <HeaderButton
          title={"SERIES"}
          icon={<ComputerDesktopIcon className="HeaderButtonIcon" />}
        />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
