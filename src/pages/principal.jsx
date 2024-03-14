import React from 'react'
import Barra from '../componentes/barraVertical';
import NabBar from '../componentes/navBar';
import BoxPerfil from '../componentes/boxPerfil';
import Calendario from '../componentes/calendario'
import Grafica from '../componentes/grafica'
import '../style/Principal.css'


export default function principal() {
  return (
    <section className='section '>
      <NabBar/>
<aside>
      <Barra/>
</aside>
<section>

      <BoxPerfil/>
      <Calendario/>
      <Grafica/>
</section>

    </section>
   
  )
}
