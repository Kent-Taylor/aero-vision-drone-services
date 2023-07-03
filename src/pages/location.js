// import logo from './logo.svg';
import '../styles/location.scss';
import '../styles/global.scss';
import Navigation from '../components/Navigation';

function location() {
  return (
    <div className="location">
        <Navigation/>
      <header className="location-header">
        <h1>location Page</h1>
      </header>
    </div>
  );
}

export default location;
