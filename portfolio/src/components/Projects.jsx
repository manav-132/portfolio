import React, { useEffect } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div id="Projects" className="p-10 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] lg:text-[52px] font-semibold mb-10 lg:mb-20 text-center leading-normal uppercase text-amber-600">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
        <img
          data-aos="fade-up"
          height={400}
          width={250}
          className="w-full h-auto max-h-[400px] max-w-[250px] p-1 flex items-center justify-center rounded-3xl border-2 border-amber-600 b_glow"
          src={img1}
          alt="Project 1"
        />
        <img
          data-aos="fade-down"
          height={400}
          width={250}
          className="w-full h-auto max-h-[400px] max-w-[250px] p-1 flex items-center justify-center rounded-3xl border-2 border-amber-600 b_glow"
          src={img2}
          alt="Project 2"
        />
        <img
          data-aos="fade-up"
          height={400}
          width={250}
          className="w-full h-auto max-h-[400px] max-w-[250px] p-1 flex items-center justify-center rounded-3xl border-2 border-amber-600 b_glow"
          src={img3}
          alt="Project 3"
        />
        <img
          data-aos="fade-down"
          height={200}
          width={250}
          className="w-full h-auto max-h-[400px] max-w-[250px] p-1 flex items-center justify-center rounded-3xl border-2 border-amber-600 b_glow"
          src={img4}
          alt="Project 4"
        />
      </div>
    </div>
  );
};

export default Projects;
