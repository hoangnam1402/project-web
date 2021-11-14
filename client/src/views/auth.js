import LoginForm from '../components/auth/loginform'
import RegisterForm from '../components/auth/registerform'

const Auth = ({ authRoute }) => {
    let body
    
    body = (
    <>
        {authRoute === 'login' && <LoginForm/>}
        {authRoute === 'register' && <RegisterForm/>}
    </>
    )

    return(
        <div className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1>My Infor</h1>
					<h4>Welcome back Admin</h4>
					{body}
				</div>
			</div>
		</div>
    )
}

export default Auth