import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import my_pic from '../assets/my_pic.JPG';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#1e1e1e]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div>
                    <img
                        src={my_pic}
                        alt="my profile"
                        className="rounded-[90px] shadow-xl shadow-yellow-600 mx-auto mt-24 md:mt-0  w-1/3 md:w-2/3 "
                    />
                </div>
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl md:mt-7 font-semibold text-white w-96 ">
                        I'm a constant <br /> learner !!
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        A tech enthusiast, B.Tech CS Engineeering student from Odisha
                        who keeps himself up to date with the upcoming and on-going technologies around the globe.
                        I love to work on web application using technologies like
                        React, Tailwind, Next.js and Mongodb.
                    </p>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-red-900 font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-green-500 cursor-pointer"
                        >
                            Explore Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
export default Home;