'use client'

import { Bar, Line } from 'react-chartjs-2'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react';


ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Graph = () => {
    
    const data = {
        labels: ['Daily Schedules', 'Work', 'Projects', 'Ideas'],
        datasets: [{
          label: 'Tasks Completed',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#2196F3',
            '#0B9F00',
            '#F38721',
            '#F32163',
          ],
          borderColor: [
            '#2196F3',
            '#0B9F00',
            '#F38721',
            '#F32163',
          ],
          borderWidth: 1
        }]
      }

      const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: true,
        responsive: true
      })


    return (
        <div className="h-full bg-[#151515] text-white flex flex-col items-center justify-center p-5 rounded-[26px]">
            <Bar data={data} options={{
                plugins: {
                    legend: {
                        position: 'right',
                        display: false,
                    }
                },
                maintainAspectRatio: true,
                responsive: true
            }}/>
        </div>
    );
}
 
export default Graph;