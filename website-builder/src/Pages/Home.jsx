import React from 'react'
import EditableArea from '../Components/EditableArea'
import PropertiesPanel from '../Components/PropertiesPanel'

// The Home component serves as the main layout container for the application
const Home = () => {
  return (
    <div className='h-full w-full p-2 flex flex-col md:flex-row gap-2'>
      {/* Main area for users to interact with and edit their templates */}
      <EditableArea />
      {/* Sidebar or section for adjusting properties of the selected component */}
      <PropertiesPanel />
    </div>
  )
}

export default Home
