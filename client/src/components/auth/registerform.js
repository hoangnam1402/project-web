import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const RegisterForm = () => { 
    return (<>
        <Form className = 'my-4'>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Username'
                    name='username'
                    required
    /*                 value={username}
                    onChange={onChangeLoginForm} */
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    required
    /*                 value={password}
                    onChange={onChangeLoginForm} */
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    required
    /*                 value={password}
                    onChange={onChangeLoginForm} */
                />
            </Form.Group>
                <Button variant='success' type='submit'> Register </Button>
        </Form>
        <p> Do not what to create new acc?
            <Link to='/'>
                <Button variant='info' size='sm' className='ml-2'> Go back </Button>
            </Link>
        </p>
    </>)
}

export default RegisterForm