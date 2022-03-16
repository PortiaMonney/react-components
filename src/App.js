import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar"
import { Paragraph } from "./components/paragraph"
import { Input } from "./components/input"
import { Myself } from "./components/myself"
import { Counter } from "./components/Counter"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph />
      <input type="baabamonney" />
      <Myself name="Prince" age={20} gender="Male" />
      <Myself name="Ekow" age={30} gender="Male" />
      <Myself name="Joshua" age={40} gender="Male" />
      <Myself name="Portia" age={50} gender="F
      emale" />
      <Counter />





    </div>
  );
}

export default App;
