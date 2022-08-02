import React from 'react';
import './FAQ.scss';

const FAQ = () => {
    return (
        <section className='faq' id='FAQ'>
            <div className='container mx-auto'>
                <p className='text-3xl font-semibold text-headTxt-100 my-10 text-center' data-aos='fade-right' data-aos-delay='200'>Frequently Asked Questions</p>
                <div className='grid grid-cols-12'>
                    <div className='lg:col-span-6 md:col-span-6 col-span-12 ' data-aos='fade-right' data-aos-delay='300'>
                        <p className='text-headTxt-100 text-xl font-bold'>~ Is Foodera Bread really baked fresh each day?</p>
                        <p className='text-bodyTxt-100'>
                            Far far away,behind the word mountains, far from the countries Vokalia and 
                            Consonantia,there live the blind texts. Separated they live in 
                            Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                    <div className='lg:col-span-6 md:col-span-6 col-span-12 ' data-aos='fade-left' data-aos-delay='500'>
                        <p className='text-headTxt-100 text-xl font-bold'>~ Is Foodera Bread really baked fresh each day?</p>
                        <p className='text-bodyTxt-100'>
                            Far far away,behind the word mountains, far from the countries Vokalia and 
                            Consonantia,there live the blind texts. Separated they live in 
                            Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                    <div className='lg:col-span-6 md:col-span-6 col-span-12 ' data-aos='fade-right' data-aos-delay='400'>
                        <p className='text-headTxt-100 text-xl font-bold'>~ Is Foodera Bread really baked fresh each day?</p>
                        <p className='text-bodyTxt-100'>
                            Far far away,behind the word mountains, far from the countries Vokalia and 
                            Consonantia,there live the blind texts. Separated they live in 
                            Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                    <div className='lg:col-span-6 md:col-span-6 col-span-12 ' data-aos='fade-left' data-aos-delay='600'>
                        <p className='text-headTxt-100 text-xl font-bold'>~ Is Foodera Bread really baked fresh each day?</p>
                        <p className='text-bodyTxt-100'>
                            Far far away,behind the word mountains, far from the countries Vokalia and 
                            Consonantia,there live the blind texts. Separated they live in 
                            Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;