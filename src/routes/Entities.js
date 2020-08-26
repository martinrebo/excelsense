import React from 'react'
import { useParams } from 'react-router-dom'
import useDataApi from 'use-data-api';
import EntitiesView from '../components/EntitiesView/EntitiesView';



function Entities() {

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

    return (
        <>
            {isLoading ? "...Loading" :
                <EntitiesView
                    filteredEntities={filteredEntities}
                    isLoading={isLoading}
                    isError={isError}
                    columns={columns} />

            }
        </>
    )
}

export default Entities;