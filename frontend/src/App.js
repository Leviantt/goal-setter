import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={ <Dashboard /> }/>
          <Route path='/register' element={ <Register />}/>
          <Route path='/login' element={ <Login /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
