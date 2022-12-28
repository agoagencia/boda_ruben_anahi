import React from 'react'
import './inicio.css'
import Ceremonia from './img/Vaticano.PNG'
import Recepcion from './img/Evento.PNG'
import Itinerario from './img/2.jpg'

function Inicio() {
  return (
    <div className='inicio'>
      <div className='presentacion'>
        <h2 className='nuestra_boda'>NUESTRA BODA</h2>
        <h2 className='anahi_ruben'>Anahi & Ruben</h2>
      </div>
      
      <div className='info'>
        <h2 className='donde'>¿Dónde & Cuándo?</h2>
          <div className='info_flex'>
          <div className='ceremonia'>
          <br/>
            <h2>Ceremonia</h2>
            <br/><br/>
            <img src={Ceremonia}></img>
            <br/><br/>
          <h2>Parroquia Nuestra Señora de los Dolores</h2><br/>
            <p><strong>Cuándo:</strong> 25 de Marzo de 2023 18:00 hrs.</p><br/>
            <p><strong>Dirección:</strong> Sor J I de la C 29, Centro, 92730 Álamo, Ver.</p>
            <div className='btn_map'>Ver mapa</div>
          </div>

          <div className='recepcion'>
          <br/>
          <h2>Recepción</h2>
          <br/><br/>
          <img src={Recepcion}></img>
          <br/><br/>
          <h2>El Pedregal Eventos</h2><br/>
          <p><strong>Cuándo:</strong> 25 de Marzo de 2023 18:00 hrs.</p><br/>
            <p><strong>Dirección:</strong> Sor J I de la C 29, Centro, 92730 Álamo, Ver.</p>
            <div className='btn_map'>Ver mapa</div>
          </div>

          <div className='itinerario'>
          <br/>
            <h2>Itinerario</h2>
            <br/><br/>
            <img src={Itinerario}></img>
            <br/><br/>
            <h2>Anahi y Rubén</h2><br/>
            <p><strong>Ceremonia religiosa 18 hrs</strong></p>
            <p><strong>Cocktail 20 hrs</strong></p>
            <p><strong>Recepción 21 hrs</strong></p>
            <div className='btn_map'>Ver mapa</div>
          </div>

        </div>
      </div>

      </div>
    
  )
}

export default Inicio