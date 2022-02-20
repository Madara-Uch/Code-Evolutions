import logo from './logo.svg';
import './App.css';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (

    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/signin" element={<SignIn></SignIn>}>
          </Route>
          <Route path="/signup" element={<SignUp></SignUp>}>
          </Route>
          <Route path="/profile" element={<Profile></Profile>}>
          </Route>
          <Route path="/" element={<Home></Home>}>
          </Route>
        </Routes>
        
      </Router>
    </div>

  

  );
}

export default App;
