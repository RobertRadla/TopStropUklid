import { motion } from "framer-motion";
import Button from "./Button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";


function ZajemOUklid2() {
    return (
        
        <div className="h-[60vh] bg-gradient-to-b from-[#1C2F4A] to-[#101A2B] font-montserrat">
            
            {/* White blur */}
            <div className="absolute w-[40vw] h-[15vh] bg-[#6CA0D8] opacity-35 rounded-full blur-[120px] z-0 left-1/2 -translate-x-1/2" />


            {/* Upper part */}
            <div className="relative flex flex-col items-center h-[35vh]
                            md:flex-row">

                <div id="logo" className="absolute ml-[5vw] hidden
                                          md:ml-[12vw] md:block">
                    <motion.img
                        src="/assets/LogoBile.png"
                        alt="Logo úklidové služby"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-[15vw] object-cover
                                   md:w-[6vw]" />
                </div>

                <div id="glass-box" className="w-full pt-8
                                               md:pt-0">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-[2.5vh] text-center mx-[15vw]
                                     md:mx-[32vw] md:p-[4vh]">
                            <div className="flex flex-col items-center gap-4">
                                <h2 className=" text-white text-[5vmin] font-bold leading-tight
                                                md:text-[2.5vmin]">
                                    Máte zájem o úklid?
                                </h2>

                                <p className="text-[2.5vmin] text-white/80 
                                              md:text-[1.4vmin] md:max-w-[15vw]">
                                    Zajistíme precizní a rychlý úklid tam, kde ho právě potřebujete – od domů po kanceláře. Napište nám, první krok je nezávazný!
                                </p>

                                <Link to="/kontakt">
                                <Button
                                    buttonName="Nezávazná poptávka"
                                    className="bg-[#FDB94F] text-white text-[3vmin] px-[2vw] py-[1vh] mt-[1vh] rounded-2xl font-semibold hover:scale-105 hover:bg-[#fda126] transition-all duration-300
                                                md:text-[1.3vmin]"/>
                                </Link>
                            </div>
                    </motion.div>
                </div>

            </div>




            {/* Lower part */}
            
            <div id="Oddělovací čára" className="border-t border-white/10 max-w-[90vw] mr-auto ml-auto"></div>
            
            
            <div id="Boxes in a row" className="flex flex-col w-screen h-[25vh] pt-[2vh]
                                                md:flex-row md:pt-[5vh]">

                <div id="Navigace" className="hidden
                                              md:flex-1 md:flex md:flex-col">
                    <h2 className="text-white/80 font-semibold text-[1.6vmin]">
                        NAVIGACE
                    </h2>
                    <div className="flex flex-1 pt-[2vh]">
                        <div className="flex flex-col flex-1 h-full text-white/60 text-[1.4vmin]">
                            <Link to="/" className="hover:text-white transition duration-300 hover:underline underline-offset-4">Domů</Link>
                            <Link to="/naseprace" className="hover:text-white transition duration-300 hover:underline underline-offset-4">Naše Práce</Link>
                        </div>
                        <div className="flex flex-col flex-1 h-full text-white/60 text-[1.4vmin]">
                            <Link to="/cenik" className="hover:text-white transition duration-300 hover:underline underline-offset-4">Ceník</Link>
                            <Link to="/kontakt" className="hover:text-white transition duration-300 hover:underline underline-offset-4">Kontakt</Link>
                        </div>
                    </div>
                </div>

                <div id="SLEDUJTE NÁS" className="flex flex-col pt-[2.4vh]
                                                  md:flex-1 md:pt-0">
                    <h2 className="text-white/80 font-semibold text-[2.5vmin]
                                     md:text-[1.6vmin]">
                        SLEDUJTE NÁS
                    </h2>
                    <div className="flex gap-5 justify-center pt-[3vh]">
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition">
                            <Instagram className="h-auto w-[4vw] text-white md:w-[1vw]" /></a>
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition">
                            <Facebook className="h-[2vh] w-[4vw] text-white md:w-[2vw]" /></a>
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition">
                            <Twitter className="h-[2vh] w-[4vw] text-white md:w-[2vw]" /></a>
                        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition">
                            <Youtube className="h-[2vh] w-[4vw] text-white md:w-[2vw]" /></a>
                    </div>
                </div>
                
                <div id="KONTAKT" className="h-0 flex flex-col
                                             md:flex-1 md:h-full">
                    <h2 className="hidden text-white/80 font-semibold text-[1.6vmin]
                                    md:block">
                        KONTAKT
                    </h2>
                    <div className="flex-1 text-white/60 h-0
                                    md:md:h-full md:pt-[2vh]">
                        <h3 className="hidden text-white text-[1.6vmin] md:block">TOP STROP ÚKLID</h3>
                        <p className="hidden text-[1.4vmin] md:block">Telefon: +420 602 943 279</p>
                        <p className="hidden text-[1.4vmin] md:block">Email: info@topstropuklid.cz</p>
                        
                    
                    </div>
                </div>

            </div>
        
        </div>
    );
}

export default ZajemOUklid2;