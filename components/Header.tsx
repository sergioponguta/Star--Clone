import {
  HomeIcon as HIcon,
  MagnifyingGlassIcon as MIcon,
  PlusIcon as PIcon,
  EyeIcon as EIcon,
  FilmIcon as FIcon,
  ComputerDesktopIcon as CIcon,
} from "@heroicons/react/24/solid";
import HeaderButton from "./HeaderButton";
function Header() {
  return (
    <header className="bg-black">
      <div className="flex">
        <img
          className="h-12 w-18 mr-8"
          src="https://static-assets.bamgrid.com/product/starplus/images/logo.770970996243b55d166fbeb8b1a52b36.svg"
        />
        <div className="flex">
          <HeaderButton title={"HOME"} icon={<HIcon className="HeaderButtonIcon" />} />
          <HeaderButton title={"SEARCH"} icon={<MIcon className="HeaderButtonIcon" />} />
          <HeaderButton title={"WATCHLIST"} icon={<PIcon className="HeaderButtonIcon" />} />
          <HeaderButton title={"ESPN"} icon={<EIcon className="HeaderButtonIcon" />} />
          <HeaderButton title={"MOVIES"} icon={<FIcon className="HeaderButtonIcon" />} />
          <HeaderButton title={"SERIES"} icon={<CIcon className="HeaderButtonIcon" />} />
        </div>
      </div>
      <div className="flex items-center space-x-3 cursor-pointer">
        <p className="font-normal text-[#f9f9f9] opacity-0 md:opacity-100">User</p>
        <img className="h-10 w-10" src="https://iili.io/6Fd4p9.png" />
      </div>
    </header>
  );
}

export default Header;
