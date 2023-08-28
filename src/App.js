import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import News from "./components/News";
import Movies from "./components/Movies";
import movie from "./movie.json";
import { element } from "prop-types";
import NewM from "./components/NewM";
import { Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
function App() {
 const login = false
  return (
    <div className="App">
 {

  (() => {
      if(login)
      {
        return(
          <h1 >okay</h1>
        )
      }else if(login == 'sadad')
      {
        return(
          <h1>chakkar hi nhi aa</h1>
        
        )
      }
      
      else
      {
        return(
          <h1>No</h1>
        )
      }

  })()
 }
    <Header />
     
      <div className="main">
        {movie.map((element, index) => {
          return (
            <Movies
            key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}

      </div>

      <div>
      {/*
      {
        movie.map((element, index,name,email) => {
          return(
            <Data 
            key={index}
            img={element.Poster}
          
          />  
          );
        }
        )
      }
    */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
