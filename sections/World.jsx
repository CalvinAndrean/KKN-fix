'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Peta Lokasi" textStyles="text-center" />
      <TitleText
        title={(
          <>Lokasi Padukuhan Pringgading
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <a href="https://www.google.com/maps/place/Pringgading,+Guwosari,+Pajangan,+Bantul+Regency,+Special+Region+of+Yogyakarta/@-7.8601888,110.3057408,3101m/data=!3m1!1e3!4m6!3m5!1s0x2e7af8eab635e637:0xe01520e2e3498b19!8m2!3d-7.8595653!4d110.3055619!16s%2Fg%2F11f613rq_5?entry=ttu" target="_blank">
          <img src="/Maps2-Pringgading.jpeg" alt="map" className="w-full h-full object-cover rounded-[32px]" /></a>

        {/* <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
