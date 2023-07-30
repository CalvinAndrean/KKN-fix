import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return ( 
    <div>
      <div className='flex justify-center mt-[64px] mb-[284px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/Bambu-Pringgading.jpeg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asal Usul Pring Gading</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Bambu Pring Gading merupakan bambu kuning yang sering kita temui di hutan atau pinggir jalan pedesaan. Pada Dusun Pringgading, 
                Pring Gading dipilih menjadi salah satu ikon dusun ini dimana sejarahnya adalah dahulu ada tokoh yang membawa bambu ini dan menanam nya
                di sebagian besar lahan yang ada di dusun ini sehingga dusun ini dikenal dengan Dusun Pringgading.</p>
          </div>
        </div>
      </div>
    </div>
  )
}