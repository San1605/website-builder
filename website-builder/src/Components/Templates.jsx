// TemplateSelector.js
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';


const TemplateSelector = ({ setIsExpanded }) => {
    const { dispatch,templates } = useContext(GlobalContext);
 // Function to handle the selection of a template
  
    const handleTemplateSelect = (templateIndex) => {
        dispatch({
            type: 'SELECT_TEMPLATE', // Dispatch action to select a template
            payload: templateIndex, // Payload is the index of the selected template
        });
        setIsExpanded(false); // Close the template selector after selection
    };
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-200">Select a Template</h3>
            <div className="space-y-2">
                 {/* Iterate over templates array to create a button for each template */}
                {templates?.map((template, index) => (
                    <button
                        key={template.id}
                        onClick={() => handleTemplateSelect(index)}
                        className="block w-full bg-gray-700 text-gray-200 py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        {template.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;

