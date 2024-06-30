import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const EditImage = ({ element }) => {
    const { dispatch } = useContext(GlobalContext);
    const [data, setData] = useState({
        content: element.content,
        style: { ...element.style }
    })
    console.log(data)
    // Handle changes in content and style properties
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

    useEffect(() => {
        setData({
            content: element.content,
            style: { ...element.style }
        });
    }, [element]);
    return (
        <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-bold mb-4">Edit Image</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL:</label>
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
                    value={data.style.width || ''}
                    onChange={(e) => handleChange("width", e.target.value)}
                    className="border p-2 w-full rounded-md"
                    onBlur={updateElement}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Height (px):</label>
                <input
                    type="number"
                    name="height"
                    value={data.style.height || ''}
                    onChange={(e) => handleChange("height", e.target.value)}
                    className="border p-2 w-full rounded-md"
                    onBlur={updateElement}
                />
            </div>
        </div>
    );
}

export default EditImage;
