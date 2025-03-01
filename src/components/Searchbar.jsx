const SearchBar = () => {
  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search for restaurants..."
        className="p-2 w-1/2 border border-gray-300 rounded-lg shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
