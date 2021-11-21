import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import avatar from '../../assets/avatar.jpg'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const NavbarMenu = () => {
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <Image
                    src={avatar}
                    alt='avatar'
                    width='32'
                    height='32'
                    className='mr-2'
                    roundedCircle
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
                        to='/contact'
                        as={Link}
                    >
                    Contact
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Link to='/'>
                        <Button
                            variant='secondary'
                            className='font-weight-bolder text-white'
                        >
                            Login
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default NavbarMenu