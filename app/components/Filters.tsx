interface Props {
  type: string;
  setType: (val: string) => void;
  year: string;
  setYear: (val: string) => void;
}

export default function Filters({ type, setType, year, setYear }: Props) {
  return (
    <div className="flex gap-4 mt-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded text-gray-800  dark:text-gray-700"
      >
        <option value="">All Types</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>
      <input
        type="number"
        min={0}
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border p-2 rounded w-32 text-gray-800  dark:text-gray-700"
      />
    </div>
  );
}
