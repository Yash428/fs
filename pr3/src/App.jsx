import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date,setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(()=>{
    const date = new Date()
    let day = date.getDay()
    let month = date.getMonth() +1
    let year = date.getFullYear()
    setDate(day+' '+month+' '+year)
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  })
  return (
    <>
      <h1>Welcome to CHARUSAT!!!!</h1>
      <div className='date'>It is {date}</div>
      <div className='time'>It is {time}</div>
    </>
  )
}

export default App
