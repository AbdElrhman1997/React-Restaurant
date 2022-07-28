import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import {RiShoppingBasketFill} from 'react-icons/ri';
import './Home.scss';

const Home = () => {
    return (
        <section id='home' className='home'>
            <div className='container mx-auto'>
                <div className='lg:w-2/5 md:w-3/5 w-full lg:text-left md:text-left text-center'>
                    <p className='text-5xl font-bold'>Good food choices are good investments.</p>
                    <p className='text-2xltext-gray-500 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <div className='flex lg:justify-start md:justify-start justify-center'>
                        <div className='button shadow-xl flex items-center'>Order Now<span className='ml-3'><RiShoppingBasketFill/></span></div>
                        <div className='button shadow-xl flex items-center'>Learn More<span className='text-gray-500 ml-3'><IoIosArrowForward/></span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;




// BiRightArrow
// FaRegCircle
// FaFacebookF
// FaInstagram
// FaLinkedinIn
// FaGithub


