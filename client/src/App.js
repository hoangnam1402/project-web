import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/layout/landing'
import Dashboard from './views/dashboard'
import Auth from './views/auth'
import AuthContextProvider from './contexts/authContexts'
import PostContextProvider from './contexts/postContexts'

function App() {
  return ( 
  <AuthContextProvider>
    <PostContextProvider>
    <Router>
        <Routes>
          <Route path = '/' element = {< Landing />} />
          <Route path = '/login' element = {< Auth authRoute='login' />} />
          <Route path = '/dashboard' element = {< Dashboard />} />
        </Routes>
      </Router>
    </PostContextProvider>
  </AuthContextProvider>
  );
}

export default App;
