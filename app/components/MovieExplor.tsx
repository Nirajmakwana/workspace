"use client"
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { searchMovies } from '../../lib/api';
import type { Movie } from '../../types/movie';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Filters from './Filters';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = async (q: string) => {
    setQuery(q);
    setPage(1);
  };

  const fetchResults = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const data = await searchMovies(query, page, type, year);
      if (data.Response === 'True') {
        setResults(data.Search);
        setTotalResults(parseInt(data.totalResults));
      } else {
        setResults([]);
        setTotalResults(0);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setResults([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchResults();
  }, [query, page, type, year]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <Filters type={type} setType={setType} year={year} setYear={setYear} />
      {loading ? (
        <p className="mt-8">Loading...</p>
      ) : results.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {results.map((movie,index) =>{
                
                return(
                    <MovieCard key={movie.imdbID+index} movie={movie} />
                )
            } 
            )}
          </div>
          <Pagination
            currentPage={page}
            totalCount={totalResults}
            onPageChange={setPage}
          />
        </div>
      ) : query ? (
        <div>
            <p className="mt-8">No results found.</p>
        </div>
      ) : null}
    </div>
  );
}
