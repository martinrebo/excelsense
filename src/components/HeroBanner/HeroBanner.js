import React from 'react'
import './HeroBanner.css'
import { Link } from 'react-router-dom'

function HeroBanner() {
    return (
        <div className="heroBanner">
            <div className="heroContent">      
            <h1> ExcelSense Technical Test </h1>
            <Link className="link" to="/"> Assets </Link>
            <Link className="link" to="/entity/nofilter/"> Entities </Link>

            </div>

        </div>
    )
}

export default HeroBanner;