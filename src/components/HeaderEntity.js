import React from 'react'

function Header(props) {

    return (
        <div className="entity-grid">
            {props.columns ?
                props.columns.map((column, index) => {
                    return (
                        <>
                    <span className="header" key={index}> {column} </span> 
                    </>
                    )
                }) 
                : " No column"
            }
            <span className="header"> Popup </span>
        </div>
    )

}

export default Header;