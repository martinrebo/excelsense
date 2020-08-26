import React from 'react'
import { useParams } from 'react-router-dom'
import useDataApi from 'use-data-api';



function Entities(props) {

    let { entityId } = useParams();

    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        '/api/entities',
        { entities: [] },
    );
    const filteredEntities = data.entities.filter(entitity => entitity.id_asset === parseInt(entityId))



    const getKeys = () => {
        if (data.entities.length > 0) {
            return Object.keys(data.entities[0])
        }
    }
    const columns = getKeys()
    console.log(columns)
    console.log(filteredEntities)
    // console.log(entityId)

    return (
        <>

            {/* <HeaderEntity columns={columns} /> */}
            <div className="entity-grid">

            <span className="header"> Popup </span>
                {columns ? columns.map((column, index) => {
                    return (
                        <>
                            <span className="header" key={index}> {column} </span>
                        </>
                    )
                }) : "no columns"

                }
               

                {isLoading ? "...loading" : filteredEntities.map((entities, index) => {
                    let objectKey = Object.keys(entities)
                    return (
                        <>
                         <span> Popup </span>
                            {objectKey.map((property, i) => {
                                return (<span> {entities[property]} </span>)
                            })}
                           
                        </>

                    )

                })}

                {isError ? "...There is a problem" : ""}
            </div>
        </>
    )
}

export default Entities;