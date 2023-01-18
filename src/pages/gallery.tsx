import GalleryTopCard from "@/components/cards/gallery-top-card";
import GalleryViewCard from "@/components/cards/gallery-view-card";
import React from "react";

const Gallery = () => {
  return (
    <div className="mt-10">
      <GalleryTopCard />
      <GalleryViewCard />
    </div>
  );
};

export default Gallery;
