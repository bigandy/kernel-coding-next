import EpisodeCharacterImage from "./EpisodeCharacterImage";
import ProgressiveImage from "./ProgressiveImage";

import { Typography } from "@mui/material";

import { type IEpisode } from "@/app/page";

type Props = {
  episode: IEpisode;
  characterInfo: Record<string, { url: string; name: string }>;
};

/**
 * An individual Episode
 * @param episode
 * @param characterInfo
 * @returns JSX.Element
 */
function Episode({ episode, characterInfo }: Props) {
  return (
    <div className="episode">
      <div className="episode--image">
        <ProgressiveImage
          height={150}
          width={150}
          src={episode.img_url}
          alt={episode.name}
        />
      </div>
      <div>
        <Typography variant="h4">{episode.name}</Typography>
        <Typography variant="body1">{episode.air_date}</Typography>
      </div>
      <div className="episode-characters">
        {episode.characters.map((character, index) => {
          return (
            <EpisodeCharacterImage
              key={`${episode.id}-${index}`}
              characterSrc={characterInfo[character].url}
              alt={characterInfo[character].name}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Episode;
