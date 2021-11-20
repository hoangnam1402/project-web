import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import avatar from '../../assets/avatar.jpg'
import logoutIcon from '../../assets/logout.png'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {AuthContext} from '../../contexts/authContexts'
import {useContext} from 'react'

const NavbarMenu = () => {
    const {
        logoutUser
    } = useContext(AuthContext)

    const logout = () => logoutUser()

    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <img
                    src={avatar}
                    alt='avatar'
                    width='32'
                    height='32'
                    className='mr-2'
                    border-radius='50%'
                />
                Nam Phan
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link
                        className='font-weight-bolder text-white'
                        to='/dashboard'
                        as={Link}
                    >
                    Dashboard
                    </Nav.Link>
                    <Nav.Link
                        className='font-weight-bolder text-white'
                        to='/about'
                        as={Link}
                    >
                    About
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link className='font-weight-bolder text-white' disabled>
                        Welcome Admin
                    </Nav.Link>
                    <Link to='/'>
                        <Button
                            variant='secondary'
                            className='font-weight-bolder text-white'
                            onClick={logout}
                        >
                            Logout
                            <img
                                src={logoutIcon}
                                alt='logoutIcon'
                                width='32'
                                height='32'
                                className='mr-2'
                            />
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default NavbarMenu