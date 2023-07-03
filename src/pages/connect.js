// import logo from './logo.svg';
import Navigation from '../components/Navigation';
import '../styles/connect.scss';
import '../styles/global.scss';

function connect() {
  return (
    <div className="connect">
        <Navigation/>
      <header className="connect-header">
        <h1>connect Page</h1>
      </header>
    </div>
  );
}

export default connect;
