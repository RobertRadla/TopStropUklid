import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const navItems = [
  { name: "Domů" },
  { name: "Služby" },
  { name: "Reference" },
  { name: "Ceník" },
  { name: "Kontakt" },
];

const ZajemOUklid: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1C2F4A] to-[#101A2B] text-white py-20 px-6 font-montserrat overflow-hidden">
      {/* Rozmazané pozadí */}
      <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#6CA0D8] opacity-10 rounded-full blur-[120px] z-0" />

      <div className="z-10 max-w-[1600px] mx-auto w-full px-4">
        <div className="flex justify-center items-center">
          {/* Logo mimo box přesně mezi levým okrajem a boxem */}
          <motion.img
            src="/assets/Logo.png"
            alt="Logo úklidové služby"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[10rem] w-auto" 
          />

          {/* Glass box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-6 md:p-10 w-full max-w-xl text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Máte zájem o úklid?
              </h2>

              <p className="text-base md:text-lg text-white/80 max-w-2xl">
                Zajistíme precizní a rychlý úklid tam, kde ho právě potřebujete – od domů po kanceláře. Napište nám, první krok je nezávazný!
              </p>

              <Button
                buttonName="Nezávazná poptávka"
                className="bg-[#FDB94F] text-white text-base px-8 py-4 mt-2 rounded-2xl font-semibold hover:scale-105 hover:bg-[#fda126] transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Navigace + Sociální sítě + Adresa */}
        <div className="mt-28 border-t border-white/10 pt-16">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Navigace */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold uppercase mb-6 tracking-wide text-white/80">Navigace</h3>
              <div className="grid grid-cols-2 gap-4 text-white/70 text-base">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-white transition duration-300 hover:underline underline-offset-4"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Sociální sítě */}
            <div className="">
              <h4 className="text-xl font-semibold mb-6 text-white/80">Sledujte nás</h4>
              <div className="flex gap-5">
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                  <Youtube className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Adresa */}
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-6 text-white/80">Kontakt</h4>
              <div className="text-white/60 text-base leading-relaxed">
                <p className="font-semibold text-white">Úklidová služba Uklidíme.cz</p>
                <p>Pražská 1245</p>
                <p>101 00 Praha 10</p>
                <p>IČO: 12345678</p>
                <p>Telefon: +420 777 123 456</p>
                <p>Email: info@uklidime.cz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZajemOUklid;
