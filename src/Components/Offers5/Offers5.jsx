import React from 'react';
import Button from '../Button/Button';
import './Offers5.scss';

const Offers5 = () => {
    return (
        <div className='offers5'>
                <div className='overlay'>
                <div className="container lg:flex md:flex sm:flex justify-around items-center">
                    <p className='text-3xl text-white font-bold my-6'>Baked fresh daily by bakers with passion.</p>
                    <Button content='Learn More'/>
                </div>
            </div>
        </div>
    )
}

export default Offers5