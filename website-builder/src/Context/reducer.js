import { dbName, storeName, templates } from "../Utils/config";
import { v4 as uuidv4 } from 'uuid';
import { openDB, updateData } from "../Utils/indexedDb";
// Function to save templates data to IndexedDB
const saveTemplates = async (templates) => {
    console.log(templates, "Templates to save");
    const db = await openDB(dbName, storeName);// Open the IndexedDB database
    await updateData(db, storeName, templates); // Update data in the specified store
};
// Reducer function for managing global state
export const reducer = (state, action) => {
    switch (action.type) {
         // Set initial templates in the state
        case "SET_INITIAL_TEMPLATES":
            return {
                ...state,
                templates: action.payload

            }
            // Add a new component to a specific template
        case "SET_COMPONENTS":
            return {
                ...state,
                templates: state.templates.map((template) => {
                    if (template.id === action.payload.id) {
                        return {
                            ...template,
                            components: [...template.components, action.payload.newElement],
                        };
                    }
                    return template;
                })
            };
// Set the currently selected component ID
        case "SET_COMPONENT_ID":
            return {
                ...state,
                component: action.payload
            }
             // Change the position (left, top) of an element within a template
        case "CHANGE_ELEMENT":
            return {
                ...state,
                templates: state.templates.map((template) => {
                    if (template.id === action.payload.templateId) {
                        return {
                            ...template,
                            components: template.components.map((item) => {
                                if (item.id === action.payload.id) {
                                    return {
                                        ...item,
                                        left: action.payload.left,
                                        top: action.payload.top
                                    }
                                } else {
                                    return item;
                                }
                            })
                        };
                    }
                    return template;
                })

            }
             // Remove an element from a template based on component ID
        case "REMOVE_ELEMENT":
            console.log(action.payload, "pppppp")
            return {
                ...state,
                templates: state.templates.map((template) => {
                    if (template.id === action.payload.templateId) {
                        return {
                            ...template,
                            components: template.components.filter((item) => item.id !== action.payload.componentId)
                        };
                    }
                    return template;
                })
            }
             // Toggle the visibility of global styles
        case "SET_GLOBAL_STYLE":
            return {
                ...state,
                showGlobalStyle: action.payload
            }
// Change the style and content of an element within a template
        case "CHANGE_ELEMENT_STYLE":
            return {
                ...state,
                templates: state.templates.map((template, index) => {
                    if (index === state.template) {
                        return {
                            ...template,
                            components: template.components?.map((item) => {
                                if (item.id === action.payload.id) {
                                    return {
                                        ...item,
                                        style: action.payload.style,
                                        content: action.payload.content
                                    }
                                } else {
                                    return item;
                                }
                            })
                        };
                    }
                    return template;
                })

            }
// Add global styles to the current template
        case "ADD_GLOBAL_STYLE":
            return {
                ...state,
                templates: state.templates.map((template, index) => {
                    if (index === state.template) {
                        return {
                            ...template,
                            globalStyle: { ...template.globalStyle, ...action.payload }
                        }
                    }
                    return template;
                })
            }
 // Remove a specific global style from the current template
        case 'REMOVE_GLOBAL_STYLE':
            var { [action.payload]: _, ...rest } = state.templates[state.template].globalStyle;
            return {
                ...state,
                templates: state.templates.map((template, index) => {
                    if (index === state.template) {
                        return {
                            ...template,
                            globalStyle: rest
                        }
                    }
                    return template;
                })
            };
              // Select a new template to work with
        case 'SELECT_TEMPLATE':
            return {
                ...state,
                template: action.payload,
            };
             // Save a modified template to the state and persist it
        case 'SAVE_TEMPLATE':
            var { template: templateIndex, name, isOriginalTemplate } = action.payload;
            var updatedTemplates = [...state.templates];

            if (isOriginalTemplate) {
                updatedTemplates = updatedTemplates.map((template, index) => {
                    if (index === templateIndex) {
                        return {
                            ...template,
                            name: name,
                            id: uuidv4()
                        };
                    }
                    return template;
                });
                updatedTemplates.push(templates[templateIndex]);

            }
            console.log(updatedTemplates, "Updated Templates");
            saveTemplates(updatedTemplates)
            return {
                ...state,
                templates: updatedTemplates
            };

        default:
            break;
    }
}