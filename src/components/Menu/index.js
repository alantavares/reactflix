import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href='/'>
                <img src={Logo} alt="Alanflix" className="Logo" />
            </a>
            <Button href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;