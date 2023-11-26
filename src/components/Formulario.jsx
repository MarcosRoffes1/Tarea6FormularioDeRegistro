import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelope, faKey, faLock, faPen } from '@fortawesome/free-solid-svg-icons'


const Formulario = () => {
  return (
    <form action="#">
        
        <h1>Registrate</h1>
        <div className='container'>
            <div className='container-inputs'>
            <FontAwesomeIcon icon={faUser} style={{color: "#c1c9d7",}} fade />
            <input type="text" name='name' id='nombre' placeholder='Ingresa Tu Nombre' required/>
            </div>
            <div className='container-inputs'>
            <FontAwesomeIcon icon={faPen} style={{color: "#c1c9d7",}} />
            <input type="text" name='name' id='nombre' placeholder='Ingresa Tu Apellido' required/>
            </div>
            <div className='container-inputs'>
            <FontAwesomeIcon icon={faPhone} style={{color: "#c1c9d7",}} />
            <input type="tel" name='tel' id='phone' placeholder='54-351-666-5814' required/>
            </div>
            <div className='container-inputs'>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#c1c9d7",}} />
            <input type="email" name="mail" id="mail" placeholder='Ingresa tu Correo' required/>
            </div>
            <div className='container-inputs'>
            <FontAwesomeIcon icon={faKey} style={{color: "#c1c9d7",}} />
            <input type="password"  name="password" id="pass" placeholder='Ingresa tu contraseña' required />
            </div>

            <div className='container-inputs'>
            <FontAwesomeIcon icon={faLock} style={{color: "#c1c9d7",}} />
            <input type="password"  name="password" id="pass" placeholder='Confirma tu contraseña' required />
            </div>
            <div className='button'>
                <input type="submit" value="Registrate" />
                <p>Al registrarse acepta todas nuestras <u>Condiciones de uso y Politicas de Privacidad</u></p>
                <p>¿Ya tienes una cuenta?<a href="#" className='link'>Iniciar Sesion</a></p>
            </div>
        </div>
    </form>
  )
}

export default Formulario