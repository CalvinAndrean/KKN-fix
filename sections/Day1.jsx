import * as React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";

export default function ActionAreaCard() {
  return (
    <div className="h-full">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col mt-10 gap-8`}
      >
        {/* First Card */}
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          className="flex justify-center w-full"
        >
          <div className="max-w-[500px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-4xl md:flex-row md:max-w-xl sm:flex-row sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/day1/KKN-UAJY.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Penerjunan KKN 83 UAJY Pringgading
              </h5>
              <p className="mb-3 font-normal text-gray-400">
                KKN 83 UAJY Pringgading diterjunkan tanggal 4 Juli 2023 dengan
                titik kumpul di Kampus 3 Bonaventura, Universitas Atma Jaya
                Yogyakarta. Kami beranggotakan 10 orang yakni dari yang paling
                kiri adalah Bang Tio, Nikko, Aldyo, Bang Malino, Yolen, Yustin,
                Dinda, dan Calvin. 2 anggota lain yang menyusul adalah Ruliff
                dan Felicia.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          className="flex justify-center w-full"
        >
          <div className="max-w-[500px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-4xl md:flex-row md:max-w-xl sm:flex-row sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/day1/pembukaan-kapanewon.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Penyambutan oleh Kapanewon Pajangan
              </h5>
              <p className="mb-3 font-normal text-gray-400">
                Sebelum memulai pelaksaan program kerja, kami disambut oleh
                Wakil Kapanewon Pajangan, Lurah, dan Polsek Bantul disertai
                dengan himbauan-himbauan dalam melakukan kegiatan sehari-hari di
                padukuhan masing masing.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
