import React from 'react';
import { BrowserRouter , Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//Components
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import News from './components/News.js';
import Resume from './documents/Resume.js';

function Menu() {
   return(
     <div className="div_menu">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/news">News</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
           </ul>
     </div>
   )
}

function App(){
  return (
   <BrowserRouter> 
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Web UI - Links Assessment (ComIT 2020)</h1>
            <h2>using Reactjs</h2>
         </header>
         <Switch>
             <Route exact path="/">
                <h3 className="sw_header">Home</h3>
             </Route>
             <Route path="/about">
                <h3 className="sw_header">About</h3>
             </Route>
             <Route path="/contact">
                <h3 className="sw_header">Contact</h3>
             </Route>
             <Route path="/news">
                <h3 className="sw_header">News</h3>
             </Route>
             <Route path="/documents">
                <h3 className="sw_header">Resume</h3>
             </Route>
         </Switch>
         
         <Menu />
         <Switch>
             <Route exact path="/">
                <Home />
             </Route>
             <Route path="/news">
                <News />
             </Route>
             <Route path="/about">
                <div className="div_main_content">
                   <Link to="/documents">View my resume</Link>
                </div>   
             </Route>
             <Route path="/contact">
                <Contact />
             </Route>
             <Route path="/documents">
                <Resume />
             </Route>
         </Switch>
      </div>
   </BrowserRouter>  
  );
}

export default App;