import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import NavbarMenu from '../components/layout/navbarMenu'
import AdminMenu from '../components/layout/adminMenu'
import {AuthContext} from '../contexts/authContexts'
import {useContext} from 'react'

const Dashboard = () => {
    const {authState: {isAuthenticated}} = useContext(AuthContext)
    if(isAuthenticated) return (<>
        <AdminMenu/>
        <p> Not think here
        <Link to='/'>
            <Button variant='info' size='sm' className='ml-2'> Go back </Button>
        </Link>
        </p>
    </>)
    return (<>
    <NavbarMenu/>
    <p> Not think here
        <Link to='/'>
            <Button variant='info' size='sm' className='ml-2'> Go back </Button>
        </Link>
    </p>
    </>)
}

export default Dashboard