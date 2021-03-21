import React, { useEffect, useState } from 'react';
import '../../styles/components/cronometro.css'
import '../../styles/components/button.css'
import '../../styles/components/display.css'
let pauseSetTime

export function Cronometro() {

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
  },
    [time, isActive])

  return (
    <div className="container">

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
    </div>
  )

}
