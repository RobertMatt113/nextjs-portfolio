import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutPicture from '../public/assets/aboutPicture.jpg';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <p className='py-4'>Who I Am</p>
                    <p className='py-2 text-gray-600 max-w-[90%]'>
                        I&#39;m a Software Engineer and also a member of Academlo Computer Science Academy. <br />
                        I have experience using some languages ​and frameworks as an individual developer.<br /> (Frontend development). <br />
                        <br />
                        I&#39;m currently perfecting my knowledge in NodeJS, postgreSQL, Firebase, ExpressJS. <br />
                        (Backend development). <br />
                        <br />
                        My core strengths are the passion for creation, i&#39;m motivated, i know how to work alone and i know how to work in a team as well. I&#39;m empathic and quite disciplined.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-[#5651e5] underline cursor-pointer'>
                            CHECK OUT SOME OF MY LATEST PROJECTS
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
                    <Image className='rounded-xl' src={AboutPicture} alt="/" />
                </div>
            </div>
        </div>
    );
};

export default About;