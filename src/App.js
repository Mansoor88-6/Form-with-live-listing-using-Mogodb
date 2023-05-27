
import './App.css';

import Form from './components/form';
import Listing from './components/listing';
import { useState } from 'react';

function App() {

  const[val,setVal]= useState(true)

  const onValChange = ()=>{
    setVal((prevvalue)=> !prevvalue)
    
  }
  
  return (
    <div >
      <Form value={val} handlechange = {onValChange} />
      <Listing value={val}/>
    </div>
  );
}

export default App;
