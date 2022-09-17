import React from 'react'
import './Mimetodo.css'
import Guitarra from './guitarra.jsx'
import Canto from './canto.jsx'
import Coach from './coach.jsx'
import Produccion from './produccion.jsx'


const Mimetodo = () => {
  return (
    <div id='Servicios' className='mimetodo'>
      <div className='palabras'>
      <h4>Aprendé rápido y sin contratiempos.</h4>
      <p>Nunca es tarde para empezar a estudiar lo que te gusta. Todas las edades, niveles, y estilos.</p>
      </div>
    <div className='caja_cards'>
      <div className='cards'>
        <Guitarra className='img_svg'/>
        <h5>Guitarra</h5>
        <p>En clase enseño guitarra clásica, acústica, eléctrica de acuerdo a tus intereses y gustos personales.</p>
      </div>
      <div className='cards'>
      <Canto className='img_svg'/>
        <h5>Canto</h5>
        <p>Trabajo de manera gradual para desarrollar tu estilo, identidad vocal y repertorio de canciones.</p>
      </div>
      <div className='cards'>
      <Coach className='img_svg'/>
        <h5>Coaching Musical</h5>
        <p>Ayudo a prepararte para grabar un disco, rendir examen, ir a un casting, tocar o cantar en vivo.</p>
      </div>
      <div className='cards'>
      <Produccion className='img_svg'/>
        <h5>Producciones</h5>
        <p>Podrás escribir, componer, realizar tu demo y producir tus propias ideas musicales en mi estudio.</p>
      </div>
      </div>
      </div>
  )
}

export default Mimetodo