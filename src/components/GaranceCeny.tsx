import React from "react";
import { ShieldCheck } from "lucide-react";

const GaranceCeny: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#6CA0D8] to-[#5c93cc] py-[2vh] px-[2vw] font-monserrat shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]">
      
        {/* LEVÁ STRANA */}
        <div className="flex items-center 
                        md:gap-[1vw]">
          <div className="flex items-center justify-center bg-white w-[10vw] h-7 object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-105
                          md:w-11 md:h-11 md:p-2">
            <ShieldCheck className="text-[#6CA0D8] w-[3vw] h-[5vh]" />
          </div>
          <div className="w-full flex flex-col justify-center items-center
                          md:block md:w-auto">
            <h3 className="text-white text-[4vmin] font-bold tracking-wide
                            md:text-[3vmin] md:w-full">
              Garance nejnižší ceny
            </h3>
            <p className="text-white/90 text-[3vmin] mt-[0.5vh] tracking-wide
                            md:text-[1.4vmin]">
              Férovost, na kterou se můžete spolehnout
            </p>
          </div>
        </div>
        
    </div>
  );
};

export default GaranceCeny;
 