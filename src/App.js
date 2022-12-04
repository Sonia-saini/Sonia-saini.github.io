import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import About from './component/About';
import Contact from './component/Contact';
import Allroutes from './route/Allroutes';
function App() {
  return (
    <div className="App">
      
     <Navbar/> 
     <Allroutes/>
   
   
    </div>
  );
}

export default App;
