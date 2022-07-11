import React from 'react';
import ProjectItem from './ProjectItem';
import netflixImg from '../public/assets/projects/netflix.png';
import ecommerseImg from '../public/assets/projects/ecommerse.png';
import pokeImg from '../public/assets/projects/poke.png'
import weatherImg from '../public/assets/projects/weather.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&#39;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem 
                        title='Netflix Clone' 
                        backgroundImg={netflixImg}
                        projectURL='/netflix'
                    />
                    <ProjectItem 
                        title='Ecommerse' 
                        backgroundImg={ecommerseImg}
                        projectURL='/ecommerse'
                    />
                    <ProjectItem 
                        title='Poke API' 
                        backgroundImg={pokeImg}
                        projectURL='/pokeapi'
                    />
                    <ProjectItem 
                        title='Weather App' 
                        backgroundImg={weatherImg}
                        projectURL='/weatherapp'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;