import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'

export function SalesChart({ data }) {
  const chartRef = useRef(null);
  let chartWeekly = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Destruye el gráfico anterior si existe
      if (chartWeekly) {
        chartWeekly.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartWeekly = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            label: 'Semanal',
            data: data.map(item => item.value),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(92,156,25,0.85)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Limpia el gráfico cuando el componente se desmonta
    return () => {
      if (chartWeekly) {
        chartWeekly.destroy();
      }
    };
  }, []);

  return (
    <div className="items-center w-full mx-auto lg:bg-[#1F1D2B] p-4 lg:p-8 rounded-md">
      <canvas ref={chartRef} />
    </div>
  );
}