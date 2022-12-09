import React, { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext/DataContext";

export default function Banner() {
  const { rocketData } = useContext(DataContext);
  return (
    <div className="image_container | grid lg:grid-cols-2 border-b">
      <div className="tagline | flex flex-col items-center justify-center py-20 px-2 mb-2.5 md:px-6">
        <h1 className="heading | font-zen text-3xl mb-2 sm:text-4xl md:text-5xl lg:mb-4">
          {rocketData[1]?.rocket_name}
        </h1>
        <p className="description | text-center text-sm text-slate-600 lg:text-lg lg:w-3/4">
          {rocketData[1]?.description}
        </p>
      </div>
      <div className="image">
        <img
          src={rocketData[1]?.flickr_images[1]}
          alt={rocketData[1]?.rocket_name}
        />
      </div>
    </div>
  );
}
