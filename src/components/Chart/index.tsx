import * as React from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {Line} from "react-chartjs-2";

import {ITransactions} from "../types/transactions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    point:{
      radius: 0
    },

  },
  scales: {
    y: {
      position: "right"
    }
  }
};

interface IProps {
  transaction: ITransactions[];
}

export const Chart: React.FC<IProps> = ({transaction}) => {

  const labels = transaction.map(({created_at}, index) => {
    if(index === 0) return new Date(created_at).toLocaleDateString();
    return ''
  });

  const data = {
    labels,
    datasets: [
      {
        fill: "start",
        data: transaction.map(({amount}) => amount),
        borderColor: "#1C64F2",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "#1C64F2");
          gradient.addColorStop(0, "#1C64F234");
          return gradient;
        },
      },
    ],
  };

  return (
    <Line options={options} data={data}/>
  );
};