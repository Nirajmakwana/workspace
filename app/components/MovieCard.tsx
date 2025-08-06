import Link from 'next/link';
import { Movie } from '../../types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="border p-2 rounded shadow hover:shadow-md transition">
      <Link href={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.ac-illust.com%2Fclip-art%2F25480354%2Fno-image-thumbnail-1-with-no-image&psig=AOvVaw3X1PuwgrnJkM31X2MlL6hz&ust=1754560653086000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjG5PX19Y4DFQAAAAAdAAAAABAE'}
          alt={movie.Title}
          className="w-full h-64 object-cover rounded"
        />
        <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
        <p className="text-sm text-gray-500">
          {movie.Type.toUpperCase()} • {movie.Year}
        </p>
      </Link>
    </div>
  );
}
