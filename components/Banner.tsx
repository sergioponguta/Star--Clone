import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface Props {
  bannerPath: string;
}

function Banner({ bannerPath }: Props) {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`/api/readFilesBanners?image_type=banners`, fetcher);

  return (
    <div className="flex">
      <div className="-z-10 h-[45vh] w-screen"></div>
      {bannerPath && <Image src={bannerPath?.replaceAll("\\", "/")} layout="fill" />}
    </div>
  );
}

export default Banner;
