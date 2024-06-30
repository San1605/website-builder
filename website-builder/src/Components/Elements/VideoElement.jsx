import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import { addPxToStyle } from '../../Utils/commonFunc'

const VideoElement = ({ content, style, id }) => {
    const { dispatch } = useContext(GlobalContext)
    return (
        <video style={addPxToStyle(style)} src={content} onClick={() => {
            dispatch({
                type: "SET_COMPONENT_ID",
                payload: id
            })
        }
        } controls className="w-full h-auto" />
    )
}

export default VideoElement
