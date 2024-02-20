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
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="directory">
          <Directory />
        </div>
        <div className="gallery">
          <Gallery />
        </div>
        
      </div>
    </div>
  );
}

export default App;
