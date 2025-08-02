import React from "react";

type Props = {
  videoSrc: string;
};

const VideoBanner: React.FC<Props> = ({ videoSrc }) => {
  return (
    <video className="w-full h-full object-cover" autoPlay loop muted>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};



export default VideoBanner;


