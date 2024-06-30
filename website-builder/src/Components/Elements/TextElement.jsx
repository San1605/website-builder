import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { addPxToStyle } from '../../Utils/commonFunc'

const TextElement = ({ content, style, id }) => {
    const { dispatch } = useContext(GlobalContext)
    return (
        <div style={addPxToStyle(style)} onClick={() => {
            dispatch({
                type: "SET_COMPONENT_ID",
                payload: id
            })
        }
        }>{content}</div>
    )
}

export default TextElement
