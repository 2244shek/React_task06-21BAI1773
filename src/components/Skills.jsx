import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#1e1e1e] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-center text-yellow-500 '>Skills &#8702;</p>
                    <p className='pt-6 text-2xl'>
                        <span className='font-semibold'>I never really stop myself nurturing upcoming technologies with my curiosity!!</span> <br />
                        Here's a list of technologies I've worked with : &#8594;
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>R Programming</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>Tailwind/Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>Django</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] rounded-2xl text-black font-mono bg-lime-600 hover:scale-110 duration-500'>
                        <p className='my-4'>SQL</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
export default Skills;