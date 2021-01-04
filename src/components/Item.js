import { useDrag, useDrop } from 'react-dnd'

const Item = ({ name, move }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'Our first type' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      const dragItem = item.name
      dropResult && move(dragItem, dropResult.name)
    },
  })

  const opacity = isDragging ? 0.2 : 1

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'Our first type',
    drop: () => ({ name }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop() && name != monitor.getItem().name,
    }),
  })

  const backgroundColor = isOver && canDrop ? 'yellow' : 'white'

  return (
    <div ref={drop} className='itemWrapper'>
      <div ref={drag} className='item' style={{ opacity, backgroundColor }}>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Item
