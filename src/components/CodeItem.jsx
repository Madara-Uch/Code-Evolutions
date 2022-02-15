import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

function CodeItem({code,index,moveListItem}) {

    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            // if dragging down, continue only when hover is smaller than middle Y
            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            // if dragging up, continue only when hover is bigger than middle Y
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })
    const ref = useRef(null);
    const dragDropRef = dragRef(dropRef(ref));
    const opacity = isDragging ? 0 : 1
  return (
    <div className="codeSnippet" ref={dragDropRef} style={{ opacity }} id={index}>{code.map((line, index) => {
        return (<div className="lineOfCode" id={index}  key={index} >
            {line}
        </div>)
    })}</div>
  )
}

export default CodeItem