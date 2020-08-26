import React from 'react'
import useDataApi from 'use-data-api';
import AssetsView from '../components/AssetsView/AssetsView';
import HeaderAssetsView from '../components/AssetsView/HeaderAssetsView';
import Modal from '../components/Modal/Modal';

function Assets() {
    /* Get Api call to assets */ 
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        '/api/assets',
        {assets: []},
    );

    /* Get the name of columns related to the data */
    const getKeys = () => {
        if (data.assets.length > 0 ) {
            return Object.keys(data.assets[0])
        }
    }
    const columns = getKeys()
    return (
        <>
        <HeaderAssetsView columns={columns}/>
            {isLoading ? "...loading" : data.assets.map((asset, index) => {
                return (
                    <AssetsView key={index} asset={asset}/>
                )
            })}

            {isError ? "...There is a problem" : ""}
            <Modal fields={columns} />
        </>
    )
}

export default Assets;