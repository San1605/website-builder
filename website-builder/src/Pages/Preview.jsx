import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import DraggedElement from '../Components/DraggedElement';

const Preview = () => {
  // Preview component displays the selected template and its components
  const { template, templates } = useContext(GlobalContext);

  return (
    <div

      style={templates[template]?.globalStyle}
      className={`relative flex-1 max-h-screen border-2 overflow-y-auto p-4`}
    >

      {templates[template]?.components?.map((item, index) => (
        <DraggedElement key={index} {...item} />
      ))}
    </div>
  );
};

export default Preview;
