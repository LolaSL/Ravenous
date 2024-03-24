
import './App.css';
import BusinessList from './BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
    <header>
      <h1>Ravenous</h1>
    </header>
    <main>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </main>
    <footer>

    </footer>
  </div>
  );
}

export default App;
