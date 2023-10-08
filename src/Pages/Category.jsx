import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductData from '../Data/ProductsData'
ProductData

function Category() {
    let {cid}=useParams()
    let abc=ProductData.filter((a)=>a.category==cid)

  return (
    <div>
           <div className="container py-5">
                <h2 className='py-2 font-bold text-uppercase'>{cid}</h2>
                <div className="row">
                    {abc.map((a)=>(
                            <div className="col-md-3 col-sm-6">
                            <div className="product-grid2">
                                <div className="product-image2">
                                    <Link to={`/detail/${a.id}`}>
                                        <img className="pic-1" src={a.thumbnail} />
                                        <img className="pic-2" src={a.thumbnail} />
                                    </Link>
                                    <ul className="social">
                                        <li><a href="#" data-tip="Quick View"><i className="fa fa-eye" /></a></li>
                                        <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                                        <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
                                    </ul>
                                    <a className="add-to-cart" href>Add to cart</a>
                                </div>
                                <div className="product-content">
                                    <h3 className="title"><a href="#">{a.title}</a></h3>
                                    <span className="price">$599.99</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>
    </div>
  )
}

export default Category