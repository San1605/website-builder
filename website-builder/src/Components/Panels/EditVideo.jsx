import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const EditVideo = ({ element }) => {
    const { dispatch } = useContext(GlobalContext);
    const [data, setData] = useState({
        content: element.content,
        style: { ...element.style }
    })// Handle changes in content and style properties
    console.log(data)
    const handleChange = (field, value) => {
        setData(prev => ({
            ...prev,
            [field === 'content' ? 'content' : 'style']: field === 'content'
                ? value
                : {
                    ...prev.style,
                    [field]: value
                }
        }));
    };
// Update the element with the new content and style
    const updateElement = () => {
        dispatch({
            type: 'CHANGE_ELEMENT_STYLE',
            payload: {
                id: element.id,
                content: data.content,
                style: data.style
            }
        });
    };
   // Initialize the data state when element prop changes
    useEffect(() => {
        setData({
            content: element.content,
            style: { ...element.style }
        });
    }, [element]);
    return (
        <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-bold mb-4">Edit Video</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Video URL:</label>
                <input
                    type="text"
                    name="content"
                    value={data.content}
                    onChange={(e) => handleChange("content", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Width (px):</label>
                <input
                    type="number"
                    name="width"
                    value={data.style.width || 640}
                    onChange={(e) => handleChange("width", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Height (px):</label>
                <input
                    type="number"
                    name="height"
                    value={data.style.height || 360}
                    onChange={(e) => handleChange("height", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
        </div>
    );
}

export default EditVideo;
