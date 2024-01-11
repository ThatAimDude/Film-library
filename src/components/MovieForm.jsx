import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions';

const MovieForm = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({ name: '', description: '', banner: '' });

  const inputStyle = {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    marginBottom: '15px',
    color: 'white',
    backgroundColor: 'black',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    marginBottom: '15px',
    color: 'white',
    backgroundColor: '#304674',
    cursor: 'pointer',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.name && movie.description && movie.banner) {
      dispatch(addMovie(movie));
      setMovie({ name: '', description: '', banner: '' });
    } else {
      alert('Please fill in all fields');
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
      <input
        type="text"
        placeholder="Movie Name"
        name="name"
        value={movie.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        placeholder="Movie Description"
        name="description"
        value={movie.description}
        onChange={handleChange}
        style={inputStyle}
      ></textarea>
      <input
        type="text"
        placeholder="Movie Banner URL"
        name="banner"
        value={movie.banner}
        onChange={handleChange}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Movie</button>
    </form>
  );
};

export default MovieForm;
