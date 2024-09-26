import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eyeshadow from './assets/Eye.png'
import lip from './assets/lipglow.png'
import vedio from './assets/vediotrend.mp4'


const Trends = () => {
    return (
        <>
            <h1 className='fw-bolder m-5'>TRENDS YOU CAN'T MISS

</h1>

        <Container fluid="md">
            <Row>
                <Col>
                <video  style={{height:"510px"}} src={vedio} autoPlay loop />

                </Col>
                <Col>
                    <Row>
                        <img className='img-fluid mt-1' src={lip} alt="" />
                    </Row>
                    <Row>
                        <img className='mt-2 img-fluid' src={eyeshadow} alt="" />
                    </Row>

                </Col>
            </Row>
            <Row>

            </Row>
        </Container>
        </>

    )
}

export default Trends