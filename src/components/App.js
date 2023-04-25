import React from 'react'
import Logo from '../assets/Logo.svg'
import '../styles/App.css';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      
        <div className="Basic-container">

          <div className="Left-section">
          
            <img src={Logo} alt="logo" />
            <h1 className="primary-heading">
              Live Movies, live Cinefy
            </h1>
            <p className="primary-text">
            The exclusive streaming service that offers a diverse collection of Tunisian movies.
            Try it now for the ultimate streaming experience.
            </p>
            
          
          </div>
          <div className="Right-section">
              <SignIn/>
          </div>
      </div>
 


    </div>
  );
}

export default App;
