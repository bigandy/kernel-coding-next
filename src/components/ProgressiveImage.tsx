import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * The visual representation of the character image for an episode. With added progressive loading.
 * @param characterSrc string the url of the image
 * @param size (optional) the width/height of the image as a square.
 * @returns JSX.Element.
 */
function ProgressiveImage({ src, width, height, alt }: Props) {
  const [imageSrc, setImgSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  if (imageSrc === "") {
    return <Skeleton variant="rectangular" height={height} width={width} />;
  } else {
    return (
      <img
        src={imageSrc}
        loading="lazy"
        alt={alt}
        height={height}
        width={width}
      />
    );
  }
}

export default ProgressiveImage;
