import './App.css';
import Navbar from './Component/Navbar';
import Add from './Component/pages/Add';
import View from './Component/pages/View';
import Home from './Component/pages/Home';
import Update from './Component/pages/Update';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' Component={Home}/>
        <Route path='/add' Component={Add}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
