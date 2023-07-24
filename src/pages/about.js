// import logo from './logo.svg';
import Navigation from '../components/Navigation';
import '../styles/about.scss';

function about() {
  return (
    <div className="about">
      <Navigation/>
        <header className="about-header">
        <h1>About</h1>
      </header>
    </div>
  );
}

export default about;
