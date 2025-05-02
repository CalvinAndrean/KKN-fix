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
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-8 mt-10`}
      >
        {/* First Row */}
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          className="flex justify-center w-full"
        >
          <div className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/1.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Rumah Warga Dusun Pringgading
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/2.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Kelurahan Pringgading
                </p>
              </div>
            </div>

            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/3.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">Lahan Acara Dusun</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                  src="/lingkungan-sekitar/4.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Kelurahan Pringgading
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Row */}
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          className="flex justify-center w-full"
        >
          <div className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/5.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Rumah Dukuh Pringgading
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/6.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">Curug Pringgading</p>
              </div>
            </div>

            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/7.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Rumah Dukuh Pringgading
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                  src="/lingkungan-sekitar/19.jpg"
                  alt=""
                />
                <p className="text-white font-semibold">Bendungan Guwosari</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Row */}
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          className="flex justify-center w-full"
        >
          <div className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/8.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Jalan Luar Dusun Pringgading
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/10.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">Bendungan Guwosari</p>
              </div>
            </div>

            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/11.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Depan Rumah Dukuh Pringgading
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                  src="/lingkungan-sekitar/17.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Belakang Rumah Dukuh Pringgading
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fourth Row */}
        <motion.div
          variants={fadeIn("up", "tween", 0, 1)}
          className="flex justify-center w-full"
        >
          <div className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/13.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Jalan Lahan Acara Pringgading
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/14.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Lahan Acara Pringgading
                </p>
              </div>
            </div>

            <div className="flex max-xl:flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                  src="/lingkungan-sekitar/18.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Depan Rumah Dukuh Pringgading
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                  src="/lingkungan-sekitar/16.jpeg"
                  alt=""
                />
                <p className="text-white font-semibold">
                  Rumah Dukuh Pringgading
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
