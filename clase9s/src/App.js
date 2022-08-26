import './App.css'
import { ListCards } from './components/ListCards/ListCards'
import pokedex from './db/pokedex.json'
function App () {
  return (
    <div className='App'>
      <ListCards list={pokedex} />
    </div>
  )
}

export default App
