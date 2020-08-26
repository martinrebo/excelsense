import React, { useRef } from 'react'
import Menu from '../components/Menu'


const EntitiesView = ({ columns, isLoading, isError, filteredEntities }) => {
    const outerRef = useRef(null);


    return (
        <div ref={outerRef}>
        <Menu outerRef={outerRef}></Menu>
            <div className="entity-grid">

                {columns ? columns.map((column, index) => {
                    return (
                        <>
                            <span className="header" key={index}> {column} </span>
                        </>
                    )
                }) : " "

                }
                {isLoading ? "...loading" : filteredEntities.map((entities, index) => {
                    let objectKey = Object.keys(entities)
                    return (
                        <>
                            
                                {objectKey.map((property, i) => {
                                    return (<span data-id={entities.id} > {entities[property]} </span>)
                                })}
                           
                        </>

                    )

                })}

                {isError ? "...There is a problem" : ""}
            </div>
        </div>
    )

}

export default EntitiesView;
