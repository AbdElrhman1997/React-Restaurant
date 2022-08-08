import React, { useState } from 'react';
import imgTesti1 from '../../Images/avatar.jpg';
import imgTesti2 from '../../Images/avatar3.png';
import imgTesti3 from '../../Images/avatar4.jpg';
import {FaCircle} from 'react-icons/fa';
import './Testimonials.scss';

const Testimonials = () => {
    const [displayCard,setDisplayCard]=useState('1');

    return (
        <section className='testimonials bg-mainColor-100' id='reviews' data-aos='fade-right' data-aos-delay='400'>
            <div className='container mx-auto text-center'>
                <p className='text-white font-bold text-3xl inline-block my-16'>Testimonials</p>
                <div className='cards'>
                    <div className={`${displayCard==='1'?'card':'hidden'}`}>
                        <img src={imgTesti1} alt="" />
                        <p className='w-1/2 mx-auto text-slate-500 my-4 text-lg'>"Far far Away,behind the world mountains, far from the countries Vokalia and Consnantia,there live the blind texts, Separated they live far from Countries."</p>
                        <p className='mx-auto text-mainColor-100 my-6 font-bold'>Johnthan Doe-UX Designer</p>
                    </div>
                    <div className={`${displayCard==='2'?'card':'hidden'}`}>
                        <img src={imgTesti2} alt="" />
                        <p className='w-1/2 mx-auto text-slate-500 my-4 text-lg'>"Far far Away,behind the world mountains, far from the countries Vokalia and Consnantia, Separated they live far from Countries Vokalia."</p>
                        <p className='mx-auto text-mainColor-100 my-6 font-bold'>Maccy Doe-Front End</p>
                    </div>
                    <div className={`${displayCard==='3'?'card':'hidden'}`}>
                        <img src={imgTesti3} alt="" />
                        <p className='w-1/2 mx-auto text-slate-500 my-4 text-lg'>"Far far Away,behind the world mountains, far from the countries Vokalia and Consnantia,there live the blind texts"</p>
                        <p className='mx-auto text-mainColor-100 my-6 font-bold'>Simab Dave-Web Designer</p>
                    </div>
                </div>
                <div className='flex justify-center gap-10 my-6 icons'>
                    <FaCircle className={`icon ${displayCard==='1'?'text-slate-100':''}`} onClick={()=>{setDisplayCard('1')}}/>
                    <FaCircle className={`icon ${displayCard==='2'?'text-slate-100':''}`} onClick={()=>{setDisplayCard('2')}}/>
                    <FaCircle className={`icon ${displayCard==='3'?'text-slate-100':''}`} onClick={()=>{setDisplayCard('3')}}/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;