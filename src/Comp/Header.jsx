import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Detail from '../Pages/Detail'

function Header() {
    return (
        <>
        <header className='border-bottom shadow'>
        <div className='container py-4 '>
            <div className="row">
                <div className="col-lg-4">
                    <img className='w-50' src="https://durbarmart.com/uploads/all/KWRwkwNXW4DZp8DXtuJoJhUcvenpoO93w3l3Bt8z.webp" alt="" /></div>
                <div className="col-lg-6">
                    <form className="d-flex offset-lg-1" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
                <div className="col-lg-2 text-end">
                    <button type="button" class=" btn position-relative">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cat/:cid' element={<Category/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
        </>
    )
}

export default Header