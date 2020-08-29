import React from 'react'
import { useParams } from 'react-router-dom'
import useDataApi from 'use-data-api';
import EntitiesView from '../components/EntitiesView/EntitiesView';
import Modal from '../components/Modal/Modal';



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


    return (
        <div className="grid-content">
            {isLoading ? "...Loading" :
                <EntitiesView
                    filteredEntities={filteredEntities}
                    isLoading={isLoading}
                    isError={isError}
                    columns={columns} />

            }
            <Modal fields={columns} />
        </div>
    )
}

export default Entities;