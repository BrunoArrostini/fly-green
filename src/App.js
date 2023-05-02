import './App.css';
import {TbPlaneTilt} from "react-icons/tb"
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header><p>Fly Green</p><TbPlaneTilt style={{fontSize:"30px", color:"green"}}/></header>
      <Main/>
    </div>
  );
}

export default App;
