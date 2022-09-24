//import logo from './logo.svg';
import './App.css';
import image from './images/cr7.jpg';
import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';
import Form from './components/Form';
import ToDoList from './ToDoList';


function Profile(){
  return(
    <div className='color'>
      <label>Name</label>
      <input type="text" tabindex="1.0" /><br />
      <label>Email</label>
      <input type="text" /><br />
      <label>password</label>
      <input type="password" /><br />
      <label>Choose your branch</label>
      <select name="Branch" id="Branch">
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="CIVIL">CIVIL</option>
        <option value="MECH">MECH</option></select><br />
      <label>Description</label><br />
      <textarea cols="50" rows="20"></textarea><br />
      <input type="submit" />
    
    </div>
 );
 } 


function Forms(){
  return(
    <div>
      <head>My web page</head>
      <img src={image}/>
      <table>
      <tr>
     <td>Name</td>
      <td>Email</td>
      <td>Phone</td>
    </tr> 
      </table>
     
    </div>
  );
}

function Linking(){
  return(
    <div>
       <a href="https://google.com">Google</a>
    </div>
  );
  }


  
function About(){
  return(
    <div className="div3">This is my about component</div>
  );
}
  

function Contact(){
  return(
    <div className="div2">This is my contact component</div>
  );
}

function Teams(){
  return(
    <div className="div1">This is my team <br/>
        There are four members</div>
  );
}

function NavBar(){
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/team">Teams</Link>
      <Link to="/form">Add-student</Link>
      <Link to="/todo-list">ToDoList</Link>
      
    </div>
  );
 } 

 
    




function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <NavBar />
    <Routes>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route> 
    <Route path="/team" element={<Teams />}></Route> 
    <Route path="/form" element={<Form />}></Route>   
    <Route path="/todo-list" element={<ToDoList />}></Route> 
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}



export default App;
