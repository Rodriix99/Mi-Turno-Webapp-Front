import React, { useEffect, useState } from "react";
import Dropdown from "../commons/DropDown";
import Steps from "./utils/Steps";
import { Button } from "../commons/Button";
import TurnoCalendar from "../commons/TurnoCalendar";

const BookingPanel = () => {
  const [onChangeDate, setonChangeDate] = useState<Date | null>(null);
  const handleOnChangeDate = (date: Date) => {
    setonChangeDate(date);
  };

  return (
    <section className="bg-grey1 h-screen">
      <div className="flex flex-col ml-[10rem]">
        <h1 className="font-roboto text-2xl font-bold mt-5 mb-5 text-start">
          Hacer una reserva
        </h1>
      </div>
      <div className=" flex justify-center ">
        <div className="flex flex-col rounded-lg w-679 h-362 mr-8 py-8 px-10 bg-white">
          <div className="flex justify-start flex-col mt-2 ">
            <h1 className="font-roboto text-2xl font-bold  mb-1 text-start ">
              Reserva
            </h1>
            <h2 className="block text-sm text-black font-roboto">
              Seleccioná tu sucursal
            </h2>
          </div>
          <div className="flex w-full  mt-6">
            <Steps
              icon="1"
              text="Elegí tu sucursal"
              bgColor="bg-violet"
              textColor="text-violet"
            />

            <Steps
              icon="2"
              text="Seleccioná el día"
              bgColor="bg-grey4"
              textColor="text-grey4"
            />
            <Steps
              icon="3"
              text="Completá el formulario"
              bgColor="bg-grey4"
              textColor="text-grey4"
            />
          </div>
          <div className="flex w-full flex-col mt-5 font-roboto">
            <h2>Sucursal</h2>
            <Dropdown options={[]} />
          </div>
          <div className="flex justify-start mt-6">
            <Button />
          </div>
        </div>
        <div className="m w-457 ml-3 p-5 rounded-lg bg-white">
          <div className="flex flex-col items-center  border border-black">
            <TurnoCalendar onChangeDate={handleOnChangeDate} />
            {onChangeDate && (
              <p>Fecha seleccionada: {onChangeDate.toLocaleDateString()}</p>
            )}
          </div>
          <button>Confirmar fecha</button>
        </div>
      </div>
    </section>
  );
};

export default BookingPanel;
