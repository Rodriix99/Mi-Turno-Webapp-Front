import React, { useEffect, useState } from "react";
import Dropdown from "../commons/DropDown";
import Steps from "./utils/Steps";

const BookingPanel = () => {
  const [branch, setBranch] = useState("");
  return (
    <section>
      <h1 className="font-roboto text-2xl font-bold mt-5 mb-5 text-start">
        Hacer una reserva
      </h1>
      <div className=" flex justify-center ">
        <div className="flex flex-col border border-black w-679 h-362 mr-8 p-7">
          <div className="flex justify-start flex-col">
            <h1 className="font-roboto text-2xl font-bold mt-7 mb-1 text-start ">
              Reserva
            </h1>
            <h2 className="block text-sm text-black font-roboto">
              Seleccioná tu sucursal
            </h2>
          </div>
          <div className="flex w-full border border-black flex-col">
            <Steps
              icon="1"
              text=""
              bgColor="bg-violet"
              textColor="text-violet"
            />
          </div>
          <div className="flex w-full flex-col mt-5">
            <h2>Sucursal</h2>
            <Dropdown />
          </div>
        </div>
        <div className="border border-black w-457 ml-3 p-5">Calendario</div>
      </div>
    </section>
  );
};

export default BookingPanel;
