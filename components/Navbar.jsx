"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = ({ title, canGoBack, backTitle, url }) => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto relative`}>
      <div className="flex justify-center items-center">
        <h2 className="font-extrabold text-center text-[24px] leading-[30.24px] text-white">
          {title ?? "Selamat Datang"}
        </h2>
      </div>

      {canGoBack && (
        <Link
          className="absolute left-0 top-1/2 transform -translate-y-1/2 flex gap-2 items-center"
          href={url}
        >
          <img
            src="/arrow-left.svg"
            alt="back"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
          />
          <p className="font-semibold text-white">{backTitle}</p>
        </Link>
      )}
    </div>
  </motion.nav>
);

export default Navbar;
