import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/layout/landing'
import Auth from './views/auth'
import AuthContextProvider from './contexts/authContexts'

function App() {
  return ( 
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route exact path = '/' element = {< Landing />} />
        <Route exact path = '/login' element = {< Auth authRoute='login' />} />
        <Route exact path = '/register' element = {< Auth authRoute='register' />} />
      </Routes>
    </Router>
  </AuthContextProvider>
  );
}

export default App;
