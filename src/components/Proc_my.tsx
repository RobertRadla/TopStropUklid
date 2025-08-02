import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Proc_my: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#F3E9DF] rounded-3xl mx-[4vw] mb-[15vh] py-[8vh] shadow-xl font-monserrat"
    >
      
      <div className="mx-[10vw]">
        
        <h2 className="text-[6vmin] font-bold pb-[3vh] text-[#333]
                       md:text-[3.5vmin]">
          Proč si vybrat právě nás?
        </h2>


        <p className="text-[0vmin] text-gray-700 pb-[2vh]
                      md:text-[1.5vmin]">
          Protože za vás nejen uklidíme – <span className="text-[#6CA0D8] font-semibold">vezmeme odpovědnost za čistotu vašeho prostoru</span>.
          Jsme profesionálové, kteří věří v kvalitní služby, osobní přístup a spokojené klienty.
        </p>



        <div className="flex flex-col flex-1 gap-[4vw]
                        md:flex-row">

          {/* Výhoda 1 */}
          <div className="flex flex-col">

            <h3 className="flex items-center justify-center gap-3 text-[4vmin] font-semibold pb-[2vh]
                            md:justify-start md:text-[1.8vmin]"> <CheckCircle className="text-[#6CA0D8] w-[5vw] h-auto md:w-[2vw]" /> Spolehlivost</h3>

            <p className="text-gray-700 h-[8vh] text-[2.5vmin]
                          md:text-[1.5vmin]">
              Dodržujeme termíny, přicházíme včas a děláme, co slíbíme. Našim cílem je zákazníkovi poskytnout klid a jistotu, že je o vše postaráno.  
            </p>

            <img src="/assets/spolehlivost.png" alt="Spolehlivost" className="flex flex-1 object-cover rounded-lg"/>

          </div>


          {/* Výhoda 2 */}
          <div className="flex flex-col mt-[4vh]
                          md:mt-0">

            <h3 className="flex items-center justify-center gap-3 text-[4vmin] font-semibold pb-[2vh]
                            md:justify-start md:text-[1.8vmin]"> <CheckCircle className="text-[#6CA0D8] w-[5vw] h-auto md:w-[2vw]" /> Detaily rozhodují </h3>
            
            <p className="text-gray-700 h-[8vh] text-[2.5vmin]
                          md:text-[1.5vmin]">
              Zameteme i ten poslední roh. Preciznost je naše DNA a právě ta dělá rozdíl mezi úklidem a službou.
            </p>

            <img src="/assets/detail.png" alt="Detaily rozhodují" className="flex flex-1 object-cover rounded-lg"/>

          </div>


          {/* Výhoda 3 */}
          <div className="flex flex-col mt-[4vh]
                          md:mt-0">

            <h3 className="flex items-center justify-center gap-3 text-[4vmin] font-semibold pb-[2vh]
                            md:justify-start md:text-[1.8vmin]"> <CheckCircle className="text-[#6CA0D8] w-[5vw] h-auto md:w-[2vw]" /> Úsměv a lidskost</h3>
            
            <p className="text-gray-700 h-[8vh] text-[2.5vmin]
                          md:text-[1.5vmin]">
              Jsme lidé – komunikujeme s respektem a úsměvem. Uklízíme rádi a s energií, která je znát.
            </p>

            <img src="/assets/usmev.png" alt="Úsměv a lidskost" className="lex flex-1 object-cover rounded-lg"/>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default Proc_my;
