import React from 'react';
import imgOffers2 from '../../Images/2.png';
import Button from '../Button/Button';
import {FaCheck} from 'react-icons/fa'
import './Offers2.scss';

const Offers2 = () => {
    return (
        <section className='container mx-auto grid grid-cols-12'>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 w-11/12 mx-auto mt-4' data-aos='fade-right'>
                <p className='text-3xl font-semibold text-headTxt-100'>We make everything by hand with the best possible ingredients.</p>
                <p className=' text-bodyTxt-100 my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className='flex items-center'><FaCheck className=' text-mainColor-100 my-4'/><span className='mx-4'>Etiam sed dolor ac diam volutpat.</span></div>
                <div className='flex items-center'><FaCheck className=' text-mainColor-100'/><span className='mx-4'>Erat volutpat aliquet imperdiet.</span></div>
                <div className='flex items-center'><FaCheck className=' text-mainColor-100 my-4'/><span className='mx-4'>purus a odio finibus bibendum.</span></div>
                <Button content='Learn More'/>
            </div>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 m-4' data-aos='fade-left'>
                <img src={imgOffers2} alt="" />
            </div>
        </section>
    )
}

export default Offers2;