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
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day11/1.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Program Kerja Individu Sosialisasi UMKM</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sosialisasi UMKM ini merangkap program kerja individu dari Aldyo, Felicia, dan Yolen dimana masing masing berasal dari program studi 
                Informatika, Sistem Informasi, dan Ilmu Komunikasi. Mereka membahas mengenai pentingnya <i>go online</i> untuk UMKM agar 
                mendapatkan manfaat lebih banyak dibandingkan hanya <i>offline atau on-site</i> saja.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[64px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mr-[30px]" src="/day11/2.jpg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 mr-[30px]" src="/day11/4.jpg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 mr-[30px]" src="/day11/3.jpg" alt="" />
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-r-lg" src="/day11/5.jpg" alt="" />
          {/* <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kerja Bakti Merti Dusun</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Merti Dusun merupakan acara untuk memperingati hari ulang tahun dusun dimana selalu dilaksanakan setiap tahunnya.
                Untuk mempersiapkan acara merti dusun, dilaksanakan kerja bakti setiap hari minggu bertempat di lahan belakang rumah Wakil Bupati Bantul.</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}