import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    // State to track whether the viewport width is mobile-sized
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
      // State to manage whether the sidebar is open
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
 // Effect to handle resizing of the window
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
             // Automatically close sidebar on mobile view
            setSidebarOpen(!mobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='h-screen w-screen flex flex-col md:flex-row'>
            {/* Button to toggle sidebar visibility on mobile */}
            {isMobile && (
                <button 
                    className="md:hidden p-2 bg-gray-800 text-white"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
                </button>
            )}
             {/* Sidebar component */}
            <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                <Sidebar />
            </div>
            <div className='flex-grow overflow-auto'>
                {children}
            </div>
        </div>
    );
};

export default Layout;