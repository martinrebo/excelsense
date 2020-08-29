import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../../store/store'
import './GridView.css'


const GridView = ({ columns, isLoading, isError, dataSet, isLinked }) => {

    const globalState = useContext(store);

    // When compact view is true, the max column widht is the content lenght 
    let minWidth = globalState.state.compact ? "min-content" : "100px"
    let maxWidth = globalState.state.compact ? "100px" : "1fr"

    // If the table has an extra column for links we add +1 column
    let numberOfColumns = isLinked ? columns?.length + 1 : columns?.length
    const style = {
        gridTemplateColumns: `repeat(${numberOfColumns}, minmax(${minWidth}, ${maxWidth}))`
    }

    // When nightmode is true, we add the class nightmode 
    let nightmode = globalState.state.nightmode ? "nightmode" : "daymode"

    console.log(dataSet)
    return (

        <div className={`grid-view`} style={style}>
            {columns?.map((column, index) => {
                // To have "breakable text" in header columns, lets replace underscores for spaces
                let name = column.replace(/_/g, " ")
                return (
                    <>
                        <span className="header" key={index}> {name} </span>
                    </>
                )
            })}

            {isLinked ? <span className="header"> Link to Entities </span> : null}

            {isLoading ? "...loading" : dataSet.map((data, index) => {
                let objectKey = Object.keys(data)
                return (
                    <>
                        {objectKey.map((property, i) => {
                            return (<span className={`${nightmode}`} key={i} data-id={data?.id} > {data[property]} </span>)
                        })
                        }
                        {isLinked ?
                            <span className={`${nightmode}`}>  <Link to={`/entity/${data?.id}`}> Link_To_Entitie {data?.id} </Link></span>
                            : null}
                    </>
                )

            })}

            {isError ? "...There is a problem" : ""}
        </div>
    )

}

export default GridView;