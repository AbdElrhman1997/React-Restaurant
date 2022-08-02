import React from 'react';
import './Statistics.scss';

const Statistics = () => {
    
    return (
        <section className='statistics'>
            <div className='container mx-auto grid grid-cols-4 flex justify-around'>
                <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-4 my-6'>
                    <p className='static1'>1250+</p>
                    <p>SAVINGS</p>
                </div>
                <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-4 my-6'>
                    <p className='static2'>5786+</p>
                    <p>PHOTOS</p>
                </div>
                <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-4 my-6'>
                    <p className='static3'>1440+</p>
                    <p>ROCKETS</p>
                </div>
                <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 col-span-4 my-6'>
                    <p className='static4'>7110+</p>
                    <p>GLOBES</p>
                </div>
            </div>
        </section>
    )
}

export default Statistics;