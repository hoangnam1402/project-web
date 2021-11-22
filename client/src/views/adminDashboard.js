import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/postContexts'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/singlePost'
import UpdatePostModal from '../components/posts/updatePostModal'
import Toast from 'react-bootstrap/Toast'

const AdminDashboard = () => {
    //contexts
    const {
        postState: {post, posts, postsLoading},
        getPosts,
        showToast: {show, message, type},
        setShowToast
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

        {/* Show toast after post */}
        <Toast 
            show={show} 
            style={{ position: 'fixed', top: '20%', right: '1%', width: '200px'}} 
            className={`bg-${type} text-white`}
            onClose={setShowToast.bind(this, {
                show: false,
                message: '',
                type: null
            })}
            delay={3000} 
            autohide
        >
            <Toast.Body>
                <strong>{message}</strong>
            </Toast.Body>
        </Toast>
    </>)
}

export default AdminDashboard