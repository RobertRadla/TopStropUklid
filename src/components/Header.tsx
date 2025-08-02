import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const navItems = [
  { name: "Domů", path: "/", submenu: ["Zpět na úvodní stranu"] },

  { name: "Naše práce", path: "/naseprace", submenu: ["Naše reference"] },
  { name: "Ceník", path: "/cenik", submenu: ["Jaká je cena"] },
  { name: "Kontakt", path: "/kontakt", submenu: ["Kontaktujte nás"] },
];


const Header: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [animationStates, setAnimationStates] = useState<boolean[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const length = navItems[hoveredIndex].submenu.length;
      const delays = new Array(length).fill(false);
      setAnimationStates(delays);

      navItems[hoveredIndex].submenu.forEach((_, i) => {
        setTimeout(() => {
          delays[i] = true;
          setAnimationStates([...delays]);
        }, i * 100);
      });

      setActiveIndex(hoveredIndex);
    }
  }, [hoveredIndex]);

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setActiveIndex(null);
    }, 100);
  };

  const cancelClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const isExpanded = activeIndex !== null;

  return (

        <div className="relative w-full text-[3.3vmin] font-montserrat md:text-[0.8rem]">


          {/* Logo jako button mimo layout zcela nahoře */}
          <div className="">
            <Link to="/">
            <button className={`fixed left-[2vw] transition-all duration-500 transform z-[999] md:left-[8vw] ${
                    isExpanded ? "top-[7.5rem] scale-[4.25] -translate-y-1/2" : "top-[2.25rem] scale-100 -translate-y-1/2"}  `}>

              <img src="/assets/Logo.png" alt="Logo" className="h-[10vh] w-auto md:h-[6vh]" />
            </button> 
            </Link>
          </div>



          {/* Header */}
          <div className="fixed w-full bg-white transition-all duration-300 shadow-sm z-50">
            <div className="relative h-[11vh] w-full flex items-center pl-[20vw] md:pl-[0vw] md:justify-center md:h-[6vh]">
              <div className="flex space-x-[4vw] md:space-x-[6vw]">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={handleLeave}
                  >
                    <Link to={item.path}>
                      <Button buttonName={item.name} className="transition-all duration-300 font-normal group-hover:font-bold md:font-normal" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>



          {/* CTA Button nad vším */}
          <div className={`hidden fixed z-[100] text-[3.5vmin] transition-all duration-700 ease-in-out transform md:text-[1.2vmin] md:block ${
              isExpanded
                ? "top-[7.5rem] right-[8rem] -translate-y-1/2"
                : "top-[18vh] right-[2vw] -translate-y-1/2 md:top-[2.25rem] md:right-[5vw]"
            }`}
            onMouseEnter={cancelClose}
            onMouseLeave={handleLeave}
          >
            <Link to="/kontakt">
            <Button buttonName="Nezávazná poptávka"
                    className={`text-white rounded-2xl px-[1vw] py-[3.5vh] transition duration-300 ease-in-out transform bg-[#6CA0D8] md:px-[1.5vw] md:py-[1.4vh] md:font-semibold hover:bg-[#FDB94F] hover:scale-105`}
            />
            </Link>
          </div>

          {/* Curtain */}
          <div
            className={`fixed top-[4.5rem] left-0 w-full h-screen z-40 transition-opacity duration-300 ${
              isExpanded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 backdrop-blur-md bg-white/70 transition-all duration-300" />
          </div>

          {/* Submenu */}
          <div className={`fixed top-[4.5rem] left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden z-50 ${
              isExpanded ? "h-[13rem] py-6" : "h-0 py-0" }`}
            onMouseEnter={cancelClose}
            onMouseLeave={handleLeave}
          >
            <div className="relative h-full w-full">
              <div className="flex flex-col items-center space-y-4">
                {activeIndex !== null &&
                  navItems[activeIndex].submenu.map((sub, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-500 ease-out transform ${
                        animationStates[i] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                      }`}
                    >
                      <Button buttonName={sub} className="transition-all duration-300 hover:font-bold" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
  

  );
};

export default Header;