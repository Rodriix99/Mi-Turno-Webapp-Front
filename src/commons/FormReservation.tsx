import React, {useState} from 'react'

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
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <select id="time" value={time} onChange={handleTimeChange}>
          <option value="">Seleccione una hora</option>
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
    </div>
  )
}

export default FormReservation