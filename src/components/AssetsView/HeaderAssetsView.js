import React from 'react'

function HeaderAssetsView(props) {

    return (
        <>
            {props.columns ?
                props.columns.map((column, index) => {
                    return (
                        
                    <span className="header" key={index}> {column} </span> 
                    
                    )
                }) 
                : " No column"
            }
            <span className="header"> Link to Entities </span>
        </>
    )

}

export default HeaderAssetsView;