import React, { useState } from "react";
import Header from "./Header";
import ZajemOUklid2 from "./ZajemOUklid2";
import emailjs from "@emailjs/browser";
import { CheckCircle } from "lucide-react";
import OneWorker from "./OneWorker";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ing. Robert Radla",
    nickname: "El Capitán",
    role: "Zakladatel & manažer",
    image: "/assets/RadlaR.png",
    description: "Robert je Váším přímým partnerem pro úklidové služby a zajišťuje, že vše běží hladce. Má zkušenosti s vedením týmu, péčí o zákazníky a úklidem samotným. V oblasti úklidu se pohybuje již 6 let a ví, jak zajistit vaši spokojenost.",
  },
  {
    name: "Mgr. Jiří Husák",
    nickname: "Paramar",
    role: "Manažer",
    image: "/assets/HusakJ.png",
    description: "Jirka je hlavní manažer a pravá ruka specialistů. Má cit pro organizaci, rychlé řešení situací a férový přístup k lidem. Díky zkušenostem z terénu (10 let) ví přesně, co obnáší kvalitní úklid. Neřídí jen na dálku, ale aktivně se zapojuje do práce a dohlíží na každý detail, aby bylo všechno odvedeno tak, jak má být.",
  },
  {
    name: "",
    nickname: "Míša",
    role: "Úklidový specialista",
    image: "/assets/HankaM.png",
    description: "Michal je zkušený úklidový specialista, který se postará o každý detail. Specializuje se na úklid veřejných prostor a kanceláří.",
  },
  {
    name: "Robert Radla",
    nickname: "Roberto",
    role: "Úklidový specialista",
    image: "/assets/RadlaR2.png",
    description: "Robert je zkušený a pečlivý úklidový specialista, který zvládně jakoukoli výzvu.",
  },
  {
    name: "Bc. Mirek Husák",
    nickname: "Míra",
    role: "Úklidový specialista",
    image: "/assets/HusakM.png",
    description: "Mirek se stará o úklidy v Pardubickém a Královéhradeckém kraji. Pracuje svědomitě, s důrazem na čistotu a pořádek. Každý prostor bere jako vizitku své práce a záleží mu na tom, aby zákazník odcházel spokojený.",
  },
  {
    name: "",
    nickname: "Irča",
    role: "Úklidová specialistka",
    image: "/assets/PatkanovaI.png",
    description: "Irena se s pečlivostí a úsměvem stará o pravidelné úklidy v okolí Mladé Boleslavi, kde je mezi klienty oblíbená pro svou spolehlivost, důslednost a lidský přístup.",
  },
];

const Kontakt: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send("service_hyof2yk", "template_nwuerti", formData, "9Py_EL2mewxwlgVOe");
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Chyba při odesílání:", error);
    }
  };

  return (
    <div className="flex flex-col font-montserrat bg-[#F5F5F5]">
      {/* FORMULÁŘ */}
      <div className="h-[90vh] flex flex-col">
        <Header />

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[10vmin] md:text-[15vmin] text-center text-[#333] font-bold pt-[15vh] md:pt-[5vh] mb-[3vh]"
        >
          Kontaktujte nás
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-1 justify-center items-center px-4"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-lg"
          >
            <h2 className="text-[4vmin] md:text-2xl font-bold mb-6 text-[#333]">
              Pro nezávaznou objednávku nás kontaktujte zde
            </h2>

            {success && (
              <div className="flex items-center gap-2 mb-4 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Zpráva byla úěšně odeslána. Ozveme se vám co nejdříve.</span>
              </div>
            )}

            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Jméno*" className="mb-4 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA0D8]" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email*" className="mb-4 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA0D8]" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" className="mb-4 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA0D8]" />
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Zpráva*" className="mb-6 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6CA0D8]" />

            <button type="submit" className="bg-[#6CA0D8] hover:bg-[#5a8dc4] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
              Odeslat
            </button>
          </form>
        </motion.div>
      </div>

      {/* TÝM */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:pb-[10vh] font-montserrat"
      >
        <h2 className="text-[15vmin] text-center text-[#333] font-bold mb-3 md:mb-[10vh] mt-[18vh]">
          Náš tým
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 px-[4vw] xl:w-[30vw] md:mx-auto">
          {team.map((worker, index) => (
            <OneWorker key={index} {...worker} />
          ))}
        </div>
      </motion.div>

      {/* KONTAKTNÍ ÚDAJE */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl flex flex-row items-center justify-center text-center font-montserrat md:w-[80vw] mx-auto mb-[10vh] gap-10"
      >
        <div className="hidden md:block">
          <img src="/assets/contact.png" alt="Kontaktujte nás" className="w-[20vw] h-auto rounded-xl shadow-md mt-[8vh]" />
        </div>
        <div className="flex flex-col items-center text-center w-[60%]">
          <h2 className="text-[7vmin] mt-6 md:text-[6vmin] md:mt-0 xl:text-[15vmin] text-center text-[#333] font-bold">
            Kontaktní údaje
          </h2>
          {/* Obrázek pro mobil – zobrazen pod nadpisem */}
        <div className="block md:hidden mb-6 mt-4">
          <img src="/assets/contact.png" alt="Kontaktujte nás" className="w-[60vw] h-auto rounded-xl shadow-md" />
        </div>
          <p className="text-[#333] mb-6 text-[4vmin] md:text-[2vmin]">
            Neváhejte se na nás obrátit pomocí <span className="font-semibold">kontaktního formuláře</span> výše, nebo nás kontaktujte přímo:
          </p>
          <div className="flex flex-col gap-3 text-[3vmin] md:text-[1.7vmin] text-[#444] w-full max-w-md">
            <div className="flex items-center justify-center gap-4">
              <div className="w-[2rem] text-right">📞</div>
              <div className="">+420 602 943 279</div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-[2rem] text-right">📧</div>
              <div className="">info@topstropuklid.cz</div>
            </div>
          </div>
        </div>
      </motion.div>

      <ZajemOUklid2 />
    </div>
  );
};

export default Kontakt;
