import React, { useEffect, useState } from 'react';
import About from './About';
import Testimonials from './Testimonials';
import ServicesCards from './ServicesCards';
import BookingCards from './BookingCards';
import { motion } from "framer-motion";
import './leaves.css';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleResize = () => {
    const isMobile = window.innerWidth <= 767;
    if (!isMobile) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    // Called when the main image is loaded
    setIsLoading(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (id) => {
    window.location.hash = `#${id}`;
    setIsMenuOpen(false);
  };

  const handleContactClick = (e) => {
    const isMobile = window.innerWidth <= 767;
    if (isMobile) {
      e.preventDefault();
      setIsPopupVisible(true);
    } else {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop && !navigator.userAgent.includes("iPhone") && !navigator.userAgent.includes("iPad")) {
        e.preventDefault();
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ab.metconsultant@gmail.com`, '_blank');
      }
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <div className="loader"></div> {/* Add your loader CSS */}
        </div>
      )}

      <div className={`relative bg-white overflow-x-hidden ${isLoading ? 'hidden' : ''}`}>
        <div className="w-[15rem] hidden lg:flex justify-center absolute top-2 left-[40rem]">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="flex justify-center navbar bg-[#dbe47c] bgr-[#abe7c4] pt-0 mt-0 min-h-0 lg:text-lg">
          <div className="navbar-center hidden font-serif text-black lg:flex">
            <ul className="menu menu-horizontal text-lg px-1">
              <li><a href="#about" onClick={() => navigateTo('about')} className="block py-2 px-4">About me</a></li>
              <li><a href="#services" onClick={() => navigateTo('services')} className="block py-2 px-4">Services</a></li>
              <li><a href="#testimonials" onClick={() => navigateTo('testimonials')} className="block py-2 px-4">Testimonials</a></li>
            </ul>
          </div>
          <div id="leaves">
            {Array.from({ length: 15 }).map((_, index) => (
              <i key={index}></i>
            ))}
          </div>
          <div className="navbar-end hidden lg:flex mr-10">
            <a href="mailto:uditi013@gmail.com" onClick={handleContactClick} className="btn border-0 text-white font-serif font-extralight">Contact me</a>
          </div>
        </div>

        <div className="container mx-auto flex flex-wrap md:flex-nowrap pl-10 pr-10 md:pt-20 justify-center bg-[#dbe47c] bgr-[#abe7c4] rounded-bl-[70rem] rounded-br-[40rem]">
          <div className="pt-1 lg:pt-20 lg:pr-[10rem] lg:flex-col justify-center">
            <motion.div initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="font-serif text-black mr-10 font-medium text-4xl leading-10 xl:text-5xl mb-4">
              Need <span className="text-purple-600 rounded-top-xl">Clarity</span> on Love <br />Career, or Life Choices?
            </motion.div>
            <motion.div initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="mb-8 lg:w-[65vh] pr-10 md:pr-0 lg:text-lg font-serif text-slate-700">
              Explore insights on love, career, and life decisions with Ariel's empowering consultations
            </motion.div>
            <motion.a 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5,  stiffness: 100 }} 
            href="#services" 
            onClick={() => navigateTo('newsletter')} className="btn border-0 shadow-black shadow-2xl bg-black rounded-md font-normal text-sm lg:text-lg px-10 py-1 text-white font-serif mb-10 "> 
          Explore Services

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clip-rule="evenodd" />
          </svg>
          </motion.a>
          </div>
          <div className="w-[77vh]">
            <img src="homepage.png" alt="hero" onLoad={handleImageLoad} />
          </div>
        </div>

        <ServicesCards />
        <div id="services">
          <BookingCards />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div className='flex flex-col justify-center my-40'>
        <div className="my-5 text-4xl tracking-tight text-black font-serif font-extralight flex justify-center underline decoration-wavy decoration-green-500 text-center  underline-offset-8 decoration-2 ">Follow My Youtube Channel</div>
          
          {/* <div className="flex justify-center"><div className="max-w-[50rem] text-lg text-gray-700 mx-10 my-5 text-wrap">Get a face-to-face reading with me </div></div> */}
{/* <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons"></a> */}
<div className="flex justify-center"> <img src="arrows.png" className="w-20" alt="arrows"/></div>
        <div className='flex justify-center mt-10'><iframe width="1000" height="500" src="https://www.youtube.com/embed/CtFLRrUdnJg?si=tR_BTpTh65anXULa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div></div>
        {/* <div className='flex mb-40 justify-center'>
          <img src="logo.png" alt="logo"/>
        </div> */}
        <footer className="bg-[#dbe47c] bgr-[#abe7c4] pt-5 font-serif text-black">
          <div className='w-full mx-auto max-w-screen-xl p-4 flex gap-3 items-center justify-between'>
            <div className=' mb-10 text-sm pr-10 xl:p-0'>
              <span className='font-bold'>Legal Disclaimer: </span> 
By purchasing a reading or chart interpretation/report, you agree that you are over the age of 18 years old.

The law state that tarot readings and other paranormal items may only be sold for entertainment purposes.

Readings are based on current energies. Everyone has free will and outcomes can always change. Readings are for entertainment purposes only. Readings are not to be used as a substitute for medical, psychological, professional, legal, or financial advice. I do not predict death. By purchasing a reading, you agree to take full responsibly for all actions or decisions you make as a result of the reading you receive. I will not be held liable for any actions made by the purchaser before or after receiving a reading.

All services are for entertainment purposes only and absolutely no guarantees are implied.

All sales are final.

Please feel free to contact me for any questions or concerns
            </div>
          </div>
           <div className="bg-[#dbe47c] flex  justify-center md:hidden">
              <img src='logo.png' className='w-[12rem] pb-6' alt='logo'/>
            </div>
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex gap-3 md:items-center md:justify-between">
          <span className="text-sm text-wrap">© 2024, Ariel Baham <br/> <span className="hover:underline">ConsultationsByAriel™</span>. All Rights Reserved.</span>
              <ul className="md:flex hidden text-sm md:ml-auto items-center glass-head">
                <li><a href="#about" onClick={() => navigateTo('about')} className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 ">About</a></li>
                <li><a href="mailto:uditi013@gmail.com" onClick={handleContactClick} className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 ">Contact</a></li>
                <li><a href="#services" onClick={() => navigateTo('services')} className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 ">Services</a></li>
                <li><a href="#testimonials" onClick={() => navigateTo('testimonials')} className="hover:underline me-4 cursor-pointer md:me-6 block py-2 px-4 ">Testimonials</a></li>
              </ul>
            
          </div>
          <div className="text-sm flex font-serif justify-center mt-10 pb-10">
  &#9734; Designed and Developed by{' '}
  <a href="https://linktr.ee/UditiDas" target="_blank" rel="noopener noreferrer"  className="ml-1 underline">
    Uditi Das
  </a>
</div>

        </footer>
      </div>
    </>
  );
};

export default MainPage;
