
import './App.css';
import Header from './MyComponent/Header';
import Home from './MyComponent/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AddUser from './MyComponent/AddUser';
import EditUser from './MyComponent/EditUser';
import ViewUser from './MyComponent/ViewUser';


function App() {
  return (
    <div className="App">
     <Router>
      <>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  exact path="/addUser" element={<AddUser/>} />
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
          <Route exact path='/viewuser/:id' element={<ViewUser/>}/>

        </Routes>
      
      </>
    </Router>
    </div>
  );
}

export default App;
