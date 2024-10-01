import { useEffect, useState } from 'react';
import { MoviesService } from '../api/MovieServices';
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MoviesService.getMovieById(id);
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  );
};
