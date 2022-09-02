import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import requests from "../utils/requests";
import { Movie } from "../typings";

interface Props {
  trending: Movie[];
  starOriginals: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  RomanceMovies: Movie[];
}

const Home = ({ starOriginals }: Props) => {
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
        <Banner starOriginals={starOriginals} />
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

export const getServerSideProps = async () => {
  const [
    trending,
    starOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    RomanceMovies,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchStarOriginals).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
  ]);

  return {
    props: {
      trending: trending.results,
      starOriginals: starOriginals.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      RomanceMovies: RomanceMovies.results,
    },
  };
};
