import { NavLink } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { RiBillLine  } from "react-icons/ri";
import {GiClothes } from 'react-icons/gi';
import { PiStudent }from "react-icons/pi";
import { useState,useEffect } from 'react';
import './navbar.css';
const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <nav className='container'>
        <ul>
            <li>
                <NavLink to={'/'}>
                    <GoHome  />
                    {windowWidth > 768 ? 'Anasayfa' : null}</NavLink>
            </li>
            <li>
                <NavLink to={'/clothes'}>
                    <GiClothes/>
                    {windowWidth > 768 ? 'Kıyafet' : null}</NavLink>
            </li>
            <li>
                
                <NavLink to={'/bills'}>
                    <RiBillLine/>
                    {windowWidth > 768 ? 'Fatura' : null}</NavLink>
            </li>
            <li>
                
                <NavLink to={'/scholarship'}>
                    <PiStudent/>
                    {windowWidth > 768 ? 'Burs' : null}
                    </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;