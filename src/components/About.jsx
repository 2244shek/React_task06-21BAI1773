import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-full pb-20 md:h-screen md:pb-0 bg-[#1e1e1e] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full ">
                <div className=" py-16 rounded-[30px] shadow-xl border-2 border-lime-600 shadow-green-900 bg-lime-600 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 text-orange-900 border-yellow-500">
                                About &#8702;
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold font-mono">
                            <p>
                                Hi&nbsp;&#10083; <br /> I'm Abhishek Panigrahi, nice to meet you.
                                Please take a look around !!
                            </p>
                        </div>
                        <div className="text-gray-900 font-mono text-lg font-semibold">
                            <p>
                                {" "}
                                Currently in 3rd year of my B.Tech, pursuing at VIT, Chennai. <br />
                                My current CGPA is <span className="font-semibold">8.5</span>.&nbsp;
                                A newbie software developer with minimum experience in building Responsive and
                                Scalable Web apps & well-knowledged in UI/UX principles and
                                practices. <br />
                                Additionnally, I am having fond in <b>Singing</b> and <b>Travelling</b> around the globe, 
                                exploring different heritage and culture of indigenous communities.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;