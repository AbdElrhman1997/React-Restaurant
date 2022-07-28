import React from 'react';
import {FaInstagram,FaFacebookF,FaLinkedinIn,FaGithub} from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer bg-mainColor-100'>
            <div className='container mx-auto'>
                <div className='icons'>
                    <a href="https://github.com/AbdElrhman1997" target='_blank'><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/abdelrhman-mohamed-73215022a/" target='_blank'><FaLinkedinIn/></a>
                    <a href="https://web.facebook.com/abdomo7amed11" target='_blank'><FaFacebookF/></a>
                    <a href="https://www.instagram.com/abdelrahmanmohamed7867/" target='_blank'><FaInstagram/></a>
                </div>
                <p className='text-center my-6 text-lg'>&copy; 2022. Abdelrhman Mohamed. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;