import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Star+ | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main>
        STAR+
        {/* Banner */}
        <section>
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
