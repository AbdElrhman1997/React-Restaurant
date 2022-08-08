import React, { useState } from 'react';
import logo from '../../Images/Foodora_logo.png';
import Button from '../Button/Button';
import {FaBars} from 'react-icons/fa';
import './NavBar.scss';

const NavBar = () => {
    const [navMobile,setNavMobile]=useState(false);

    return (
        <header>
            <nav className='nav shadow-lg' data-aos='fade-bottom' data-aos-delay='200'>
                <div className=' container mx-auto'>
                    <div className='navLg grid grid-cols-12'>
                        <div className='lg:col-span-6 md:col-span-4 col-span-4'>
                            <img src={logo} alt="" />
                        </div>
                        <ul className='lg:col-span-6 md:col-span-8'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#explore">Explore Foods</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                            <li>
                                <Button content='01080789123'/>
                            </li>
                        </ul>
                    </div>
                    <div className='navMobile'>
                        <div className=''>
                            <img src={logo} alt="" />
                        </div>
                        <FaBars className='cursor-pointer text-2xl' onClick={()=>{navMobile?setNavMobile(false):setNavMobile(true)}}/>
                        <ul className={navMobile?`inline-block`:'hidden'}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#explore">Explore Foods</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;