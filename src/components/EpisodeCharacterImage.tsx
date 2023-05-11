import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

type Props = {
  characterSrc: string;
  size?: number;
  alt: string;
};

/**
 * The visual representation of the character image for an episode.
 * @param characterSrc string the url of the image
 * @param size (optional) the width/height of the image as a square.
 * @returns JSX.Element
 */
function EpisodeCharacterImage({ characterSrc, size = 50, alt }: Props) {
  const [imageSrc, setImgSrc] = useState("");

  // For a better loading experience
  useEffect(() => {
    const img = new Image();
    img.src = characterSrc;
    img.onload = () => {
      setImgSrc(characterSrc);
    };
  }, [characterSrc]);

  return (
    <Avatar
      src={imageSrc}
      alt={alt}
      title={alt}
      sx={{
        width: size,
        height: size,
      }}
    />
  );
}

export default EpisodeCharacterImage;
