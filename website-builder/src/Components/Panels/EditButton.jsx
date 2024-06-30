import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const EditButton = ({ element }) => {
    const { dispatch } = useContext(GlobalContext);
    const [data, setData] = useState({
        content: element.content,
        style: { ...element.style }
    });
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
        <div className="p-4 border rounded-lg w-full bg-gray-50">
            <h2 className="text-lg font-bold mb-4">Edit Button</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text:</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Font Size:</label>
                <input
                    type="number"
                    name="fontSize"
                    value={data.style.fontSize || 16}
                    onChange={(e) => handleChange("fontSize", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Text Color:</label>
                <input
                    type="color"
                    name="color"
                    value={data.style.color || '#000000'}
                    onChange={(e) => handleChange("color", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Background Color:</label>
                <input
                    type="color"
                    name="backgroundColor"
                    value={data.style.backgroundColor || '#ffffff'}
                    onChange={(e) => handleChange("backgroundColor", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Border Radius:</label>
                <input
                    type="number"
                    name="borderRadius"
                    value={data.style.borderRadius || 0}
                    onChange={(e) => handleChange("borderRadius", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Cursor:</label>
                <select
                    name="cursor"
                    value={data.style.cursor || 'pointer'}
                    onChange={(e) => handleChange("cursor", e.target.value)}
                    onBlur={updateElement}
                    className="border p-2 w-full rounded-md"
                >
                    <option value="pointer">Pointer</option>
                    <option value="default">Default</option>
                    <option value="not-allowed">Not Allowed</option>
                </select>
            </div>
        </div>
    );
}

export default EditButton;