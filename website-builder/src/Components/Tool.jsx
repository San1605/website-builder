import React, { useContext } from 'react'
import { useDrag } from 'react-dnd'
import { GlobalContext } from '../Context/GlobalContext'
// Tool component for draggable items in the UI
const Tool = ({ text, style, content, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { text, style, content },// Data associated with the dragged item
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log(item, dropResult, "qqqqqqq")

      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ opacity }} className='flex flex-col gap-1 items-center justify-center cursor-pointer  hover:bg-gray-700 p-2 rounded transition-colors'>
      {icon}
      <span className='text-[white] text-[14px]'>{text}</span>
    </div>
  )
}

export default Tool
