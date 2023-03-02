import { type } from "os";
import { useState, useEffect } from "react";
import axios from "axios";

function Counter() {
  const [contador, setContador] = useState(200); // Contador inicia en 5 minutos (300 segundos)
  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (contador > 0 && !reservaConfirmada) {
      intervalo = setInterval(() => {
        setContador((preContador: number) => Math.max(preContador - 1, 0));
      }, 1000);
    } else if (contador === 0 && !reservaConfirmada) {
      window.alert("Su tiempo para realizar la reserva ha caducado");
      setContador(300);
    }
    return () => clearInterval(intervalo);
  }, [contador, reservaConfirmada]);

  const realizarReserva = () => {
    axios
      .post("http://localhost:3001/api/booking/createBooking", {
        fullName: "",
        email: "",
        phone: "",
        date: "",
        schedule: "",
      })
      .then((response) => {
        console.log(response.data);
        setReservaConfirmada(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const minutosRestantes = Math.floor(contador / 60);
  const segundosRestantes = contador % 60;

  return (
    <div>
      {!reservaConfirmada ? (
        <div>
          <p>
            Tiempo restante: {minutosRestantes}:
            {segundosRestantes < 10 ? "0" : ""}
            {segundosRestantes} minutos
          </p>
          <button onClick={realizarReserva}>Realizar reserva</button>
        </div>
      ) : (
        <p>Reserva confirmada</p>
      )}
    </div>
  );
}

export default Counter;
