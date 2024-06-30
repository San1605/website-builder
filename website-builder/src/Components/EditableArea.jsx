import React, { useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { GlobalContext } from '../Context/GlobalContext'
import DraggedElement from './DraggedElement'
import { v4 as uuidv4 } from 'uuid';

const EditableArea = () => {
    const { dispatch, components, templates, template } = useContext(GlobalContext)
     // Function to check if a new element overlaps with existing components
    const checkOverlap = (newElement) => {
        for (const element of components) {
            if (
                newElement.left < element.left + 100 &&
                newElement.left + 100 > element.left &&
                newElement.top < element.top + 50 &&
                newElement.top + 50 > element.top
            ) {
                return true;
            }
        }
        return false;
    };
 // React DnD hook for drop target

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: (item, monitor) => {
            const delta = monitor.getClientOffset();
            const offset = monitor.getDifferenceFromInitialOffset();
            const isItemIncluded = templates[template].components?.find(ele => ele.id === item.id);
            console.log(components, item, isItemIncluded, "isitemincluded")
            if (isItemIncluded) {
                // If the dragged item is already included in components, update its position
        
                dispatch({
                    type: "CHANGE_ELEMENT",
                    payload: {
                        id: isItemIncluded.id,
                        templateId: templates[template].id,
                        left: isItemIncluded.left + offset.x,
                        top: isItemIncluded.top + offset.y,
                    }
                })
                dispatch({
                    type: "SET_COMPONENT_ID",
                    payload: isItemIncluded.id
                })
            }
            else {
                 // If it's a new item being dropped, create a new element
                const newElement = {
                    text: "BOX",
                    type: item.text,
                    left: delta.x,
                    top: delta.y,
                    id: uuidv4(),
                    content: item?.content,
                    style: item?.style,

                }
                 // Check if the new element overlaps with existing components
                if (!checkOverlap(newElement)) {
                     // If no overlap, add the new element to the components
                    dispatch({
                        type: "SET_COMPONENTS",
                        payload: { newElement: newElement, id: templates[template].id }
                    })
                    dispatch({
                        type: "SET_COMPONENT_ID",
                        payload: newElement.id
                    })
                }
            }

        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }), [templates, template]);
 // Determine the background color based on drop status
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    console.log(templates, templates[template], "templates")
    return (
        <div
            ref={drop}
            style={templates[template]?.globalStyle}// Apply global styles from context
            className={`relative flex-1 max-h-[calc(100vh-4rem)] md:max-h-screen border-2 ${
                isOver ? 'bg-green-100' : 'bg-white'
            } overflow-y-auto p-4`}
        >
            {isActive ? (
                <div className="absolute inset-0 flex items-center justify-center text-2xl text-green-600 bg-green-100 bg-opacity-50">
                    Release to drop
                </div>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-xl text-gray-400">
                    Drag a box here
                </div>
            )}
             {/* Render all components within the editable area */}
            {templates[template]?.components?.map((item, index) => (
                <DraggedElement key={index} {...item} />
            ))}
        </div>
    )
}

export default EditableArea

