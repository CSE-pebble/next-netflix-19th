import { getMovies } from "@/api/home";
import Image from "next/image";

const HomePage = async () => {
  const popularMovies = await getMovies("popular");

  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;
  return (
    <div className="flex-column w-full gap-14pxr">
      <p className="text-21pxr font-bold">Trending Now</p>
      <div className="flex gap-7pxr overflow-scroll">
        {popularMovies.results.map((movie) => {
          if (!movie.poster_path) return;
          return (
            <div key={movie.id} className="min-w-103pxr h-161pxr relative">
              <Image
                key={movie.id}
                alt="영화 포스터 이미지"
                fill
                className="rounded-sm"
                src={`${posterBaseUrl}${movie.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
