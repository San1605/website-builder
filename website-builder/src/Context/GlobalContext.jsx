import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { InitialStates } from "./InitialStates";

// Create a new context for global state management

export const GlobalContext = createContext();
// GlobalProvider component manages global state using useReducer
export const GlobalProvider = ({ children }) => {
     // Initialize state and dispatch function using useReducer
    const [state, dispatch] = useReducer(reducer, InitialStates)
      // Provide the state and dispatch function to the context provider
    return (
        <GlobalContext.Provider value={{
            components: state.components,// Current components in the application
            component: state.component, // Currently selected component for editing
            showGlobalStyle: state.showGlobalStyle,// Flag to indicate whether global styles are visible
            globalStyle: state.globalStyle, // Global styles applied to the entire application
            template: state.template,   // Current template being used
            dispatch: dispatch, // Dispatch function to update global state
            templates: state.templates // Available templates for the application
        }}>
            {children}
        </GlobalContext.Provider>
    )
}