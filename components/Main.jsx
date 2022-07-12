import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>

            <p className='uppercase text-sm tracking-widest text-gray-600'>
                LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <h1 className='py-4 text-gray-700'>
                Hi, i&#39;m <span className='text-[#5651e5]'>Roberto</span>
            </h1>
            <h1 className='py-2 text-gray-700'>
                A Front-End Developer
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I&#39;m a software developer, specializing in building exceptional
                digital experiences. Currently, i&#39;m focused on building responsive 
                front-end web applications while learning back-end technologies.
            </p>

            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a
                href='https://www.linkedin.com/in/roberto-mattus-b7b615231/'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                </a>
                <a
                href='https://api.whatsapp.com/send?phone=529842051122&text=Hello! Are you available? My name is'
                target='_blank'
                rel='noreferrer'
                >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaWhatsapp />
                </div>
                </a>
                <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                </Link>
                <Link href='/resume'>
                    <a>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </a>
                </Link>
            </div>
            </div>
        </div>       
        </div>
    );
};

export default Main;