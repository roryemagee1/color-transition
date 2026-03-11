import { useState, useEffect } from 'react'
import './App.css'

// import day from './assets/day.svg'
// import evening from './assets/evening.svg'
import day from './assets/day2.jpg'
import evening from './assets/evening2.jpg'

export default function App() {
  const [ isEvening, setIsEvening ] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsEvening((prev) => !prev);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="container">
      <img src={day} className={ isEvening ? "background fade-out" : "background fade-in"} />
      <img src={evening} className={ isEvening ? "background fade-in" : "background fade-out"} />
  </div>
  )
}
