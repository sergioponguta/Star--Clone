import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  bannersPaths: string[];
  overBannerPaths: string[];
  hoveredItem: number;
}

function Banner({ bannersPaths, overBannerPaths, hoveredItem }: Props) {
  return (
    <div className="flex">
      <div className="relative -z-10 h-[2vh] md:h-[30vh] w-screen"></div>
      {bannersPaths &&
        bannersPaths.map((path, i) => (
          <Image
            key={i}
            src={path?.replaceAll("\\", "/")}
            layout="fill"
            className={`transition-opacity ${
              i == hoveredItem ? "duration-700 opacity-100" : "duration-100 opacity-0"
            }`}
          />
        ))}
      {overBannerPaths &&
        overBannerPaths.map((path, i) => (
          <div key={i} className="absolute flex items-center top-0 lg:left-20 bottom-48 w-[28rem]">
            <div
              className={`relative flex transform mt-36 h-[20vh] w-[50vw] md:mt-32 md:h-[24vh] md:w-[20vw] transition-all ${
                i == hoveredItem
                  ? "duration-[1200ms] -translate-y-10 opacity-100"
                  : "duration-100 opacity-0"
              }`}
            >
              <Image layout="fill" src={path?.replaceAll("\\", "/")} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
