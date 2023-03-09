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
    <section className="bg-grey1 h-screen w-full px-5 lg:px-10">
      <div className="w-full flex justify-start">
        <h1 className="w-full font-roboto text-xl text-start font-semibold mt-9 mb-5 lg:ml-40 ">
          Hacer una reserva
        </h1>
      </div>

      <div className=" lg:flex lg:justify-center w-full sm:flex sm:flex-wrap">
        <div className="flex flex-col rounded-lg lg:w-679 lg:h-362 lg:mr-8 lg:py-8 lg:px-10 lg:mb-0 mb-2 p-5 bg-white ">
          <div className="flex justify-start flex-col mt-2 ">
            <h1 className="font-roboto text-lg font-semibold mb-1 text-start ">
              Reserva
            </h1>
            <h2 className="block text-sm text-black font-roboto">
              Seleccioná tu sucursal
            </h2>
          </div>
          <div className="flex w-full mt-6 font-roboto text-sm font-normal">
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
          <div className="flex w-full flex-col mt-5 font-roboto text-sm">
            <h2 className="mb-2">Sucursal</h2>
            <Dropdown options={[]} />
          </div>
          <div className="flex justify-start mt-6">
            <Button />
          </div>
        </div>
        <div className="lg:w-457 lg:ml-3 p-5 rounded-lg bg-white">
          <div className="flex flex-col items-center ">
            <TurnoCalendar
              onChangeDate={handleOnChangeDate}
              className="border-none"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between mt-3">
            <button className="bg-violetSecondary hover:bg-violetSecondaryHover text-violet font-semibold font-roboto py-2 px-4 rounded">
              Confirmar fecha
            </button>
            {onChangeDate && (
              <p>Fecha seleccionada: {onChangeDate.toLocaleDateString()}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPanel;
