import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import NavbarMenu from '../components/layout/navbarMenu'
import {useContext, useEffect} from 'react'
import {PostContext} from '../contexts/postContexts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Dashboard = () => {
    //contexts
    const {
        postState: {post, posts, postsLoading},
        getPosts,
        setShowAddPostModal
    } = useContext(PostContext)

    let body = (<>
        <Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
				<Button
					variant='primary'
					href='../assets/cv.pdf'
					size='lg'
				>
                    View my CV
				</Button>
			</Col>
		</Row>
    </>)

    
    return (<>
        {body}
    </>)
}

export default Dashboard