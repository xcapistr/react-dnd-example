import './App.css'
import List from './components/List'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React DND example</h1>
      </header>
      <DndProvider backend={HTML5Backend}>
        <List />
      </DndProvider>
    </div>
  )
}

export default App
