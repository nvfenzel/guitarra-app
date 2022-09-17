import React, {useState, useCallback, useEffect} from 'react'
import './Nav.css'
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import { Button } from '@mui/material';
import { FlashlightOnOutlined } from '@mui/icons-material';

const Nav = () => {

  const [state, setState] = React.useState({
    check: false,
    nav: false
   });

   const onChangeInput = () => {
    setState({
      check: !state.check,
    })
  };

  const onChangeClick = () => {
    setState({
      check: false,
    })
  };

const [y, setY] = useState(window.scrollY);

// const handleNavigation = useCallback( e => { const window = e.currentTarget;
//   if (window.screen.height > y) {
 
//     console.log("scrolling up");
//     setState({ ...state,
//       nav: false,
//   });

//   } else if ( window.screen.height< y) {
    
//     console.log("culito");
//     setState({ ...state,
//       nav: true,
//   });
//   }
//   setY(window.scrollY);
// }, [y]
// );
// console.log(window.screen.height)
// console.log(y)
// console.log(window.scrollY)
// useEffect(() => {
//   setY(window.scrollY);
//   window.addEventListener("scroll", handleNavigation);

//   return () => {
//     window.removeEventListener("scroll", handleNavigation);
//   };
// }, [handleNavigation]);



  return (
    <div className={ 'navegador navegador_acompañante'}>
        <HeadsetOutlinedIcon className='logo_musica'/>
        <input checked={state.check ? true : false} onChange={onChangeInput} id="abrir-cerrar" name="abrir-cerrar" type="checkbox" value=''/>
        <label htmlFor="abrir-cerrar" className="toggle-button"></label>
        <ul className={state.check ? 'translateY' : ''}>
            <li><a onClick={onChangeClick} href="#Home">Home</a></li>
            <li><a onClick={onChangeClick} href="#Nosotros">Sobre Mi</a></li>
            <li><a onClick={onChangeClick} href="#Servicios">Servicios</a></li>
            <li><a onClick={onChangeClick} href="#Contacto"><Button variant='contained' sx={{color:'#fff', m:0}}> Contacto</Button></a></li>
        </ul>
        </div>
  )
}

export default Nav