// import logo from './logo.svg';
import Navigation from '../components/Navigation';
import '../styles/home.scss';
import BasicCard from '../components/BasicCard';


function home() {
  return (
    <div className="home">
      <Navigation/>
      <header className="home-header">
        Home Page

      </header>
          <BasicCard/>
    </div>
  );
}

export default home;
