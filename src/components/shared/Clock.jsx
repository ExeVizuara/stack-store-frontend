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

export function CurrentTime () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  return formattedDate;
}

export function CurrentDay () {
  const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const currentDate = new Date();
  const weekDay = currentDate.getDay();
  return weekDays[weekDay];
}

