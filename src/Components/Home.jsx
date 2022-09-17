import React from 'react'
import { Button } from '@mui/material'
import './Home.css'

const Home = () => {
  return (
    <div id='Home' className='home_guitar'>
        <h1 className='h1_home'>Clases de Guitarra</h1>
        <h2 className='h2_home'>Informate y conocé más</h2>
        <Button className='button_info' size='large' variant='contained' sx={{color:'#fff', mt:3 }} ><a href="#Contacto">Más Info</a></Button>
    </div>
  )
}

export default Home
