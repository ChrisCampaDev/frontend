"use client";
function filter() {
  return (
    <div className="flex gap-2 mt-2 justify-center text-white">
      <input className="py-1" name="search" type="search" />
      <label
        className="bg-teal-900 py-0 px-3 text-center rounded-xl"
        htmlFor="search"
      >
        Buscar
      </label>
    </div>
  );
}

export default filter;
