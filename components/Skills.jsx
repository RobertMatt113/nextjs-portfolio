import Image from 'next/image';
import React from 'react';
import HTMLImg from '../public/assets/skills/html.png';
import CSSImg from '../public/assets/skills/css.png';
import JavaScriptImg from '../public/assets/skills/javascript.png';
import GitHubImg from '../public/assets/skills/github1.png';
import ReactImg from '../public/assets/skills/react.png';
import NextImg from '../public/assets/skills/nextjs.png';
import TailwindImg from '../public/assets/skills/tailwind.png';
import fireBaseImg from '../public/assets/skills/firebase.png';
import NodeImg from '../public/assets/skills/node.png';
import PostgresqlImg from '../public/assets/skills/postgres.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={HTMLImg} 
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={CSSImg} 
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={JavaScriptImg} 
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={GitHubImg} 
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={ReactImg}
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>ReactJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={NextImg}
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>NextJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={TailwindImg}
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={fireBaseImg}
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={NodeImg} 
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                    src={PostgresqlImg} 
                                    width='64px' 
                                    height='64px' 
                                    alt='/'
                                />
                            </div>
                            <div className='flex felx-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;