import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  bannerPath: string;
}

function Banner({ bannerPath }: Props) {
  return (
    <div className="flex">
      <div className="-z-10 h-[30vh] w-screen"></div>
      {bannerPath && <Image src={bannerPath?.replaceAll("\\", "/")} layout="fill" />}
    </div>
  );
}

export default Banner;
