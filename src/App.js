import logo from './logo.svg';
import logoLarge from './logoLarge.svg'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoLarge} className="App-logo" alt="logo" />
        <strong className="titleText">ocialpage</strong>
      </header>
      <div className="body">
        <div className="inputClass">
          <input type="text" className="messageInput" placeholder="💬 What do you want to send?"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
