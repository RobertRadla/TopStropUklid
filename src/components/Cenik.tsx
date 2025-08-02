import Header from './Header';
import ZajemOUklid2 from './ZajemOUklid2';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Cenik() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col items-center justify-center px-[5vw] py-[10vh] text-center gap-[4vh]">
        <h1 className="text-[8vmin] font-bold text-[#333]">Ceník</h1>

        <motion.img
          src="/assets/cena.png"
          alt="Ilustrační obrázek ceníku"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-[15vh] w-auto rounded-2xl shadow-md"
        />

        <p className="text-[3vmin] md:text-[2vmin] text-[#444] max-w-[800px]">
          Naše ceny jsou vždy <span className="font-semibold">individuální</span> a odvíjí se od rozsahu služeb, frekvence úklidu a náročnosti prostoru. Nevěříme v univerzální sazby, protože každá domácnost či firma je jiná.
        </p>

        <p className="text-[3vmin] md:text-[2vmin] text-[#444] max-w-[800px]">
          Díky naší <span className="font-semibold text-[#6CA0D8]">garanci nejnižší ceny</span> máte jistotu, že neplatíte zbytečně. Pokud nám pošlete nabídku od jiné úklidové firmy, pokusíme se ji <span className="font-semibold">překonat a nabídnout výhodnější řešení</span>.
        </p>

        <p className="text-[3vmin] md:text-[2vmin] text-[#444] max-w-[800px]">
          Chcete-li znát konkrétní cenu pro váš domov, kancelář nebo objekt, neváhejte nás kontaktovat pomocí <span className="font-semibold">nezávazného kontaktního formuláře</span>.
        </p>

        <Link to="/kontakt">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#6CA0D8] hover:bg-[#FDB94F] text-white text-[4vmin] md:text-[2vmin] font-semibold px-[4vw] py-[3vh] rounded-2xl transition duration-300"
          >
            Kontaktujte nás
          </motion.button>
        </Link>
      </div>

      <ZajemOUklid2 />
    </div>
  );
}