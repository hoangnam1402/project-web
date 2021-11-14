import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link, useNavigate} from 'react-router-dom'
import {useState, useContext} from 'react'
import {AuthContext} from '../../contexts/authContexts'

const LoginForm = () => { 
    //context
    const {loginUser} = useContext(AuthContext)

    //route
    const navigate = useNavigate()

    //local state
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const {username, password} = loginForm

    const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]: event.target.value})

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            if (loginData.success)  {
                navigate('/dashboard')
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
    <Form className = 'my-4' onSubmit = {login} >
        <Form.Group>
            <Form.Control
                type='text'
                placeholder='Username'
                name='username'
                required
                value={username}
                onChange={onChangeLoginForm}
            />
        </Form.Group>
        <Form.Group>
            <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                required
                value={password}
                onChange={onChangeLoginForm}
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