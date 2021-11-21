import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useContext, useState, useEffect} from 'react'
import {PostContext} from '../../contexts/postContexts'

const UpdatePostModal = () => {
	// Contexts
	const {
		postState: {post},
		showUpdatePostModal,
		setShowUpdatePostModal,
		updatePost,
		setShowToast
	} = useContext(PostContext)

	// State
	const [updatedPost, setUpdatedPost] = useState(post)

	useEffect(() => setUpdatedPost(post), [post])

	const {name, gmail, content, stat} = updatedPost

	const onChangeUpdatedPostForm = event =>
		setUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value })

	const closeDialog = () => {
		setUpdatedPost(post)
		setShowUpdatePostModal(false)
	}

	const onSubmit = async event => {
		event.preventDefault()
		const {success, message} = await updatePost(updatedPost)
		setShowUpdatePostModal(false)
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	// const resetAddPostData = () => {
	// 	setNewPost({ name: '', content: '', gmail: '', stat: 'Wait' })
	// 	setShowAddPostModal(false)
	// }

	return (
		<Modal show={showUpdatePostModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Change status?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
                    <Form.Group className = 'my-2'>
						<Form.Control
                            type='text'
							placeholder='name'
							name='name'
							value={name}
							onChange={onChangeUpdatedPostForm}
                            readOnly
						/>
                    </Form.Group>
					<Form.Group className = 'my-2'>
						<Form.Control
                            type='text'
							placeholder='gmail'
							name='gmail'
							value={gmail}
							onChange={onChangeUpdatedPostForm}
                            readOnly
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
							onChange={onChangeUpdatedPostForm}
                            readOnly
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='select'
							value={stat}
							name='stat'
							onChange={onChangeUpdatedPostForm}
						>
							<option value='Wait'>Wait</option>
							<option value='Read'>Read</option>
							<option value='Reply'>Reply</option>
						</Form.Control>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						Save!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default UpdatePostModal