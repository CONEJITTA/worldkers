import logo from './logo.svg';
import './App.css';
import './HomeNavbar.css';
import Component from './Component';
import HomeNavbar from './HomeNavbar';

function App() {
  return (
    
    <div className="App">
      <HomeNavbar/>
      <header className="App-header">


        <p>
          <img src={logo} alt="Logo" /> 
        </p>
        
        <p class = 'slogan'>
          Meet your coworkers from everywhere around the globe
        </p>

       

      
    
        

        
      </header>
    </div>
  );
}

export default App;
