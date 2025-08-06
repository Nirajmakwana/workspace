import { getMovieDetails } from '@/lib/api';
import { MovieDetails } from '@/types/movie';
import Image from 'next/image';

interface PageProps {
  params: { id: string };
}

export default async function MovieDetailsPage({ params }: PageProps) {
  const movie: MovieDetails = await getMovieDetails(params.id);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.jpg'}
          alt={movie.Title}
          className="w-full md:w-60 rounded shadow"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-500 mb-2">
            {movie.Type.toUpperCase()} • {movie.Year} • {movie.Runtime}
          </p>
          <p className="mb-4">{movie.Plot}</p>

          <ul className="space-y-1 text-sm">
            <li><strong>Genre:</strong> {movie.Genre}</li>
            <li><strong>Director:</strong> {movie.Director}</li>
            <li><strong>Actors:</strong> {movie.Actors}</li>
            <li><strong>Language:</strong> {movie.Language}</li>
            <li><strong>Country:</strong> {movie.Country}</li>
            <li><strong>Awards:</strong> {movie.Awards}</li>
            <li><strong>IMDb Rating:</strong> {movie.imdbRating}</li>
            <li><strong>Released:</strong> {movie.Released}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
