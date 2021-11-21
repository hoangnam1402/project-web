import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import NavbarMenu from '../components/layout/navbarMenu'
import {AuthContext} from '../contexts/authContexts'
import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/postContexts'

const Dashboard = () => {
    //contexts
    const {postState: {posts, postsLoading}, getPosts} = useContext(PostContext)


    const {authState: {isAuthenticated}} = useContext(AuthContext)
    
    return (<>
    <NavbarMenu/>
    </>)
}

export default Dashboard