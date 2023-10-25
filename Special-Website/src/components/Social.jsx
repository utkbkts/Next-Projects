import Link from "next/link";
import React from "react";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";
const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];
const Social = ({ containerstyles, iconstyles }) => {
  return (
    <div className={`${containerstyles}`}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path}>
          <div className={`${iconstyles}`}></div>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
