import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Posts from './components/Posts';
import {useState} from 'react';

function App() {
  
  const [toggle,setToggle] = useState(false);
  function clicked()
  {
     let temp = toggle;
     temp = !temp ;
     setToggle(temp);
     alert("Number Entered is :" + document.getElementById('values').value)
  }
  return (
    <Router>
      <div className="App" style = {{backgroundColor : 'grey'}}>

        <h1 style = {{color : 'brown'}}>Currency Converter Web Application</h1>

        <div> Enter The Amount In <b>INR</b></div>
        <br />
        <input type = "text" name = "inputVal" placeholder='Enter Amount in INR' id = 'values'/>
        <br />
        <br />
        <div>
        <button type = "submit" onClick={clicked}>Submit</button>
        {
          toggle ? <Posts 
          textValue = {document.getElementById('values').value}
          />:null
        }
        </div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}
export default App;
