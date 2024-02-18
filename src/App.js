// Import data
import Sidebar from './Sidebar.js'
import Searchbar from './Searchbar'
import Directory from './Directory'
import Gallery from './Gallery'

// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar />
        <Searchbar />
        <Directory />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
