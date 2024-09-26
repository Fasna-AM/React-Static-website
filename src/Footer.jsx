import React from 'react'


const Footer = () => {
    return (
        <>
            <footer style={{ backgroundColor: "lightgray", width: "100%" }}>
                <div className="trusted d-flex flex-column justify-content-center align-items-center  p-4">
                    <h2>TRUSTED BY OUR FAM !!</h2>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <div className='ms-5'>
                            <h2 className="fw-bolder">2012</h2>
                            <p>Founded</p>
                        </div>
                        <div className='p-4'>
                            <h2 className="fw-bolder ">2K+</h2>
                            <p>Products</p>
                        </div>
                        <div>
                            <h2 className="fw-bolder">25+</h2>
                            <p>Brands</p>
                        </div>
                        <div className='p-4'>
                            <h2 className="fw-bolder">10M+</h2>
                            <p>Orders Deliverd</p>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center align-items-center p-5  bg-dark items-light flex-wrap" >
                    <div className='d-flex flex-column justify-content-center align-items-center ms-5 px-5'>
                        <p className='border  rounded text-light p-1' >100%</p>
                        <p className="text-white fw-bolder">100% Authentic</p>
                        <p className="text-white text-center">Our Gaurantee</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center ms-5 px-5'>
                    <i class="fa-regular fa-credit-card" style={{color:"white",fontSize:"40px"}}></i>           

                        <p className="text-white fw-bolder mt-2">Secured Payment</p>
                        <p className="text-white text-center">100% guarantee</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center ms-5 px-5'>
                    <i class="fa-solid fa-truck-fast" style={{color:"white",fontSize:"40px"}}></i>
                                 <p className="text-white fw-bolder mt-2">Free shipping</p>
                        <p className="text-white text-center">above Rs.699</p>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center  p-4 flex-wrap'>
                    <h3 className="fw-bolder">Don’t miss an update!</h3>
                    
                    <p>The latest product drops, offers and stories straight to your phone, plus 20% off your next order</p>
                    <input type="text" placeholder='*Enter your email' style={{height:"50px", margin:"10px",textAlign:"center"}}/>
                    <button className='btn p-3 border-dark bg-white'>SUBSCRIBE</button>
                </div>
                <div className='d-flex  justify-content-center justify-content-evenly align-items-center bg-light p-4 flex-wrap '>
                    <div>
                        <h4 className="fw-bolder">Quick Links</h4>
                        <div className="d-flex flex-column mt-3">
                        <a style={{textDecoration:"none", color:"black",marginTop:"8px"}} href="">About Us</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Contact Us</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Terms and conditions</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Return Policy</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Shipping Policy</a>
                        </div>

                    </div>
                    <div>
                        <h4 className="fw-bolder">Categories</h4>
                        <div className="d-flex flex-column mt-3">
                        <a style={{textDecoration:"none", color:"black",marginTop:"8px"}} href="">Eyes</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Face</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Brushes</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Lips</a>
                        <a style={{textDecoration:"none", color:"black",marginTop:"10px"}} href="">Nails</a>
                        </div>


                    </div>
                    <div>
                    <h4 className="fw-bolder">Help Desk</h4>
                    <p className="mt-5">Call : +9175864152</p>
                    <p className="mt-1">Email : support@hotmail.com</p>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer