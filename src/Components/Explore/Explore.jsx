import React from 'react';
import imgExplore1 from '../../Images/01.jpg';
import imgExplore2 from '../../Images/02.jpg';
import imgExplore3 from '../../Images/03.png';
import Button from '../Button/Button';
import './Explore.scss';

const Explore = () => {
    return (
        <section className='explore' id='explore' data-aos='fade-left' data-aos-delay='100'>
            <div className='container mx-auto text-center'>
                <p className='text-3xl font-semibold text-headTxt-100 mt-10'>Explore Our Foods</p>
                <p className=' text-bodyTxt-100 my-6 w-2/3 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="lg:grid md:grid sm:grid grid-cols-12 lg:gap-16 sm:gap-12 mt-14">
                    <div className="card lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-8 shadow-xl text-left" data-aos='fade-right' data-aos-delay='400'>
                        <img src={imgExplore1} alt="" />
                        <div className='p-3'>
                            <p className=' text-headTxt-100 my-4'>Rainbow Vegetable Sandwich</p>
                            <p className=' text-slate-500'>Timer:15-20 Minutes|Serves:1</p>
                            <div className='my-4'><span className=' text-mainColor-100 font-bold'>10.50$</span><span className=' text-bodyTxt-100 font-bold'>11.70$</span></div>
                            <Button content='Order Now'/>
                        </div>
                    </div>
                    <div className="card lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-8 shadow-xl text-left" data-aos='fade-top' data-aos-delay='600'>
                        <img src={imgExplore2} alt="" />
                        <div className="p-3">
                            <p className=' text-headTxt-100 my-4'>Rainbow Vegetable Sandwich</p>
                            <p className=' text-slate-500'>Timer:15-20 Minutes|Serves:1</p>
                            <div className='my-4'><span className=' text-mainColor-100 font-bold'>10.50$</span><span className=' text-bodyTxt-100 font-bold'>11.70$</span></div>
                            <Button content='Order Now'/>
                        </div>
                    </div>
                    <div className="card lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-8 shadow-xl text-left" data-aos='fade-left' data-aos-delay='500'>
                        <img src={imgExplore3} alt=""/>
                        <div className="p-3">
                            <p className=' text-headTxt-100 my-4'>Rainbow Vegetable Sandwich</p>
                            <p className=' text-slate-500'>Timer:15-20 Minutes|Serves:1</p>
                            <div className='my-4'><span className=' text-mainColor-100 font-bold'>10.50$</span><span className=' text-bodyTxt-100 font-bold'>11.70$</span></div>
                            <Button content='Order Now'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore;