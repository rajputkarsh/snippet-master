import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { AddOutlined } from "@mui/icons-material";

import "swiper/css";
import "swiper/css/pagination";
import { useGlobalContext } from "@/context";
import { isDarkMode } from "@/lib/utils";

export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkModeEnabled = isDarkMode(darkMode);

  return (
    <div
      className={`${
        isDarkModeEnabled ? "bg-slate-800 text-white" : "bg-white"
      } p-3 rounded-lg flex gap-5`}
    >
      <div className="overflow-x-auto w-[1112px]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          className="mySwiper"
          modules={[FreeMode]}
        >
          <SwiperSlide className="bg-purple-600 p-1 rounded-lg text-white w-20">
            All
          </SwiperSlide>
          <SwiperSlide className="text-slate-400">
            Javascript Exercise
          </SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
          <SwiperSlide className="text-slate-400">React Exercise</SwiperSlide>
        </Swiper>
      </div>
      <button className="bg-purple-600 p-1 rounded-md px-3 flex gap-1 items-center text-white">
        <AddOutlined sx={{ fontSize: 18 }} />
        <span>Tag</span>
      </button>
    </div>
  );
}
