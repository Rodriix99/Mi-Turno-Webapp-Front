import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface DropDownProps {
  options: string[];
}

const Dropdown = (props: DropDownProps) => {

  const [array, setArray] = useState([])

useEffect(() => {
  axios.get("http://localhost:3001/api/branches/branches")
 .then((res) => res.data)
 .then((branch) => setArray(branch))

 .catch((error) => {
  console.log("este es el error!!",error);
  });

}, [])


  return (
    <div className="relative w-full">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-lg shadow-sm focus:border-indigo-600"
      placeholder="Elegir sucursal">
      {array.length === 0 ? null : 
      array?.map((option: any, i) => (<option key={i} value={option._id}>{option.name}</option>))}      
      </select>
    </div>
  );
}

export default Dropdown