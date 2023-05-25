import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import Testing from './components/testing';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <header className="App-header">
      <Testing></Testing>
      </header>
    </div>
  );
}

export default App;
