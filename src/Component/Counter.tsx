import { type } from "os";
import { useState, useEffect } from "react";
import axios from "axios";

function Counter() {
  const [contador, setContador] = useState(300);
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


  const minutosRestantes = Math.floor(contador / 60);
  const segundosRestantes = contador % 60;

  return (
    <div>
     
        <div>
          <p>
            Tiempo restante: {minutosRestantes}:
            {segundosRestantes < 10 ? "0" : ""}
            {segundosRestantes}
          </p>
        </div>
     
    </div>
  );
}

export default Counter;
