import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/layout/landing'
import Dashboard from './views/dashboard'
import AdminDashboard from './views/adminDashboard'
import Auth from './views/auth'
import AuthContextProvider from './contexts/authContexts'
import PostContextProvider from './contexts/postContexts'
import {AuthContext} from './contexts/authContexts'
import {useContext} from 'react'
import {Navigate} from 'react-router-dom'

function App() {
  return ( 
  <AuthContextProvider>
    <PostContextProvider>
    <Router>
        <Routes>
          <Route path = '/' element = {< Landing />} />
          <Route path = '/login' element = {< Auth authRoute='login' />} />
          <Route path = '/dashboard' element = {< Dashboard />} />
          <Route path = '/admindashboard' element = {
            <PrivateRoute redirectTo="/login">
              < AdminDashboard />
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </PostContextProvider>
  </AuthContextProvider>
  );
}

function PrivateRoute({ children, redirectTo }) {
  const {authState: {isAuthenticated}} = useContext(AuthContext)
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
