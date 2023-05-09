import './App.css';
import Main from './components/Main/Main';
import {TbPlaneTilt} from 'react-icons/tb'

function App() {
  return (
    <div className="App">
      <header><p>Fly Green</p><TbPlaneTilt style={{fontSize:"30px", color:"gray"}}/></header>
      <Main/>
      <footer style={{textAlign:"center", fontSize:"12px", fontFamily:"Bruno Ace SC, cursive"}}>Bruno Arrostini</footer>
    </div>
  );
}

export default App;
