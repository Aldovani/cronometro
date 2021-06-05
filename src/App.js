import React, { useEffect, useState } from 'react';
import '../src//styles/button.css'
import '../src//styles/App.css'
let pauseSetTime

export function App() {

  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const segundos = time % 60

  const [segundoR, segundoL] = segundos.toString().padStart(2, '0').split('')
  const [minutoR, minutoL] = minutes.toString().padStart(2, '0').split('')


  function startTime() {
    setIsActive(true)
  }


  function pauseTime() {
    clearTimeout(pauseSetTime)
    setIsActive(false)
  }

  function resetTime() {
    clearTimeout(pauseSetTime)
    setIsActive(false)
    setTime(0)
  }

  useEffect(() => {
    if (isActive) {
      pauseSetTime = setTimeout(() => {
        setTime(time + 1)
      }, 1000)
    }

    if (time === 0) {
      document.title="Cronometro"
    }
    else {
      document.title=`${minutoR}${minutoL}:${segundoR}${segundoL}`
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[time, isActive])
    
    return (
      <>
 
      <div className="contador">

        <span className="span">{minutoR}</span>
        <span className="span">{minutoL}</span>

        <span className="separacao">:</span>

        <span className="span">{segundoR}</span>
        <span className="span">{segundoL}</span>
      </div>
      
      <div className="buttons">
        {
          isActive ?
            <button
              type="button"
              onClick={pauseTime}
              className="button -pause"
            >
              Pausar
          </button>

            :
            <button
              type="button"
              onClick={startTime}
              className="button -start"
            >
              Iniciar
          </button>
        }
        <button
          type="button"
          onClick={resetTime}
          className="button -reset"
        >
          Resetar
        </button>

      </div>
    </>
  )

}

export default App;
