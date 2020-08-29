import React from 'react'
import useDataApi from 'use-data-api';
import Modal from '../components/Modal/Modal';
import GridView from '../components/GridView/GridView';

function Assets() {
    /* Get Api call to assets */
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        '/api/assets',
        { assets: [] },
    );

    /* Get the name of columns related to the data */
    const getKeys = () => {
        if (data.assets.length > 0) {
            return Object.keys(data.assets[0])
        }
    }
    const columns = getKeys()
    return (
        <div className="grid-content">
            <div className="grid-assets">
                <GridView
                dataSet = {data.assets}
                isLoading = {isLoading}
                isError = {isError}
                columns = {columns}
                isLinked = {true}
                />
            </div>
            <Modal fields={columns} />
        </div>
    )
}

export default Assets;