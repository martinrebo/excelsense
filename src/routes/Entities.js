import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import useDataApi from 'use-data-api';
import Modal from '../components/Modal/Modal';
import GridView from '../components/GridView/GridView';
import Menu from '../components/Menu/Menu';



function Entities() {

    /* get url browser parameter to filter data */
    let { entityId } = useParams();
    let filteredEntities;
    /* Use Fetch hook to call REST API */
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        '/api/entities',
        { entities: [] },
    );

    /* Filter data based on url parameter */
    if (entityId === "nofilter") {
        filteredEntities = data.entities

    } else {
        filteredEntities = data.entities.filter(entitity => entitity.id_asset === parseInt(entityId))
    }


    /* get the object keys of the data to construct the header of table*/
    const getKeys = () => {
        if (data.entities.length > 0) {
            return Object.keys(data.entities[0])
        }
    }
    const columns = getKeys()

    // Get reference for right Click context Menu
    const outerRef = useRef(null);
    return (
        <div className="grid-content">
            <div ref={outerRef}> 
            <Menu outerRef={outerRef}/>
                <GridView
                    dataSet={filteredEntities}
                    isLoading={isLoading}
                    isError={isError}
                    columns={columns} />
           
            <Modal fields={columns} />
            </div>
        </div>
    )
}

export default Entities;