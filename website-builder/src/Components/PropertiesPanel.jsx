import React, { act, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext';
import EditText from './Panels/EditText';
import EditImage from './Panels/EditImage';
import EditVideo from './Panels/EditVideo';
import { useDrop } from 'react-dnd';
import { FaTrashAlt } from 'react-icons/fa';
import ButtonElement from './Elements/ButtonElement';
import EditButton from './Panels/EditButton';
import GlobalStyles from './Panels/GlobalStyle';

const PropertiesPanel = () => {
      // Get the necessary values from the global context
    const { component, components, dispatch, template, templates, showGlobalStyle } = useContext(GlobalContext)
    console.log(component, components)
    // Find the currently selected element based on the component ID
    const element = templates[template]?.components.find(item => item.id == component);
    // Setup the drop functionality to remove elements

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: (item, monitor) => {
            const isItemIncluded = templates[template]?.components?.find(ele => ele.id === item.id);
            console.log(components, item, isItemIncluded, "isitemincluded")
            if (isItemIncluded) {
                 // Remove the element if it exists in the template
                dispatch({
                    type: 'REMOVE_ELEMENT',
                    payload: {
                        componentId: item.id, templateId: templates[template].id
                    }
                })
                  // Reset the selected component ID
                dispatch({
                    type: 'SET_COMPONENT_ID',
                    payload: ""
                })
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }), [components, template, templates]);


    return (
        <div className="h-full w-full md:w-64 lg:w-80 border-t md:border-l border-gray-300 rounded-md flex flex-col py-4 p-2 bg-gray-800 shadow-md">
 {/* Toggle between global styles panel and element properties */}
            {showGlobalStyle ?
                < GlobalStyles />
                : <div className="flex-grow overflow-y-auto">
                    {element ? (
                        <div className="w-full p-2">
                            {element.type === 'Text' && <EditText element={element} />}
                            {element.type === 'Image' && <EditImage element={element} />}
                            {element.type === 'Video' && <EditVideo element={element} />}
                            {element.type === 'Button' && <EditButton element={element} />}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <p>Select an element to edit its properties</p>
                        </div>
                    )}
                </div>}

 {/* Drop area for removing elements */}
            <div
                ref={drop}
                className={`flex items-center justify-center rounded-md p-4 mt-auto bg-red-100 text-red-700 cursor-pointer transition-all duration-300 ease-in-out ${isOver ? 'bg-red-200 scale-105' : ''} hover:bg-red-200`}
            >
                <FaTrashAlt className="mr-2" />
                <span className="font-medium">Drop here to remove</span>
            </div>
        </div>
    )
}

export default PropertiesPanel
