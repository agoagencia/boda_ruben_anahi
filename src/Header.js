import React from 'react'
import { Link } from "react-router-dom"
import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header_flex'>
                <nav className='nav'>
                    <div>
                    <ul>
                        <li><Link to="/inicio">Inicio</Link></li>
                        <li><Link to="/donde_cuando">Dónde y Cuándo?</Link></li>
                        <li><Link to="/siguenos">Siguenos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
                        
                    </ul>
                    </div>
                    <div className='invitame'><h2>INVITAME!</h2></div>
                    <div>
                    <ul>
                        <li><Link to="/confirmar_asistencia">Confirmar Asistencia</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/regalos">Regalos</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header