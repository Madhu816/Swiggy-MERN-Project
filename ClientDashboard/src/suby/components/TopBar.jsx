import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
            <section className="topBarSection">
                <div className="companyTitle">
                    <Link to="/" className='link'>
                    <h2 style={{color:"orangered"}}>SUBY</h2>
                    </Link>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="search..." />
                </div>
                <Link to="http://localhost:5173/" style={{color:"red",textDecoration:"none"}} className="userAuth">Login/Sign-Up</Link>

            </section>
    )
}

export default TopBar
