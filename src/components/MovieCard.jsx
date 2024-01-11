import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.banner} alt={movie.name} style={styles.image} />
      <h3 style={styles.movieName}>{movie.name}</h3>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    display:'flex',
    flexDirection:'row',
    gap:'50px',
    width:'500px',
    alignItems:"center",
},
  image: {
    maxWidth: '300px',
    height: '200px',
    borderRadius: '8px',
    marginTop: '10px',
  },
  movieName: {
    color: 'black',
    margin: 0, 
    
  },
};

export default MovieCard;
