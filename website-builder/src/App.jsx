import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Preview from './Pages/Preview'
import { addData, getData, openDB } from './Utils/indexedDb' // Import functions for IndexedDB operations
import { useContext, useEffect } from 'react'
import { dbName, storeName, templates } from './Utils/config'// Import database name, store name, and templates data
import { GlobalContext } from './Context/GlobalContext'// Import GlobalContext for accessing global state



const App = () => {
  const { dispatch } = useContext(GlobalContext)

  useEffect(() => {
     // Function to initialize IndexedDB and set initial templates
    const initializeDB = async () => {
      const db = await openDB(dbName, storeName); // Open IndexedDB with specified database and store names
      const data = await getData(db, storeName);// Retrieve data from IndexedDB store
      if (data.length === 0) {
         // If no data exists in IndexedDB, add initial templates
        for (const template of templates) {
          await addData(db, storeName, template);// Add each template to IndexedDB
        }
        dispatch({ type: 'SET_INITIAL_TEMPLATES', payload: templates }) // Set initial templates in global state
      } else {
        dispatch({ type: 'SET_INITIAL_TEMPLATES', payload: data })// Set retrieved data as initial templates in global state
      }
    };
    initializeDB();// Initialize IndexedDB when component mounts
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/preview' element={<Layout><Preview /></Layout>} />
    </Routes>
  )
}

export default App
