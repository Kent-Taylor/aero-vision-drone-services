// import logo from './logo.svg';
import Navigation from '../components/Navigation';
import '../styles/home.scss';


function home() {
  return (
    <div className="home">
      <Navigation/>
      <header className="home-header">
        Home Page
      </header>
    </div>
  );
}

export default home;
