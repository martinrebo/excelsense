import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ fields }) => {

    const [toogle, setToogle] = useState(false)

    const handleClick = (e) => { setToogle(!toogle) }

    return (



        <>
            {toogle ?

                <div className="modal">
                    <button onClick={handleClick}> <span role="img">❌</span> </button>
                    <p> Add new ROW </p>
                    <form>
                        <div>
                            {fields.map((item, index) => {

                                return (<input type="text" name={item} placeholder={item} />)

                            })}

                        </div>

                        <button className="submit-button" type="submit" > Submit </button>

                    </form>

                </div>

                : <></>}


            <div class="modal-button">
                <button onClick={handleClick}> <span role="img"> ✏️</span>  </button>
            </div>
        </>
    )
}

export default Modal;