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
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day4/prepare-sarakata.jpeg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Persiapan acara karang taruna (SARAKATA)</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Hari keempat ini kami diminta untuk membantu persiapan acara SARAKATA yang bertempat di GOR Kalurahan Guwosari. Tiap-tiap kelompok pada 
                Unit B mengirimkan perwakilan sebanyak 4 orang untuk persiapan acara ini dan perwakilan kelompok 9 adalah Ruliff, Aldyo, Calvin, dan Nikko.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[64px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day4/sarakata.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Menghadiri acara SARAKATA</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                SARAKATA merupakan singkatan dari Sambung Rasa Karang Taruna dimana acara ini dihadiri oleh seluruh karang taruna se-Kabupaten Bantul dan 
                partisipasi kehadiran dari mahasiswa KKN 83 UAJY pada Kapanewon Pajangan dan Kapanewon Sedayu masing masing kelompok adalah 4 orang.</p>
          </div>
        </div>
      </div>
    </div>
  )
}