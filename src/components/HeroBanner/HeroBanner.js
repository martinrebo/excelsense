import React, {useContext} from 'react'
import './HeroBanner.css'
import { Link } from 'react-router-dom'
import { store } from './../../store/store.js'

function HeroBanner() {
    const globalState = useContext(store);
    const { dispatch } = globalState;

console.log(globalState.state)
    const handleViewClick = (e) => {
        // Dispatch the oposite of the current State
        dispatch({type: "CHANGE_VIEW_COMPACT", payload: !globalState.state.compact})
    
    }

    const handleModeClick = (e) => {
        // Dispatch the oposite of the current State
        dispatch({type: "CHANGE_VIEW_MODE", payload: !globalState.state.nightmode})
    }

    return (
        <div className="heroBanner">
            <div className="heroContent">
                <h1> ExcelSense Technical Test </h1>
                <Link className="link" to="/"> Assets </Link>
                <Link className="link" to="/entity/nofilter/"> Entities </Link>
               
               <button onClick={handleViewClick} className="button-view"> <span> 
                    { globalState.state.compact ? "👁️👁️ " : "👀" }
                    
                    </span>   </button>
                <button onClick= {handleModeClick} className="button-mode" > <span>
                { globalState.state.nightmode ? "☀️ " : "🌙" }
                     
                     </span> </button>
            </div>

        </div>
    )
}

export default HeroBanner;