import { useState } from 'react'

import Item from './Item'

const List = () => {
  const [items, setItems] = useState([
    'item 1',
    'item 3',
    'item 5',
    'item 2',
    'item 4',
  ])
  let isRightOrder = true
  for (let i = 1; i < items.length; i++) {
    if (items[i] < items[i - 1]) isRightOrder = false
  }

  const move = (itemA, itemB) => {
    const newItems = items
    const a = newItems.findIndex(i => i === itemA)
    const b = newItems.findIndex(i => i === itemB)
    newItems.splice(a, 1)
    newItems.splice(b, 0, itemA)
    setItems([...newItems])
  }

  return (
    <>
      <div className='listWrapper'>
        {items.map((item, i) => (
          <Item name={item} key={i} move={move} />
        ))}
      </div>
      <p className="status">{isRightOrder ? '🤩' : '💩' }</p>
    </>
  )
}

export default List
