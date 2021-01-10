import './App.css';
import Navbar from './components/Navbar';
import Flavours from './components/Flavours';
import Shops from './components/Shops';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Sarah's Ice Cream React Site</h1>
      </header>
      <Gallery />
      <Flavours />
      <Shops />
    </div>
  );
}

export default App;
