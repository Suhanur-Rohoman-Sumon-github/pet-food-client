import Link from "next/link";
import React from "react";

type TCollection = {
  img: string;
  subheading: string;
  heading: string;
  btnColor: string;
  btnText: string;
  link: string;
};

const CollectionCard = ({
  img,
  subheading,
  heading,
  btnColor,
  btnText,
  link,
}: TCollection) => {
  return (
    <div
      className="w-full h-[280px] rounded-md cursor-pointer overflow-hidden relative group flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

      <div className="relative z-10  text-white space-y-3 p-5">
        <h4 className="text-xs">{subheading}</h4>
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <Link href={link}>
          <button className={`px-4 py-2 text-sm font-medium ${btnColor}`}>
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
