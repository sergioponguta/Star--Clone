import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  hoverableThumbnailsPaths: string[];
  setItemHoveredIndex: React.Dispatch<React.SetStateAction<number>>;
}

function RowHoverableThumbnail({ hoverableThumbnailsPaths, setItemHoveredIndex }: Props) {
  return (
    <div className="h-40 pr-9 pt-36 space-y-0.5 md:space-y-2">
      <div className="flex scrollbar-hide space-x-2 md:space-x-4 ">
        {hoverableThumbnailsPaths.map((path, i) => (
          <div
            key={i}
            className="relative h-28 min-w-[180px] rounded-[0.20rem] cursor-pointer transition 
            ease-in-out md:min-h-[190px] md:min-w-[330px] md:hover:scale-105 md:hover:border-[#ffffff]/60 duration-[600ms] md:hover:border-4"
            onMouseEnter={() => setItemHoveredIndex(i)}
          >
            <Image src={path.replaceAll("\\", "/")} layout="fill" className="rounded-[0.20rem]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowHoverableThumbnail;
