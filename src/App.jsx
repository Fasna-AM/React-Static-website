import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import annoucementBar from '/annoucementbar-img.webp'
import Logo from '/HOK_LOGO.avif'
import './App.css'
import ProductSlider from './PoductSlider'
import Carousal from './Carousal'
import NewArrival from './NewArrival'
import Trends from './Trends'
import offer from './assets/offerimg.webp'
import BuzzCrousal from './BuzzCrousal'
import Footer from './Footer'




function App() {


  return (
    <>
      <div className="container-fluid">
        {/*....navigationbar..... */}
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img style={{ width: '200px' }} src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5 px-5">
            <Nav.Link href="#">New Arrival</Nav.Link>
            <Nav.Link href="#">Makeup</Nav.Link>
            <Nav.Link href="#">Skin</Nav.Link>
            <Nav.Link href="#">Hair</Nav.Link>
            <Nav.Link href="#">Fragrance</Nav.Link>
            <Nav.Link href="#">Combos</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        {/* .....Announcement bar.... */}
        <div style={{ position: "relative" }} className="announcementBar w-100 d-flex flex-column justify-content-center align-items-center">

          <div style={{ position: "absolute" }} className="announcementContent ">
            <p>Grab upto 30% + Extra 20% OFF on orders above ₹1999 on your favorite brands.</p>
            <p>*automatically applied at checkout, Cannot be used in conjunction with any other offer.</p>
          </div>
          <div className="announcemetImage ">
            <img src={annoucementBar} alt="" />

          </div>
        </div>
        {/*...... carousal..... */}
        <Carousal />

        {/* slider */}
        <ProductSlider/>

        {/* New Arrivals */}
        <NewArrival/>

        {/* Trends */}
        <Trends/>
        <div className='container m-5  '>
          <img className='img-fluid w-100 mt-5 ' src={offer} alt="" />
        </div>
        {/* buzz crousal */}
        <BuzzCrousal/>

        {/* footer */}
        <Footer/>
      </div>
    </>
  )
}

export default App
