import React from 'react';
import code from '../assets/code2.png';
import portfolio_pic from '../assets/portfolio_pic.png';
import home_page from '../assets/home_page.png';

const Works = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1e1e1e]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-yellow-300 border-yellow-500'>
                        Work &#8702;
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${portfolio_pic})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-gray-800 tracking-wider'>
                                Portfolio Website
                            </span>
                            <p className='text-center text-gray-700'>A Portfolio website built with React.</p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${home_page})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-gray-800 tracking-wider'>
                                Website Collection App
                            </span>
                            <p className='text-center text-gray-700'>
                                A web application built with HTML & CSS(Tailwind) 
                                having collection of websites and tools used by students.
                            </p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-gray-800 tracking-wider'>
                                Final MERN based Project
                            </span>
                            <p className='text-center text-gray-700'>
                                MERN based website solving a problem statement <br />
                                COMING SOON !!!
                            </p>
                            <p className='text-black font-bold text-2xl'>
                                <br />STAY TUNED !!!
                            </p>
                            {/* <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    
                    

                </div>
            </div>
        </div>
    );
};
export default Works;