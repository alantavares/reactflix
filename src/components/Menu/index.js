import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <nav className="Menu">
            <a href='/'>
                <img src={Logo} alt="Alanflix" className="Logo" />
            </a>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;