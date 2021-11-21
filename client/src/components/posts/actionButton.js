import Button from 'react-bootstrap/Button'
import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.png'
import {PostContext} from '../../contexts/postContexts'
import {useContext} from 'react'

const ActionButtons = ({ _id }) => {
	const { deletePost, findPost, setShowUpdatePostModal } = useContext(PostContext)

	const choosePost = postId => {
		findPost(postId)
		setShowUpdatePostModal(true)
	}

	return (
		<>
			<Button className='post-button' onClick={choosePost.bind(this, _id)}>
				<img src={editIcon} alt='edit' width='32' height='32' />
			</Button>
			<Button className='post-button' onClick={deletePost.bind(this, _id)}>
				<img src={deleteIcon} alt='delete' width='32' height='32' />
			</Button>
		</>
	)
}

export default ActionButtons