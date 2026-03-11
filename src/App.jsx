import { useState, useEffect } from 'react'
import { Container, Background } from "./styles"
import './App.css'

// import reactImg from './assets/react.svg'
// import day from './assets/day.svg'
// import evening from './assets/evening.svg'
import day from './assets/day2.jpg'
import evening from './assets/evening2.jpg'

function App() {
  const [ isEvening, setIsEvening ] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsEvening((prev) => !prev);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      {/* <img src={reactImg} className="image-one" alt="day image"/> */}
      {/* <img src={day} className="image-one" alt="day image"/>
      <img src={evening} className="image-two" alt="evening image"/> */}
      <Container>
        <Background src={day} className={ isEvening ? "fade-out" : "fade-in"} />
        <Background src={evening} className={ isEvening ? "fade-in" : "fade-out"} />
       </Container>
    </>
  )
}

export default App
