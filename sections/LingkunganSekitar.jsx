import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div>
      <div className="flex justify-center mt-[64px] mb-[128px]">
        <div
          href="#"
          className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/1.jpg"
                alt=""
              />
              <p className="text-white font-semibold">
                Rumah Warga Dusun Pringgading
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/2.jpg"
                alt=""
              />
              <p className="text-white font-semibold">Kelurahan Pringgading</p>
            </div>
          </div>

          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/3.jpg"
                alt=""
              />
              <p className="text-white font-semibold">Lahan Acara Dusun</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                src="/lingkungan-sekitar/4.jpg"
                alt=""
              />
              <p className="text-white font-semibold">Kelurahan Pringgading</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[64px] mb-[128px]">
        <div
          href="#"
          className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/5.jpg"
                alt=""
              />
              <p className="text-white font-semibold">
                Rumah Dukuh Pringgading
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/6.jpg"
                alt=""
              />
              <p className="text-white font-semibold">Curug Pringgading</p>
            </div>
          </div>

          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/7.jpg"
                alt=""
              />
              <p className="text-white font-semibold">
                Rumah Dukuh Pringgading
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                src="/lingkungan-sekitar/19.jpg"
                alt=""
              />
              <p className="text-white font-semibold">Bendungan Guwosari</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[64px] mb-[128px]">
        <div
          href="#"
          className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/8.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Jalan Luar Dusun Pringgading
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/10.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">Bendungan Guwosari</p>
            </div>
          </div>

          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/11.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Depan Rumah Dukuh Pringgading
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                src="/lingkungan-sekitar/17.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Belakang Rumah Dukuh Pringgading
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[64px] mb-[128px]">
        <div
          href="#"
          className="max-md:flex-col pb-2 gap-6 justify-center max-w-[1400px] flex items-center bg-primary-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/13.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Jalan Lahan Acara Pringgading
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/14.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Lahan Acara Pringgading
              </p>
            </div>
          </div>

          <div className="flex max-xl:flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full h-96 md:h-auto md:w-72 rounded-lg"
                src="/lingkungan-sekitar/18.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Depan Rumah Dukuh Pringgading
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 rounded-lg md:rounded-r-lg"
                src="/lingkungan-sekitar/16.jpeg"
                alt=""
              />
              <p className="text-white font-semibold">
                Rumah Dukuh Pringgading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
