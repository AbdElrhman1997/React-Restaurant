import React from 'react';
import Button from '../Button/Button';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container mx-auto' data-aos='fade-top' data-aos-delay='400'>
                <p className=' text-headTxt-100 text-3xl w-1/2 mx-auto'>Hurry up! Subscribe our newsletter and get 25% Off</p>
                <p className='text-bodyTxt-100 my-6 w-11/12 mx-auto'>Limited time offer for this month. No credit card required.</p>
                <form className='grid grid-cols-12 w-2/3 mb-16 mx-auto'>
                    <input type="text" placeholder='Email Address Here' className='lg:col-span-8 md:col-span-8 col-span-12'/>
                    <div className='submit bg-mainColor-100 col-span-4'>Subscribe</div>
                </form>
            </div>
        </div>
    )
}

export default Contact;