import React from "react";
import Image from "next/image";
import Jessa from "./../../public/jessa.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const HeroSection = () => {
  const IMAGE_URL =
    "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/269625037_5016886685030845_7039038477782504600_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeGFy3GpWlvlpgpvDIna3q7Hb3PWcieNQ_Fvc9ZyJ41D8a_F4yXDGpb7zcTXGjRMX4ah8jHYX_LEsqq3FDJ8l-nR&_nc_ohc=0i3B0eP8A9UAX--ikW9&_nc_ht=scontent.fmnl9-4.fna&cb_e2o_trans=q&oh=00_AfDHLcWfVwnP3Ehticp9w5t4nXpTsUTkDxYOeoc9xnCYlA&oe=6511F57E";
  return (
    <section className="grid sm:grid-cols-2 gap-4">
      <div>
        <p className="font-bold text-[32px]">Hello, I'm Jessa</p>

        <p className="font-bold text-main-yellow text-[42px]">
          Professional Graphic Designer, Web Designer, and UI/UX Designer
        </p>
        <Link href="#contact">
          <div className="flex items-center gap-2">
            <div className="p-2 text-white font-bold  bg-main-pink w-auto">
              <BsArrowUpRight />
            </div>
            <p>Hire me!</p>
          </div>
        </Link>

        <div className="mt-8">
          <div className="h-[1px] w-[30%] border border-solid border-slate-200"></div>
          <div className="flex gap-4 mt-4">
            <div className="p-2 rounded-full border border-solid border-main-yellow">
              <AiFillFacebook className="text-main-pink" size={30} />
            </div>

            <div className="p-2 rounded-full border border-solid border-main-yellow">
              <AiFillLinkedin size={30} />
            </div>
            <div className="p-2 rounded-full border border-solid border-main-yellow">
              <AiFillInstagram size={30} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={Jessa} width={500} height={500} />
      </div>
    </section>
  );
};

export default HeroSection;
