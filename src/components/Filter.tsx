const Filter = () => {
  return (
    <div className=" flex items-center gap-2 justify-end py-6">
      <span className="text-gray-500 text-sm">sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 px-2 py-1 shadow-md rounded-md text-sm "
      >
        <option value={"Newst"}> Newest </option>
        <option value={"Oldest"}> Oldest </option>
        <option value={"asec"}> Price: Low To High </option>
        <option value={"desc"}> Price: High To Low </option>
      </select>
    </div>
  );
};

export default Filter;
