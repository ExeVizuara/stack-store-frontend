import React, { useState, useEffect } from 'react';

export function Clock () {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la fecha y hora cada segundo
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []); // La dependencia está vacía para que solo se ejecute una vez al montar el componente

  // Obtener los componentes de la fecha y la hora
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();

  // Formatear la hora para que no muestre los segundos
  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  return (
    <p className="text-gray-500">{currentDateTime.toLocaleDateString()} {formattedTime}</p>
  );
};