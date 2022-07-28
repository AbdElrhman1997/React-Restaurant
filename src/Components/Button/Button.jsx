import React from 'react';
import './Button.scss';

const Button = ({content,bgColor,color}) => {
    const colors={
        backgroundColor:bgColor,
        color:color,
    }
    return (
        <div className='button lg:text-base md:text-base sm:text-xl text-2xl'>
            {content}
        </div>
    )
}

export default Button;