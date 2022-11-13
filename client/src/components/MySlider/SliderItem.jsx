import React from "react";

function SliderItem({ src, alt }) {
  return (
    <>
      <div>
        <img src={src} alt={alt} draggable={false} />
      </div>
    </>
  );
}

export default SliderItem;
