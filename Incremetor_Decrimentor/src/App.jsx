import { useState } from 'react'
import Counter from './component/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-sky-800 '>Counter using Redux toolkit</h1>
      <Counter/>
    </div>
  )
}

export default App
