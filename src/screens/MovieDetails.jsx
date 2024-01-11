import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
  const { movieId } = useParams();
  const movies = useSelector((state) => state.movies);
  const movie = movies[movieId];

  if (!movie) {
    return <div>Loading...</div>;
  }

  const styles = {
    container: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
      maxWidth: '600px',
      margin: 'auto',
      marginTop: '20px',
      display:'flex',
      flexDirection:'row',
      gap:'50px'
    },
    movieName: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: 'black',
      
    },
    description: {
      fontSize: '18px',
      color: 'black',
    },
    image: {
      maxWidth: '500px',
      maxHeight:'500px',
      borderRadius: '8px',
      marginTop: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <img src={movie.banner} alt={movie.name} style={styles.image} />  
      <div>
        <h2 style={styles.movieName}>{movie.name}</h2>
        <p style={styles.description}>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
