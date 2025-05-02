// SejarahBambu.jsx
import React from "react";

export default function SejarahBambu() {
  return (
    <div className="flex-1 flex items-center justify-center bg-primary-black">
      <div className="max-w-[1200px] m-4 flex flex-col md:flex-row items-center bg-primary-black border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/Bambu-Pringgading.jpeg"
          alt="Bambu Pringgading"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Asal Usul Pring Gading
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            Bambu Pring Gading merupakan bambu kuning yang sering kita temui di
            hutan atau pinggir jalan pedesaan. Pada Dusun Pringgading, Pring
            Gading dipilih menjadi salah satu ikon dusun ini dimana sejarahnya
            adalah dahulu ada tokoh yang membawa bambu ini dan menanam nya di
            sebagian besar lahan yang ada di dusun ini sehingga dusun ini
            dikenal dengan Dusun Pringgading.
          </p>
        </div>
      </div>
    </div>
  );
}
