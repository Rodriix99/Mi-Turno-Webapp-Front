import React from "react";

export default function Dropdown() {
  return (
    <div className="relative w-full border border-grey3 rounded-lg ">
      <select className="w-full p-2.5 border rounded-lg shadow-sm  focus:border-indigo-600 font-roboto">
        <option>Villa crespo</option>
        <option>Burzaco</option>
        <option>Ituzaingo</option>
        <option>Tropitango</option>
      </select>
    </div>
  );
}
