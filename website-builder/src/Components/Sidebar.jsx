import React, { useContext, useState } from 'react'
import { CiText } from "react-icons/ci";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { SiBigbluebutton } from "react-icons/si";
import { FaEye } from "react-icons/fa6";
import Tool from './Tool';
import { Link, useLocation } from 'react-router-dom';
import { LuLayoutTemplate } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";
import Templates from './Templates';
import { GlobalContext } from '../Context/GlobalContext';
import { FaRegSave } from "react-icons/fa";
const Sidebar = () => {
    const { dispatch, showGlobalStyle, templates, template } = useContext(GlobalContext)
    const [isExpanded, setIsExpanded] = useState(false);// State to manage the sidebar expansion
    const location = useLocation();
    const isPreviewPage = location.pathname === '/preview';
    // Function to handle saving progress
    const handleSaveProgress = async() => {
        let id = templates[template].id;// Get the current template id
        let name = templates[template].name;// Get the current template name
        let isOriginalTemplate = ['template1', 'template2', 'template3', 'template4', 'template5'].includes(id);// Check if the template is an original template
        
        if (isOriginalTemplate) {
            name = prompt("Please enter project's name");// Prompt the user to enter a project name for original templates
            if (!name) return; // Exit if no name is provided
        }
        
        dispatch({
            type: "SAVE_TEMPLATE",// Dispatch the SAVE_TEMPLATE action with the necessary payload
            payload: { template, name, isOriginalTemplate }
        });
        
        alert("Project saved");


    }
    

 // List of tools available for use in the editor
    const tools = [
        {
            text: "Text",
            icon: <CiText color='white' size={"1.4em"} />,
            content: "Write something here",
            style: {
                fontSize: "14px",
                color: "black",
                fontWeight: "400",
            }
        },
        {
            text: "Image",
            icon: <FaImage color='white' size={"1.4em"} />,
            content: "https://archive.org/download/placeholder-image/placeholder-image.jpg",
            style: {
                height: 200,
                width: 200,
                cursor: 'pointer'
            }
        },
        {
            text: "Video",
            icon: <FaVideo color='white' size={"1.4em"} />,
            content: "https://vimeo.com/347119375",
            style: {
                height: 200,
                width: 200,
                cursor: 'pointer'
            }
        },
        {
            text: "Button",
            icon: <SiBigbluebutton color='white' size={"1.4em"} />,
            content: "Button text",
            style: {
                fontSize: "14px",
                fontWeight: "400",
                cursor: 'pointer',
                backgroundColor: "ffffff",
                color: "#000",
                padding: "10px 20px",
                borderRadius: 0
            }
        },
    ]


    return (
<div className={`h-full bg-gray-800 text-white transition-all duration-300 ${isExpanded ? 'w-full md:w-64' : 'w-full md:w-24'}`}>
    {/* Container for the sidebar with dynamic width based on isExpanded state */}
            <div className='p-2 flex flex-col items-center'>
                {isExpanded ?

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex flex-col gap-1 items-center justify-center cursor-pointer  hover:bg-gray-700 p-2 rounded transition-colors"
                    >
                        <LuLayoutTemplate size={"1.4em"} />
                        <span className="text-sm ">Templates</span>
                    </button> :
                    <div className='flex flex-col gap-2 mt-2'>
                          {/* Render each tool in the tools array */}
                        {tools.map((item, index) => (
                            <Tool key={index} {...item} />
                        ))}
                         {/* Link to navigate between the editor and preview pages */}
                        {isPreviewPage ? (
                            <Link to="/" className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors">
                                <MdArrowBack size={"1.5em"} />
                                <span className="text-sm">Editor</span>
                            </Link>
                        ) : (
                            <Link to="/preview" className="flex flex-col gap-1 items-center justify-center cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors">
                                <FaEye size={"1.4em"} />
                                <span className="text-sm">Preview</span>
                            </Link>
                        )}
                         {/* Button to expand the sidebar */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex flex-col gap-1 items-center justify-center cursor-pointer  hover:bg-gray-700 p-2 rounded transition-colors"
                        >
                            <LuLayoutTemplate size={"1.4em"} />
                            <span className="text-sm ">Templates</span>
                        </button>
                        <button
                            onClick={() => dispatch({ type: "SET_GLOBAL_STYLE", payload: !showGlobalStyle })}
                            className="flex flex-col gap-1 items-center justify-center cursor-pointer  hover:bg-gray-700 p-2 rounded transition-colors"
                        >
                            <LuLayoutTemplate size={"1.4em"} />
                            <span className="text-sm ">Styles</span>
                        </button>

                        <button
                            onClick={handleSaveProgress}
                            className="flex flex-col gap-1 items-center justify-center cursor-pointer  hover:bg-gray-700 p-2 rounded transition-colors"
                        >
                            <FaRegSave size={"1.4em"} />
                            <span className="text-sm ">Save Progress</span>
                        </button>
                    </div>}

            </div>

            {
                isExpanded && (
                    <Templates setIsExpanded={setIsExpanded} />
                )
            }
        </div >
    )
}

export default Sidebar
