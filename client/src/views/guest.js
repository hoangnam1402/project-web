import NavbarMenu from '../components/layout/navbarMenu'
import Contact from './contact'
import Dashboard from './dashboard'
import {AuthContext} from '../contexts/authContexts'
import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const Guest = ({ authRoute }) => {
    const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)
    let body

    if (authLoading)
    {
        body = (
        <div className="d-flex justify-content-center mt-2">
            <Spinner animation ='border' variant='info' />
        </div>
        )
    }
    else if (isAuthenticated) return <Navigate to ='/AdminDashboard' />
    else 
    body = (
    <>
        {authRoute === 'dashboard' && <Dashboard/>}
        {authRoute === 'contact' && <Contact/>}
    </>
    )

    return(<>
        <NavbarMenu/>
        {body}
    </>)
}

export default Guest