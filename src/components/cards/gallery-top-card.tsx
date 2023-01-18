import React from "react";

const GalleryTopCard = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <img
        src="/image/img0.jpg"
        alt=""
        className="object-cover rounded-lg h-40 w-40"
      />
      <h2 className="text-2xl font-bold mt-2 text-gray-dark">Rodney Cotton</h2>
      <p className="text-sm font-bold text-gray-medium ">Helsinki, Finland</p>
      <div className="flex gap-6 w-full justify-center mt-4">
        <div className="bg-gray-light py-4 px-6 rounded-xl">
          <p className="text-gray-dark font-semibold text-base">100</p>
          <p className="font-semibold text-gray-sub text-sm ">Posts</p>
        </div>
        <div className="bg-gray-light py-4 px-6 rounded-xl">
          <p className="text-gray-dark font-semibold text-base">100</p>
          <p className="font-semibold text-gray-sub text-sm ">Posts</p>
        </div>
        <div className="bg-gray-light py-4 px-6 rounded-xl">
          <p className="text-gray-dark font-semibold text-base">100</p>
          <p className="font-semibold text-gray-sub text-sm ">Posts</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryTopCard;
