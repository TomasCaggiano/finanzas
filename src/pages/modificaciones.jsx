import React from 'react'
import movimientos from '../componentes/movimientos'

const movimientos = () => {
  return (
    <>
        <h1>movimientos</h1>

    <ul className='movimientos'>
        <li>
            <h2>ingresos</h2> 
        <span>
            <label htmlFor=""></label>
            <input type="text" />
            <button>agregar</button>
        </span>
        </li>

        <li>
        <h2>egresos</h2> 
        <span>
            <label htmlFor=""></label>
            <input type="text" />
        </span>
        <button>agregar</button>
        </li>
    </ul>
    <movimientos/>

    </>
  )
}

export default movimientos