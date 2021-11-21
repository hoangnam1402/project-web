import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import AdminMenu from '../components/layout/adminMenu'
import {AuthContext} from '../contexts/authContexts'
import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/postContexts'

const AdminDashboard = () => {
    //contexts
    const {postState: {posts, postsLoading}, getPosts} = useContext(PostContext)

    // Start: Get all posts
    useEffect(() => getPosts(), [])

    const {authState: {isAuthenticated}} = useContext(AuthContext)
    
    return (<>
        <AdminMenu/>
    </>)
}

export default AdminDashboard