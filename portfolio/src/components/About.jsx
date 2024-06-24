import React, { useEffect } from 'react';
import img from '../assets/Profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumeFile from '../assets/resume.pdf'; // Replace with your actual resume file path

const About = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            delay: 0,
            duration: 750,
        });
    }, []);

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = resumeFile; // Specify the URL of your resume file
        link.setAttribute('download', 'Resume.pdf'); // Specify the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="About" className="lg:px-56 px-10 lg:py-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img
                data-aos="fade-down"
                src={img}
                width={290}
                height={290}
                className="rounded border-2 p-1 img_glow"
                style={{ borderColor: 'rgb(239, 156, 14)' }}
                alt="Profile"
            />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white lg:ml-28">
                <h1
                    data-aos="fade-right"
                    className="text-[52px] lg:text-[52px] font-semibold mb-8 leading-normal uppercase text-amber-600"
                >
                    About Me
                </h1>
                <p data-aos="fade-left" className="text-base lg:text-lg">
                As a detail-oriented software engineering student, I am driven by a strong foundation in data structures and algorithms, coupled with practical expertise in developing dynamic web applications using cutting-edge MERN technologies (MongoDB, Express.js, React, Node.js). My journey has equipped me with proficient skills in database management, full-stack development, and backend engineering. I am passionately eager to apply my knowledge and contribute to innovative projects on a significant platform, aiming to create impactful solutions and push technological boundaries.
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button
                                className="neno-button shadow-xl hover:shadow-amber-600/50 text-white border-2 hover:bg-amber-600 border-amber-600 rounded-lg py-4 px-8 uppercase relative overflow-hidden"
                                onClick={handleDownloadResume}
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
