import { useState } from 'react'
import './index.css'
import Form from './Components/Form'
import Items from './Components/Items'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(list)
  }
  else {
    list = []
  }
  return list
}
const defaultList = JSON.parse(localStorage.getItem('list') || '[]') 

function App() {
  // Adding new items to the list
  const [items, setItems] = useState(defaultList)
  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the list')
  
  }
  
  const removeItem = (id) => {
    const newItemList = items.filter((item)=> item.id !== id)
    setItems(newItemList)
    setLocalStorage(newItemList)
    toast.success('Item removed')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item)=> {
      if (item.id === itemId) {
        const newItem = {...item, isChecked: !item.isChecked}
        return newItem;
      }
      return item
    })
        setItems(newItems);
        setLocalStorage(newItems);
  }
  return (
    <main>
      <ToastContainer position='top-center'/>
      <Form addItem = {addItem}/>
      <Items items = {items} removeItem = {removeItem} editItem = {editItem}/>
    </main>
  )
}

export default App
