import Button from 'react-bootstrap/Button'
import addIcon from '../assets/add.png'
import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/postContexts'
import AddPostModal from '../components/posts/addPostModal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Toast from 'react-bootstrap/Toast'

const Contact = () => {
    //contexts
    const {
        postState: {post, posts, postsLoading},
        getPosts,
        setShowAddPostModal,
        showToast: {show, message, type},
        setShowToast,
    } = useContext(PostContext)

    let body = null

    body = (<>
            {/* Open Add Post Modal */}
            <OverlayTrigger
                placement='left'
                overlay={<Tooltip>Leave message</Tooltip>}
            >
                <Button
                    className='btn-floating'
                    onClick={setShowAddPostModal.bind(this, true)}
                >
                    <img src={addIcon} alt='add-post' width='40' height='40' />
                </Button>
            </OverlayTrigger>
    </>)

	return (<>
        {body}
        <AddPostModal/>

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

export default Contact