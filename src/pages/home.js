// import logo from './logo.svg';
import Navigation from '../components/Navigation';
import '../styles/home.scss';

function home() {
  return (
    <div className="home">
      <Navigation/>
      <header className="home-header">
        <h1>Home Page</h1>
      </header>
    </div>
  );
}

export default home;
