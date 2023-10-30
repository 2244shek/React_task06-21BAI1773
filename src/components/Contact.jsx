import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#1e1e1e] flex justify-center items-center p-4'>
            <div className='flex flex-col  md:w-1/2 border-2 border-yellow-300 p-8 '>
                <div className='pb-4 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500'>Contact &#8702;</p>
                    <p className='text-gray-300 py-4'>Send me a message</p>
                </div>
                <input className='bg-[#98ff73] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#98ff73]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#98ff73] p-2' name="message" rows="6" placeholder='Message'></textarea>
                <button className='text-[#98ff73] border-2 border-[#98ff73] hover:bg-lime-500 hover:border-lime-500 hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Connect Now</button>
            </div>
        </div>
    )
}
export default Contact