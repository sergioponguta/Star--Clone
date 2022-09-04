import type { NextPage } from "next";
import Head from "next/head";
import RowHoverableThumbnail from "../components/RowHoverableThumbnail";
import useSWR from "swr";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";

interface Props {
  bannerPath: string;
  thumbnailsPaths: string[];
}

const Home = () => {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
  const { data: dataBanner } = useSWR(`/api/readFiles?imageType=banners`, fetcher);
  const { data: dataHoverable } = useSWR(`/api/readFiles?imageType=hoverable_thumbnail`, fetcher);

  const [pathItemHovered, setPathItemHovered] = useState<string>("");
  const [hoverableThmbnailsPaths, setHoverableThmbnailsPaths] = useState<string[]>([]);

  useEffect(() => {
    if (dataBanner) {
      setPathItemHovered(dataBanner[4]);
    }
  }, [dataBanner]);

  useEffect(() => {
    if (dataHoverable) {
      setHoverableThmbnailsPaths(dataHoverable);
    }
  }, [dataHoverable]);

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh] w-full">
      <Head>
        <title>Star+ | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="relative mt-[70px] pl-5 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner bannerPath={pathItemHovered} />
        <section className="">
          <RowHoverableThumbnail thumbnailsPaths={hoverableThmbnailsPaths} />
          {/* <RowHoverableThumbnail /> */}
          {/* Row Hoverable Banner */}
          {/* Row */}
          {/* Row */}
          {/* Row Sports*/}
          {/* Row Favorites*/}
          {/* Row Marathons*/}
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
