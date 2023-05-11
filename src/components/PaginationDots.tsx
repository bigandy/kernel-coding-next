type Props = {
  currentPage: number;
  totalPages: number;
};
/**
 * Pagination Dots component. Shows a dot per page and has a different dot for the current page
 * @param currentPage number of the current page
 * @param totalPages number of total pages in the pagination
 * @returns JSX.Element
 */
function PaginationDots({ currentPage, totalPages }: Props) {
  return (
    <>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <div
            key={`dot-${index}`}
            className={`dot ${currentPage === index ? "dot--active" : ""}`}
          >
            {index + 1}
          </div>
        );
      })}
    </>
  );
}
export default PaginationDots;
