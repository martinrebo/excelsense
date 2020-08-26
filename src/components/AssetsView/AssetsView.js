import React from 'react'
import { Link } from 'react-router-dom'
import './AssetsView.css'

function AssetsView(props) {
    return(
        <div className="grid">
            <span> {props.asset.id} </span>
            <span> {props.asset.n_number} </span> 
            <span> {props.asset.t_city} </span>
            <span> {props.asset.t_code} </span>
            <span> {props.asset.t_street_name} </span>
            <span> <Link to={`/entity/${props.asset.id}` }> Link to Entity  </Link></span>
        </div>
    )
}

export default AssetsView;