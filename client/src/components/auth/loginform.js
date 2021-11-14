import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

const LoginForm = () => { 
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
            <Button variant='success' type='submit'> Login </Button>
    </Form>
    <p> Not an admin?
        <Link to='/'>
            <Button variant='info' size='sm' className='ml-2'> Continue as Guest </Button>
        </Link>
    </p>
    </>)
}

export default LoginForm