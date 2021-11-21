import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ActionButtons from './actionButton'

const SinglePost = ({ post: { _id, stat, name, gmail, content } }) => (
	<Card
		className='shadow'
		border={
			stat === 'Reply'
				? 'success'
				: stat === 'Read'
				? 'warning'
				: 'danger'
		}
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{name}</p>
                        <Card.Text>{gmail}</Card.Text>
						<Badge
							pill
							variant={
                                stat === 'Reply'
                                ? 'success'
                                : stat === 'Read'
                                ? 'warning'
                                : 'danger'
							}
						>
                            {stat}
						</Badge>
					</Col>
					<Col className='text-right'>
                        <ActionButtons _id={_id}/>
					</Col>
				</Row>
			</Card.Title>
			<Card.Text>{content}</Card.Text>
		</Card.Body>
	</Card>
)

export default SinglePost