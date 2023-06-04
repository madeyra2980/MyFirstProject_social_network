import "./App.css";
import NatoImg from "../src/img/NATO_OTAN_landscape_logo.svg"
import Header from "./Components/Header";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <div className="app-wrapper"> 
   <Header/>
    <Nav/>
          
          <div className="content">
            <div>
              <img src={NatoImg} alt="nato"/>
              </div>
          </div>
       </div>    


    </div>
  );
}

export default App;
