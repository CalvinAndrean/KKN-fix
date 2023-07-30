'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* <TitleText
        title={(
          <>PRINGGADING
          </>
        )}
        textStyles="text-center"
      />
      <TitleText
        title={(
          <>Guwosari, Pajangan, Bantul
          </>
        )}
        textStyles="text-center"
      /> */}
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          padukuhan pringgading
        </motion.h1>
        {/* <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.guwosariHeading}>guwosari, pajangan, bantul</h1>
        </motion.div> */}
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/Dukuh-Pringgading.jpeg"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative "
        />

        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
