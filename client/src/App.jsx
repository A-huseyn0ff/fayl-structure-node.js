import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [data, setData] = useState([])
useEffect(()=>{
  const fetchdata =async function () {
    const res=await fetch('http://localhost:5000/')
    const jsondata=await res.json()
    setData(jsondata)
  }
  fetchdata()
},[])
  return (
    <>
      {data && data.map((item)=>(
        <div className='films'>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}

export default App
