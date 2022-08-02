import React from 'react';
import imgOffers1 from '../../Images/1.jpg';
import Button from '../Button/Button';
import './Offers1.scss';

const Offers1 = () => {
    return (
        <section className='offers1 container mx-auto grid grid-cols-12' id='about'>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 m-4' data-aos='fade-right'>
                <img src={imgOffers1} alt=""  className='rounded-2xl'/>
            </div>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 w-11/12 mx-auto mt-4'>
                <p className='text-3xl font-semibold text-headTxt-100' data-aos='fade-left'>We pride ourselves on making real food from the best ingredients.</p>
                <p className=' text-bodyTxt-100 my-8' data-aos='fade-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <Button content='Learn More'/>
            </div>
        </section>
    )
}

export default Offers1;