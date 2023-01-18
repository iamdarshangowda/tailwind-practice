import React from "react";

const GalleryViewCard = () => {
  return (
    <div className="max-w-2xl border-blue w-full mx-auto my-10 p-5">
      <div className="grid grid-rows-3 grid-cols-3  gap-4 ">
        <div className="col-span-1 ">
          <img
            src="/image/img1.jpg"
            alt=""
            className="object-cover rounded-xl h-full w-full"
          />
        </div>
        <div className="col-span-2  ">
          <img
            src="/image/img3.jpg"
            alt=""
            className="object-cover rounded-xl h-full w-full"
          />
        </div>
        <div className="col-span-2 ">
          <img
            src="/image/img4.jpg"
            alt=""
            className="object-cover rounded-xl h-full w-full"
          />
        </div>
        <div className="row-span-2 ">
          <img
            src="/image/img5.jpg"
            alt=""
            className="object-cover rounded-xl h-full w-full"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/image/img6.jpg"
            alt=""
            className="object-cover rounded-xl h-full w-full"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/image/img2.jpg"
            alt=""
            className="object-cover rounded-xl h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryViewCard;
