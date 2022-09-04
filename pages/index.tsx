import type { NextPage } from "next";
import Head from "next/head";
import RowHoverableThumbnail from "../components/RowHoverableThumbnail";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";

interface Props {
  bannerPath: string;
}

const Home = ({ bannerPath }: Props) => {
  const [pathItemHovered, setPathItemHovered] = useState<string>("");

  useEffect(() => {}, []);

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh] w-full">
      <Head>
        <title>Star+ | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="relative mt-[70px] pl-4 pb-24  lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner bannerPath={pathItemHovered} />
        <section>
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
