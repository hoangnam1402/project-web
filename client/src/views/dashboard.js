import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cv from '../assets/cv.pdf'

const Dashboard = () => {
    //contexts
    const [showCV, setShowCV] = useState(false)
    const handleShow = () => {
        setShowCV(true);
    }

    let body = (<>
        <Row className='mt-5' style={{ marginRight: 0 }}>
            <Col className='text-center'>
                {/*  <embed src="../assets/cv.pdf" width="800px" height="2100px" /> */}
                {showCV ? (<iframe src={cv} style={{ width: '100%', height: '100vh', border: 'none', }}></iframe>) : (<>
                    <Button
                        variant='primary'
                        onClick={handleShow}
                        size='lg'
                    >
                        View my CV
                    </Button></>)}
            </Col>
        </Row>
    </>)


    return (<>
        {body}
    </>)
}

export default Dashboard