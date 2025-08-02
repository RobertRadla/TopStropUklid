import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Společné prostory bytových domů",
  "Chodby, výtahy, sklepy",
  "Kanceláře a komerční prostory",
  "Pravidelné i jednorázové úklidy",
  "Úklid po rekonstrukci nebo malování"
];

const Sluzby: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full font-montserrat my-[3vh]">
      
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-[5vmin] text-montserrat font-bold
                     md:text-[6vmin]"
        >
          Vídáte šlápoty, prach, pavučiny, odpadky a nepořádek?
        </motion.h2>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-col items-center justify-center mt-[vh] mx-[2vw] py-[1vh] md:gap-[3vw]">

          <p className='font-bold text-[3vmin] md:text-[2vmin] mb-[vh]'>Kazí to první dojem nejen vám, ale i návštěvám nebo klientům?</p>
          <p className='text-[3vmin] pt-2 md:text-[2vmin] mx-[15vw] mb-[2vh]'>Čisté společné prostory nejsou jen otázkou estetiky – odráží péči o celý dům a ovlivňují jeho hodnotu. Zanedbaný vchod s flekatou podlahou a špinavými schody může působit odpudivě i na poctivé nájemníky. A když na schodišti leží letáky a prach z několika týdnů? Kdo z obyvatel se toho rád ujme?</p>
          <p className='mx-[15vw] font-bold text-[5vmin] md:text-[6vmin] text-[#6CA0D8]'>Naše úklidová služba se o to postará!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-[9vw] mt-[6vh] mx-[2vw] py-[1vh]
                     md:flex-row md:gap-[3vw]">
          
          <img
            src="/assets/Sluzby.png" alt="Služby"
            className="w-[50vw] object-cover rounded-lg
                       md:w-[30vw]"/>

          <ul className="text-[3.3vmin] space-y-[2vh] text-[#444]
                         md:text-[2vmin] md:text-left md:ml-[9.5vw] ">
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-[1vw]"
              >
                <span className="text-[2vmin]">✔️</span>
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>

        </motion.div>

        <p className='text-[3vmin] md:text-[1.8vmin] mt-[4vh] font-bold'>Ušetříte čas, vyhnete se sousedským dohadům a váš dům bude vždy působit čistě a reprezentativně.</p>
        <p className='text-[3vmin] md:text-[2vmin] font-bold text-[#6CA0D8]'>Navíc – nastavení frekvence a rozsahu úklidu je plně na vás.</p>
      
    </section>
  );
};

export default Sluzby;
