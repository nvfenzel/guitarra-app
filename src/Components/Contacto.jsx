import React from 'react'
import TextField from '@mui/material/TextField';
import './Contacto.css'
import { Button } from '@mui/material';

const Contacto = () => {

    const [contact, setContact] = React.useState({
        nombre: '',
        mail: '',
        mensaje: ''
       });

    const handleClick = () =>{
        alert('Formulario enviado correctamente.')
    }


    const handleNombre = (event) => {
        setContact({ ...contact,
            nombre: event.target.value,
        });
    }

    const handleMail = (event) => {
        setContact({ ...contact,
            mail: event.target.value,
        });
    }

    const handleMensaje = (event) => {
        setContact({ ...contact,
            mensaje: event.target.value,
        });
    }

  return (
    <div id='Contacto' className='contacto'>
        <div className='formulario'>
                <div className='inputs_contact'>
                        <div className='inputs_mail_nombre'>
                            <TextField onChange={handleNombre} id="outlined-basic" color='secondary' label="Nombre" variant="outlined" />
                            <TextField onChange={handleMail} id="outlined-basic" color='secondary' label="Mail" variant="outlined" />
                        </div>
                        <div className='mensaje_contact'>
                            <TextField onChange={handleMensaje} className='mensaje' id="outlined-basic" color='secondary' multiline minRows={4} maxRows={4} label="Mensaje" variant="outlined" />
                        </div>
                </div>
                <div className='button_enviar'>
            <Button disabled={contact.nombre && contact.mail && contact.mensaje ? false : true  } onClick={handleClick} variant='contained'>Enviar</Button>
        </div>
        </div>

    </div>
  )
}

export default Contacto