import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { addPxToStyle } from '../../Utils/commonFunc'

const ButtonElement = ({ content, style, id }) => {
    const { dispatch } = useContext(GlobalContext)
    return (
        <button style={addPxToStyle(style)} onClick={() => {
            dispatch({
                type: "SET_COMPONENT_ID",
                payload: id
            })
        }
        }>{content}</button>
    )
}

export default ButtonElement
