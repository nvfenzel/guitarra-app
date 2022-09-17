import React, {useEffect} from 'react'
import { Button } from '@mui/material'
import guillermo from '../Assets/guillermo.jpg'
import './Nosotros.css'
import {Doughnut} from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto'

var contador = 0;

const Nosotros = () => {

    const [values, setValues] = React.useState({
        alumnos: 0,
        estilos: 0,
        anio: 0
       });

    const userData = {
        
            labels: ['Inicial', 'Intermedio','Avanzado','Profesional'],
            datasets: [{data: [10,14, 7, 5],
            backgroundColor: ['rgba(103, 0, 0, 0.5)', 'rgba(255, 242, 0, 0.5)', 'rgba(64, 255, 0, 0.5)', 'rgba(0, 34, 255, 0.5)'],
            hoverBackgroundColor: ['rgba(103, 0, 0, 0.7)', 'rgba(255, 242, 0, 0.7)', 'rgba(64, 255, 0, 0.7)', 'rgba(0, 34, 255, 0.7)'],
            hoverBorderWidth: [5, 5, 5, 5]}]
    }

        // if (contador > 50) {
        //     clearInterval(interval);
        // }
    useEffect(() => {
        const interval = setInterval(() => {
        //   console.log('This will run every second!');
        if (contador <= 50) {
            setValues({ ...values,
                alumnos: (contador < 36 ? contador : 36 ),
                estilos: contador,
                anios: (contador < 10 ? contador : 10 )
            });
            contador ++

          }

        }, 30);

        return () => clearInterval(interval);
      }, []);


  return (
    <div id='Nosotros' className='nosotros_body'>
    <div className='nosotros_backgrounds'>
        <div className='bienvenido'>
            <h4>Encuentro musical</h4>
            <h3>¡Hola! Bienvenido</h3>
            <p>Mi nombre es Guillermo, soy profesor de guitarra y vocal coach. Para recebir más información, no dudes en consultarme.</p>
            <div>
            <Button className='buttton_metodo' size='large' sx={{color:'#fff',}} variant='contained'><a href="#Servicios">Mi método</a></Button>
            </div>
        </div>
        <div className='guillermo'>
            <img src={guillermo} alt="guillermo" />
        </div>
    </div>
    <div className='las_clases'>
    <h2>Las clases implican algo más que notas.</h2>
    <div className='contadores'>
        <div className='cajas'>
        <h3>{values.anios}</h3>
        <p>Años de experiencia dedicados a la educación en la música.</p>
        </div>
        <div className='cajas'>
        <h3>{values.alumnos}</h3>
        <p>Alumnos que estudian en la academia.</p>
        </div>
        <div className='cajas'>
        <h3>{values.estilos}</h3>
        <p>Estilos diferentes que podes aprender.</p>
        </div>
    </div>
    <div className='grafico'>
        <div className='text_grafico'>
        <h2>Los Alumnos:</h2>
        <p>Los alumnos tienen diferentes niveles y son de diferentes edades. Nunca es tarde para empezar!</p>
        </div>
        <div className='Doughnut'>
        <Doughnut data={userData}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Nosotros