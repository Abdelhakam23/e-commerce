"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  // console.log(router);
  const selectedFolter = searchParams.get("sort");
  const handlSort = ({ filter }: { filter: string }) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", filter);
    router.push(`${pathname}?${params.toString()}`);
  };

  // console.log(searchParams);

  return (
    <div className=" flex items-center gap-2 justify-end my-6">
      <span className="text-gray-500 text-sm">sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 px-2 py-1 shadow-md rounded-md text-sm outline-0 "
        onChange={(e) => handlSort({ filter: e.target.value })}
      >
        <option value={"newest"}> Newest </option>
        <option value={"oldest"}> Oldest </option>
        <option value={"asec"}> Price: Low To High </option>
        <option value={"desc"}> Price: High To Low </option>
      </select>
    </div>
  );
};

export default Filter;
