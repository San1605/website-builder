import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { addPxToStyle } from '../../Utils/commonFunc'

const ImageElement = ({ content, style, id }) => {
    const { dispatch } = useContext(GlobalContext)


    return (
        <img style={addPxToStyle(style)} src={content} onClick={() => {
            dispatch({
                type: "SET_COMPONENT_ID",
                payload: id
            })
        }
        } alt="Draggable Content" className="w-full h-auto" />
    )
}

export default ImageElement
