type Props = {
  page: number;
  totalPages: number;
};

function PaginationDots({ page, totalPages }: Props) {
  return (
    <>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <div
            key={`dot-${index}`}
            className={`dot ${page === index ? "dot--active" : ""}`}
          >
            {index + 1}
          </div>
        );
      })}
    </>
  );
}
export default PaginationDots;
