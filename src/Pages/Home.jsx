import React from 'react'
import CatData from '../Data/CatData'
import HomeProduct from '../Comp/HomeProduct'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className='container py-3'>
            <div className="row">
                <div className="col-lg-3">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">An active item</li>
                        {CatData.slice(0,9).map((a)=>(
                                 <li class="list-group-item"><Link to={`/cat/${a}`} className='link-dark text-decoration-none '>{a}</Link></li>
                        ))}
                       

                    </ul>
                </div>
                <div className="col-lg-9">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval={10000}>
                                <img src="https://durbarmart.com/uploads/all/Lv7FDpmmD3aqNNgQp0yddsn9EH60BLlZtgFzc6Rv.png" className="d-block w-100" alt="..." />

                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <img src="https://durbarmart.com/uploads/all/gRXmjmWvEZD0ggTzEFGKRNM3hNWruVD6O6j5A5o1.png" className="d-block w-100" alt="..." />
                               
                            </div>
                            <div className="carousel-item">
                                <img src="https://durbarmart.com/uploads/all/Lv7FDpmmD3aqNNgQp0yddsn9EH60BLlZtgFzc6Rv.png" className="d-block w-100" alt="..." />
                            
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
        <HomeProduct tt='smartphones'/>
        <HomeProduct tt='laptops'/>
        <HomeProduct tt='fragrances'/>
        <HomeProduct tt='skincare'/>
        </>
    )
}

export default Home