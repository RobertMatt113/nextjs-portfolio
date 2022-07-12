import React from 'react';
import Image from 'next/image';
import cvImg from '../public/assets/cvImg.png'

const resume = () => {
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] sm:w-[75%] md:w-[65%] lg:w-[35%] lg:pt-40 lg:pb-12 xl-[35%]'>
            <div className='w-[100%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
                <Image className='rounded-xl object-contain' src={cvImg} alt="/" />
            </div>
        </div>
    );
};

export default resume;