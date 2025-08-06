interface Props {
  currentPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalCount, onPageChange }: Props) {
  const totalPages = Math.ceil(totalCount / 10);

  return (
    <div className="flex gap-2 mt-6 justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-3 py-1 border rounded">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
