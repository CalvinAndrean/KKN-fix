import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return ( 
    <div>
      <div className='flex justify-center mt-[64px] mb-[128px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mr-[30px]" src="/lingkungan-sekitar/1.jpg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/2.jpg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/3.jpg" alt="" />
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-r-lg" src="/lingkungan-sekitar/4.jpg" alt="" />
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[128px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mr-[30px]" src="/lingkungan-sekitar/5.jpg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/6.jpg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/7.jpg" alt="" />
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-r-lg" src="/lingkungan-sekitar/19.jpg" alt="" />
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[128px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mr-[30px]" src="/lingkungan-sekitar/8.jpeg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/10.jpeg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/11.jpeg" alt="" />
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-r-lg" src="/lingkungan-sekitar/17.jpeg" alt="" />
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[128px]'>
        <div href="#" className='max-w-[1200px] flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mr-[30px]" src="/lingkungan-sekitar/13.jpeg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/14.jpeg" alt="" />
          <img class="object-cover w-full h-96 md:h-auto md:w-72 md:rounded-none mr-[30px]" src="/lingkungan-sekitar/18.jpeg" alt="" />
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-r-lg" src="/lingkungan-sekitar/16.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}