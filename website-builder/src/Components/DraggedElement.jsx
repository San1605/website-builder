import React, { useContext } from 'react'
import { useDrag } from 'react-dnd';
import ImageElement from './Elements/ImageElement';
import TextElement from './Elements/TextElement';
import VideoElement from './Elements/VideoElement';
import ButtonElement from './Elements/ButtonElement';

const DraggedElement = ({ type, name, style, left, top, id, content }) => {
// useDrag hook for making this element draggable
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { id, type, content, left, top },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id, type]);
  // Determine the appropriate element content based on the type of element
  let elementContent;
  switch (type) {
    case 'Text':
      elementContent = <TextElement id={id} style={style} content={content} />
      break;
    case 'Image':
      elementContent = <ImageElement id={id} style={style} content={content} />
      break;
    case 'Video':
      elementContent = <VideoElement id={id} style={style} content={content} />
      break;
    case 'Button':
      elementContent = <ButtonElement id={id} style={style} content={content} />
      break;
    default:
      elementContent = <div>Unknown Element</div>;
  }

  return (
    <div
      ref={drag}// Attaches the drag ref to make this element draggable
      className={`p-2 m-2 border ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={{ position: left !== undefined && top !== undefined ? 'absolute' : 'static', left, top }}
    >
      {elementContent}
    </div>
  )
}

export default DraggedElement
