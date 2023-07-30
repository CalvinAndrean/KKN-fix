import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link';

export default function TimelineReact() {
  return (
    <VerticalTimeline>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-1'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Selasa, 4 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Penerjunan KKN</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Kampus 3, Universitas Atma Jaya Yogyakarta</h4>
            <p className="text-black">
              Mulainya perjalanan KKN kami di Dusun Pringgading 😊💖
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-3'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Kamis, 6 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Inovasi Dusun</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Dusun Pringgading</h4>
            <p className="text-black">
              Pemasangan Plang Ketua RT di tiap-tiap rumah Ketua RT
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-4'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jumat, 7 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Acara Karang Taruna</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌GOR Kalurahan Guwosari</h4>
            <p className="text-black">
              Mengikuti acara pertemuan karang taruna (SARAKATA) se-Kabupaten Bantul
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-5'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sabtu, 8 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Kesehatan dan Pengolahan Sampah</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌SPS Dahlia 1 &📌RT.03</h4>
            <p className="text-black">
              Berpartisipasi dalam kegiatan Posyandu Balita serta pelaksanaan Pengolahan Sampah Organik
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-6'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Minggu, 9 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Kerja Bakti Merti Dusun</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌RT.04</h4>
            <p className="text-black">
              Bersama warga kerja bakti untuk persiapan Merti Dusun Pringgading
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-7'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Senin, 10 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Kesehatan</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Posyandu Dahlia 2</h4>
            <p className="text-black">
              Berpartisipasi dalam kegiatan Posyandu Balita
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-8'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Selasa, 11 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Senam Sehat</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Rumah Wakil Bupati Bantul</h4>
            <p className="text-black">
              Bersama ibu-ibu Dusun Pringgading melaksanakan senam sehat
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-9'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Rabu, 12 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Free Day</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Rumah Wakil Bupati Bantul</h4>
            <p className="text-black">
              Hari kosong dimana diisi dengan olahraga tenis meja dan menonton film bersama
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-10'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Kamis, 13 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Inovasi Dusun</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌SPS Dahlia 1</h4>
            <p className="text-black">
              Membersihkan serta menghias PAUD Dahlia 1 dengan kertas origami dan lampion
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-11'>
          <VerticalTimelineElement
            position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jumat, 14 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja sosialisasi UMKM Aldyo, Feli, Yolen</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Rumah Wakil Bupati Bantul</h4>
            <p className="text-black">
              Melaksanakan Program Kerja Sosialisasi UMKM bersama para ibu-ibu Kelompok Wanita Tani (KWT)
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-12'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sabtu, 15 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Hukum dan Sipil</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌RT.06 &📌RT.03</h4>
            <p className="text-black">
              Melaksanakan Sosialisasi Bantuan Hukum dan Struktur Atap Baja Ringan
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-13'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Minggu, 16 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">EVALUASI TENGAH BULAN</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Posko KKN 83 UAJY Pringgading</h4>
            <p className="text-black">
              Melaksanakan Evaluasi tiap-tiap program kerja yang telah terlaksana
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-15'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Selasa, 18 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Pendidikan</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌SPS Dahlia 1</h4>
            <p className="text-black">
              Melaksanakan Program Kerja Pendidikan: Perkenalan dan Lomba Mewarnai
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-16'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Rabu, 19 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Teknologi Tepat Guna</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌RT.03 &📌RT.05</h4>
            <p className="text-black">
              Mengumpulkan data untuk keperluan Program Kerja Teknologi Tepat Guna
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-17'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Kamis, 20 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Pendidikan</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌SPS Dahlia 1</h4>
            <p className="text-black">
              Melaksanakan Program Kerja Pendidikan: Belajar dan Senam
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-18'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jumat, 21 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Teknologi Tepat Guna</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌RT.03</h4>
            <p className="text-black">
              Melaksanakan Program Kerja Teknologi Tepat Guna di RT.03
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-19'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sabtu, 22 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Teknologi Tepat Guna</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌RT.05</h4>
            <p className="text-black">
              Melaksanakan Program Kerja Teknologi Tepat Guna di RT.05
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='../perjalanan-kkn/day-20'>
          <VerticalTimelineElement
          position='right'
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Minggu, 23 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Sosial Budaya</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Lapangan Badminton  RT.04 Blok VI</h4>
            <p className="text-black">
              Melaksanakan Lomba Badminton: Perebutan Posisi Semifinal
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
      <div className='mb-[32px]'>
        <Link href='./perjalanan-kkn/day-21'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Senin, 24 Juli 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-black">Program kerja Sosial Budaya</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">📌Lapangan Badminton RT.04 Blok VI</h4>
            <p className="text-black">
              Melaksanakan Lomba Badminton: Semifinal dan Final
            </p>
          </VerticalTimelineElement>
        </Link>
      </div>
    </VerticalTimeline>
  )
}