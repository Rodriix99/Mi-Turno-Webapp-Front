import React, { useState } from "react";

interface FormProps {
  onReservationForm: (data: any) => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  time: string;
}

const FormReservation = ({ onReservationForm }: FormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = {
      name,
      phone,
      email,
      time,
    };

    onReservationForm(formData);
  };

  return (
    <div className="relative w-full">
      <div>
        <label
          htmlFor="time"
          className="block text-sm text-black font-roboto mb-2"
        >
          Hora
        </label>
        <select
          id="time"
          className="w-full p-2.5 text-gray-500 bg-white border rounded-lg hover:border-gray-400 focus:border-purple-600 focus:ring-0"
          value={time}
          onChange={handleTimeChange}
        >
          <option value=""></option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
        </select>
      </div>
      <div className=" mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-black font-roboto mb-2"
          >
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="name"
            className="w-full text-sm p-2.5 text-gray-500 bg-white border rounded-lg hover:border-gray-400 focus:border-purple-600 focus:ring-0"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm text-black font-roboto mb-2"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            className="w-full text-sm w-full p-2.5 text-gray-500 bg-white border rounded-lg hover:border-gray-400 focus:border-purple-600 focus:ring-0"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-sm text-black font-roboto mb-2"
        >
          Email
        </label>
        <input
          type="text"
          className="w-full text-sm p-2.5 text-gray-500 bg-white border rounded-lg hover:border-gray-400 focus:border-purple-600 focus:ring-0"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
    </div>
  );
};

export default FormReservation;
