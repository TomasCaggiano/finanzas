import React from 'react'
import graficos from '../componentes/graficos'
import movimientos  from '../componentes/movimientos'
import filtros from '../componentes/filtros'

const historial = () => {
  return (
    <div>
        <filtros />
        <graficos/>
        <movimientos/>
    </div>
  )
}

export default historial