// Importação de imagens
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/icons/iconMenu.svg';
import Search from '../../assets/icons/search.svg';

// Arquivo de estilo
import './style.scss';
import { useState } from 'react';

export const Header = () => {

    const [active, setActive] = useState(false);

    const fActiveMenu = () => {
        setActive(!active);
    }

    return (
        <header className='iHeader'>
            <img src={logo} alt='Logo' />

            <nav className={active ? 'activeMenu' : ''}>
                <ul className='listMenu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Category</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <form>
                <input type='text' placeholder='Search' />
                <button className='btnSearch'>
                    <img src={Search} alt='Íconde de lupa' />
                </button>
            </form>

            <button className='btnMenu' onClick={fActiveMenu} >
                <img src={menu} alt='Menu' />
            </button>
        </header>
    );
}