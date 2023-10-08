
import { useState } from 'react';
import './App.css';
import { Forma } from './components/Forma';
import { Render } from './components/Render';


function App() {
  const arr = [
    {
      firstName:"Perizat",
      age: "19",
      id:Math.random

    },
    {
      firstName:"Nurles",
      age: "17",
      id:Math.random

    },
    {
      firstName:"Baiel",
      age: "20",
      id:Math.random

    },
    {
      firstName:"ImamAzim",
      age: "18",
      id:Math.random

    },
    {
      firstName:"Nuriza",
      age: "19",
      id: Math.random

    },
    {
      firstName:"Nargiza",
      age: "20",
      id:Math.random

    },
    {
      firstName:"Ailin",
      age: "20",
      id:Math.random

    },
  ]
  // const arr = []
  const [state,setState] = useState(arr)
  const age="20"
  function save (obj){
    setState((newArr)=>[...newArr,obj])
  }
  const filter = state.filter((el)=>el.name2 === age)
  return (
    <div className="App">
        <Forma onSave={save}/>
      {filter.map((el)=>(
        <Render name={el.name} id={el.id} name2={el.name2}/>
      ))}




      {arr.filter(test => test.age >= 20).map((e)=>(
        <Render userName = {e.firstName} userAge = {e.age} />
      ))}
     
     
      
      
    
    </div>
  );
}

export default App;


