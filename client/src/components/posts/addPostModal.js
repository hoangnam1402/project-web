import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useContext, useState} from 'react'
import {PostContext} from '../../contexts/postContexts'

const AddPostModal = () => {
	// Contexts
	const {
		showAddPostModal,
		setShowAddPostModal,
		addPost,
		setShowToast
	} = useContext(PostContext)

	// State
	const [newPost, setNewPost] = useState({
		name: '',
		gmail: '',
		content: '',
		stat: 'Wait'
	})

	const { name, gmail, content } = newPost

	const onChangeNewPostForm = event =>
		setNewPost({ ...newPost, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddPostData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addPost(newPost)
		resetAddPostData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddPostData = () => {
		setNewPost({ name: '', gmail: '', content: '', stat: 'Wait' })
		setShowAddPostModal(false)
	} 

	return (
		<Modal show={showAddPostModal} onHide={closeDialog} >
			<Modal.Header closeButton>
				<Modal.Title>What do you want to send?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
                    <Form.Group className = 'my-2'>
						<Form.Control
                            type='text'
							placeholder='name'
							name='name'
							value={name}
							onChange={onChangeNewPostForm}
						/>
					</Form.Group>
                    <Form.Group className = 'my-2'>
						<Form.Control
                            type='text'
							placeholder='gmail'
							name='gmail'
							value={gmail}
							onChange={onChangeNewPostForm}
						/>
					</Form.Group>
					<Form.Group className = 'my-2'>
						<Form.Control
                            as='textarea'
                            rows={3}
							placeholder='content'
							name='content'
							required
							aria-describedby='content-help'
							value={content}
							onChange={onChangeNewPostForm}
						/>
						<Form.Text id='content-help' muted>
							Required
						</Form.Text>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog} >
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
                        Send!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddPostModal