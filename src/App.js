import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard'
import Registration from './components/registration/Registration'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <Router>
      <Routes>
        <Route exact path="/">
          {isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        </Route>
        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        </Route>
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
} 

export default App;
