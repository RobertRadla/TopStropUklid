import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import VideoBanner from './components/VideoBanner';
import Landing_uklidime from './components/Landing_uklidime';
import Button from './components/Button';
import { AnimatePresence, motion } from 'framer-motion';
import Proc_my from './components/Proc_my';
import GaranceCeny from './components/GaranceCeny';
import GeneralniUklidZdarma from './components/GeneralniUklidZdarma';
import { useEffect, useState } from 'react';
import Sluzby from './components/Sluzby';
import ZajemOUklid2 from './components/ZajemOUklid2';
import SluzbyPage from './components/SluzbyPage';
import NasePrace from './components/NasePrace';
import Cenik from './components/Cenik';
import Kontakt from './components/Kontakt';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFirstRenderDone, setIsFirstRenderDone] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);

      const footerElem = document.getElementById("footer");
      if (footerElem) {
        const rect = footerElem.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsInFooter(true);
        } else {
          setIsInFooter(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFirstRenderDone) {
      const timeout = setTimeout(() => {
        setIsFirstRenderDone(true);
      }, 1600);
      return () => clearTimeout(timeout);
    }
  }, [isFirstRenderDone]);

  return (

    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
    

      {/* HOME */}
      <Route path="/" element={

        <div className="w-full min-h-screen flex flex-col">
          <Header />

          {/* Úvodní sekce */}
          <div className="h-screen w-full flex flex-col justify-center">
            <div className='h-[73vh]'>
              <VideoBanner videoSrc="/assets/uvodni_video2.mov" />
            </div>

            <div className="flex w-full flex-1">
              <div className="w-3/4 text-left mt-[1vh] ml-[10vw]">
                <Landing_uklidime />
              </div>

              {/* Animované tlačítko */}
              <AnimatePresence mode="wait">
                {(!isInFooter) && (
                  <motion.div

                    key={isScrolled ? 'fixed' : 'static'}
                    initial={{ opacity: 0, scale: isScrolled ? 0.85 : 1 }}
                    animate={{ opacity: 1, scale: isScrolled ? 0.85 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: !isScrolled && !isFirstRenderDone ? 1.5 : 0,
                      duration: isScrolled ? 0.25 : 0.6,
                      ease: "easeOut"
                    }}
                    className={`transition-all duration-500 ease-in-out ${
                      isScrolled
                        ? 'fixed right-[0vw] z-50'
                        : 'w-1/4 mt-[5vh] mr-[6vw] md:mt-[7vh] md:mr-[12vw]'
                    }`}
                  >
                    <Link to="/kontakt">
                     <Button buttonName="Kontaktujte nás"
                      className={`text-white text-[3vmin] rounded-2xl font-semibold transition duration-300 ease-in-out transform hover:bg-[#FDB94F] hover:scale-105 
                                  md:text-[2vmin] ${
                        isScrolled
                          ? 'bg-[#6CA0D8] px-[1vw] py-[2vh]'
                          : 'bg-[#6CA0D8] px-[4vw] py-[4vh]'}`}/>
                    </Link>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bannery */}
          <div className="w-full flex flex-col gap-0">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <GaranceCeny />
            </motion.div>

            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <GeneralniUklidZdarma />
            </motion.div>
          </div>

          {/* Služby */}
          <div className='my-[12vh]'>
            <Sluzby />
          </div>

          {/* Proč právě my */}
          <div className="">
            <Proc_my />
          </div>

          {/* Budoucí footer */}
          <div id="footer">
            <ZajemOUklid2 />
          </div>
        </div>


      } />


    
      {/* SLUŽBY */} 
      <Route path="/sluzby" element={<SluzbyPage />} />
    
      {/* REFERENCE */}
      <Route path="/naseprace" element={<NasePrace />} />
    
      {/* CENÍK */}
      <Route path="/cenik" element={<Cenik />} />

      {/* KONTAKT */}
      <Route path="/kontakt" element={<Kontakt />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
