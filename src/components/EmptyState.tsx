import { Skeleton } from "@mui/material";

const items = 10;

function EmptyState() {
  return (
    <div>
      {[...Array(items)].map((_, index) => {
        return (
          <div className="card" key={`empty-row-${index}`}>
            <div>
              <Skeleton variant="rounded" width={150} height={150} />
            </div>
            <div>
              <Skeleton
                variant="rounded"
                width={150}
                height={40}
                sx={{ marginBlockEnd: "1rem" }}
              />
              <Skeleton variant="rounded" width={100} height={20} />
            </div>
            <div className="episode-characters">
              {[...Array(index % 2 === 0 ? 7 : 10)].map((_, episodeIndex) => {
                return (
                  <Skeleton
                    key={`skeleton${index}-${episodeIndex}`}
                    variant="circular"
                    width={40}
                    height={40}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EmptyState;
