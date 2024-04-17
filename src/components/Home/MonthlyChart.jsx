import React, { useEffect, useRef, memo } from 'react';
import { Chart } from 'chart.js/auto'

function MonthlyChart({ data }) {
  const chartRef = useRef(null);
  let chartMonthly = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Destruye el gráfico anterior si existe
      if (chartMonthly) {
        chartMonthly.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartMonthly = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            label: 'Mensual',
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
      if (chartMonthly) {
        chartMonthly.destroy();
      }
    };
  }, [data]);

  return (
    <div className="items-center w-full mx-auto lg:bg-[#1F1D2B] p-4 lg:p-8 rounded-md">
      <canvas ref={chartRef} />
    </div>
  );
}

export default memo(MonthlyChart);