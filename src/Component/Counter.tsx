import { type } from 'os';
import React, { useState, useEffect } from 'react';

function Counter() {
  const [contador, setContador] = useState(200); // Contador inicia en 5 minutos (300 segundos)
  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (contador > 0 && !reservaConfirmada) {
      intervalo = setInterval(() => {
        setContador((preContador)=> Math.max(preContador - 1, 0));
      }, 1000);
    } else if (contador === 0 && !reservaConfirmada) {
      window.alert('Su tiempo para realizar la reserva ha caducado')
      setContador(300);
    }
    return () => clearInterval(intervalo);
  }, [contador, reservaConfirmada]);

  const realizarReserva = () => {
    // Lógica para realizar la reserva...
    setReservaConfirmada(true);
  }

  const minutosRestantes = Math.floor(contador / 60);
  const segundosRestantes = contador % 60;

  return (
    <div>
      {!reservaConfirmada ? (
        <div>
          <p>Tiempo restante: {minutosRestantes}:{segundosRestantes < 10 ? '0' : ''}{segundosRestantes} minutos</p>
          <button  onClick={realizarReserva}>Realizar reserva</button>
        </div>
      ) : (
        <p>Reserva confirmada</p>
      )}
    </div>
  );
}

export default Counter;