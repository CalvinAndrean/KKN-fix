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
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day3/pemasangan-plang.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pemasangan Plang Ketua RT.01 - RT.09</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Hari ketiga kami dimulai dengan pelaksanaan program kerja Inovasi Dusun yakni Pemasangan Plang pada tiap-tiap rumah
                Ketua RT.01 - RT.09. Mengingat motor yang boleh kami bawa hanya 3 saja, maka program kerja inovasi dusun pemasangan plang ini dilaksanakan oleh <span className="text-white"><b>'9 UnderGround's' </b></span>
                yang merupakan sebutan untuk kumpulan lelaki di KKN 83 UAJY Pringgading.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-[64px] mb-[64px]'>
        <div href="#" className='max-w-[500px] flex items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-4xl md:flex-row md:max-w-xl sm:flex-row sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/day3/ciwi.jpg" alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sarinah Tani bersama KWT</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Di lain sisi, para <span className="text-white"><b>Ladies </b></span>bersama ibu-ibu KWT mengikuti Sarinah Tani yakni penanaman dan penyiraman tanaman yang berlokasi 
                di Rumah Wakil Bupati Bantul. Sarinah Tani ini merupakan kegiatan rutin mingguan yang dilaksanakan oleh KWT yang mencakup pembahasan 
                mengenai progress KWT dan pembudidayaan tanaman yang sedang musim.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
