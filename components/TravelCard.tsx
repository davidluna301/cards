"use client";

import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function TravelCard() {
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
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401"
          alt="New York"
          fill
          className="object-cover"
        />

        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Icono favorito */}
        <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full">
          <HeartIcon className="w-5 h-5 text-white" />
        </div>

        {/* Texto sobre imagen */}
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-2xl font-semibold">New York</h2>
          <p className="text-sm opacity-80">Economy</p>
        </div>
      </div>

      {/* Información */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">from $120</p>
          <p className="text-sm font-medium">JFK</p>
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
