import React, { useEffect } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import img from '../assets/Profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            delay: 0,
            duration: 750,
        });
    }, []);

    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1
                    data-aos="fade-right"
                    className="text-[32px] lg:text-[52px] font-semibold mb-8 leading-normal uppercase"
                >
                    Hello I Am <span className="text-amber-500"> Manav Joshi</span>
                </h1>
                <p data-aos="fade-left" className="text-base lg:text-lg">
                Driven by curiosity and a love for coding, I am a dedicated full-stack developer committed to continuous learning and growth. Embracing challenges fuels my passion, and each day presents an opportunity to expand my skills and tackle new frontiers
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/manav-132" className="text-amber-600 hover:text-amber-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a href="https://www.linkedin.com/in/manav-joshi-73846b1b1/" className="text-amber-600 hover:text-amber-500 rounded-full glow p-2">
                                <AiFillLinkedin className="text-[28px]" />
                            </a>
                            <a href="https://www.instagram.com/manav_joshi._/" className="text-amber-600 hover:text-amber-500 rounded-full glow p-2">
                                <AiFillInstagram className="text-[28px]" />
                            </a>
                            <a href="https://x.com/manavjoshi1107" className="text-amber-600 hover:text-amber-500 rounded-full glow p-2">
                                <AiFillTwitterCircle className="text-[28px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img
                data-aos="fade-up"
                src={img}
                alt="Profile"
                width={290}
                height={290}
                className="rounded-full border-2 p-1 img_glow"
                style={{ borderColor: 'rgb(239, 156, 14)' }}
            />
        </div>
    );
};

export default Banner;
