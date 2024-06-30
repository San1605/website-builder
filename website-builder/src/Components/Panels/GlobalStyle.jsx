import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const GlobalStyles = () => {
    const { dispatch, templates, template } = useContext(GlobalContext);
    const [isEditing, setIsEditing] = useState(false); // State to manage editing mode
    const [key, setkey] = useState(""); // State for CSS property key
    const [style, setStyle] = useState(""); // State for CSS property value

    // Function to add a new global style

    const handleAddStyle = () => {
        dispatch({
            type: 'ADD_GLOBAL_STYLE',
            payload: { [key]: style }// Payload includes key-value pair for new style
        });
        setkey("")
        setStyle("")
    };
    // Function to remove a global style
    const handleRemoveStyle = (key) => {
        dispatch({
            type: 'REMOVE_GLOBAL_STYLE',
            payload: key
        });
    };
    // Function to save changes (invoked when "Save" button is clicked)
    const handleSave = () => {
        handleAddStyle();
        // setIsEditing(false);
    };
    // Function to cancel editing (invoked when "Cancel" button is clicked)
    const handleCancel = () => {
        setkey("")
        setStyle("")
        setIsEditing(false);
    };
    return (
        <div className="h-[70%] p-2 w-full text-white flex flex-col">
            <div className="text-xl font-bold mb-4 flex w-full justify-between items-center">
                <span>Global Styles</span>
                <button
                    onClick={() => dispatch({ type: "SET_GLOBAL_STYLE", payload: false })}
                    className="text-red-500 hover:text-red-700 text-2xl"
                >
                    ×
                </button>
            </div>
            {/* Display existing global styles */}
            <div className="flex flex-wrap gap-2 mb-4 max-h-full overflow-y-auto">
                {Object.entries(templates[template]?.globalStyle)?.map(([key, value]) => (
                    <div onClick={() => {
                        setkey(key);
                        setStyle(value)
                        setIsEditing(true)
                    }} key={key} className="cursor-pointer bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
                        <span className="mr-2">{key}: {value}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleRemoveStyle(key)
                            }}
                            className="text-red-500 hover:text-red-700"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>{/* Editing form for adding or modifying a global style */}

            {isEditing ? (
                <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex flex-col mb-2 gap-4">
                        <input
                            type="text"
                            name="key"
                            value={key}
                            onChange={(e) => setkey(e.target.value)}
                            placeholder="CSS Property"
                            className="border p-2 w-full flex-grow rounded bg-gray-600 text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            name="value"
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            placeholder="Value"
                            className="border p-2 w-full flex-grow rounded bg-gray-600 text-white placeholder-gray-400"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                // Button to initiate adding a new global style
                <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Style
                </button>
            )}
        </div>
    );
};

export default GlobalStyles;