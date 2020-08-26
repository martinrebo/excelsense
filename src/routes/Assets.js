import React from 'react'
import useDataApi from 'use-data-api';
import AssetsView from '../components/AssetsView';
import Header from '../components/Header';



function Assets() {
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        '/api/assets',
        {assets: []},
    );
    const getKeys = () => {
        if (data.assets.length > 0 ) {
            return Object.keys(data.assets[0])
        }
    }
    const columns = getKeys()
    console.log(columns)
    return (
        <>
        <Header columns={columns}/>
            {isLoading ? "...loading" : data.assets.map((asset, index) => {
                return (
                    <AssetsView key={index} asset={asset}/>
                )
            })}

            {isError ? "...There is a problem" : ""}
        </>
    )
}

export default Assets;