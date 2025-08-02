import Header from './Header';
import ZajemOUklid2 from './ZajemOUklid2';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/assets/prace1.png',
  '/assets/prace2.png',
  '/assets/prace3.jpg',
  '/assets/prace4.png',
  '/assets/prace5.jpg',
  '/assets/prace6.jpg'
];

export default function NasePrace() {
  const [index, setIndex] = useState(-1); // -1 = zavřeno

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      <div className="w-full flex flex-col items-center py-[10vh] gap-[4vh]">
        <h1 className="text-[8vmin] font-bold text-[#333] mb-[4vh]">Naše práce</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] w-full px-[4vw]">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <img
                src={src}
                alt={`Ukázka práce ${i + 1}`}
                className="w-full h-[30vh] md:h-[35vh] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ZajemOUklid2 />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
}
