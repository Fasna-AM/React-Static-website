import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousalImg1 from './assets/BuzzCarousalimg1.webp'
import carousalImg2 from './assets/BuzzCarousalimg2.webp'
import carousalImg3 from './assets/BuzzCarousalimg3.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const BuzzCrousal = () => {
    return (
        <div>
            <h1 className='fw-bolder m-5 p-5'>THE BUZZ IS ON!!!</h1>
            <Carousel className='m-5 p-5' >
                <Carousel.Item interval={4000}>
                    <Container fluid="md">
                        <Row>
                            <Col>
                                <img style={{ width: '500px', height: '300px' }} src={carousalImg1} alt="" />

                            </Col>
                            <Col>
                                <div className="text-center d-flex flex-colum justify-content-center align-items-center"style={{ backgroundColor: "gray", marginLeft: "-152px",height: '300px'  }}>
                                <div className="" >
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h3>L.A. GIRL PRO CONCEAL H D</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique autem nam in, animi deserunt dolore nobis dicta maiores omnis laborum cupiditate inventore magnam, porro dolores maxime libero fuga fugiat.</p>
                                    <br />
                                    <p>   - Riya Sigh (1/10/2024)</p>
                                </div>

                                </div>
                            </Col>
                        </Row>

                    </Container>

                </Carousel.Item >
                <Carousel.Item interval={2000}>
                <Container fluid="md">
                        <Row>
                            <Col>
                                <img style={{ width: '500px', height: '300px' }} src={carousalImg2} alt="" />

                            </Col>
                            <Col>
                                <div className="text-center d-flex flex-colum justify-content-center align-items-center"style={{ backgroundColor: "gray", marginLeft: "-152px",height: '300px'  }}>
                                <div className="" >
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h3>L.A. GIRL PRO CONCEAL H D</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique autem nam in, animi deserunt dolore nobis dicta maiores omnis laborum cupiditate inventore magnam, porro dolores maxime libero fuga fugiat.</p>
                                    <br />
                                    <p>   - Riya Sigh (1/10/2024)</p>
                                </div>

                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <Container fluid="md">
                        <Row>
                            <Col>
                                <img style={{ width: '500px', height: '300px' }} src={carousalImg2} alt="" />

                            </Col>
                            <Col>
                                <div className="text-center d-flex flex-colum justify-content-center align-items-center"style={{ backgroundColor: "gray", marginLeft: "-152px",height: '300px'  }}>
                                <div className="" >
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h3>L.A. GIRL PRO CONCEAL H D</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique autem nam in, animi deserunt dolore nobis dicta maiores omnis laborum cupiditate inventore magnam, porro dolores maxime libero fuga fugiat.</p>
                                    <br />
                                    <p>   - Riya Sigh (1/10/2024)</p>
                                </div>

                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Carousel.Item>
            </Carousel>
            l</div>
    )
}

export default BuzzCrousal