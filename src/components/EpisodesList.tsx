"use client";

import { useState, useMemo, Fragment } from "react";
import Episode from "./Episode";
import PaginationDots from "./PaginationDots";

import { Button } from "@mui/material";

export type CharacterSrc = Record<string, string>;

const ITEMS_PER_PAGE = 10;

import { IEpisode } from "@/app/page";

/**
 * A list of episodes with pagination.
 * @param data array of episodes of type IEpisode
 * @param characterInfo object of characters
 * @returns JSX.Element
 */
function EpisodeList({
  data,
  characterInfo,
}: {
  data: IEpisode[];
  characterInfo: Record<string, { url: string; name: string }>;
}) {
  const [page, setPage] = useState(0);
  const episodes: IEpisode[] = useMemo(() => {
    return data.slice(
      page * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [page, data]);
  const handleNext = () => {
    setPage((p) => p + 1);
  };
  const handlePrevious = () => {
    setPage((p) => p - 1);
  };
  // if we are the final page, then disable the next button
  const nextButtonDisabled =
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE > data.length;
  const totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE);

  return (
    <Fragment>
      <div className="episodes">
        {episodes.length > 0 &&
          episodes.map((episode) => (
            <Episode
              episode={episode}
              key={episode.id}
              characterInfo={characterInfo}
            />
          ))}
      </div>
      <div className="pagination">
        <Button
          variant="outlined"
          sx={{ marginInlineEnd: "1rem" }}
          disabled={page < 1}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <PaginationDots currentPage={page} totalPages={totalPages} />
        <Button
          variant="outlined"
          disabled={nextButtonDisabled}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
}

export default EpisodeList;
