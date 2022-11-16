import React from "react";

function SliderItem({ src, alt }) {
  return (
    <>
      <div>
        <img 
        src={src} 
        alt={alt}   />
      </div>
    </>
  );
}

export default SliderItem;
