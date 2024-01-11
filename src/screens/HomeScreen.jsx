import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";

function Homescreen() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <MovieForm />
      <MovieList />
    </div>
  );
}

export default Homescreen;
