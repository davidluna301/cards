"use client";

import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface TravelCardProps {
  city: string;
  type: string;
  price: string;
  code: string;
  image: string;
}

export default function TravelCard({
  city,
  type,
  price,
  code,
  image,
}: TravelCardProps) {
  return (
    <div
      className="
        w-[320px]
        rounded-[30px]
        bg-white
        shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        p-4
        transition-all duration-300
        hover:scale-105
      "
    >
      {/* Imagen */}
      <div className="relative w-full h-[350px] rounded-[25px] overflow-hidden">
        <Image
          src={image}
          alt={city}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Corazón */}
        <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full">
          <HeartIcon className="w-5 h-5 text-white" />
        </div>

        {/* Texto */}
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-2xl font-semibold">{city}</h2>
          <p className="text-sm opacity-80">{type}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">from {price}</p>
          <p className="text-sm font-medium">{code}</p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-black
            text-white
            px-5
            py-2
            rounded-full
            text-sm
            hover:bg-gray-800
            transition
          "
        >
          Search flight
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
