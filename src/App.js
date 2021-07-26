import './app.css'
import Header from './components/Header'
import {useState} from 'react'
import Employee from './Employee'
function App() {
  const [count,setCount] =useState(0)
  const addCount =()=>{
    setCount(count+1)
  }
  let emp =[{name:'ganesh', age:20},
    {name:'shogil', age:22},
    {name:'rahul' ,age:23}
  ]

  return (
    <div>
      <Header/>
      <button onClick={addCount}>Add</button>
      
      {
        emp.map((obj)=>{
          return (
            <Employee name={obj.name} age={obj.age} />
          )
        })
      }
    
    </div>
  );
}

export default App;


