import './index.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Planets from './components/Planets';

function App() {
  return (
    <Router >
      <Header/>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path='planets' element={<Planets/>}/>
    </Routes>
    </Router>
  );
}

export default App;
