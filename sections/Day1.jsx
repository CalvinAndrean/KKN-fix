import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return ( 
    <div>
      <div className='flex justify-center mt-[64px] mb-[64px]'>
        <div href="#" className='max-w-[500px] flex items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-4xl md:flex-row md:max-w-xl sm:flex-row sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day1/KKN-UAJY.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Penerjunan KKN 83 UAJY Pringgading</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                KKN 83 UAJY Pringgading diterjunkan tanggal 4 Juli 2023 dengan titik kumpul di Kampus 3 Bonaventura, Universitas Atma Jaya Yogyakarta.
                Kami beranggotakan 10 orang yakni dari yang paling kiri adalah Bang Tio, Nikko, Aldyo, Bang Malino, Yolen, Yustin, Dinda, dan Calvin.
                2 anggota lain yang menyusul adalah Ruliff dan Felicia.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[64px]'>
        <div href="#" className='max-w-[500px] flex items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-4xl md:flex-row md:max-w-xl sm:flex-row sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day1/pembukaan-kapanewon.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Penyambutan oleh Kapanewon Pajangan</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Sebelum memulai pelaksaan program kerja, kami disambut oleh Wakil Kapanewon Pajangan, Lurah, 
              dan Polsek Bantul disertai dengan himbauan-himbauan dalam melakukan kegiatan sehari-hari di padukuhan masing masing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
