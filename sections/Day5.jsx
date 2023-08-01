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
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day5/posyandu-dahlia1.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Posyandu Balita</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Posyandu Balita ini dilaksanakan setiap bulannya yang bertempat di Posyandu Dahlia 1, Dahlia 2, dan Dahlia 3.
              Disela-sela waktu KKN, kami menyempatkan untuk membantu ibu-ibu untuk ikut mendata pada Posyandu Balita seperti tinggi badan dan berat badan.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[64px]'>
        <div href="#" className='max-w-[500px] flex items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-4xl md:flex-row md:max-w-xl sm:flex-row sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day5/pengolahan-sampah2.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Program Kerja Pengolahan Sampah</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Pada pengolahan sampah ini kami memberikan sosialisasi mengenai pentingnya kebersihan karena sampah, pembuatan pupuk cair menggunakan sampah organik, 
                dan pengenalan maggot untuk mengurai sampah organik.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
