import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import AdminMenu from '../components/layout/adminMenu'
import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/postContexts'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/singlePost'
import addIcon from '../assets/add.png'
import UpdatePostModal from '../components/posts/updatePostModal'

const AdminDashboard = () => {
    //contexts
    const {
        postState: {post, posts, postsLoading},
        getPosts,
        setShowAddPostModal
    } = useContext(PostContext)

    // Start: Get all posts
    useEffect(() => getPosts(), [])

    let body = null

    if(postsLoading){
        body = (
            <div className="spinner-container">
                <Spinner animation ='border' variant='info' />
            </div>
        )
    } else {
        body = (<>
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                {posts.map(post => (
                    <Col key={post._id} className='my-2'>
                        <SinglePost post={post} />
                    </Col>
                ))}
            </Row>
        </>)
    }
    
    return (<>
        {body}
        {post !== null && <UpdatePostModal />}
    </>)
}

export default AdminDashboard