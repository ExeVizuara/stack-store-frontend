import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export function ProductSalesChart({ data }) {
  const chartRef = useRef(null);
  let chartSales = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartSales) {
        chartSales.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartSales = new Chart(ctx, {
        type: 'doughnut', // Cambia el tipo de gráfico a doughnut
        data: {
          labels: data.map(item => item.product),
          datasets: [{
            label: 'Ventas',
            data: data.map(item => item.sales),
            backgroundColor: [
              'rgba(92,156,25,0.8)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 159, 64, 0.2)'
              // Puedes agregar más colores de fondo según sea necesario
            ],
            borderColor: [
              'rgba(92,156,25, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 159, 64, 1)'
              // Puedes agregar más colores de borde según sea necesario
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false // Permite ajustar el tamaño del gráfico según el contenedor
        }
      });
    }
    return () => {
      if (chartSales) {
        chartSales.destroy();
      }
    }
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <canvas ref={chartRef} />
    </div>
  );
}