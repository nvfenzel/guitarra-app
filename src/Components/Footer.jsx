import React from 'react'
import './Footer.css'

const Footer = () => {

  return (
    <div className='footer'>
        <p>Copyright &copy; {(new Date().getFullYear())} By 
        <a className='footer_a' target="_blank" href="https://www.laprogrameta.com"> La Programeta Desarrollos</a></p>
    </div>
  )
}

export default Footer