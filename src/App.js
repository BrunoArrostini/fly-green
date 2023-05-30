import './App.css';
import Pages from './components/Pages';
import {Link} from "react-router-dom"
import {HelmetProvider} from "react-helmet-async"

function App() {
  return (
    <HelmetProvider>
    <div className="App">
      <header><p>Fly Green</p></header>
      <Pages/>
      <footer>Bruno Arrostini</footer>
      <p style={{textAlign:"center", fontSize:"10px"}}>Powered by <Link style={{color:"black"}} to='https://www.goclimate.com'>goclimate</Link></p>
    </div>
    </HelmetProvider>
  );
}

export default App;
