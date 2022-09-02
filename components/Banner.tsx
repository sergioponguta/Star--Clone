import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  starOriginals: Movie[];
}

function Banner({ starOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(starOriginals[Math.floor(Math.random() * starOriginals.length)]);
  }, [starOriginals]);

  return (
    <div className="flex">
      <div className="-z-10 h-[75vh] w-screen">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout={"fill"} />
      </div>
    </div>
  );
}

export default Banner;
