import './app.css'
import Header from './components/Header'
import {useState} from 'react'
import Counter from './Counter'
function App() {
  const [count,setCount] =useState(0)
  const addCount =()=>{
    setCount(count+1)
  }

  return (
    <div>
      <Header/>
      <button onClick={addCount}>Add</button>
      <Counter title='1st counter' count={count}/>
      <Counter title='2nd counter' count={count}/>
    
    </div>
  );
}

export default App;


