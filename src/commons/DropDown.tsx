import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBookingData } from "../store/bookingData";

interface DropDownProps {
  options: string[];
  onSelectedBranch: (branch: any) => void;
}

type ClickEvent = React.MouseEvent<HTMLSelectElement>;

const Dropdown = (props: DropDownProps) => {
  const [array, setArray] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/branches/allbranches")
      .then((res) => res.data)
      .then((branch) => setArray(branch))

      .catch((error) => {
        console.log("este es el error!!", error);
      });
  }, []);

  const handleSelect = (e: ClickEvent) => {
    const target = e.target as HTMLSelectElement;
    setSelectedBranch(target.value);
    props.onSelectedBranch(target.value);
   //dispatch(setBookingData({field:"branch", data:target.value}))
  };

  return (
    <div className="relative w-full">
      <select
      required
        className="w-full p-2.5 text-gray-500 bg-white border rounded-lg shadow-sm focus:border-indigo-600"
        onClick={handleSelect}
      >
        <option selected>Elegir sucursal</option>
        {array.length === 0
          ? null
          : array?.map((option: any, i) => (
              <option key={i} value={option.name}>
                {option.name}
              </option>
            ))}
      </select>
    </div>
  );
};

export default Dropdown;
